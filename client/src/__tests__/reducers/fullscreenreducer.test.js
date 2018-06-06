import fullScreenReducer from "../../reducers/fullScreenReducer";
import { ENTER_FULLSCREEN, EXIT_FULLSCREEN } from "../../actions/actionTypes";

describe("Full Screen Reducer", () => {
  it("Should return default state", () => {
    const action = { type: "NONE" };
    const result = fullScreenReducer(undefined, action);
    expect(result).toEqual(false);
  });

  it("Should return true on enter fullscreen", () => {
    const action = { type: ENTER_FULLSCREEN };
    const result = fullScreenReducer(false, action);
    expect(result).toEqual(true);
  });

  it("Should return false on exit fullscreen", () => {
    const action = { type: EXIT_FULLSCREEN };
    const result = fullScreenReducer(true, action);
    expect(result).toEqual(false);
  });
});
