import { globalConstants, errorConstants as ErrorCodes } from "../helpers/constants";
import _get from "lodash/get";

class ErrorProcessor {
  error = null;
  timeStamp = null;
  title = "";
  details = "";
  redirectUrl = globalConstants.SIGNOUT_URL;
  redirectText = "errors.urlMessages.tryAgain";
  errorCode = null;
  id = "";

  constructor() {
    this.timeStamp = new Date(Date.now());
  }

  buildFromServer(error) {
    this.error = error;
    this.errorCode = _get(error, "xhr.response.ErrorCode") || ErrorCodes.Unknown;
    this.id = _get(error, "xhr.response.Id");
    this.httpStatus = globalConstants.HTTP_STATUS[this.error.status] || `Undefined Error Code: ${this.error.status}`;
    switch (this.errorCode) {
      default:
        this.title = "errors.title.generic";
        this.details = "errors.details.generic";
        break;
    }
    return this;
  }

  buildFromClient(errorCode) {
    this.errorCode = errorCode;
    switch (errorCode) {
      case ErrorCodes.LocalStorage:
        this.title = "errors.title.generic";
        this.details = "errors.details.localStorage";
        break;
      case ErrorCodes.CaptivateMessaging:
        this.title = "errors.title.generic";
        this.details = "errors.details.captivateMessaging";
        break;
      default:
        this.title = "errors.title.generic";
        this.details = "errors.details.generic";
        break;
    }
    return this;
  }
}

export default ErrorProcessor;
