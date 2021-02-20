// Styling
import { ListWrapper } from "../styles";
// Components
import RecipeItem from "./RecipeItem";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";


const RecipeList = ({ recipes }) => {
 
  const [query, setQuery] = useState("");



  const recipeList = recipes
    .filter((recipe) =>
      recipe.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((recipe) => (
      <RecipeItem recipe={recipe} key={recipe.id} />
    ));

  return (
    <div>
      <Link to="/create/recipe">
        <button
          type="button"
          className="btn btn-dark "
          style={{ position: "absolute", left: "900px", top: "150px" }}
        >
          Create Recipe
        </button>
      </Link>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{recipeList}</ListWrapper>
    </div>
  );
};

export default RecipeList;
