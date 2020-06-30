import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomePage, NotFoundPage, SettingsPage } from './pages';

/**
 * It orchestrates the app routing logic
 */
const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/settings" component={SettingsPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

export default App;
