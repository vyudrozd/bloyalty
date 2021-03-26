import React, { useEffect } from 'react';
import './app.styl';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Landing from '../../pages/landing';
import initializeStore from '../../../lib/store/store';
import Profile from '../../pages/profile/profile';
import Vote from '../../pages/vote';
import { loginUserByToken } from '../../../lib/store/user/actions';

const store = initializeStore();

const Entry = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('__bloyalty__');
      if (token) {
        loginUserByToken({ token });
      }
    }
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/profile" component={Profile} />
          <Route exact path="/vote">
            <Vote />
          </Route>
          <Route exact path="/">
            <Landing />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
};

export default Entry;
