import { useParams, Redirect, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
// Styling
import { DetailWrapper } from "../styles";
import IngredientList from "./IngredientList";

const CategoryDetail = () => {
  const { categorySlug } = useParams();
  const allIngredients = useSelector((state) => state.ingredients.ingredients);
  const category = useSelector((state) =>
    state.categories.categories.find(
      (_category) => _category.slug === categorySlug
    )
  );

  const ingredients = category.ingredients.map((ingredient) =>
    allIngredients.find((_ingredient) => _ingredient.id === ingredient.id)
  );
  if (!category) return <Redirect to="/categories" />;
  return (
    <DetailWrapper>
      <Helmet>
        <title>{category.name}</title>
      </Helmet>
      <Link to="/categories">Back to Categories</Link>
      <h1 style={{ marginBottom: "2%", marginLeft: "3%" }}>{category.name}</h1>
      <img
        src={category.image}
        alt={category.name}
        style={{
          borderRadius: "50%",
          border: "2px solid transparent",
          width: "20%",
        }}
      />
      <IngredientList ingredients={ingredients} />
      <Link to={`/categories/${category.id}/ingredients/new`}>
        <button
          type="button"
          className="btn btn-dark "
          style={{ position: "absolute", left: "1030px", top: "240px" }}
        >
          Create Ingredient
        </button>
      </Link>
    </DetailWrapper>
  );
};

export default CategoryDetail;
