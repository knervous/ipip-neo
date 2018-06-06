import { SET_ERROR } from "./actionTypes";

export const setError = error => {
  return {
    type: SET_ERROR,
    payload: error
  };
};
