/**
 * UI actions
 * @enum {string}
 */
export const UiActions = {
  CHANGE_LANGUAGE: 'CHANGE_LANGUAGE'
};

export const uiReducer = (state, action) => {
  switch (action.type) {
    case UiActions.CHANGE_LANGUAGE: {
      return {
        ...state,
        ui: {
          ...state.ui,
          language: action.payload
        }
      };
    }

    default:
      return state;
  }
};
