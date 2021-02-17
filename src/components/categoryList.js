// Styling
import { ListWrapper } from "../styles";
// Components
import CategoryItem from "./categoryItem";
import { useState } from "react";
import { useSelector } from "react-redux";
import LoadingScreen from "./Loading.js";

const CategoryList = () => {
    const categories = useSelector((state) => state.categories.categories);
    const loading = useSelector((state) => state.categories.loading);
    const [query, setQuery] = useState("");
  
    if (loading) return <LoadingScreen />;
  
    const categoryList = categories
      .filter((category) => category.name.toLowerCase().includes(query.toLowerCase()))
      .map((category) => <CategoryItem category={category} key={category.id} />);
  
  return (
    <div>
      
      <ListWrapper>{categoryList}</ListWrapper>
    </div>
  );
};

export default CategoryList;