// IMPORTS

import instance from "./instance";

// ACTION TYPES

import * as types from "./types";

// ACTIONS

export const fetchRecipes = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/recipes/");
      dispatch({
        type: types.FETCH_RECIPES,
        payload: { recipes: res.data },
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const createRecipe = (newRecipe) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in newRecipe) formData.append(key, newRecipe[key]);
      const res = await instance.post("/recipes",formData);
      dispatch({
        type: types.CREATE_RECIPE,
        payload: { newRecipe: res.data },
      });
    } catch (error) {
      console.error(error);
    }
  };
};
