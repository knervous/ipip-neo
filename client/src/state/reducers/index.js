import { testReducer } from "./test";
import { uiReducer } from "./ui";

export const initialState = {
  test: {
    state: "notStarted",
    questionsAnswered: {},
    finished: false,
    user: {
      nickname: "",
      sex: "male",
      age: 0
    },
    settings: {
      pageQuestions: "five"
    }
  },
  ui: {
    loading: {
      active: false,
      type: ""
    },
    language: "en-US"
  }
};

export const rootReducer = mergeReducers(initialState, [testReducer, uiReducer]);

function mergeReducers(initialState, reducers) {
  return (state = initialState, action) => reducers.reduce((state, reducer) => reducer(state, action), state);
}
