import { useContext } from "react";
import "./App.css";
import { IntlProvider } from "react-intl";
import { store } from "./components/appContext";
import EventCardDeck from "./components/eventCardDeck";
import MenuBar from "./components/menuBar";

function App() {
  const { state, dispatch } = useContext(store);
  return (
    <IntlProvider locale={state.locale}>
      <div className="App">
        <MenuBar/>
        <EventCardDeck />
      </div>
    </IntlProvider>
  );
}

export default App;
