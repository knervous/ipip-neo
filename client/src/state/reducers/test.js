import { initialState } from '.';

/**
 * Test data actions
 * @enum {string}
 */
export const TestDataActions = {
  SET_ANSWER    : 'SET_ANSWER',
  SET_TEST_STATE: 'SET_TEST_STATE',
  SET_TEST_USER : 'SET_TEST_USER',
  RESET         : 'TEST_RESET',
  RESTORE       : 'TEST_RESTORE'
};

export const testReducer = (state, action) => {
  switch (action.type) {
    case TestDataActions.SET_ANSWER: {
      const newState = {
        ...state,
        test: {
          ...state.test,
          questionsAnswered: {
            ...state.test.questionsAnswered,
            [action.payload.questionNumber]: action.payload.scaleIndex
          }
        }
      };
      if (window.localStorage) {
        window.localStorage.setItem('testState', JSON.stringify(newState.test));
      }
      return newState;
    }
    case TestDataActions.SET_TEST_STATE: {
      const newState = {
        ...state,
        test: {
          ...state.test,
          state: action.payload
        }
      };
      if (window.localStorage) {
        window.localStorage.setItem('testState', JSON.stringify(newState.test));
      }
      return newState;
    }
    case TestDataActions.SET_TEST_USER: {
      const newState = {
        ...state,
        test: {
          ...state.test,
          user: action.payload
        }
      };
      if (window.localStorage) {
        window.localStorage.setItem('testState', JSON.stringify(newState.test));
      }
      return newState;
    }
    case TestDataActions.RESET: {
      const newState = {
        ...state,
        test: initialState.test
      };
      if (window.localStorage) {
        window.localStorage.setItem('testState', JSON.stringify(newState.test));
      }
      return newState;
    }
    case TestDataActions.RESTORE: {
      const newState = {
        ...state,
        test: action.payload
      };
      if (window.localStorage) {
        window.localStorage.setItem('testState', JSON.stringify(newState.test));
      }
      return newState;
    }

    default:
      return state;
  }
};