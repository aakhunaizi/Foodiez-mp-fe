import { useState } from "react";
import { BackButtonStyled, CreateButtonStyled, ListWrapper } from "../styles";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createCategory } from "../store/actions/categoryActions";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
const CategoryForm = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  const [category, setCategory] = useState({
    name: "",
    image: "",
  });

  const handleChange = (event) => {
    setCategory({ ...category, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createCategory(category));
    history.push("/categories");
  };

  const handleImage = (event) =>
    setCategory({ ...category, image: event.target.files[0] });

  return (
    <>
      <Helmet>
        <title>Create Category</title>
      </Helmet>
      <ListWrapper> Create Category </ListWrapper>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter category name"
            className="form-control"
            value={category.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            type="file"
            name="image"
            placeholder="Enter category image url"
            className="form-control"
            onChange={handleImage}
          />
        </div>

        <CreateButtonStyled onSubmit={handleSubmit}>Create</CreateButtonStyled>
        <Link to="/categories">
          <BackButtonStyled>Back</BackButtonStyled>
        </Link>
      </form>
    </>
  );
};

export default CategoryForm;
