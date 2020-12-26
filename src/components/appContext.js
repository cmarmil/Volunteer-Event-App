import React, { createContext, useReducer } from "react";
import eventData from "./eventData";
import reducer from "./reducer";

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
  activeFilters: ["teaching", "hackathon", "project"],
  modalOpen: false,
  activeEvent: null,
  selectedEvents: [],
};

const store = createContext(initialState);

const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { StateProvider, store };
