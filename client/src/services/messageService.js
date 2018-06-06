import { errorConstants, messageServiceConstants } from "../helpers/constants";

import ErrorProcessor from "./errorProcessor";

class MessageService {
  constructor(iframe, getCourseState, setError, getIframeDataInitialized, setIframeDataInitialized, getIsFullScreen) {
    this._iframe = iframe;
    this._getCourseState = getCourseState;
    this._setError = setError;
    this._getIframeDataInitialized = getIframeDataInitialized;
    this._setIframeDataInitialized = setIframeDataInitialized;
    this._getIsFullScreen = getIsFullScreen;
    this.messageHandler = this.messageHandler.bind(this);
    this.toggleFullscreen = this.toggleFullscreen.bind(this);

    // Add window listener
    window.addEventListener("message", this.messageHandler, false);

    // Register event handlers for this class
    this.registerEventHandler(messageServiceConstants.CP_HANDSHAKE, this.sendHandshake);
    this.registerEventHandler(messageServiceConstants.CP_ERROR, this.handleError);
    this.registerEventHandler(messageServiceConstants.CP_SET_LOCAL_STORAGE, setIframeDataInitialized);
  }

  registerEventHandler(key, fn) {
    this[key] = fn;
  }

  messageHandler(event) {
    // Check origin - this will break the app if it's in the cloud. Going to wait to implement
    // if (event.origin !== "cdn_content_domain") return;

    const action = event.data;
    switch (action.type) {
      case messageServiceConstants.CAPTIVATE_MESSAGE:
        this.invokeRegisteredEvent(action.payload.eventName, action.payload.data);
        break;
      default:
        return;
    }
  }

  invokeRegisteredEvent(eventName, eventData) {
    if (this[eventName] && typeof this[eventName] === "function") {
      this[eventName](eventData);
    }
  }

  postMessage(type, data) {
    try {
      this._iframe.postMessage(
        {
          type: messageServiceConstants.QT_MESSAGE,
          payload: {
            eventName: type,
            data
          }
        },
        "*"
      );
    } catch (err) {
      this._setError(new ErrorProcessor().buildFromClient(errorConstants.CAPTIVATE_MESSAGING));
    }
  }

  handleError(errorCode) {
    this._setError(new ErrorProcessor().buildFromClient(errorCode));
  }

  showToc() {
    this.postMessage(messageServiceConstants.SHOW_TOC);
  }

  toggleFullscreen(fullscreen) {
    this.postMessage(messageServiceConstants.TOGGLE_FULLSCREEN, fullscreen);
  }

  sendHandshake() {
    this.postMessage(messageServiceConstants.QT_HANDSHAKE, {
      courseState: this._getIframeDataInitialized() ? null : this._getCourseState(),
      isFullScreen: this._getIsFullScreen()
    });
  }

  tearDown() {
    window.removeEventListener("message", this.messageHandler);
  }
}

export default MessageService;
