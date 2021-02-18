import { useState } from "react";
import { BackButtonStyled, CreateButtonStyled, ListWrapper } from "../styles";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createIngredient } from "../store/actions/ingredientActions";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
const IngredientForm = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  const { categoryId } = useParams();

  const [ingredient, setIngredient] = useState({
    categoryId: categoryId,
    name: "",
    image: "",
  });

  const handleChange = (event) => {
    setIngredient({ ...ingredient, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createIngredient(ingredient));
    history.push("/ingredients");
  };

  const handleImage = (event) =>
    setIngredient({ ...ingredient, image: event.target.files[0] });

  return (
    <>
      <Helmet>
        <title>Create Ingredient</title>
      </Helmet>
      <ListWrapper> Create Ingredient </ListWrapper>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter ingredient name"
            className="form-control"
            value={ingredient.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            type="file"
            name="image"
            placeholder="Enter ingredient image url"
            className="form-control"
            onChange={handleImage}
          />
        </div>
        <CreateButtonStyled onSubmit={handleSubmit}>Create</CreateButtonStyled>
        <Link to="/ingredients">
          <BackButtonStyled>Back</BackButtonStyled>
        </Link>
      </form>
    </>
  );
};

export default IngredientForm;
