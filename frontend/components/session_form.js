import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { login, signup, clearErrors } from '../actions/session_actions';
import { fetchCurrentUser } from '../actions/user_actions';

import ErrorMsgs from './error_msgs';
import Header from './header/header';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      f_name: '',
      l_name: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirectIfLoggedIn = this.redirectIfLoggedIn.bind(this);
  }

  componentWillMount() {
    this.props.clearErrors();
  }

  handleSubmit(asGuest){
    let logUserIn = asGuest ? this.loginAsGuest() : this.loginAsTrueUser();
    return e => {
  		e.preventDefault();
      logUserIn(e);
      this.setState({
        f_name: '',
        l_name: '',
        email: '',
        password: ''
      });
    };
	}

  loginAsTrueUser() {
    return e => {
  		this.props.processForm({ user: this.state })
        .then( () => {
          this.props.clearErrors();
          this.redirectIfLoggedIn();
        });
    };
	}

  loginAsGuest(){
  return e => {
    this.props.processForm(
      {user: {
        email: 'guest_user@email.com',
        password: 'guest_user_password'}
      })
      .then( () => {
        this.props.clearErrors();
        this.redirectIfLoggedIn();
      });
  };
  }

  redirectIfLoggedIn(){
    if(this.props.loggedIn){
      this.props.router.push("/");
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    const asGuest = true;
    const asTrueUser = false;

    return (
      <div>
        <Header
          hideSessionBtns={ true }
          loggedIn={this.props.loggedIn} />
  			<div className='main-content'>
          <h3>{this.props.formType}</h3>
  				<form onSubmit={this.handleSubmit(asTrueUser)} id="new-session-form">

  					<input type={`${this.props.formType === 'login' ? 'hidden': 'text'}`}
  						value={this.state.f_name}
  						onChange={this.update("f_name")}
              placeholder='f_name' />

            <input type={`${this.props.formType === 'login' ? 'hidden': 'text'}`}
  						value={this.state.l_name}
  						onChange={this.update("l_name")}
              placeholder='l_name' />

            <br/>

  					<input type="text"
  						value={this.state.email}
  						onChange={this.update("email")}
              placeholder='email' />

  					<br/>

  					<input type="password"
  						value={this.state.password}
  						onChange={this.update("password")}
              placeholder='password' />

  					<br/>

  					<input type="submit" value={this.props.formType} />
  				</form>
          <div id='session-form-btns'>
            <div>
              <form onSubmit={ this.handleSubmit(asGuest) }>
                <input
                  className="submit-btn session-form-btn"
                  id="demo-btn"
                  type="submit"
                  value="Continue in demo mode" />
              </form>
            </div>

            <div id="session-form-switch">
              <Link
                to={this.props.formType === 'login'?'signup':'login'}
                onClick={()=> this.props.clearErrors()}>

                {this.props.formType === 'login'
                  ? 'New user? '
                  : 'Already have an account? ' }

                <span>{this.props.formType === 'login'
                  ? 'Create an account.  '
                  : 'Log in  ' }</span>

              </Link>
            </div>

            <div id='back-to-main' onClick={()=> this.props.router.push("/")}>
              <span>Back to main  </span>
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </div>

  			</div>
      </div>
      </div>
		);
  }

}

const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUserId),
    errors: state.session.errors
  };
};

const mapDispatchToProps = (dispatch, state) => {
  const pathname = state.location.pathname;
  const formType = (pathname.substring(0,1) === '/') ? pathname.slice(1) : pathname ;
  const processForm = (formType === 'login') ? login : signup;

  return {
    clearErrors: () => dispatch(clearErrors()),
    processForm: user => dispatch(processForm(user)),
    formType: formType
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
