// Styling
import { ListWrapper } from "../styles";
// Components
import IngredientItem from "./IngredientItem";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";
import LoadingScreen from "./Loading.js";

const IngredientList = ({ ingredients }) => {
  const loading = useSelector((state) => state.ingredients.loading);
  const [query, setQuery] = useState("");

  //if (loading) return <LoadingScreen />;

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
