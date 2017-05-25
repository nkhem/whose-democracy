import React from 'react';

import * as CongressApiRepUtil from '../util/congress_api/rep_util';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    };
  }
  componentWillMount(){
    CongressApiRepUtil.fetchSenatorsByState('CA').then( res => {
      console.log('cwm', res);
      // this.setState({ allSenators: res.senators });
    });

  }

  render() {
    return (
			<form className='search-bar'>

  		</form>
    );
  }

}


export default SearchBar;
