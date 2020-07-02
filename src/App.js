import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { HomePage, NotFoundPage, SettingsPage } from './pages';
import reducer from './reducers';

// Redux conf
const store = createStore(reducer);

/**
 * It orchestrates the app routing logic
 */
const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/settings" component={SettingsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
