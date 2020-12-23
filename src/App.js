import { useContext } from "react";
import "./App.css";
import { IntlProvider } from "react-intl";
import { store } from "./components/appContext";
import EventCardDeck from "./components/eventCardDeck";

function App() {
  const { state, dispatch } = useContext(store);
  return (
    <IntlProvider locale={state.locale}>
      <div className="App">
        <EventCardDeck />
      </div>
    </IntlProvider>
  );
}

export default App;
