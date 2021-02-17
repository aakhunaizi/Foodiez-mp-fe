// Styling
import { ListWrapper } from "../styles";
// Components
import CategoryItem from "./categoryItem";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";
import LoadingScreen from "./Loading.js";
import CreateCategoryButton from "./buttons/CreateButton";
import { Link } from "react-router-dom";

const CategoryList = ({categories}) => {
  const loading = useSelector((state) => state.categories.loading);
  const [query, setQuery] = useState("");

  if (loading) return <LoadingScreen />;

  const categoryList = categories
    .filter((category) =>
      category.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((category) => <CategoryItem category={category} key={category.id} />);

  return (
    <div>
        <Link to = "/create/category">
        <button
          type="button"
          class="btn btn-dark "
          style={{ position: "absolute", left: "650px", top: "150px" ,  }}
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
