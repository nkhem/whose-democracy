import React from 'react';

class SelectRepsCheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: true
    };
    this.toggleCheckboxChange = this.toggleCheckboxChange.bind(this);
  }

  toggleCheckboxChange(){
  const { handleCheckboxChange } = this.props;

  this.setState({
    isChecked: !this.state.isChecked,
  });

  handleCheckboxChange(this.props.rep);
}

  render() {
    return (
      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            value={this.props.rep}
            checked={this.state.isChecked}
            onChange={this.toggleCheckboxChange}
          />

          {this.props.rep}
        </label>
      </div>
    );
  }

}

export default SelectRepsCheckBox;
