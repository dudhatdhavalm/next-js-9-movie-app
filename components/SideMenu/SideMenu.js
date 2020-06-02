import { useRouter } from "next/router";
import Modal from "../Modal/Modal";
import MovieCreateForm from "../MovieCreateForm/MovieCreateForm";
import { createMovie } from "../../actions";

const SideMenu = (props) => {
  const { categories } = props;
  const router = useRouter();
  let model = null;

  const handleSubmit = (form) => {
    createMovie(form).then((movies) => {
      model.closeModal();
      router.push("/");
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
            <a
              href="#"
              className={`list-group-item ${
                category.name == props.activeCategory ? "active" : ""
              }`}
              key={category.id}
              onClick={() => props.changeCategory(category.name)}
            >
              {category.name}
            </a>
          );
        })}
      </div>
    </>
  );
};

export default SideMenu;
