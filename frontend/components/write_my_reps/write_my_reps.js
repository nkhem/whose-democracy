import React from 'react';
import { connect } from 'react-redux';
import LocationForm from './location_form';
import SelectRepsForm from './select_reps_form';

import { fetchAllMembers } from '../../util/congress_api/member_data';

class WriteMyReps extends React.Component {
  constructor(props){
    super(props);
    this.state = {

      street_address: '',
      city: '',
      state_abbrev: '',
      zip_code: '',

      f_name: '',
      l_name: '',
      prefix: '',
      email: '',
      phone_number: '',

      email_recipients: '',
      email_subject: '',
      email_body: '',
      email_privacy_setting: ''

    };

    this.usersReps = ['Rep. Anna Eshoo', 'Sen. Dianne Feinstein', 'Sen. Kamala Harris'];
    this.currentForm = 'location-form';
    this.processLocationForm = this.processLocationForm.bind(this);
    this.processSelectRepsForm = this.processSelectRepsForm.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount(){
    this.props.fetchAllMembers().then( res => {console.log(res);});
  }

  handleSubmit(e) {
		e.preventDefault();
		this.props.processForm({user: this.state})
      .then( () => this.redirectIfLoggedIn() );

    this.setState({
      street_address: '',
      city: '',
      state_abbrev: '',
      zip_code: '',

      f_name: '',
      l_name: '',
      prefix: '',
      email: '',
      phone_number: '',

      email_recipients: [],
      email_subject: '',
      email_body: '',
      email_privacy_setting: ''
    });
	}

  processLocationForm(addressData){
    let nextLocalState ;
    this.currentForm = 'select-reps-form';
    this.setState(Object.assign(this.state, addressData));
    console.log(this.state);
  }

  processSelectRepsForm(selectedReps){
    console.log('about to processSelectRepsForm, this.state:', this.state);
    let nextLocalState = Object.assign(this.state, {email_recipients: selectedReps});
    this.currentForm = 'compose-email-form';
    this.setState(nextLocalState);

  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  renderForm(){
    if (this.currentForm === 'location-form') {
      return (
        <LocationForm
          processLocationForm={this.processLocationForm}
        />
      );
    } else if (this.currentForm === 'select-reps-form') {
      return (
        <SelectRepsForm
          processSelectRepsForm={this.processSelectRepsForm}
          usersReps={this.usersReps}
        />
      );
    } else if (this.currentForm === 'compose-email-form') {
      return <p>compose-email-form</p>;
    }
  }

  render() {
    return (
      <div>
        <h2>Write Your Representatives</h2>
        {this.renderForm()}
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
    fetchAllMembers: user => dispatch(fetchAllMembers(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WriteMyReps);
