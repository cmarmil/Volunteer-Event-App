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
            <EventCardDeck eventData={state.eventData} />
            <DetailsModal key={state.activeEvent} />
          </Route>
          <Route path="/my-events">
            <MenuBar />
            {state.selectedEvents.length ? (
              <EventCardDeck eventData={state.selectedEvents} />
            ) : (
              <p className="text-center mt-3">You haven't selected any events.</p>
            )}
            <DetailsModal key={state.activeEvent} />
          </Route>
        </Switch>
      </div>
    </IntlProvider>
  );
}

export default App;
