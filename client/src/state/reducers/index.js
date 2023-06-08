import { testReducer } from "./test";
import { uiReducer } from "./ui";

const createFakeTestData = () => Array.from(new Array(300)).reduce((acc, val, ind) => ({...acc, [ind+1] : Math.ceil(Math.random() * 5)}), {});

export const initialState = {
  test: {
    state: "notStarted",
    testType: "long",
    questionsAnswered: createFakeTestData(),
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
