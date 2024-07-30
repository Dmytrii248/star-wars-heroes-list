import {
  getFilmData,
  getHeroData,
  getListOfHeroes,
  getStarshipData,
} from "./index"; // Replace with actual path
import axios from "axios";
import {
  mockedFilmResponse,
  mockedPerson,
  mockedPersonResponse,
  mockedStarshipResponse,
} from "../mocks";

jest.mock("axios");

describe("getListOfHeroes", () => {
  it("should fetch data successfully", async () => {
    (axios.get as jest.Mock).mockResolvedValueOnce({
      data: mockedPersonResponse,
    });

    const data = await getListOfHeroes(1);

    expect(data).toEqual(mockedPersonResponse);
    expect(axios.get).toHaveBeenCalledWith(
      "https://sw-api.starnavi.io/people/?page=1"
    );
  });

  it("should handle errors", async () => {
    const errorMessage = "Network error";

    (axios.get as jest.Mock).mockRejectedValueOnce(new Error(errorMessage));

    const data = await getListOfHeroes(1);

    expect(data).toBeNull();
    expect(axios.get).toHaveBeenCalledWith(
      "https://sw-api.starnavi.io/people/?page=1"
    );
  });
});

describe("getHeroData", () => {
  it("should fetch data successfully", async () => {
    (axios.get as jest.Mock).mockResolvedValueOnce({
      data: mockedPerson,
    });

    const data = await getHeroData(1);

    expect(data).toEqual(mockedPerson);
    expect(axios.get).toHaveBeenCalledWith(
      "https://sw-api.starnavi.io/people/1"
    );
  });

  it("should handle errors", async () => {
    const errorMessage = "Network error";

    (axios.get as jest.Mock).mockRejectedValueOnce(new Error(errorMessage));

    const data = await getHeroData(1);

    expect(data).toBeNull();
    expect(axios.get).toHaveBeenCalledWith(
      "https://sw-api.starnavi.io/people/1"
    );
  });
});

describe("getFilmData", () => {
  it("should fetch data successfully", async () => {
    (axios.get as jest.Mock).mockResolvedValueOnce({
      data: mockedFilmResponse,
    });

    const data = await getFilmData(1);

    expect(data).toEqual(mockedFilmResponse);
    expect(axios.get).toHaveBeenCalledWith(
      "https://sw-api.starnavi.io/films/1"
    );
  });

  it("should handle errors", async () => {
    const errorMessage = "Network error";

    (axios.get as jest.Mock).mockRejectedValueOnce(new Error(errorMessage));

    const data = await getFilmData(1);

    expect(data).toBeNull();
    expect(axios.get).toHaveBeenCalledWith(
      "https://sw-api.starnavi.io/films/1"
    );
  });
});

describe("getStarshipData", () => {
  it("should fetch data successfully", async () => {
    (axios.get as jest.Mock).mockResolvedValueOnce({
      data: mockedStarshipResponse,
    });

    const data = await getStarshipData(10);

    expect(data).toEqual(mockedStarshipResponse);
    expect(axios.get).toHaveBeenCalledWith(
      "https://sw-api.starnavi.io/starships/10"
    );
  });

  it("should handle errors", async () => {
    const errorMessage = "Network error";

    (axios.get as jest.Mock).mockRejectedValueOnce(new Error(errorMessage));

    const data = await getStarshipData(10);

    expect(data).toBeNull();
    expect(axios.get).toHaveBeenCalledWith(
      "https://sw-api.starnavi.io/starships/10"
    );
  });
});
