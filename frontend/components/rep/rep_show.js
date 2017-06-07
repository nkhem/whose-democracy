import React from 'react';
import { withRouter } from 'react-router';

import PressReleaseIndex from './press_release/press_release_index';
import VotePositionIndex from './vote_position/vote_position_index';
import IntroducedBillIndex from './introduced_bill/introduced_bill_index';
import TopContributorIndex from './top_contributor/top_contributor_index';
import RepNewsFeed from './rep_news_feed';
import * as CongressApiRepUtil from '../../util/congress_api/rep_util';

class RepShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      officialMemberId: props.params.officialMemberId,
      repData: {},
      pressReleases: [],
      votePositions: [],
      introducedBills: [],
      topContributors: []
    };
  }

  componentWillMount() {
    const nextState = Object.assign({}, this.state);

    const receiveRepDataAndTopContributors = CongressApiRepUtil
      .fetchIndividualRepData(this.state.officialMemberId)
      .then( repDataRes => {
        Object.assign(nextState, {repData: repDataRes.results[0]});
        const crpId = repDataRes.results[0].crp_id;
        console.log('crpId',crpId);
        CongressApiRepUtil
          .fetchIndividualRepTopContributors(crpId)
          .then( topContributorsRes => {
            const topContributors = JSON.parse(topContributorsRes).response.contributors.contributor.map(contributor => contributor['@attributes']);
            Object.assign(nextState, { topContributors });
          });
      });

    const receivePressReleases = CongressApiRepUtil
      .fetchIndividualRepRecentPressReleases(this.state.officialMemberId)
      .then( res => {
        Object.assign(nextState, {pressReleases: res.results.slice(0, 10)});
      });

    const receiveVotePositions = CongressApiRepUtil
      .fetchIndividualRepVotePositions(this.state.officialMemberId)
      .then( res => {
        Object.assign(nextState, {votePositions: res.results[0].votes.slice(0, 10)});
      });

    const receiveIntroducedBills = CongressApiRepUtil
      .fetchIndividualRepIntroducedBills(this.state.officialMemberId)
      .then( res => {
        Object.assign(nextState, {introducedBills: res.results[0].bills.slice(0, 10)});
      });


    Promise.all([
      receiveRepDataAndTopContributors,
      receivePressReleases,
      receiveVotePositions,
      receiveIntroducedBills
    ]).then( () => { this.setState(nextState); });
  }

  render() {
    console.log('this.state',this.state);
    return (
      <div className='rep-show'>
        <div className='rep-show-rep-data'>
          <h2>Name: {this.state.repData.first_name} {this.state.repData.last_name}</h2>
          <p>crp_id: {this.state.repData.crp_id}</p>
          <p>cspan_id: {this.state.repData.cspan_id}</p>
          <p>govtrack_id: {this.state.repData.govtrack_id}</p>
          <p>icpsr_id: {this.state.repData.icpsr_id}</p>
          <p>votesmart_id: {this.state.repData.votesmart_id}</p>
        </div>

        <RepNewsFeed
          pressReleases={this.state.pressReleases}
          votePositions={this.state.votePositions}
          introducedBills={this.state.introducedBills}
          />

        <TopContributorIndex topContributors={this.state.topContributors} />
        <PressReleaseIndex pressReleases={this.state.pressReleases} />
        <VotePositionIndex votePositions={this.state.votePositions} />
        <IntroducedBillIndex introducedBills={this.state.introducedBills} />
      </div>
    );
  }

}

export default withRouter(RepShow);
