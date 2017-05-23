import React from 'react';
import SelectRepsCheckBox from './select_reps_checkbox';

class SelectRepsForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      checkedReps: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.uncheckRep = this.uncheckRep.bind(this);
    this.checkRep = this.checkRep.bind(this);
  }

  componentDidMount(){
    const initialCheckedReps = Object.assign([], this.props.usersReps);
    //this is where API GET request will go
    this.setState({
      uncheckedReps: [],
      checkedReps: initialCheckedReps
    });
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
    if (this.state.checkedReps.includes(rep)) {
      this.uncheckRep(rep);
    } else {
      this.checkRep(rep);
    }
  }

  uncheckRep(rep){
    let nextCheckedReps = this.state.checkedReps.filter(checkedRep => checkedRep !== rep);
    this.setState({ checkedReps: nextCheckedReps });
  }

  checkRep(rep){
    let nextCheckedReps = this.state.checkedReps.concat(rep);
    this.setState({ checkedReps: nextCheckedReps });
  }

  render() {
    return (
			<form
        className='select-reps-form'
        onSubmit={this.handleSubmit} id="user-checkress-form">

        { this.props.usersReps.map(rep => <SelectRepsCheckBox
          rep={rep}
          key={rep}
          checked={this.state.checkedReps.includes(rep)}
          handleCheckboxChange={this.handleCheckboxChange}/>)}

        <input className='submit-btn' type="submit" value='Write them!' />
  		</form>
    )
  }

}

export default SelectRepsForm;
