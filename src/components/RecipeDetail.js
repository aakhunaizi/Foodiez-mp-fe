import { useParams, Redirect, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import Loading from "./Loading"
// Styling
import { BackButtonStyled, DetailWrapper, Title } from "../styles";
import IngredientList from "../components/IngredientList";

const RecipeDetail = () => {
  const { recipeSlug } = useParams();
  const allIngredients = useSelector((state) => state.ingredients.ingredients);
  const recipeLoading = useSelector((state) => state.recipes.loading)

  const recipe = useSelector((state) =>
  state.recipes.recipes.find((_recipe) => _recipe.slug === recipeSlug)
  );
  
  const ingredients = recipe.ingredients.map((ingredient) =>
  allIngredients.find((_ingredient) => _ingredient.id === ingredient.id)
  );
  
  if (!recipe) return <Redirect to="/recipe" />;
  if (recipeLoading) return <Loading/>
  
  return (
    <DetailWrapper>
      <Helmet>
        <title>{recipe.name}</title>
      </Helmet>
      <h1 style={{ marginTop: "2%", marginLeft: "2.5%", marginBottom: "2%" }}>
        {recipe.name}
      </h1>
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
      <Link to="/recipes">
        <BackButtonStyled
          style={{ float: "right", marginLeft: "7%", marginTop: "-5%" }}
        >
          Back
        </BackButtonStyled>
      </Link>
      <Title>Ingredients </Title>
      <IngredientList ingredients={ingredients} />
    </DetailWrapper>
  );
};

export default RecipeDetail;
