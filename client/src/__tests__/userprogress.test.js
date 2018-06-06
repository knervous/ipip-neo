import nock from "nock";

import { execObservableEpicTest, createMockStore } from "./test-helpers";
import { getUserProgress, setServerUserProgressPercentComplete } from "../actions/userProgressActions";
import { addClientQuizScore, removeClientQuizScore } from "../actions/courseStateAction";
import { initialState } from "../reducers/userProgressReducer";
import { epics as rootEpic } from "../epics";
import {
  GET_USER_PROGRESS,
  SET_CLIENT_USER_PROGRESS,
  SET_SERVER_USER_PROGRESS_PERCENT_COMPLETE,
  SET_ERROR
} from "../actions/actionTypes";
import ErrorProcessor from "../services/errorProcessor";

afterEach(() => nock.cleanAll());
beforeEach(() => nock.cleanAll());

describe("User Progress Actions return values", () => {
  let userId = "longFakeUserId",
    subId = "longFakeSubId",
    percentComplete = 87;

  it("returns correct value from getUserProgress", () => {
    expect(getUserProgress(userId, subId)).toEqual({
      type: GET_USER_PROGRESS,
      payload: {
        userId: "longFakeUserId",
        subId: "longFakeSubId"
      }
    });
  });

  it("returns correct value from setServerUserProgressPercentComplete", () => {
    expect(setServerUserProgressPercentComplete(userId, subId, percentComplete)).toEqual({
      type: SET_SERVER_USER_PROGRESS_PERCENT_COMPLETE,
      payload: { userId, subId, percentComplete }
    });
  });
});

describe("User Progress epic for getUserProgressEpic", () => {
  let userId = "fakeUserId",
    subId = "fakeSubId";

  it("should correctly run epic wih getUserProgress action", done => {
    let action = getUserProgress(userId, subId),
      mockResponse = initialState;

    nock("http://localhost/")
      .get(`/api/v1/userProgress/userId/${userId}/subscriptionId/${subId}`)
      .reply(200, JSON.stringify(mockResponse));

    execObservableEpicTest(action, rootEpic, done, actions => {
      expect(actions).toEqual([
        {
          payload: initialState,
          type: SET_CLIENT_USER_PROGRESS
        }
      ]);
    });
  });

  it("should correctly run epic wih getUserProgress action with nulled response", done => {
    let action = getUserProgress(userId, subId),
      mockResponse = null;

    nock("http://localhost/")
      .get(`/api/v1/userProgress/userId/${userId}/subscriptionId/${subId}`)
      .reply(200, JSON.stringify(mockResponse));

    execObservableEpicTest(action, rootEpic, done, actions => {
      expect(actions).toEqual([
        {
          payload: null,
          type: SET_CLIENT_USER_PROGRESS
        }
      ]);
    });
  });

  it("should throw error correctly", done => {
    let action = getUserProgress(userId, subId),
      error = { xhr: { status: 400, response: "Some Error Response Here" } };

    nock("http://localhost/")
      .get(`/api/v1/userProgress/userId/${userId}/subscriptionId/${subId}`)
      .replyWithError(error);

    execObservableEpicTest(action, rootEpic, done, actions => {
      expect(actions[0].type).toEqual(SET_ERROR);
      expect(typeof actions[0]).toEqual(typeof new ErrorProcessor());
    });
  });
});

describe("User Progress epic for setServerUserProgressPercentCompleteEpic", () => {
  let userId = "fakeUserId",
    subId = "fakeSubId",
    percentComplete = 87;

  it("should correctly run epic with setServerUserProgressPercentComplete action", done => {
    let action = setServerUserProgressPercentComplete(userId, subId, percentComplete),
      mockResponse = true;

    nock("http://localhost/")
      .post(`/api/v1/userProgress/userId/${userId}/subscriptionId/${subId}/percentComplete/`, {
        PercentComplete: /[0-9]+/
      })
      .reply(200, JSON.stringify(mockResponse));

    execObservableEpicTest(action, rootEpic, done, actions => {
      expect(actions).toEqual([
        {
          payload: { PercentComplete: percentComplete },
          type: SET_CLIENT_USER_PROGRESS
        }
      ]);
    });
  });

  it("should throw error correctly", done => {
    let action = setServerUserProgressPercentComplete(userId, subId, percentComplete),
      error = { xhr: { status: 400, response: "Some Error Response Here" }, response: {} };

    nock("http://localhost/")
      .post(`/api/v1/userProgress/userId/${userId}/subscriptionId/${subId}/percentComplete/`, {
        PercentComplete: /[0-9]+/
      })
      .replyWithError(error);

    execObservableEpicTest(action, rootEpic, done, actions => {
      expect(actions[0].type).toEqual(SET_ERROR);
      expect(typeof actions[0]).toEqual(typeof new ErrorProcessor());
    });
  });
});

describe("User Progress epic for setServerUserProgressQuizAvgEpic", () => {
  let userId = "fakeUserId",
    subId = "fakeSubId",
    store = createMockStore({
      courseState: {
        QuizScores: [{ Key: "ch1s4_Quiz", Score: 5, Total: 10 }, { Key: "ch1s3_Quiz", Score: 8, Total: 8 }]
      },
      claims: {
        userId,
        subId
      }
    });
  it("should calculate new average quiz score from addClientQuizScore action", done => {
    let action = addClientQuizScore("ch1s3_Quiz", 8, 8),
      mockResponse = true,
      expectedQuizAvg = 0.75;

    nock("http://localhost/")
      .post(`/api/v1/userProgress/userId/${userId}/subscriptionId/${subId}/quizAverage/`, {
        AverageQuizScore: /[0-9]+/
      })
      .reply(200, JSON.stringify(mockResponse));

    execObservableEpicTest(
      action,
      rootEpic,
      done,
      actions => {
        expect(actions).toEqual([
          {
            payload: { AverageQuizScore: expectedQuizAvg },
            type: SET_CLIENT_USER_PROGRESS
          }
        ]);
      },
      { store }
    );
  });

  it("should calculate new average quiz score from removeClientQuizScore action", done => {
    let action = removeClientQuizScore("ch1s3_Quiz"),
      mockResponse = true,
      expectedQuizAvg = 0.75;

    nock("http://localhost/")
      .post(`/api/v1/userProgress/userId/${userId}/subscriptionId/${subId}/quizAverage/`, {
        AverageQuizScore: /[0-9]+/
      })
      .reply(200, JSON.stringify(mockResponse));

    execObservableEpicTest(
      action,
      rootEpic,
      done,
      actions => {
        expect(actions).toEqual([
          {
            payload: { AverageQuizScore: expectedQuizAvg },
            type: SET_CLIENT_USER_PROGRESS
          }
        ]);
      },
      { store }
    );
  });

  it("should throw error correctly", done => {
    let action = addClientQuizScore("ch1s3_Quiz", 8, 8),
      error = { xhr: { status: 400, response: "Some Error Response Here" }, response: {} };

    nock("http://localhost/")
      .post(`/api/v1/userProgress/userId/${userId}/subscriptionId/${subId}/quizAverage/`, {
        AverageQuizScore: /[0-9]+/
      })
      .replyWithError(error);

    execObservableEpicTest(
      action,
      rootEpic,
      done,
      actions => {
        expect(actions[0].type).toEqual(SET_ERROR);
        expect(typeof actions[0]).toEqual(typeof new ErrorProcessor());
      },
      { store }
    );
  });
});
