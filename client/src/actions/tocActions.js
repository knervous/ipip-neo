import { FLAG_TOC_DISPLAYED, SET_CLIENT_TOC_DATA, GET_TOC_DATA } from "./actionTypes";

export const flagTocDisplayed = flag => {
  return {
    type: FLAG_TOC_DISPLAYED,
    payload: flag
  };
};

export const setClientTocData = tocData => {
  return {
    type: SET_CLIENT_TOC_DATA,
    payload: tocData
  };
};

export const getTocData = () => {
  return {
    type: GET_TOC_DATA
  };
};
