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
  return axios
    .get(`${url}/api/v1/movies/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};

export const createMovie = (movie) => {
  movie.id = Math.random().toString(36).substr(2, 7);
  return axios
    .post(`${url}/api/v1/movies`, movie)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const deleteMovie = (id) => {
  return axios.delete(`${url}/api/v1/movies/${id}`).then((res) => {
    return res.data;
  });
};
