import { Observable } from "rxjs/Observable";

import { globalConstants } from "../helpers/constants";
import ErrorProcessor from "../services/errorProcessor";
import { setError } from "../actions/errorAction";

const querystring = require("querystring");

export const ajaxObservable = options => {
  let {
    path,
    method = "GET",
    body,
    params = {},
    headers = {},
    baseUrl = globalConstants.SITE_URL,
    withCredentials = true
  } = options;

  const qs = querystring.stringify(params);
  const url = `${baseUrl}${path}` + (qs === "" ? "" : `?${qs}`);
  headers = { ...headers };

  const settings = {
    responseType: "json",
    contentType: "application/json",
    dataType: "json",
    async: true,
    crossDomain: true,
    url,
    method,
    body,
    headers,
    withCredentials
  };

  return Observable.ajax(settings);
};

export const catchObservable = error => {
  const parsedError = new ErrorProcessor().buildFromServer(error);
  return Observable.of(setError(parsedError));
};
