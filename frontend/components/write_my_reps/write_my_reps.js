import React from 'react';
import { connect } from 'react-redux';
import LocationForm from './location_form';
import SelectRepsForm from './select_reps_form';

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
    this.renderForm = this.renderForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    let nextLocalState = this.state;
    this.currentForm = 'select-reps-form';
    this.setState(Object.assign(nextLocalState, addressData));

    console.log('processLocationForm, this.state:', this.state);
  }

  processSelectRepsForm(selectedReps){
    let nextLocalState = this.state;
    this.currentForm = 'compose-email-form';
    this.setState(Object.assign(nextLocalState, {email_recipients: selectedReps}));
    console.log('processSelectRepsForm, this.state:', this.state);

  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  renderForm(){
    if (this.currentForm === 'location-form') {
      console.log('this.currentForm === location-form');
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
    processForm: user => dispatch(processForm(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WriteMyReps);
