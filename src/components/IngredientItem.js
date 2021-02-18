// Components

import { Link } from "react-router-dom";

// Styling
import { ProductWrapper } from "../styles";

const IngredientItem = (props) => {
  const ingredient = props.ingredient;

  return (
    <ProductWrapper>
      <Link to={`/ingredients/${ingredient.slug}`}>
        <img alt={ingredient.name} src={ingredient.image} />
      </Link>

      <p>{ingredient.name}</p>
      
    </ProductWrapper>
  );
};

export default IngredientItem;