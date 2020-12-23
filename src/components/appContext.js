import React, { createContext, useReducer } from "react";
import eventData from "./eventData";

const initialState = {
  locale: "en-US",
  eventData: eventData,
};

const store = createContext(initialState);

const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    const currentState = { ...state };
    switch (action.type) {
      case "UPDATE_LOCALE":
        currentState.locale = action.payload;
        return currentState;
      default:
        throw new Error();
    }
  }, initialState);
  return <Provider value={{state, dispatch}}>{children}</Provider>
};

export {StateProvider, store}
