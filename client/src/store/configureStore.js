import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";

import { epics } from "../epics";
import { reducers } from "../reducers";
import configureL10N from "./configureL10N";

const epicMiddleware = createEpicMiddleware(epics);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  var store = createStore(reducers, composeEnhancers(applyMiddleware(epicMiddleware)));

  configureL10N(store);

  return store;
};
