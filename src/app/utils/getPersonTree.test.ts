import axios from "axios";
import { IFilm, IPerson, IStarship } from "../models";
import {
  getPersonTree,
  heroLabel,
  movieLabel,
  starshipLabel,
  position,
} from "./getPersonTree";

jest.mock("axios");

const mockHeroData = {
  id: 1,
  name: "Luke Skywalker",
  films: [2],
  starships: [3],
} as IPerson;

const mockFilmData = {
  title: "A New Hope",
  starships: [3],
} as IFilm;

const mockStarshipData = {
  name: "X-wing",
} as IStarship;

describe("getPersonTree", () => {
  it("should build a person tree successfully", async () => {
    (axios.get as jest.Mock).mockResolvedValueOnce({ data: mockHeroData });
    (axios.get as jest.Mock).mockResolvedValueOnce({ data: mockFilmData });
    (axios.get as jest.Mock).mockResolvedValueOnce({ data: mockStarshipData });

    const tree = await getPersonTree(1);

    expect(tree).toEqual({
      nodes: [
        {
          id: "1" + heroLabel,
          data: { label: "Luke Skywalker" },
          position,
        },
        {
          id: "2" + movieLabel,
          data: { label: "A New Hope" },
          position,
        },
        {
          id: "2" + movieLabel + "-3" + starshipLabel,
          data: { label: "X-wing" },
          position,
        },
      ],
      edges: [
        {
          id: `e1${heroLabel}-2${movieLabel}`,
          source: "1" + heroLabel,
          target: "2" + movieLabel,
        },
        {
          id: `e2${movieLabel}-3${starshipLabel}`,
          source: "2" + movieLabel,
          target: "2" + movieLabel + "-3" + starshipLabel,
        },
      ],
    });
  });
});
