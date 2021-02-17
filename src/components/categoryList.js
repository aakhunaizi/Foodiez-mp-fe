// Styling
import { ListWrapper } from "../styles";
// Components
import CategoryItem from "./categoryItem";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";
import LoadingScreen from "./Loading.js";
import CreateCategoryButton from "./buttons/CreateButton";

const CategoryList = () => {
  const categories = useSelector((state) => state.categories.categories);
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
        <SearchBar setQuery={setQuery} />
      <ListWrapper>{categoryList}</ListWrapper>
       
    </div>
  );
};

export default CategoryList;
