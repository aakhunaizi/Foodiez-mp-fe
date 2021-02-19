import { useParams, Redirect, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
// Styling
import { DetailWrapper, Title } from "../styles";
import IngredientList from "../components/IngredientList";

const RecipeDetail = () => {
  const { recipeSlug } = useParams();
  const allIngredients = useSelector((state) => state.ingredients.ingredients);
  const recipe = useSelector((state) =>
    state.recipes.recipes.find((_recipe) => _recipe.slug === recipeSlug)
  );

  const ingredients = recipe.ingredients.map((ingredient) =>
    allIngredients.find((_ingredient) => _ingredient.id === ingredient.id)
  );

  if (!recipe) return <Redirect to="/recipe" />;
  return (
    <DetailWrapper>
      <Helmet>
        <title>{recipe.name}</title>
      </Helmet>
      <Link to="/recipes">Back to Recipes</Link>
      <h1 style={{ marginBottom: "2%", marginLeft: "3%" }}>{recipe.name}</h1>
      <Title>Directions </Title>
      <img
        src={recipe.image}
        alt={recipe.name}
        style={{
          borderRadius: "50%",
          border: "2px solid transparent",
          width: "20%",
        }}
      />
      <iframe
        style={{ marginLeft: "5%", marginBottom: "3%" }}
        title="Tiramisu"
        width="800"
        height="500"
        src={recipe.video}
      ></iframe>
      <Title>Ingredients </Title>
      <IngredientList ingredients={ingredients} />
    </DetailWrapper>
  );
};

export default RecipeDetail;
