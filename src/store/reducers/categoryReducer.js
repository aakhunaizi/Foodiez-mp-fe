import * as types from "../actions/types";

const initialState = {
  categories: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.payload.categories,
        loading: false,
      };

    case types.CREATE_CATEGORY:
      const { newCategory } = action.payload;
      return {
        ...state,
        categories: [...state.categories, newCategory],
      };

    default:
      return state;
  }
};

export default reducer;
