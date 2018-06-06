import {
  SET_SERVER_MUTE_ON,
  SET_SERVER_AUTO_ADVANCE,
  SET_CLIENT_COURSE_STATE,
  SET_SERVER_LAST_SLIDE,
  GET_COURSE_STATE,
  ADD_CLIENT_SLIDES_VISITED,
  SET_SERVER_QUIZ_SCORE,
  ADD_CLIENT_QUIZ_SCORE,
  REMOVE_CLIENT_QUIZ_SCORE
} from "./actionTypes";

export const getCourseState = (userId, subId) => {
  return {
    type: GET_COURSE_STATE,
    payload: {
      userId,
      subId
    }
  };
};

export const setServerLastSlide = (userId, subId, label, slideNumber, lastSection) => {
  return {
    type: SET_SERVER_LAST_SLIDE,
    payload: {
      userId,
      subId,
      label,
      slideNumber,
      lastSection
    }
  };
};

export const setServerQuizScore = (userId, subId, label, score, total, isRemoving) => {
  return {
    type: SET_SERVER_QUIZ_SCORE,
    payload: {
      userId,
      subId,
      label,
      score,
      total,
      isRemoving
    }
  };
};

export const setClientCourseState = courseData => {
  return {
    type: SET_CLIENT_COURSE_STATE,
    payload: courseData
  };
};

export const addToClientSlidesVisited = label => {
  return {
    type: ADD_CLIENT_SLIDES_VISITED,
    payload: label
  };
};

export const setServerMuteOn = (userId, subId, muteOn) => {
  return {
    type: SET_SERVER_MUTE_ON,
    payload: { userId, subId, muteOn }
  };
};

export const setServerAutoAdvance = (userId, subId, autoAdvance) => {
  return {
    type: SET_SERVER_AUTO_ADVANCE,
    payload: { userId, subId, autoAdvance }
  };
};

export const addClientQuizScore = (label, score, total) => {
  return {
    type: ADD_CLIENT_QUIZ_SCORE,
    payload: { label, score, total }
  };
};

export const removeClientQuizScore = label => {
  return {
    type: REMOVE_CLIENT_QUIZ_SCORE,
    payload: label
  };
};
