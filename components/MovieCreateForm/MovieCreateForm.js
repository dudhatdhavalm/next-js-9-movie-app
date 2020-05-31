import { useState } from "react";

const MovieCreateForm = (props) => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    rating: "",
    image: "",
    cover: "",
    longDesc: "",
    genre: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleChangeGenre = (e) => {
    const { options } = e.target;
    const value = [];
    for (const option of options) {
      if (option.selected) {
        value.push(option.value);
      }
    }
    setForm({
      ...form,
      [e.target.name]: value,
    });
  };

  const handleCreate = () => {
    props.handleSubmit({ ...form });
  };

  return (
    <form>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          aria-describedby="emailHelp"
          placeholder="Lord of the Rings"
          value={form.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          className="form-control"
          id="description"
          name="description"
          placeholder="Somewhere in Middle-earth..."
          value={form.description}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Rating</label>
        <input
          type="number"
          max="5"
          min="0"
          className="form-control"
          id="rating"
          name="rating"
          placeholder="3"
          value={form.rating}
          onChange={handleChange}
        />
        <small id="emailHelp" className="form-text text-muted">
          Max: 5, Min: 0{" "}
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="image">Image</label>
        <input
          type="text"
          className="form-control"
          id="image"
          name="image"
          placeholder="http://....."
          value={form.image}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="cover">Cover</label>
        <input
          type="text"
          className="form-control"
          id="cover"
          name="cover"
          placeholder="http://......"
          value={form.cover}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="longDesc">Long Description</label>
        <textarea
          className="form-control"
          id="longDesc"
          name="longDesc"
          rows="3"
          value={form.longDesc}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="genre">Genre</label>
        <select
          multiple
          className="form-control"
          id="genre"
          name="genre"
          onChange={handleChangeGenre}
        >
          <option>Drama</option>
          <option>Music</option>
          <option>Adventure</option>
          <option>Historical</option>
          <option>Action</option>
        </select>
      </div>
      <button type="button" className="btn btn-primary" onClick={handleCreate}>
        Create
      </button>
    </form>
  );
};

export default MovieCreateForm;
