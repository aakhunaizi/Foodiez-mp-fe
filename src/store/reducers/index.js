import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import ingredientReducer from "./ingredientReducer";
const rootReducer = combineReducers({
  categories: categoryReducer,
  ingredients: ingredientReducer,
});

export default rootReducer;
