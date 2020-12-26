import { useContext } from "react";
import { IntlProvider } from "react-intl";
import { store } from "./components/appContext";
import { Route, Switch } from "react-router-dom";
import EventCardDeck from "./components/eventCardDeck";
import SettingsButtons from "./components/settingsButtons";
import MenuBar from "./components/menuBar";
import DetailsModal from "./components/detailsModal";

function App() {
  const { state } = useContext(store);
  return (
    <IntlProvider locale={state.locale}>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <MenuBar />
            <SettingsButtons />
            <EventCardDeck eventData={state.eventData}/>
            <DetailsModal key={state.activeEvent}/>
          </Route>
          <Route path="/my-events">
            <MenuBar />
            <EventCardDeck eventData={state.selectedEvents} />
            <DetailsModal key={state.activeEvent}/>
          </Route>
        </Switch>
      </div>
    </IntlProvider>
  );
}

export default App;
