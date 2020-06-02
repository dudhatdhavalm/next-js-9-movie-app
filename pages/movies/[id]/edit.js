import React, { Component } from "react";
import Router from "next/router";
import MovieCreateForm from "../../../components/MovieCreateForm/MovieCreateForm";
import { getMovieById, updateMovie } from "../../../actions";

class EditMovie extends Component {
  static getInitialProps = async ({ query }) => {
    const movie = await getMovieById(query.id);
    return {
      movie,
    };
  };

  handleUpdateMovie = (form) => {
    updateMovie(form).then((movie) => {
      Router.push("/movies/[id]", `/movies/${movie.id}`);
    });
  };

  render() {
    const { movie } = this.props;
    return (
      <div className="container">
        <h1>Edit The Movie</h1>
        <MovieCreateForm
          submitButtonText="Update"
          initialData={movie}
          handleSubmit={this.handleUpdateMovie}
        />
      </div>
    );
  }
}

export default EditMovie;
