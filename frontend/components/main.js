import React from 'react';
import { connect } from 'react-redux';

import { logout } from '../actions/session_actions';
import * as CongressApiRepUtil from '../util/congress_api/rep_util';

import Header from './header/header';
import SearchBar from './search_bar';
import SearchResults from './search_results';

class Main extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      searchResults: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchSearchResults = this.fetchSearchResults.bind(this);
  }

  fetchSearchResults(searchTerm){
    CongressApiRepUtil.fetchSenatorsByState(searchTerm).then( res => {
      console.log('fetchSearchResults res:',res);
    });
  }

  handleSubmit(e){
    e.preventDefault();
    const searchTerm = e.target.value;
    this.fetchSearchResults(searchTerm);

    // if (cat) {
    //   this.props.fetchBusinessesByCategory(cat)
    //     .then( () => this.props.router.replace(`/search?category='${cat}'`));
    // } else if (biz) {
    //   this.props.fetchBusiness(biz)
    //     .then( res => this.props.router.replace(`/business/${res.business.id}`));
    // } else {
    //   console.log('no matches found');
    // }
  }

  render() {
    return (
      <div id='home' className='main-content'>
        <Header
          loggedIn={this.props.loggedIn}
          logout={ this.props.logout } />
        <h1>Whose Democracy</h1>
        <SearchBar
          handleSubmit={this.handleSubmit}/>
        <SearchResults
          searchResults={this.state.searchResults}/>
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
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
