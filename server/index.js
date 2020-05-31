const next = require("next");
const express = require("express");

const dev = process.env.NODE_ENV !== "production";

const app = next({ dev });
const handle = app.getRequestHandler();

const data = require("./data");

app.prepare().then(() => {
  const server = express();
  server.use(express.json());

  server.get("/api/v1/movies", (req, res) => {
    return res.json(data);
  });

  server.get("/api/v1/movies/:id", (req, res) => {
    const id = req.params.id;
    const movieIndex = MOVIE_DATA.findIndex((movie) => {
      return movie.id == id;
    });
    const movie = MOVIE_DATA[movieIndex];
    return res.json(movie);
  });

  const PORT = process.env.PORT || 3000;

  // this will handle all request
  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server is running on port ${PORT}`);
  });
});
