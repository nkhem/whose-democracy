import React from 'react';
import SelectRepsCheckBox from './select_reps_checkbox';

class SelectRepsForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedReps: props.usersReps
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
  		e.preventDefault();
      // console.log('handling submit, this.state:', this.state);
      console.log(this.state);
  		// this.props.processSelectRepsForm(this.state);

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

  handleCheckboxChange(rep){
    console.log('toggle',rep);
  }

  render() {
    return (
			<form
        className='select-reps-form'
        onSubmit={this.handleSubmit} id="user-address-form">

        { this.props.usersReps.map(rep => <SelectRepsCheckBox rep={rep} key={rep} handleCheckboxChange={this.handleCheckboxChange}/>)}

        <input className='submit-btn' type="submit" value='Write them!' />
  		</form>
    )
  }

}

export default SelectRepsForm;
