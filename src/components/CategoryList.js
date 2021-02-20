// Styling
import { ListWrapper } from "../styles";
// Components
import CategoryItem from "./CategoryItem";
import { useState } from "react";
import SearchBar from "./SearchBar";

import { Link } from "react-router-dom";

const CategoryList = ({ categories }) => {
  const [query, setQuery] = useState("");
  const categoryList = categories
    .filter((category) =>
      category.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((category) => <CategoryItem category={category} key={category.id} />);

  return (
    <div>
      <Link to="/create/category">
        <button
          type="button"
          className="btn btn-dark "
          style={{ position: "absolute", left: "900px", top: "150px" }}
        >
          Create Category
        </button>
      </Link>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{categoryList}</ListWrapper>
    </div>
  );
};

export default CategoryList;
