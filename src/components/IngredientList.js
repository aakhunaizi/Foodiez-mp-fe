// Styling
import { ListWrapper } from "../styles";
// Components
import IngredientItem from "./IngredientItem";
import { useState } from "react";
import SearchBar from "./SearchBar";


const IngredientList = ({ ingredients }) => {
  const [query, setQuery] = useState("");


  const ingredientList = ingredients
    .filter((ingredient) =>
      ingredient.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((ingredient) => (
      <IngredientItem ingredient={ingredient} key={ingredient.id} />
    ));

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{ingredientList}</ListWrapper>
    </div>
  );
};

export default IngredientList;
