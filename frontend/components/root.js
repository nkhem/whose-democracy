import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import SearchSection from './search_section';
import SessionForm from './session_form';
import RepShow from './rep/rep_show';
import PressReleasePg from './rep/press_release/press_release_pg';
import VotePositionPg from './rep/vote_position/vote_position_pg';

const Root = ({ store }) => {
  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ SearchSection }/>
          <Route path="login" component={ SessionForm } onEnter={ _redirectIfLoggedIn } />
          <Route path="signup" component={ SessionForm } onEnter={ _redirectIfLoggedIn } />
          <Route path="legislator/:officialMemberId" component={ RepShow } />
          <Route path="legislator/:officialMemberId/press_releases" component={ PressReleasePg } />
          <Route path="legislator/:officialMemberId/votes" component={ VotePositionPg } />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
