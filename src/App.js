import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomePage, NotFoundPage } from './pages';

/**
 * It orchestrates the app routing logic
 */
const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

export default App;
