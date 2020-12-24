import { useContext } from "react";
import "./App.css";
import { IntlProvider } from "react-intl";
import { store } from "./components/appContext";
import { Route, Switch } from "react-router-dom";
import EventCardDeck from "./components/eventCardDeck";
import SettingsButtons from "./components/settingsButtons";
import MenuBar from "./components/menuBar";

function App() {
  const { state } = useContext(store);
  return (
    <IntlProvider locale={state.locale}>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <MenuBar />
            <SettingsButtons/>
            <EventCardDeck />
          </Route>
          <Route path="/my-events">
            <MenuBar />
          </Route>
        </Switch>
      </div>
    </IntlProvider>
  );
}

export default App;
