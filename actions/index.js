import axios from "axios";

const url = "http://localhost:3000";
const MOVIE_DATA = [];

const CATEGORY_DATA = [
  { id: "0", name: "all" },
  { id: "1", name: "drama" },
  { id: "2", name: "action" },
  { id: "3", name: "adventure" },
  { id: "4", name: "historical" },
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

export const updateMovie = (movie) => {
  return axios.put(`${url}/api/v1/movies/${movie.id}`, movie).then((res) => {
    return res.data;
  });
};
