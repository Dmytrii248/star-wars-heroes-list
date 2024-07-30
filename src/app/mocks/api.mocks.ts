import { IFilm, IPerson, IPersonsResponse, IStarship } from "../models";

export const mockedPerson: IPerson = {
  id: 1,
  name: "Luke Skywalker",
  height: "172",
  mass: "77",
  hair_color: "blond",
  skin_color: "fair",
  eye_color: "blue",
  birth_year: "19BBY",
  gender: "male",
  homeworld: 1,
  films: [1, 2, 3, 6],
  species: [1],
  vehicles: [14, 30],
  starships: [12, 22],
  created: "2014-12-09T13:50:51.644000Z",
  edited: "2014-12-20T21:17:56.891000Z",
  url: "mockedURL",
};

export const mockedPersonResponse: IPersonsResponse = {
  count: 1,
  next: "nextURL",
  previous: "previousURL",
  results: [mockedPerson],
};

export const mockedFilmResponse: IFilm = {
  id: 1,
  title: "A New Hope",
  episode_id: 4,
  opening_crawl:
    "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
  director: "George Lucas",
  producer: "Gary Kurtz, Rick McCallum",
  release_date: "1977-05-25",
  characters: [10, 12, 13, 14, 15, 16, 18, 19, 1, 2, 3, 4, 5, 6, 7, 8, 9, 81],
  planets: [1, 2, 3],
  starships: [2, 3, 5, 9, 10, 11, 12, 13],
  vehicles: [4, 6, 7, 8],
  species: [1, 2, 3, 4, 5],
  created: "2014-12-10T14:23:31.880000Z",
  edited: "2014-12-20T19:49:45.256000Z",
  url: "mockedFilmURL",
};

export const mockedStarshipResponse: IStarship = {
  id: 10,
  name: "Millennium Falcon",
  model: "YT-1300 light freighter",
  manufacturer: "Corellian Engineering Corporation",
  cost_in_credits: "100000",
  length: "34.37",
  max_atmosphering_speed: "1050",
  crew: "4",
  passengers: "6",
  cargo_capacity: "100000",
  consumables: "2 months",
  hyperdrive_rating: "0.5",
  MGLT: "75",
  starship_class: "Light freighter",
  pilots: [13, 14, 25, 31],
  films: [1, 2, 3],
  created: "2014-12-10T16:59:45.094000Z",
  edited: "2014-12-20T21:23:49.880000Z",
  url: "mockedStarshipURL",
};
