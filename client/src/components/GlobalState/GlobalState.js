import React, { useReducer } from 'react';
import { rootReducer, initialState } from '../../state/reducers';
import { getDispatchActions } from '../../state/actions';

export const GlobalContext = React.createContext();

let closureEscapedState;
export default ({ children }) => {
  // Data state
  const [state, dispatch] = useReducer(rootReducer, initialState);

  // todo pcj: Is there a better way to not have react memoize the return of getState on ln 33?
  closureEscapedState = state;
  return (
    <GlobalContext.Provider
      value={{
        state,
        actions: getDispatchActions(dispatch, () => closureEscapedState)
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
