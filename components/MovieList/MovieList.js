import React from "react";
import Link from "next/link";

const MovieList = ({ movies }) => {
  const shorten = (text, maxLength) => {
    return text.length >= maxLength ? text.substr(0, maxLength) + "..." : text;
  };

  const renderMovies = (movies) => {
    {
      return movies.map((movie) => (
        <div className="col-lg-4 col-md-6 mb-4" key={movie.id}>
          <div className="card h-100">
            <Link href="/movies/[id]" as={`/movies/${movie.id}`}>
              <a>
                <img className="card-img-top" src={movie.image} alt="" />
              </a>
            </Link>

            <div className="card-body">
              <h4 className="card-title">
                <Link href="/movies/[id]" as={`/movies/${movie.id}`}>
                  <a>{movie.name}</a>
                </Link>
              </h4>
              <h5>{movie.genre}</h5>
              <p className="card-text">{shorten(movie.description, 100)}</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">{movie.rating}</small>
            </div>
          </div>
        </div>
      ));
    }
  };

  return <>{renderMovies(movies)}</>;
};

export default MovieList;
