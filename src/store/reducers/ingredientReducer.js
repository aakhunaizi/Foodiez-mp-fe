import * as types from "../actions/types";

const initialState = {
  ingredients: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_INGREDIENTS:
      return {
        ...state,
        ingredients: action.payload.ingredients,
        loading: false,
      };

    case types.CREATE_INGREDIENT:
      const { newIngredient } = action.payload;
      return {
        ...state,
        ingredients: [...state.ingredients, newIngredient],
      };

    default:
      return state;
  }
};

export default reducer;
