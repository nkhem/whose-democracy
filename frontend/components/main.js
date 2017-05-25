import React from 'react';
import { connect } from 'react-redux';

import { logout } from '../actions/session_actions';
import { followRep } from '../actions/following_actions';
import * as CongressApiRepUtil from '../util/congress_api/rep_util';

import Header from './header/header';
import SearchBar from './search_bar';
import SearchResults from './search_results';

class Main extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
      searchTerm: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchSearchResults = this.fetchSearchResults.bind(this);
  }

  fetchSearchResults(searchTerm){
    return CongressApiRepUtil.fetchSenatorsByState(searchTerm);
  }

  handleSubmit(searchTerm){
    return e => {
      e.preventDefault();
      this.fetchSearchResults(searchTerm).then( res => {
        this.setState({
          searchTerm: searchTerm,
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
          followRep={this.state.followRep}
          searchTerm={this.state.searchTerm}
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);
