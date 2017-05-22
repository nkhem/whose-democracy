import React from 'react';

class SelectRepForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      representatives: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
  		e.preventDefault();
      // console.log('handling submit, this.state:', this.state);
      console.log(this.state);
  		// this.props.processSelectRepForm(this.state);

      // this.setState({
      //   street_address: '',
      //   city: '',
      //   state_abbrev: '',
      //   zip_code: '',
      // });
	}

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return (
			<form
        className='select-reps-form'
        onSubmit={this.handleSubmit} id="user-address-form">

        <input
          type='text'
					value={this.state.representatives}
					onChange={this.update("representatives")}
          placeholder='representatives'
          />


        <input className='submit-btn' type="submit" value='Write them!' />
  		</form>
		);
  }

}

export default SelectRepForm;
