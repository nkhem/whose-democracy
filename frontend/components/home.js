import React from 'react';
import { connect } from 'react-redux';

import { logout } from '../actions/session_actions';
import Header from './header/header';
import WriteMyReps from './write_my_reps/write_my_reps';

class Home extends React.Component {

  render() {
    return (
      <div id='home' className='main-content'>
        <Header
          loggedIn={this.props.loggedIn}
          logout={ this.props.logout } />
        <h1>Whose Democracy</h1>
        <WriteMyReps />
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
