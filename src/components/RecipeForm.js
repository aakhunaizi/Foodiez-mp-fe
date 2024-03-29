import { useState } from "react";
import { BackButtonStyled, CreateButtonStyled, ListWrapper } from "../styles";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createRecipe } from "../store/actions/recipeActions";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
const RecipeForm = ({ ingredients }) => {
  const history = useHistory();

  const dispatch = useDispatch();

  const [recipe, setRecipe] = useState({
    name: "",
    image: "",
    video: "",
    ingredients: [],
  });

  const [_ingredients, setIngredients] = useState([]);
 
  const handleChange = (event) => {
    setRecipe({ ...recipe, [event.target.name]: event.target.value });
  };

  const handleOption = (event) => {
    recipe.ingredients.push(event.target.value)
    console.log(recipe.ingredients)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createRecipe({ ...recipe, _ingredients }));
    history.push("/recipes");
  };

  const handleImage = (event) =>
    setRecipe({ ...recipe, image: event.target.files[0] });

  const allIngredients = ingredients.map((ingredient) => (
    <option
      key={ingredient.name}
      value={ingredient.id}
      onClick={handleOption}
    >
      {ingredient.name}
    </option>
  ));

  return (
    <>
      <Helmet>
        <title>Create Recipe</title>
      </Helmet>
      <ListWrapper> Create Recipe </ListWrapper>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter recipe name"
            className="form-control"
            value={recipe.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            type="file"
            name="image"
            placeholder="Enter recipe image url"
            className="form-control"
            onChange={handleImage}
          />
        </div>
        <div className="form-group">
          <label>Video</label>
          <input
            type="text"
            name="video"
            placeholder="Enter recipe video url"
            className="form-control"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label> Select Ingredients </label>
          <br />
          <select multiple className="form-control" name="ingredients">
            {allIngredients}
          </select>
          <span className="help-block">
            Use ctrl/command to select multiple ingredients
          </span>
        </div>
        <CreateButtonStyled onSubmit={handleSubmit}>Create</CreateButtonStyled>
        <Link to="/recipes">
          <BackButtonStyled>Back</BackButtonStyled>
        </Link>
      </form>
    </>
  );
};

export default RecipeForm;
