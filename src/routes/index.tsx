import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Joke from '../pages/Joke';

import AppProvider from '../hooks';

const Routes: React.FC = () => (
  <Router>
    <Switch>
      <AppProvider>
        <Route path="/" exact component={Home} />
        <Route path="/joke/:category" component={Joke} />
      </AppProvider>
    </Switch>
  </Router>
);

export default Routes;
