import React from 'react';
import './app.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Entry = () => (
  <Router>
    <Switch>
      <Route path="profile">
        <span>Profile</span>
      </Route>
      <Route path="/poll">
        <span>Poll</span>
      </Route>
      <Route path="/">
        <span>Main page</span>
      </Route>
    </Switch>
  </Router>
);

export default Entry;
