import React from 'react';
import SessionBtns from './session_btns';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.renderSessionBtns = this.renderSessionBtns.bind(this);
  }

  renderSessionBtns(){
    if (this.props.hideSessionBtns) {
      return null;
    } else {
      return (
      <SessionBtns
        loggedIn={ this.props.loggedIn }
        logout={ this.props.logout } />
      );
    }
  }
  render() {
    return (
      <div className='header'>
        <h1>Whose Democracy</h1>
        {this.renderSessionBtns()}
      </div>
    );
  }

}

export default Header;
