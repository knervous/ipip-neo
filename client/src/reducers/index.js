import { combineReducers } from "redux";
import { localeReducer } from "react-localize-redux";
import { reducer as toastrReducer } from "react-redux-toastr";
import testDataReducer from "./testDataReducer";

import errorReducer from "./errorReducer";

export const reducers = combineReducers({
  error: errorReducer,
  toastr: toastrReducer,
  locale: localeReducer, //Reducer
  testData: testDataReducer
});
