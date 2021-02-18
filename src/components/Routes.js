import { Route, Switch } from "react-router";
import { useSelector } from "react-redux";
import Home from "./Home";
//import ProductDetail from "./ProductDetail";
import CategoryForm from "./CategoryForm";
import CategoryList from "./categoryList";
import IngredientList from "./IngredientList";


const Routes = () => {
  const categories = useSelector((state) => state.categories.categories);
  const ingredients = useSelector((state) => state.ingredients.ingredients);


  return (
    <Switch>
      
      <Route path="/create/category">
        <CategoryForm />
      </Route>

      <Route path="/ingredients">
        <IngredientList ingredients={ingredients}  />
      </Route>
      
      <Route path="/categories">
        <CategoryList categories={categories} />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;