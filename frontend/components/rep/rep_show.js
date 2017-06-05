import React from 'react';
import { withRouter } from 'react-router';

import PressReleaseIndex from './press_release/press_release_index';
import VotePositionIndex from './vote_position/vote_position_index';
import * as CongressApiRepUtil from '../../util/congress_api/rep_util';

class RepShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      officialMemberId: props.params.officialMemberId,
      repData: {},
      pressReleases: [],
      votePositions: []
    };
  }

  componentWillMount() {
    CongressApiRepUtil
      .fetchIndividualRepData(this.state.officialMemberId)
      .then( res => {
        this.setState({
          officialMemberId: this.state.officialMemberId,
          repData: res.results[0],
          pressReleases: this.state.pressReleases,
          votePositions: this.state.votePositions
        });
      });

    CongressApiRepUtil
      .fetchIndividualRepRecentPressReleases(this.state.officialMemberId)
      .then( res => {
        this.setState({
          officialMemberId: this.state.officialMemberId,
          repData: this.state.repData,
          pressReleases: res.results.slice(0, 10),
          votePositions: this.state.votePositions
        });
      });

    CongressApiRepUtil
      .fetchIndividualRepVotePositions(this.state.officialMemberId)
      .then( res => {
        console.log(res);
        this.setState({
          officialMemberId: this.state.officialMemberId,
          repData: this.state.repData,
          pressReleases: this.state.pressReleases,
          votePositions: res.results[0].votes.slice(0, 10)
        });
      });
  }

  render() {
    return (
      <div className='rep-show'>
        <div className='rep-show-rep-data'>
          <h2>Name: {this.state.repData.first_name} {this.state.repData.last_name}</h2>
          <p>cspan_id: {this.state.repData.cspan_id}</p>
          <p>govtrack_id: {this.state.repData.govtrack_id}</p>
          <p>icpsr_id: {this.state.repData.icpsr_id}</p>
          <p>votesmart_id: {this.state.repData.votesmart_id}</p>
        </div>
        <PressReleaseIndex pressReleases={this.state.pressReleases} />
        <VotePositionIndex votePositions={this.state.votePositions} />
      </div>
    );
  }

}

export default withRouter(RepShow);
