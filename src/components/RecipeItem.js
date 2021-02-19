// Components

import { Link } from "react-router-dom";

// Styling
import { ProductWrapper } from "../styles";

const RecipeItem = ({ recipe }) => {
  return (
    <ProductWrapper>
      <Link to={`/recipes/${recipe.slug}/`}>
        <img alt={recipe.name} src={recipe.image} />
      </Link>

      <p>{recipe.name}</p>
    </ProductWrapper>
  );
};

export default RecipeItem;
