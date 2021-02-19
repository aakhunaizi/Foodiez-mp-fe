import * as types from "../actions/types";

const initialState = {
  recipes: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_RECIPES:
      return {
        ...state,
        recipes: action.payload.recipes,
        loading: false,
      };

    case types.CREATE_RECIPE:
      const { newRecipe } = action.payload;
      return {
        ...state,
        recipes: [...state.recipes, newRecipe],
      };

    default:
      return state;
  }
};

export default reducer;
