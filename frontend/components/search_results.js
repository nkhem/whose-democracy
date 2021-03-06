import React from 'react';

import * as CongressApiRepUtil from '../util/congress_api/rep_util';
import RepIndex from './rep/rep_index';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      searchTerm: []
    };
    this.renderFollowBtn = this.renderFollowBtn.bind(this);
  }

  componentWillReceiveProps(nextProps){

    let shouldRerenderSearchResults = (
      nextProps.searchResults.length !== this.props.searchResults.length || (
        nextProps.searchResults.length > 0 &&
        this.props.searchResults.length > 0 &&
        nextProps.searchResults[0].name !== this.props.searchResults[0].name
      )
    );

    if (shouldRerenderSearchResults) {
      const nextState = {
        searchResults: nextProps.searchResults
      };
      this.setState(nextState);
    }
  }

  renderFollowBtn(officialMemberId){
    if (this.props.loggedIn) {
      return (
        <button
          className="follow-btn"
          onClick={ () => {this.props.followRep(officialMemberId);} }>
          Follow
        </button>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
			<div className='search-results'>
        <RepIndex
          searchResults={this.state.searchResults}
          renderFollowBtn={this.renderFollowBtn}
          />
  		</div>
    );
  }

}


export default SearchResults;
