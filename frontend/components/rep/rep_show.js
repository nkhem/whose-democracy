import React from 'react';
import { withRouter } from 'react-router';

import PressReleaseIndex from './press_release/press_release_index';
import VotePositionIndex from './vote_position/vote_position_index';
import IntroducedBillIndex from './introduced_bill/introduced_bill_index';
import * as CongressApiRepUtil from '../../util/congress_api/rep_util';

class RepShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      officialMemberId: props.params.officialMemberId,
      repData: {},
      pressReleases: [],
      votePositions: [],
      introducedBills: []
    };
  }

  componentWillMount() {
    let nextState = Object.assign({}, this.state);

    let receiveRepData = CongressApiRepUtil
      .fetchIndividualRepData(this.state.officialMemberId)
      .then( res => {
        Object.assign(nextState, {repData: res.results[0]});
      });

    let receivePressReleases = CongressApiRepUtil
      .fetchIndividualRepRecentPressReleases(this.state.officialMemberId)
      .then( res => {
        Object.assign(nextState, {pressReleases: res.results.slice(0, 10)});
      });

    let receiveVotePositions = CongressApiRepUtil
      .fetchIndividualRepVotePositions(this.state.officialMemberId)
      .then( res => {
        Object.assign(nextState, {votePositions: res.results[0].votes.slice(0, 10)});
      });

    let receiveIntroducedBills = CongressApiRepUtil
      .fetchIndividualRepIntroducedBills(this.state.officialMemberId)
      .then( res => {
        Object.assign(nextState, {introducedBills: res.results[0].bills.slice(0, 10)});
      });

    Promise.all([
      receiveRepData,
      receivePressReleases,
      receiveVotePositions,
      receiveIntroducedBills
    ]).then( () => { this.setState(nextState); });
  }

  render() {
    console.log('this.state', this.state);
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
        <IntroducedBillIndex introducedBills={this.state.introducedBills} />
      </div>
    );
  }

}

export default withRouter(RepShow);
