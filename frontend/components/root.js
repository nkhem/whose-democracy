import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import SearchSection from './search_section';
import SessionForm from './session_form';
import RepShow from './rep/rep_show';

const Root = ({ store }) => {
  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUserId = store.getState().session.currentUserId;
    if (currentUserId) {
      replace('/');
    }
  };

  const _redirectUnlessLoggedIn = (nextState, replace) => {
    const currentUserId = store.getState().session.currentUserId;
    if (!currentUserId) {
      replace('/login');
    }
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ SearchSection } onEnter={ _redirectUnlessLoggedIn }/>
          <Route path="login" component={ SessionForm } onEnter={ _redirectIfLoggedIn } />
          <Route path="signup" component={ SessionForm } onEnter={ _redirectIfLoggedIn } />
          <Route path="legislator/:officialMemberId" component={ RepShow } />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
