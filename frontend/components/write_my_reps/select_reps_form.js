import React from 'react';
import SelectRepsCheckBox from './select_reps_checkbox';

class SelectRepsForm extends React.Component {
  constructor(props){
    super(props);
    let firstSelectedReps = props.usersReps;
    this.state = {
      unselectedReps: [],
      selectedReps: firstSelectedReps
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.uncheckRep = this.uncheckRep.bind(this);
    this.checkRep = this.checkRep.bind(this);
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
    console.log('in handleCheckboxChange, selectedReps', this.state.selectedReps);
    if (this.state.selectedReps.includes(rep)) {
      this.uncheckRep(rep);
    } else {
      this.checkRep(rep);
    }
  }

  uncheckRep(rep){
    let nextSelectedReps = this.state.selectedReps.filter(selectedRep => selectedRep !== rep);
    console.log('nextSelectedReps',nextSelectedReps);
    let nextUnselectedReps = this.state.unselectedReps.push(rep);
    this.setState({
      unselectedReps: nextUnselectedReps,
      selectedReps: nextSelectedReps,
    });
    console.log('unchecked rep', rep, this.state);
  }

  checkRep(rep){
    console.log(this.state.unselectedReps);
    console.log(this.state.selectedReps);
    let nextUnselectedReps = this.state.unselectedReps.filter(unselectedRep => unselectedRep !== rep);
    let nextSelectedReps = this.state.selectedReps.push(rep);
    this.setState({
      selectedReps: nextSelectedReps,
      unselectedReps: nextUnselectedReps
    });
    console.log('unchecked rep', rep, this.state);
  }

  render() {
    return (
			<form
        className='select-reps-form'
        onSubmit={this.handleSubmit} id="user-checkress-form">

        { this.props.usersReps.map(rep => <SelectRepsCheckBox
          rep={rep}
          key={rep}
          checked={this.state.selectedReps.includes(rep)}
          handleCheckboxChange={this.handleCheckboxChange}/>)}

        <input className='submit-btn' type="submit" value='Write them!' />
  		</form>
    )
  }

}

export default SelectRepsForm;
