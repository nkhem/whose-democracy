import React from 'react';

import * as CongressApiRepUtil from '../util/congress_api/rep_util';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      searchTerm: []
    };
    this.renderSearchResultDetails = this.renderSearchResultDetails.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.searchTerm !== this.props.searchTerm) {
      const nextState = {
        searchTerm: nextProps.searchTerm,
        searchResults: nextProps.searchResults
      };
      this.setState(nextState);
    }
  }

  renderFollowBtn(officialMemberId){
    return (
      <button
        className="follow-btn"
        onClick={ this.props.followRep(officialMemberId) }>
        Follow
      </button>
    );
  }

  renderSearchResultDetails(){
    return this.state.searchResults.map(res => {
      const officialMemberId = res.id;
      return (
        <li key={`${res.id}`}>
          <h2>Name: {res.name}</h2>
          <p>Role: {res.role}</p>
          <p>Party: {res.party}</p>
          {this.renderFollowBtn(officialMemberId)}
        </li>
      );
    });
  }

  render() {
    return (
			<div className='search-results'>
        {this.renderSearchResultDetails()}
  		</div>
    );
  }

}


export default SearchResults;
