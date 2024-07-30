import { Node, Edge, XYPosition } from "@xyflow/react";
import { getFilmData, getHeroData, getStarshipData } from "../api";

export const heroLabel = "_hero";
export const movieLabel = "_movie";
export const starshipLabel = "_starship";
export const position: XYPosition = { x: 0, y: 0 };

export const getPersonTree = async (
  personId: number
): Promise<{ nodes: Node[]; edges: Edge[] } | null> => {
  let nodes: Node[] = [];
  let edges: Edge[] = [];

  const heroData = await getHeroData(personId);

  if (!heroData) return null;

  nodes.push({
    id: heroData.id.toString() + heroLabel,
    data: { label: heroData.name },
    position,
  });

  await Promise.all(
    heroData.films.map(async (filmId) => {
      const filmData = await getFilmData(filmId);

      if (!filmData) return;

      const filmNodeId = `${filmId}${movieLabel}`;

      nodes.push({
        id: filmId.toString() + movieLabel,
        data: { label: filmData.title },
        position,
      });

      edges.push({
        id: `e${heroData.id}${heroLabel}-` + filmNodeId,
        source: `${heroData.id}${heroLabel}`,
        target: filmNodeId,
      });

      const fliedStarships = heroData.starships.filter((starshipId) =>
        filmData.starships.includes(starshipId)
      );

      await Promise.all(
        fliedStarships.map(async (starshipId) => {
          const starshipData = await getStarshipData(starshipId);

          if (!starshipData) return;

          const starshipNodeId = filmNodeId + `-${starshipId}${starshipLabel}`;

          nodes.push({
            id: starshipNodeId,
            data: { label: starshipData.name },
            position,
          });

          edges.push({
            id: "e" + starshipNodeId,
            source: filmId.toString() + movieLabel,
            target: starshipNodeId,
          });
        })
      );
    })
  );

  return { nodes, edges };
};
