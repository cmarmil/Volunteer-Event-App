import React, { createContext, useReducer } from "react";
import eventData from "./eventData";

const initialState = {
  locale: "en-US",
  eventData: eventData,
  localeList: [
    { localeStr: "en-US", localeName: "USA" },
    { localeStr: "en-AU", localeName: "Australia" },
    { localeStr: "en-CA", localeName: "Canada" },
    { localeStr: "en-IE", localeName: "Ireland" },
    { localeStr: "en-ZA", localeName: "South Africa" },
    { localeStr: "en-GB", localeName: "Great Britain" },
  ],
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
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { StateProvider, store };
