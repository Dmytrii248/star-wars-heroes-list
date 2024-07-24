import axios from "axios";
import { IPersonsResponse } from "src/models";

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
