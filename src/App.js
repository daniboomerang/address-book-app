import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { HomePage, NotFoundPage, SettingsPage } from './pages';
import reducer from './store/reducers';

// Redux conf
// eslint-disable-next-line
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

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
