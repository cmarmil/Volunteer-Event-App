import { useContext } from "react";
import "./App.css";
import { IntlProvider } from "react-intl";
import { store } from "./components/appContext";
import { Route, Switch } from "react-router-dom";
import EventCardDeck from "./components/eventCardDeck";
import MenuBar from "./components/menuBar";

function App() {
  const { state, dispatch } = useContext(store);
  return (
    <IntlProvider locale={state.locale}>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <MenuBar />
            <EventCardDeck />
          </Route>
        </Switch>
      </div>
    </IntlProvider>
  );
}

export default App;
