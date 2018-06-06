import { SET_ERROR } from "../actions/actionTypes";

export default (state = { hasError: false, error: null }, action) => {
  if (action.type === SET_ERROR) {
    const newState = {
      hasError: true,
      error: action.payload
    };
    return newState;
  }
  return state;
};
