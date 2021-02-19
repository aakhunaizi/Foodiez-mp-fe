import { useParams, Redirect, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
// Styling
import { DetailWrapper, Title } from "../styles";
import RecipeList from "./RecipeList";

const IngredientDetail = () => {
  const { ingredientSlug } = useParams();
  const allRecipes = useSelector((state) => state.recipes.recipes);
  const ingredient = useSelector((state) =>
    state.ingredients.ingredients.find(
      (_ingredient) => _ingredient.slug === ingredientSlug
    )
  );

  const recipes = ingredient.recipes.map((recipe) =>
    allRecipes.find((_recipe) => _recipe.id === recipe.id)
  );
  if (!ingredient) return <Redirect to="/ingredients" />;
  return (
    <DetailWrapper>
      <Helmet>
        <title>{ingredient.name}</title>
      </Helmet>
      <Link to="/ingredients">Back to Ingredients</Link>
      <h1 style={{ marginBottom: "2%", marginLeft: "3%" }}>
        {ingredient.name}
      </h1>
      <img
        src={ingredient.image}
        alt={ingredient.name}
        style={{
          borderRadius: "50%",
          border: "2px solid transparent",
          width: "20%",
        }}
      />
      <Title>Can be used to make</Title>
      <RecipeList recipes={recipes} />
    </DetailWrapper>
  );
};

export default IngredientDetail;
