import { useRouter } from "next/router";
import Link from "next/link";
import {
  getMovieById,
  deleteMovie as deleteMovieAction,
} from "../../../actions";

const Movie = (props) => {
  const router = useRouter();
  const { id } = router.query;
  const { movie } = props;

  const deleteMovie = (id) => {
    deleteMovieAction(id).then(() => {
      router.push("/");
    });
  };

  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">{movie.name}</h1>
        <p className="lead">{movie.description}</p>
        <hr className="my-4" />
        <p>{movie.genre}</p>
        <p className="lead">
          <button
            className="btn btn-primary btn-lg mr-2"
            href="#"
            role="button"
          >
            Learn more
          </button>
          <button
            className="btn btn-danger btn-lg mr-2"
            href="#"
            role="button"
            onClick={() => deleteMovie(id)}
          >
            Delete
          </button>
          <Link href="/movies/[id]/edit" as={`/movies/${id}/edit`}>
            <a className="btn btn-warning btn-lg" role="button">
              edit
            </a>
          </Link>
        </p>
      </div>
      <p className="desc-text">{movie.longDesc}</p>
      <style jsx>{`
        .desc-text {
          font-size: 24px;
        }
      `}</style>
    </div>
  );
};

Movie.getInitialProps = async (context) => {
  const { id } = context.query;
  const movie = await getMovieById(id);
  return {
    movie,
  };
};

export default Movie;
