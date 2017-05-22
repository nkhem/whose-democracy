import React from 'react';

class LocationForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      street_address: '',
      city: '',
      state_abbrev: '',
      zip_code: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
		e.preventDefault();
    // console.log('handling submit, this.state:', this.state);
    console.log(this);
		this.props.processLocationForm(this.state);

    this.setState({
      street_address: '',
      city: '',
      state_abbrev: '',
      zip_code: '',
    });
	}

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return (
			<form
        className='location-form'
        onSubmit={this.handleSubmit} id="user-address-form">

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

				<input className='submit-btn' type="submit" value='Find my reps' />
  		</form>
		);
  }

}

export default LocationForm;
