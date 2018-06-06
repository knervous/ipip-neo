import { ENTER_FULLSCREEN, EXIT_FULLSCREEN } from "./actionTypes";

export const enterFullscreen = () => {
  return {
    type: ENTER_FULLSCREEN
  };
};

export const exitFullscreen = () => {
  return {
    type: EXIT_FULLSCREEN
  };
};
