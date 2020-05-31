import axios from "axios";

const url = "http://localhost:3000";
const MOVIE_DATA = [];

const CATEGORY_DATA = [
  { id: "1", name: "Drama" },
  { id: "2", name: "Action" },
  { id: "3", name: "Adventeru" },
  { id: "4", name: "Historical" },
];

export const getCategories = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(CATEGORY_DATA);
    });
  });
};

export const getMovies = () => {
  return axios
    .get(url + "/api/v1/movies")
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};

export const getMovieById = (id) => {
  return new Promise((resolve) => {
    const movieIndex = MOVIE_DATA.findIndex((movie) => {
      return movie.id == id;
    });
    const movie = MOVIE_DATA[movieIndex];
    setTimeout(() => {
      resolve(movie);
    }, 100);
  });
};

export const createMovie = (movie) => {
  movie.id = Math.random().toString(36).substr(2, 7);

  MOVIE_DATA.push(movie);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOVIE_DATA);
    });
  });
};
