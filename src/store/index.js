import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducer from "../store/reducers/";

// Actions
import { fetchCategories } from "./actions/categoryActions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

store.dispatch(fetchCategories());

export default store;
