import nock from "nock";

import { execObservableEpicTest } from "./test-helpers";
import { getClaims } from "../actions/claimsAction";
import { epics as rootEpic } from "../epics";
import { CLAIMS_DATA, GET_CLAIMS, SET_ERROR } from "../actions/actionTypes";
import ErrorProcessor from "../services/errorProcessor";
import { globalConstants } from "../helpers/constants";

afterEach(() => nock.cleanAll());
beforeEach(() => nock.cleanAll());

describe("Actions return values", () => {
  it("returns getClaims action", () => {
    expect(getClaims()).toEqual({
      type: GET_CLAIMS
    });
  });
});

describe("Epic claims", () => {
  it("should correctly run epic wih getClaims action", done => {
    let action = getClaims(),
      mockResponse = {
        response: {
          firstName: "user",
          lastName: "1",
          email: "user1@minitab.com",
          fullName: "user 1",
          userId: "fc52b24ab7fb4dae98442d77714b5a64",
          userStatus: "Active",
          identityProviderUrl: "https://lptest-integ.minitab.com",
          iaId: "111111",
          subName: "Quality Trainer Sample",
          subId: "e571de758ec34df596a9d694114ecbe8",
          subEndDate: "2029-01-01T00:00:00.0000000Z",
          productId: "daa3c37e37c1424a9d51175025f86a7a",
          deploymentUrl: "qualitytrainer-dev.minitab.com",
          features: "[]",
          seatId: "",
          roleAdmin: "1",
          roleUser: "1"
        }
      };

    nock(globalConstants.SITE_URL)
      .get("/api/v1/claims")
      .reply(200, JSON.stringify(mockResponse));

    execObservableEpicTest(action, rootEpic, done, actions => {
      expect(actions).toEqual([
        {
          payload: mockResponse,
          type: CLAIMS_DATA
        }
      ]);
    });
  });

  it("should run nothing with wrong type", done => {
    let action = {
      type: "NOT_GET_CLAIMS"
    };

    nock(globalConstants.SITE_URL)
      .get("/api/v1/claims")
      .reply(200, {});

    execObservableEpicTest(action, rootEpic, done, actions => {
      expect(actions).toEqual([]);
    });
  });

  it("should throw error correctly", done => {
    let action = getClaims(),
      error = { xhr: { status: 400, response: "Some Response Here" } };

    nock(globalConstants.SITE_URL)
      .get("/api/v1/claims")
      .replyWithError(error);

    execObservableEpicTest(action, rootEpic, done, actions => {
      expect(actions[0].type).toEqual(SET_ERROR);
      expect(typeof actions[0]).toEqual(typeof new ErrorProcessor());
    });
  });
});
