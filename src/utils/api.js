import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYmY4YjVlZDQwNTQyMDcxYTUwZTRjZDA2NWZmNjcxNyIsInN1YiI6IjY1OTM4MWY1YTU4OTAyNzE3Zjk3MTEwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3VspiA_cNarl7MDFznSwTmnRJoXkuKFEcGEDyFnRqiA";

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

