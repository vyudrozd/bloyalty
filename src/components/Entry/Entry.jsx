import React from 'react';
import './app.styl';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Landing from '../../pages/landing';
import initializeStore from '../../../lib/store/store';
import Profile from '../../pages/profile/profile';
import Header from '../Header';

const store = initializeStore();

const Entry = () => (
  <Provider store={store}>
    <Router>
      <Header />
      <Switch>
        <Route path="/profile" component={Profile} />
        <Route exact path="/poll">
          <span>Poll</span>
        </Route>
        <Route exact path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  </Provider>
);

export default Entry;
