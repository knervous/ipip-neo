import nock from "nock";

import { execObservableEpicTest } from "./test-helpers";
import {
  getCourseState,
  setServerLastSlide,
  setServerAutoAdvance,
  setServerMuteOn,
  setServerQuizScore
} from "../actions/courseStateAction";
import { initialState } from "../reducers/courseStateReducer";
import { epics as rootEpic } from "../epics";
import {
  SET_SERVER_LAST_SLIDE,
  SET_CLIENT_COURSE_STATE,
  GET_COURSE_STATE,
  SET_ERROR,
  SET_SERVER_AUTO_ADVANCE,
  SET_SERVER_MUTE_ON,
  SET_SERVER_USER_PROGRESS_PERCENT_COMPLETE,
  SET_CLIENT_TOC_DATA,
  ADD_CLIENT_SLIDES_VISITED,
  ADD_CLIENT_QUIZ_SCORE,
  REMOVE_CLIENT_QUIZ_SCORE
} from "../actions/actionTypes";
import ErrorProcessor from "../services/errorProcessor";

import { globalConstants } from "../helpers/constants";

afterEach(() => nock.cleanAll());
beforeEach(() => nock.cleanAll());

describe("Course state Actions return values", () => {
  let userId = "longFakeUserId",
    subId = "longFakeSubId",
    label = "ch1s1c2p3",
    slideNumber = 10,
    lastSection = "ch1s1";

  it("returns correct value from getCourseState", () => {
    expect(getCourseState(userId, subId)).toEqual({
      type: GET_COURSE_STATE,
      payload: {
        userId: "longFakeUserId",
        subId: "longFakeSubId"
      }
    });
  });

  it("returns correct value from setServerLastSlide", () => {
    expect(setServerLastSlide(userId, subId, label, slideNumber, lastSection)).toEqual({
      type: SET_SERVER_LAST_SLIDE,
      payload: {
        userId: "longFakeUserId",
        subId: "longFakeSubId",
        label: "ch1s1c2p3",
        slideNumber: 10,
        lastSection: "ch1s1"
      }
    });
  });

  it("returns correct value from setServerAutoAdvance", () => {
    expect(setServerAutoAdvance(userId, subId, true)).toEqual({
      type: SET_SERVER_AUTO_ADVANCE,
      payload: { userId, subId, autoAdvance: true }
    });
  });

  it("returns correct value from setServerMuteOn", () => {
    expect(setServerMuteOn(userId, subId, true)).toEqual({
      type: SET_SERVER_MUTE_ON,
      payload: { userId, subId, muteOn: true }
    });
  });
});

describe("Course state epic for getCourseState", () => {
  let userId = "fakeUserId",
    subId = "fakeSubId";

  it("should correctly run epic wih getCourseState action", done => {
    let action = getCourseState(userId, subId),
      mockResponse = initialState;

    nock(globalConstants.SITE_URL)
      .get(`/api/v1/courseState/userId/${userId}/subscriptionId/${subId}`)
      .reply(200, JSON.stringify(mockResponse));

    execObservableEpicTest(action, rootEpic, done, actions => {
      expect(actions).toEqual([
        {
          payload: initialState,
          type: SET_CLIENT_COURSE_STATE
        }
      ]);
    });
  });

  it("should correctly run epic wih getCourseState action with nulled response", done => {
    let action = getCourseState(userId, subId),
      mockResponse = null;

    nock(globalConstants.SITE_URL)
      .get(`/api/v1/courseState/userId/${userId}/subscriptionId/${subId}`)
      .reply(200, JSON.stringify(mockResponse));

    execObservableEpicTest(action, rootEpic, done, actions => {
      expect(actions).toEqual([
        {
          payload: null,
          type: SET_CLIENT_COURSE_STATE
        }
      ]);
    });
  });

  it("should throw error correctly", done => {
    let action = getCourseState(userId, subId),
      error = { xhr: { status: 400, response: "Some Response Here" } };

    nock(globalConstants.SITE_URL)
      .get(`/api/v1/courseState/userId/${userId}/subscriptionId/${subId}`)
      .replyWithError(error);

    execObservableEpicTest(action, rootEpic, done, actions => {
      expect(actions[0].type).toEqual(SET_ERROR);
      expect(typeof actions[0]).toEqual(typeof new ErrorProcessor());
    });
  });
});

describe("Course state epic for setLastSlide", () => {
  let userId = "fakeUserId",
    subId = "fakeSubId",
    label = "ch1s1c2p3",
    slideNumber = 8,
    lastSection = "ch1s1";

  it("should correctly run epic with setServerLastSlide action", done => {
    let action = setServerLastSlide(userId, subId, label, slideNumber, lastSection),
      mockResponse = "StringResponse";

    nock(globalConstants.SITE_URL)
      .post(`/api/v1/courseState/userId/${userId}/subscriptionId/${subId}/slideTracking`)
      .reply(200, JSON.stringify(mockResponse));

    execObservableEpicTest(action, rootEpic, done, actions => {
      expect(actions).toEqual([
        {
          payload: {
            LastSection: "ch1s1",
            LastSlideNumber: 8
          },
          type: SET_CLIENT_COURSE_STATE
        },
        {
          payload: { chapters: {} },
          type: SET_CLIENT_TOC_DATA
        },
        {
          payload: {
            percentComplete: NaN,
            subId: subId,
            userId: userId
          },
          type: SET_SERVER_USER_PROGRESS_PERCENT_COMPLETE
        },
        { payload: "ch1s1c2p3", type: ADD_CLIENT_SLIDES_VISITED }
      ]);
    });
  });

  it("should throw error correctly", done => {
    let action = setServerLastSlide(userId, subId, label, slideNumber, lastSection),
      error = { xhr: { status: 400, response: "Some Response Here" }, response: {} };

    nock(globalConstants.SITE_URL)
      .post(`/api/v1/courseState/userId/${userId}/subscriptionId/${subId}/slideTracking`)
      .replyWithError(error);

    execObservableEpicTest(action, rootEpic, done, actions => {
      expect(actions[0].type).toEqual(SET_ERROR);
      expect(typeof actions[0]).toEqual(typeof new ErrorProcessor());
    });
  });
});

describe("Course state epic for setServerAutoAdvance", () => {
  let userId = "fakeUserId",
    subId = "fakeSubId",
    autoAdvance = false;

  it("should correctly run epic with setServerLastSlide action", done => {
    let action = setServerAutoAdvance(userId, subId, autoAdvance),
      mockResponse = true;

    nock(globalConstants.SITE_URL)
      .post(`/api/v1/courseState/userId/${userId}/subscriptionId/${subId}/autoAdvance/${autoAdvance}`)
      .reply(200, JSON.stringify(mockResponse));

    execObservableEpicTest(action, rootEpic, done, actions => {
      expect(actions).toEqual([
        {
          payload: { AutoAdvance: autoAdvance },
          type: SET_CLIENT_COURSE_STATE
        }
      ]);
    });
  });

  it("should throw error correctly", done => {
    let action = setServerAutoAdvance(userId, subId, autoAdvance),
      error = { xhr: { status: 400, response: "Some Response Here" }, response: {} };

    nock(globalConstants.SITE_URL)
      .post(`/api/v1/courseState/userId/${userId}/subscriptionId/${subId}/autoAdvance/${autoAdvance}`)
      .replyWithError(error);

    execObservableEpicTest(action, rootEpic, done, actions => {
      expect(actions[0].type).toEqual(SET_ERROR);
      expect(typeof actions[0]).toEqual(typeof new ErrorProcessor());
    });
  });
});

describe("Course state epic for setServerMuteOn", () => {
  let userId = "fakeUserId",
    subId = "fakeSubId",
    muteOn = true;

  it("should correctly run epic with setServerLastSlide action", done => {
    let action = setServerMuteOn(userId, subId, muteOn),
      mockResponse = true;

    nock(globalConstants.SITE_URL)
      .post(`/api/v1/courseState/userId/${userId}/subscriptionId/${subId}/muteOn/${muteOn}`)
      .reply(200, JSON.stringify(mockResponse));

    execObservableEpicTest(action, rootEpic, done, actions => {
      expect(actions).toEqual([
        {
          payload: { MuteOn: muteOn },
          type: SET_CLIENT_COURSE_STATE
        }
      ]);
    });
  });

  it("should throw error correctly", done => {
    let action = setServerMuteOn(userId, subId, muteOn),
      error = { xhr: { status: 400, response: "Some Response Here" }, response: {} };

    nock(globalConstants.SITE_URL)
      .post(`/api/v1/courseState/userId/${userId}/subscriptionId/${subId}/muteOn/${muteOn}`)
      .replyWithError(error);

    execObservableEpicTest(action, rootEpic, done, actions => {
      expect(actions[0].type).toEqual(SET_ERROR);
      expect(typeof actions[0]).toEqual(typeof new ErrorProcessor());
    });
  });
});

describe("Course state epic for setQuizScoreEpic", () => {
  let userId = "fakeUserId",
    subId = "fakeSubId";

  it("should add slide correctly", done => {
    let action = setServerQuizScore(userId, subId, "ch1s4_Quiz", 5, 5, false);

    nock(globalConstants.SITE_URL)
      .post(`/api/v1/courseState/userId/${userId}/subscriptionId/${subId}/quizScoreTracking`)
      .reply(200, true);

    execObservableEpicTest(action, rootEpic, done, actions => {
      expect(actions).toEqual([{ payload: { label: "ch1s4_Quiz", score: 5, total: 5 }, type: ADD_CLIENT_QUIZ_SCORE }]);
    });
  });

  it("should correctly remove quiz slide ", done => {
    let action = setServerQuizScore(userId, subId, "ch1s4_Quiz", 0, 0, true);

    nock(globalConstants.SITE_URL)
      .post(`/api/v1/courseState/userId/${userId}/subscriptionId/${subId}/quizScoreTracking`)
      .reply(200, true);

    execObservableEpicTest(action, rootEpic, done, actions => {
      expect(actions).toEqual([{ payload: "ch1s4_Quiz", type: REMOVE_CLIENT_QUIZ_SCORE }]);
    });
  });

  it("should throw error correctly", done => {
    let action = setServerQuizScore(userId, subId, "ch1s4_Quiz", 5, 5, false),
      error = { xhr: { status: 400, response: "Some Response Here" }, response: {} };

    nock(globalConstants.SITE_URL)
      .post(`/api/v1/courseState/userId/${userId}/subscriptionId/${subId}/quizScoreTracking`)
      .replyWithError(error);

    execObservableEpicTest(action, rootEpic, done, actions => {
      expect(actions[0].type).toEqual(SET_ERROR);
      expect(typeof actions[0]).toEqual(typeof new ErrorProcessor());
    });
  });
});
