import { useContext, useEffect } from "react";
import "./App.css";
import { IntlProvider, FormattedDate } from "react-intl";
import { store } from "./components/appContext";

function App() {
  const { state, dispatch } = useContext(store)
  return (
      <IntlProvider locale={state.locale}>
        <div className="App">
          <FormattedDate
            value={new Date(1459832991883)}
            year="numeric"
            month="long"
            day="2-digit"
          />
        </div>
        <button onClick={(e) => dispatch({type: 'UPDATE_LOCALE', payload:'en-ZA'})}>{state.locale}</button>
      </IntlProvider>
  );
}

export default App;
