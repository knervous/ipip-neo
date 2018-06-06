import claimsReducer from "../../reducers/claimsReducer";
import { CLAIMS_DATA } from "../../actions/actionTypes";

describe("Claims Reducer", () => {
  it("Should return updated state if parameters are correct", () => {
    const action = { type: CLAIMS_DATA, payload: { numData: 123 } };
    const state = { stringData: "Hello" };
    const result = claimsReducer(state, action);
    expect(result).toEqual({ numData: 123, stringData: "Hello" });
  });

  it("Should return default state when none given", () => {
    const result = claimsReducer(undefined, { type: "NOT CLAIMS_DATA" });
    expect(result).toEqual({});
  });

  it("Should return given state on no action.type match", () => {
    const action = { type: "NOT_CLAIMS_DATA", payload: {} };
    const initialState = { data: "SomethingRelevant" };
    const result = claimsReducer(initialState, action);
    expect(result).toEqual(initialState);
  });
});
