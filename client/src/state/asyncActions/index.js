import { changeLanguage } from './language';
import { setAnswer } from './test';
export const getAsyncActions = (dispatch, getState) => {
  const actions = {
    changeLanguage
  };

  const context = { ...actions, dispatch, getState };

  return Object.assign({}, ...Object.keys(actions).map(fn => ({ [fn]: actions[fn].bind(context) })));
};
