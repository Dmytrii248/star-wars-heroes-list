import { IFilm, IPerson, IPersonsResponse, IStarship } from "@models";
import axios from "axios";

export const getListOfHeroes = async (page: number) => {
  try {
    const { data } = await axios.get<IPersonsResponse>(
      `https://sw-api.starnavi.io/people/?page=${page}`
    );
    return data;
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const getHeroData = async (id: number) => {
  try {
    const { data } = await axios.get<IPerson>(
      `https://sw-api.starnavi.io/people/${id}`
    );
    return data;
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const getFilmData = async (id: number) => {
  try {
    const { data } = await axios.get<IFilm>(
      `https://sw-api.starnavi.io/films/${id}`
    );
    return data;
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const getStarshipData = async (id: number) => {
  try {
    const { data } = await axios.get<IStarship>(
      `https://sw-api.starnavi.io/starships/${id}`
    );
    return data;
  } catch (e) {
    console.error(e);
    return null;
  }
};
