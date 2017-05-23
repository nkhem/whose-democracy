import React from 'react';

class CheckBox extends React.Component {
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
      isChecked: !this.state.isChecked
    });
    handleCheckboxChange(this.props.label);
  }

  render() {
    return (
      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            value={this.props.label}
            checked={this.state.isChecked}
            onChange={this.toggleCheckboxChange}
          />

          {this.props.label}
        </label>
      </div>
    );
  }

}

export default CheckBox;
