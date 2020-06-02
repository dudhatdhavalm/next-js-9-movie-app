import { useState } from "react";
import SideMenu from "../components/SideMenu/SideMenu";
import Caurousel from "../components/Carousel/Caurousel";
import MovieList from "../components/MovieList/MovieList";

import { getMovies, getCategories } from "../actions/index";

const Home = (props) => {
  const { movies, images, categories } = props;
  const [filter, setFilter] = useState("all");

  const changeCategory = (category) => {
    setFilter(category);
  };

  const filterMovies = (movies) => {
    if (filter == "all") return movies;
    return movies.filter((movie) => {
      return movie.genre && movie.genre.includes(filter);
    });
  };

  return (
    <div>
      <div className="home-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <SideMenu
                categories={categories}
                changeCategory={changeCategory}
                activeCategory={filter}
              />
            </div>
            <div className="col-lg-9">
              <Caurousel images={images} />
              <div className="row">
                <MovieList movies={filterMovies(movies) || []} />
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
