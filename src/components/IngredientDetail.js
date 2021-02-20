import { useParams, Redirect, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
// Styling
import { BackButtonStyled, DetailWrapper, Title } from "../styles";
import RecipeListNoCreate from "./RecipeListNoCreate";

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
      <h1
        style={{
          marginTop: "2%",
          marginLeft: "2.5%",
          marginBottom: "2%",
        }}
      >
        {ingredient.name}
      </h1>
      <Link to="/ingredients"></Link>
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
      <RecipeListNoCreate recipes={recipes} />
      <Link to="/ingredients">
        <BackButtonStyled
          style={{ float: "left", marginLeft: "7%", marginTop: "-5%" }}
        >
          Back
        </BackButtonStyled>
      </Link>
    </DetailWrapper>
  );
};

export default IngredientDetail;
