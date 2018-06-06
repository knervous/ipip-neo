import { GET_USER_PROGRESS, SET_CLIENT_USER_PROGRESS, SET_SERVER_USER_PROGRESS_PERCENT_COMPLETE } from "./actionTypes";

export const getUserProgress = (userId, subId) => {
  return {
    type: GET_USER_PROGRESS,
    payload: {
      userId,
      subId
    }
  };
};

export const setClientUserProgress = userProgress => {
  return {
    type: SET_CLIENT_USER_PROGRESS,
    payload: userProgress
  };
};

export const setServerUserProgressPercentComplete = (userId, subId, percentComplete) => {
  return {
    type: SET_SERVER_USER_PROGRESS_PERCENT_COMPLETE,
    payload: { userId, subId, percentComplete }
  };
};
