import { changeLanguage } from './language';
import { finishTest } from './test';
export const getAsyncActions = (dispatch, getState) => {
  const actions = {
    changeLanguage,
    finishTest
  };

  const context = { ...actions, dispatch, getState };

  return Object.assign({}, ...Object.keys(actions).map(fn => ({ [fn]: actions[fn].bind(context) })));
};
