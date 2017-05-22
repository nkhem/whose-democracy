import React from 'react';
import { connect } from 'react-redux';
import { login, signup } from '../actions/session_actions';

import Header from './header/header';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      f_name: '',
      l_name: '',
      prefix: '',
      email: '',
      phone_number: '',
      street_address: '',
      city: '',
      state_abbrev: '',
      zip_code: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirectIfLoggedIn = this.redirectIfLoggedIn.bind(this);
  }

  handleSubmit(e) {
		e.preventDefault();
		this.props.processForm({user: this.state})
      .then( () => this.redirectIfLoggedIn() );

    this.setState({
      f_name: '',
      l_name: '',
      prefix: '',
      email: '',
      phone_number: '',
      street_address: '',
      city: '',
      state_abbrev: '',
      zip_code: '',
      password: ''
    });
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
    return (
      <div>
        <Header
          hideSessionBtns={ true }
          loggedIn={this.props.loggedIn} />
  			<div className='main-content'>
          <h3>{this.props.formType}</h3>
  				<form onSubmit={this.handleSubmit} id="new-session-form">

  					<input type={`${this.props.formType === 'login' ? 'hidden': 'text'}`}
  						value={this.state.prefix}
  						onChange={this.update("prefix")}
              placeholder='prefix' />

  					<input type={`${this.props.formType === 'login' ? 'hidden': 'text'}`}
  						value={this.state.f_name}
  						onChange={this.update("f_name")}
              placeholder='f_name' />

            <input type={`${this.props.formType === 'login' ? 'hidden': 'text'}`}
  						value={this.state.l_name}
  						onChange={this.update("l_name")}
              placeholder='l_name' />

            <input type={`${this.props.formType === 'login' ? 'hidden': 'text'}`}
  						value={this.state.phone_number}
  						onChange={this.update("phone_number")}
              placeholder='phone_number' />

            <input type={`${this.props.formType === 'login' ? 'hidden': 'text'}`}
  						value={this.state.street_address}
  						onChange={this.update("street_address")}
              placeholder='street_address' />

            <input type={`${this.props.formType === 'login' ? 'hidden': 'text'}`}
  						value={this.state.city}
  						onChange={this.update("city")}
              placeholder='city' />

            <input type={`${this.props.formType === 'login' ? 'hidden': 'text'}`}
  						value={this.state.state_abbrev}
  						onChange={this.update("state_abbrev")}
              placeholder='state_abbrev' />

            <input type={`${this.props.formType === 'login' ? 'hidden': 'text'}`}
  						value={this.state.zip_code}
  						onChange={this.update("zip_code")}
              placeholder='zip_code' />

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
  			</div>
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
  const pathname = state.location.pathname;
  const formType = (pathname.substring(0,1) === '/') ? pathname.slice(1) : pathname ;
  const processForm = (formType === 'login') ? login : signup;

  return {
    processForm: user => dispatch(processForm(user)),
    formType: formType
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
