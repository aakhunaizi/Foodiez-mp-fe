import { Route, Switch } from "react-router";
import { useSelector } from "react-redux";
import Home from "./Home";
//import ProductDetail from "./ProductDetail";
import CategoryForm from "./CategoryForm";
import CategoryList from "./CategoryList";
import IngredientList from "./IngredientList";
import CategoryDetail from "./CategoryDetail";
import IngredientForm from "./IngredientForm";
import IngredientDetail from "./IngredientDetail";
import RecipeDetail from "./RecipeDetail";
import RecipeList from "./RecipeList";
import LoadingScreen from "./Loading.js";
import RecipeForm from "./RecipeForm";

const Routes = () => {
  const categories = useSelector((state) => state.categories.categories);
  const ingredients = useSelector((state) => state.ingredients.ingredients);
  const recipes = useSelector((state) => state.recipes.recipes);
  const loadingCategories = useSelector((state) => state.categories.loading);
  const loadingIngredients = useSelector((state) => state.ingredients.loading);
  const loadingRecipes = useSelector((state) => state.recipes.loading);

  if (loadingCategories || loadingIngredients || loadingRecipes)
    return <LoadingScreen />;

  return (
    <Switch>
      <Route path="/categories/:categoryId/ingredients/">
        <IngredientForm />
      </Route>

      <Route path="/create/category">
        <CategoryForm />
      </Route>
      <Route path="/ingredients/:ingredientSlug">
        <IngredientDetail />
      </Route>
      <Route path="/recipes/:recipeSlug">
        <RecipeDetail />
      </Route>
      <Route path="/ingredients">
        <IngredientList ingredients={ingredients} />
      </Route>

      <Route path="/categories/:categorySlug">
        <CategoryDetail />
      </Route>

      <Route path="/create/recipe">
        <RecipeForm ingredients={ingredients} />
      </Route>

      <Route path="/categories">
        <CategoryList categories={categories} />
      </Route>
      <Route path="/recipes">
        <RecipeList recipes={recipes} />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
