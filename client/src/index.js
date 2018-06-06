import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import ReduxToastr from "react-redux-toastr";

import "./services/polyfills";

import configureStore from "./store/configureStore";

import { configureAppInsights } from "./helpers/appInsights";
import AppRouter, { history } from "./routers/AppRouter";

import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";

configureAppInsights(history);

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <div>
      <AppRouter />
      <ReduxToastr timeOut={5000} newestOnTop={false} position="top-right" />
    </div>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("app"));
