import utility from "../utility";
import eventData from "./eventData";

const reducer = (state, action) => {
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
        utility.removeItemFromArray(
          currentState.activeFilters,
          action.payload.name
        );
      }
      //filter events according to new list of filter tags
      currentState.eventData = eventData.filter((event) =>
        currentState.activeFilters.includes(event.type)
      );
      return currentState;
    case "TOGGLE_MODAL":
      currentState.modalOpen = !currentState.modalOpen;
      currentState.activeEvent = action.payload;
      return currentState;
    case "ADD_EVENT":
      if (
        !currentState.selectedEvents.filter((e) => e.id === action.payload.id)
          .length
      ) {
        currentState.selectedEvents.push(action.payload);
      }
      return currentState;
    default:
      throw new Error();
  }
};

export default reducer;
