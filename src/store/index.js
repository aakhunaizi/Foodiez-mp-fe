import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducer from "../store/reducers/";

// Actions
import { fetchCategories } from "./actions/categoryActions";
import { fetchIngredients } from "./actions/ingredientActions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

store.dispatch(fetchCategories());
store.dispatch(fetchIngredients());

export default store;
