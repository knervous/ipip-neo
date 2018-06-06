export const CDN_CONTENT_URL = process.env.REACT_APP_CDN_CONTENT_URL || "http://localhost";
export const HTTP_STATUS = {
  400: "400 Bad Request",
  404: "404 Not Found",
  401: "401 Unauthorized",
  412: "412 Precondition Failed",
  429: "429 Too Many Requests",
  500: "500 Internal Server Error",
  502: "502 Bad Gateway"
};
export const SIGNOUT_URL = process.env.REACT_APP_SITE_URL + "/auth/signout";
export const SITE_URL = process.env.REACT_APP_SITE_URL || "http://" + window.location.host;
export const TOC_DATA_PATH = "/en-US/HTMLParts/QTIndex/toc-data.json";
