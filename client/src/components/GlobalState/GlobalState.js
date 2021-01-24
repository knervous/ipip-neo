import React, { useReducer } from 'react';
import { rootReducer, initialState } from '../../state/reducers';
import { getDispatchActions } from '../../state/actions';

export const GlobalContext = React.createContext();

let closureEscapedState;
export default ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);
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
