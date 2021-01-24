import { TestDataActions } from "./reducers/test";

import { UiActions } from "./reducers/ui";
import { getAsyncActions } from "./asyncActions";

export const actionMap = {
  setAnswer: (questionNumber, scaleIndex) => ({
    type: TestDataActions.SET_ANSWER,
    payload: { questionNumber, scaleIndex }
  }),
  setPageQuestions: mode => ({ type: TestDataActions.SET_PAGE_QUESTIONS, payload: mode }),
  resetTestState: () => ({ type: TestDataActions.RESET }),
  restoreTestState: state => ({ type: TestDataActions.RESTORE, payload: state }),
  setTestUser: user => ({ type: TestDataActions.SET_TEST_USER, payload: user }),
  setTestState: state => ({ type: TestDataActions.SET_TEST_STATE, payload: state }),
  setTestFinished: finished => ({ type: TestDataActions.SET_TEST_FINISHED, payload: finished }),
  setLanguage: language => ({ type: UiActions.CHANGE_LANGUAGE, payload: language })
};

export const getDispatchActions = (dispatch, getState) => {
  const actions = Object.assign(
    getAsyncActions(dispatch, getState),
    ...Object.values(actionMap).map(func => ({
      [func.name]: function() {
        dispatch(func.call(null, ...arguments));
      }
    }))
  );

  return actions;
};
