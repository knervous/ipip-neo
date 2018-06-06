import { NAVIGATE_TO_TAB } from "./actionTypes";

export const navigateToTab = tab => {
  return {
    type: NAVIGATE_TO_TAB,
    payload: tab
  };
};
