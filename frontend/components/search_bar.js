import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    };
    this.update = this.update.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render(){
    return (
      <div className='search-bar' id={this.props.id}>
        <form onSubmit={ e => this.props.handleSubmit(this.state.searchTerm)(e) }>
          <input
            type="text"
            placeholder="Find Senator by state abbrev"
            autoComplete="off"
            value={this.state.searchTerm}
            onChange={ this.update('searchTerm') }
          />
          <button>
            <i className="fa fa-search" aria-hidden="true"></i>search
          </button>
        </form>
      </div>
    );
  }

}


export default SearchBar;
