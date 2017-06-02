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
    if (nextProps.searchTerm !== this.props.searchTerm) {
      const nextState = {
        searchTerm: nextProps.searchTerm,
        searchResults: nextProps.searchResults
      };
      this.setState(nextState);
    }
  }

  renderFollowBtn(officialMemberId){
    console.log('inside renderFollowBtn, this.props.followRep', this.props.followRep);
    console.log('inside renderFollowBtn, officialMemberId', officialMemberId);
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
