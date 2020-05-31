import Modal from "../Modal/Modal";
import MovieCreateForm from "../MovieCreateForm/MovieCreateForm";
import { createMovie } from "../../actions";

const SideMenu = (props) => {
  const { categories } = props;
  let model = null;

  const handleSubmit = (form) => {
    createMovie(form).then((movies) => {
      model.closeModal();
      console.log(movies);
    });
  };

  return (
    <>
      <Modal ref={(ele) => (model = ele)} hasSubmit={false}>
        <MovieCreateForm handleSubmit={handleSubmit} />
      </Modal>
      <h1 className="my-4">Categories</h1>
      <div className="list-group">
        {categories.map((category) => {
          return (
            <a href="#" className="list-group-item" key={category.id}>
              {category.name}
            </a>
          );
        })}
      </div>
    </>
  );
};

export default SideMenu;
