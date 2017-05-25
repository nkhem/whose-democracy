import React from 'react';
import CheckBox from '../checkbox';

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
      checkedReps: initialCheckedReps
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('handlesubmit',this.state);
		this.props.processSelectRepsForm(this.state);
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

  renderCheckbox(rep){
    return (
      <CheckBox
        label={rep}
        key={rep}
        checked={this.state.checkedReps.includes(rep)}
        handleCheckboxChange={this.handleCheckboxChange}/>
    );
  }

  renderCheckboxes(){
    return this.props.usersReps.map(rep => this.renderCheckbox(rep));
  }

  render() {
    return (
			<form
        className='select-reps-form'
        onSubmit={this.handleSubmit} id="user-checkreps-form">

        {this.renderCheckboxes()}

        <input className='submit-btn' type="submit" value='Write them!' />
  		</form>
    );
  }

}

export default SelectRepsForm;
