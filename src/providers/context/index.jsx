import {createContext, useReducer} from "react";
import defaultContext from "./defaultContext";

const AppContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'changeCurrency':
      return {
        ...state,
        currency: action.currency,
      }
    case 'reset': 
      return defaultContext;
    default:
      throw new Error('No action')
  }
}

const AppContextProvider = ({children, ...props}) => {
  const [state, dispatch] = useReducer(reducer, defaultContext);
  const value = { state, dispatch }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export {
   AppContext,
   AppContextProvider,
}