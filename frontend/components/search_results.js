import React from 'react';

import * as CongressApiRepUtil from '../util/congress_api/rep_util';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: []
    };
  }

  render() {
    console.log('SearchResults#render, this.props.searchResults:', this.props.searchResults);
    return (
			<div className='search-results'>

  		</div>
    );
  }

}


export default SearchResults;
