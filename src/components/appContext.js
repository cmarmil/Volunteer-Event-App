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
  activeFilters: ["teaching", "hackathon", "project"],
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
      case "SORT_BY_ASCENDING_DATE":
        currentState.eventData = currentState.eventData.sort(
          (a, b) => new Date(a.startDate) - new Date(b.startDate)
        );
        return currentState;
      case "SORT_BY_DESCENDING_DATE":
        currentState.eventData = currentState.eventData.sort(
          (a, b) => new Date(b.startDate) - new Date(a.startDate)
        );
        return currentState;
      case "UPDATE_FILTERS":
        if (
          action.payload.checked &&
          !currentState.activeFilters.includes(action.payload.name)
        ) {
          currentState.activeFilters.push(action.payload.name);
        } else {
          var index = currentState.activeFilters.indexOf(action.payload.name);
          if (index !== -1) {
            currentState.activeFilters.splice(index, 1);
          }
        }
        //filter events according to new list of filter tags
        currentState.eventData = eventData.filter((event) =>
          currentState.activeFilters.includes(event.type)
        );
        return currentState;
      default:
        throw new Error();
    }
  }, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { StateProvider, store };
