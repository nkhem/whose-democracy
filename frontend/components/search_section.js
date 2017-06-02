import React from 'react';
import { connect } from 'react-redux';

import { logout } from '../actions/session_actions';
import { followRep } from '../actions/following_actions';
import * as CongressApiRepUtil from '../util/congress_api/rep_util';
import * as FollowingUtil from '../util/following_api_util';

import Header from './header/header';
import SearchBar from './search_bar';
import SearchResults from './search_results';

class SearchSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchSearchResults = this.fetchSearchResults.bind(this);
  }

  fetchSearchResults(searchType, searchCriteria){
    if (searchType === 'findSenatorsByLocationSearchCriteria') {
      return CongressApiRepUtil.fetchSenatorsByState(searchCriteria.stateAbbrev);
    } else if (searchType === 'findHouseRepByLocationSearchCriteria') {
      console.log('send ', searchCriteria, 'to SmartyStreets');
    }
  }

  handleSubmit(searchType, searchCriteria){
    return e => {
      console.log('searchType',searchType);
      console.log('searchCriteria',searchCriteria);
      e.preventDefault();
        return this.fetchSearchResults(searchType, searchCriteria).then( res => {
          console.log('fetched res:', res);
          this.setState({
            searchResults: res.results
          });
        });
      };
  }

  render() {
    return (
      <div id='home' className='main-content'>
        <Header
          loggedIn={this.props.loggedIn}
          logout={ this.props.logout } />
        <h1>Whose Democracy</h1>
        <SearchBar
          handleSubmit={this.handleSubmit}
        />
        <SearchResults
          searchResults={this.state.searchResults}
          followRep={FollowingUtil.followRep}
          loggedIn={this.props.loggedIn}
        />
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.session.errors
  };
};

const mapDispatchToProps = (dispatch, state) => {
  return {
    logout: () => dispatch(logout()),
    followRep: officialMemberId => dispatch(followRep(officialMemberId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchSection);
