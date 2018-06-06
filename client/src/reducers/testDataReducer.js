import { TEST_INCREMENT_INDEX, TEST_DECREMENT_INDEX } from "../actions/actionTypes";
const testData = require("./initialStates/testDataInitialState.json");

export default (state = initialState, action) => {
  switch (action.type) {
    case TEST_INCREMENT_INDEX:
      return { ...state, index: state.index + 1 };
    case TEST_DECREMENT_INDEX:
      const index = Math.max(0, state.index - 1);
      return { ...state, index };
    default:
      return state;
  }
};

export const initialState = {
  ...testData,
  index: 0,
  pageSize: 5
};
