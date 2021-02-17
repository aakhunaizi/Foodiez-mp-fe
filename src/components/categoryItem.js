// Components

import { Link } from "react-router-dom";

// Styling
import { ProductWrapper } from "../styles";

const CategoryItem = (props) => {
  const category = props.category;

  return (
    <ProductWrapper>
      <Link to={`/categories/${category.slug}`}>
        <img alt={category.name} src={category.image} />
      </Link>

      <p>{category.name}</p>
      
    </ProductWrapper>
  );
};

export default CategoryItem;