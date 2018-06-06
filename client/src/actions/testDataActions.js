import { TEST_DECREMENT_INDEX, TEST_INCREMENT_INDEX } from "./actionTypes";

export const testIncrementIndex = () => {
  return {
    type: TEST_INCREMENT_INDEX
  };
};

export const testDecrementIndex = () => {
  return {
    type: TEST_DECREMENT_INDEX
  };
};
