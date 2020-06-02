const next = require("next");
const express = require("express");
const fs = require("fs");
const path = require("path");
const dev = process.env.NODE_ENV !== "production";

const app = next({ dev });
const handle = app.getRequestHandler();
const filePath = "./data.json";
const MOVIE_DATA = require(filePath);

app.prepare().then(() => {
  const server = express();
  server.use(express.json());

  server.get("/api/v1/movies", (req, res) => {
    return res.json(MOVIE_DATA);
  });

  server.post("/api/v1/movies", (req, res) => {
    const movie = req.body;
    MOVIE_DATA.push(movie);
    const pathToFile = path.join(__dirname, filePath);
    const stringyfiedData = JSON.stringify(MOVIE_DATA, null, 2);
    fs.writeFile(pathToFile, stringyfiedData, (err) => {
      if (err) {
        res.status(422).send(err);
      }
    });
    return res.json({ message: "movie has been succesfuly added" });
  });

  server.get("/api/v1/movies/:id", (req, res) => {
    const id = req.params.id;
    const movie = MOVIE_DATA.find((movie) => {
      return movie.id == id;
    });
    return res.json(movie);
  });

  server.delete("/api/v1/movies/:id", (req, res) => {
    const id = req.params.id;
    const movieIndex = MOVIE_DATA.findIndex((movie) => {
      return movie.id == id;
    });
    const deletedMovie = MOVIE_DATA.splice(movieIndex, 1);
    const pathToFile = path.join(__dirname, filePath);
    const stringyfiedData = JSON.stringify(MOVIE_DATA, null, 2);
    fs.writeFile(pathToFile, stringyfiedData, (err) => {
      if (err) {
        return res.status(422).send(err);
      }
    });

    return res.json(deletedMovie);
  });

  server.put("/api/v1/movies/:id", (req, res) => {
    const id = req.params.id;
    const movie = req.body;
    const movieIndex = MOVIE_DATA.findIndex((movie) => {
      return movie.id == id;
    });
    MOVIE_DATA[movieIndex] = movie;
    const pathToFile = path.join(__dirname, filePath);
    const stringyfiedData = JSON.stringify(MOVIE_DATA, null, 2);
    fs.writeFile(pathToFile, stringyfiedData, (err) => {
      if (err) {
        return res.status(422).send(err);
      }
    });

    return res.json(movie);
  });

  const writeIntoFile = () => {};

  // this will handle all request
  server.get("*", (req, res) => {
    return handle(req, res);
  });

  const PORT = process.env.PORT || 3000;
  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server is running on port ${PORT}`);
  });
});
