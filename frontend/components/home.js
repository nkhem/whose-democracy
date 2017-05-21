import React from 'react';
import { connect } from 'react-redux';

import { logout } from '../actions/session_actions';
import SearchBar from './search_bar.js';
import Header from './header';

class Home extends React.Component {

  render() {
    return (
      <div id='home' className='main-content'>
        <Header
          loggedIn={this.props.loggedIn}
          logout={ this.props.logout } />
        <h1>gulp</h1>
        <SearchBar />
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.session.errors
  };
};

const mapDispatchToProps = (dispatch, state) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
