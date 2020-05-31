import SideMenu from "../components/SideMenu/SideMenu";
import Caurousel from "../components/Carousel/Caurousel";
import MovieList from "../components/MovieList/MovieList";

import { getMovies, getCategories } from "../actions/index";

const Home = (props) => {
  const { movies, images, categories } = props;
  return (
    <div>
      <div className="home-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <SideMenu categories={categories} />
            </div>
            <div className="col-lg-9">
              <Caurousel images={images} />
              <div className="row">
                <MovieList movies={movies} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Home.getInitialProps = async () => {
  const movies = await getMovies();
  const images = movies.map((movie) => {
    return {
      id: `image-${movie.id}`,
      src: movie.cover,
    };
  });
  const categories = await getCategories();
  return {
    movies,
    images,
    categories,
  };
};

export default Home;
