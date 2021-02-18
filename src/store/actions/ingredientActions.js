// IMPORTS

import instance from "./instance";

// ACTION TYPES

import * as types from "./types";

// ACTIONS

export const fetchIngredients = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/ingredients/");
      dispatch({
        type: types.FETCH_INGREDIENTS,
        payload: { ingredients: res.data },
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const createIngredient = (newIngredient) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in newIngredient) formData.append(key, newIngredient[key]);
      const res = await instance.post(
        `/categories/${newIngredient.categoryId}/ingredients/`,
        formData
      );
      dispatch({
        type: types.CREATE_INGREDIENT,
        payload: { newIngredient: res.data },
      });
    } catch (error) {
      console.error(error);
    }
  };
};
