import React from 'react';
import TopContributorIndexDetail from './top_contributor_index_detail';

class TopContributorIndex extends React.Component {

  renderTopContributorIndexDetails(topContributors){
    return topContributors.map( topContributor => {
      if(topContributor.org_name) {
        return <TopContributorIndexDetail
          key={topContributor.org_name}
          topContributor={topContributor}
          />;
      } else {
        return null;
      }
    });
  }

  render() {
    return (
      <div className='top-contributor-index'>
        <h2>Top Contributors in most recent cycle:</h2>
        <ol>
          {this.renderTopContributorIndexDetails(this.props.topContributors)}
        </ol>
      </div>
    );
  }

}

export default TopContributorIndex;
