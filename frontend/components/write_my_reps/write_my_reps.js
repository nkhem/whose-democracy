import React from 'react';
import { connect } from 'react-redux';
import LocationForm from './location_form';

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
      phone_number: ''

    };
    this.processLocationForm = this.processLocationForm.bind(this);
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
      phone_number: ''

    });
	}

  processLocationForm(addressData){
    let nextLocalState = this.state;
    Object.assign(nextLocalState, addressData);
    console.log('nextLocalState:', nextLocalState);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return (
      <div>
        <h2>Write Your Representatives</h2>
        <LocationForm
          processLocationForm={this.processLocationForm}
        />
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
