import React from 'react';
import VotePositionIndexDetail from './vote_position_index_detail';

class VotePositionIndex extends React.Component {

  renderVotePositionIndexDetails(votePositions){
    return votePositions.map( votePosition => {
      return <VotePositionIndexDetail
        key={votePosition.question}
        votePosition={votePosition}
        />;
    });
  }

  render() {
    return (
      <div className='vote-position-index'>
        <h2>Vote Positions:</h2>
        <ul>
          {this.renderVotePositionIndexDetails(this.props.votePositions)}
        </ul>
      </div>
    );
  }

}

export default VotePositionIndex;
