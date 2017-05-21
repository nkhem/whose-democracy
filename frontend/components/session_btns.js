import React from 'react';
import { Link } from 'react-router';

class SessionBtns extends React.Component {
  constructor(props) {
    super(props);
    this.renderLogoutBtn = this.renderLogoutBtn.bind(this);
  }
  renderNewSessionBtns(){
    return (
      <nav className="login-signup">
        <Link to="login">Log In</Link>
        <br/>
        <Link to="signup">Sign Up</Link>
      </nav>
    );
  }

  renderLogoutBtn(){
    return (
      <button
        className="logout-btn"
        onClick={ this.props.logout }>
        Log Out
      </button>
    );
  }

  render() {
    let renderBtns = this.props.loggedIn
    ? this.renderLogoutBtn
    : this.renderNewSessionBtns;

    return (
      <div id='session-btns'>
        { renderBtns() }
      </div>
    );
  }

}

export default SessionBtns;
