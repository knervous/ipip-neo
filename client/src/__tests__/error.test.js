import { setError } from "../actions/errorAction";
import { SET_ERROR } from "../actions/actionTypes";
import ErrorProcessor from "../services/errorProcessor";

describe("Error actions", () => {
  it("Adds default ErrorProcessor", () => {
    const ep = new ErrorProcessor();
    expect(setError(ep)).toEqual({
      type: SET_ERROR,
      payload: ep
    });
  });
});
