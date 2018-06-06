import nock from "nock";

import { execObservableEpicTest } from "./test-helpers";
import { getTocData } from "../actions/tocActions";
import { epics as rootEpic } from "../epics";
import { GET_TOC_DATA, SET_CLIENT_TOC_DATA, SET_ERROR } from "../actions/actionTypes";
import ErrorProcessor from "../services/errorProcessor";
import { globalConstants } from "../helpers/constants";

afterEach(() => nock.cleanAll());
beforeEach(() => nock.cleanAll());

describe("Actions return values", () => {
  it("returns getTocData action", () => {
    expect(getTocData()).toEqual({
      type: GET_TOC_DATA
    });
  });
});

describe("Epic claims", () => {
  it("should correctly run epic wih getTocData action", done => {
    let action = getTocData(),
      mockResponse = {
        response: {
          Chapters: {}
        }
      };

    nock(globalConstants.CDN_CONTENT_URL)
      .get(globalConstants.TOC_DATA_PATH)
      .reply(200, JSON.stringify(mockResponse));

    execObservableEpicTest(action, rootEpic, done, actions => {
      expect(actions).toEqual([
        {
          payload: { ...mockResponse, totalPagesInCourse: 0 },
          type: SET_CLIENT_TOC_DATA
        }
      ]);
    });
  });

  it("should run nothing with wrong type", done => {
    let action = {
      type: "NOT_GET_TOC_DATA"
    };

    nock(globalConstants.CDN_CONTENT_URL)
      .get(globalConstants.TOC_DATA_PATH)
      .reply(200, {});

    execObservableEpicTest(action, rootEpic, done, actions => {
      expect(actions).toEqual([]);
    });
  });

  it("should throw error correctly", done => {
    let action = getTocData(),
      error = { xhr: { status: 400, response: "Some Response Here" } };

    nock(globalConstants.CDN_CONTENT_URL)
      .get(globalConstants.TOC_DATA_PATH)
      .replyWithError(error);

    execObservableEpicTest(action, rootEpic, done, actions => {
      expect(actions[0].type).toEqual(SET_ERROR);
      expect(typeof actions[0]).toEqual(typeof new ErrorProcessor());
    });
  });
});
