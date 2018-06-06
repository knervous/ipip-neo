import { enterFullscreen, exitFullscreen } from "../actions/fullscreenActions";
import { ENTER_FULLSCREEN, EXIT_FULLSCREEN } from "../actions/actionTypes";

describe("Enter full screen", () => {
  it("Should return ENTER_FULLSCREEN value", () => {
    expect(enterFullscreen()).toEqual({
      type: ENTER_FULLSCREEN,
      payload: undefined
    });
  });
});

describe("Exit full screen", () => {
  it("Should return EXIT_FULLSCREEN value", () => {
    expect(exitFullscreen()).toEqual({
      type: EXIT_FULLSCREEN,
      payload: undefined
    });
  });
});
