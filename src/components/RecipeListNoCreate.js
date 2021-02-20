// Styling
import { ListWrapper } from "../styles";
// Components
import RecipeItem from "./RecipeItem";
import { useState } from "react";
import SearchBar from "./SearchBar";

const RecipeListNoCreate = ({ recipes }) => {
  const [query, setQuery] = useState("");

  const recipeList = recipes
    .filter((recipe) => recipe.name.toLowerCase().includes(query.toLowerCase()))
    .map((recipe) => <RecipeItem recipe={recipe} key={recipe.id} />);

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{recipeList}</ListWrapper>
    </div>
  );
};

export default RecipeListNoCreate;
