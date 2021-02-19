// Styling
import { ListWrapper } from "../styles";
// Components
import RecipeItem from "./RecipeItem";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";
import LoadingScreen from "./Loading.js";

const RecipeList = ({ recipes }) => {
  const loading = useSelector((state) => state.recipes.loading);
  const [query, setQuery] = useState("");

  if (loading) return <LoadingScreen />;

  const recipeList = recipes
    .filter((recipe) =>
      recipe.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((recipe) => (
      <RecipeItem recipe={recipe} key={recipe.id} />
    ));

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{recipeList}</ListWrapper>
    </div>
  );
};

export default RecipeList;
