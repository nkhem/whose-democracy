import React from 'react';

const ALL_STATES =  ['AK', 'AL', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VA', 'VT', 'WA', 'WI', 'WV', 'WY'];

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    };
    this.update = this.update.bind(this);
    this.renderStateAbbrevOptions = this.renderStateAbbrevOptions.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  renderStateAbbrevOptions(){
    return ALL_STATES.map( stateAbbrev => {
      return (
        <option
          key={stateAbbrev}
          value={stateAbbrev}
          >
          {stateAbbrev}
        </option>
      );
    });
  }

  render(){
    return (
      <div className='search-bar' id={this.props.id}>
        <h3>Find Senator by state abbrev</h3>
        <form onSubmit={ e => this.props.handleSubmit(this.state.searchTerm)(e) }>

        <select value={this.state.searchTerm} onChange={this.update('searchTerm')}>
          <option value=''>--</option>
          {this.renderStateAbbrevOptions()}
        </select>
          <button>
            <i className="fa fa-search" aria-hidden="true"></i>search
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;

// <input
//   type="text"
//   placeholder="Find Senator by state abbrev"
//   autoComplete="off"
//   value={this.state.searchTerm}
//    }
// />
