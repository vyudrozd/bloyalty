import React from 'react';
import './app.styl';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Landing from '../../pages/landing';
import initializeStore from '../../../lib/store/store';

const store = initializeStore();

const Entry = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/profile">
          <span>Profile</span>
        </Route>
        <Route path="/poll">
          <span>Poll</span>
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  </Provider>
);

export default Entry;
