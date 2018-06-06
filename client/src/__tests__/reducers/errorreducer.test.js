import errorReducer from "../../reducers/errorReducer";
import { SET_ERROR } from "../../actions/actionTypes";
import ErrorProcessor from "../../services/errorProcessor";

describe("Error Reducer", () => {
  it("Should return updated state if parameters are correct", () => {
    const ep = new ErrorProcessor();
    const action = { type: SET_ERROR, payload: ep };
    const state = { hasError: false, error: { some: "error" } };
    const result = errorReducer(state, action);
    expect(result).toEqual({ hasError: true, error: ep });
  });

  it("Should return default state when none given", () => {
    const action = { type: "NOT_RIGHT_TYPE" };
    const result = errorReducer(undefined, action);
    expect(result).toEqual({ error: null, hasError: false });
  });

  it("Should return given state on no action.type match", () => {
    const action = { type: "NOT_RIGHT_TYPE", payload: {} };
    const initialState = { data: "SomethingRelevant" };
    const result = errorReducer(initialState, action);
    expect(result).toEqual(initialState);
  });
});
