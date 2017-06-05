import React from 'react';

const ALL_STATES =  ['AK', 'AL', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VA', 'VT', 'WA', 'WI', 'WV', 'WY'];

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      findSenatorsByLocationSearchCriteria: {
        stateAbbrev: ''
      },
      findHouseRepByLocationSearchCriteria: {
        streetAddress: '',
        stateAbbrev: '',
        cityName: ''
      }
    };
    this.update = this.update.bind(this);
    this.renderStateAbbrevOptions = this.renderStateAbbrevOptions.bind(this);
  }

  update(searchType, searchField) {
    return e => {
      let newSearchCriteria = Object.assign(this.state[searchType], {[searchField]: e.currentTarget.value});
      this.setState({
        [searchType]: newSearchCriteria
      });
    };
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
    // console.log('this.state',this.state);
    return (
      <div className='search-bar' id={this.props.id}>
        <h3>Find Senator by state abbrev</h3>
        <form onSubmit={ e => this.props.handleSubmit('findSenatorsByLocationSearchCriteria', this.state.findSenatorsByLocationSearchCriteria)(e) }>

          <select
            value={this.state.findSenatorsByLocationSearchCriteria.stateAbbrev}
            onChange={this.update('findSenatorsByLocationSearchCriteria', 'stateAbbrev')}
            >
            <option value=''>--</option>
            {this.renderStateAbbrevOptions()}
          </select>

          <button>
            <i className="fa fa-search" aria-hidden="true"></i>search
          </button>
        </form>

        <h3>Find HouseRep by address</h3>
        <form onSubmit={ e => this.props.handleSubmit('findHouseRepByLocationSearchCriteria', this.state.findHouseRepByLocationSearchCriteria)(e) }>
          <select
            value={this.state.findHouseRepByLocationSearchCriteria.stateAbbrev}
            onChange={this.update('findHouseRepByLocationSearchCriteria', 'stateAbbrev')}
            >
            <option value=''>--</option>
            {this.renderStateAbbrevOptions()}
          </select>

          <input
            type='text'
            value={this.state.findHouseRepByLocationSearchCriteria.streetAddress}
            onChange={this.update('findHouseRepByLocationSearchCriteria', 'streetAddress')}
            placeholder='street address' />

          <input
            type='text'
            value={this.state.findHouseRepByLocationSearchCriteria.cityName}
            onChange={this.update('findHouseRepByLocationSearchCriteria', 'cityName')}
            placeholder='cityName' />

          <button>
            <i className="fa fa-search" aria-hidden="true"></i>search
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
