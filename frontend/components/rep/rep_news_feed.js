import React from 'react';
import _ from 'lodash';

import VotePositionIndexDetail from './vote_position/vote_position_index_detail';
import PressReleaseIndexDetail from './press_release/press_release_index_detail';
import IntroducedBillIndexDetail from './introduced_bill/introduced_bill_index_detail';

class RepNewsFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allActivitiesSorted: []
    };

    this.sortAllActivitiesByDate = this.sortAllActivitiesByDate.bind(this);
    this.renderNewsFeedIndexDetails = this.renderNewsFeedIndexDetails.bind(this);
  }

  componentWillReceiveProps(nextProps){
    let areActivitiesPresent = nextProps.introducedBills[0] && nextProps.pressReleases[0] && nextProps.votePositions[0];
    let areActivitiesNew = this.props.introducedBills[0] ? nextProps.introducedBills[0].introduced_date !== this.props.introducedBills[0].introduced_date : true;
    let shouldUpdate = areActivitiesPresent && areActivitiesNew;

    if (shouldUpdate) {
      this.sortAllActivitiesByDate(nextProps);
    }
  }

  sortAllActivitiesByDate(nextProps){
    // sort activities by date
    let {
      pressReleases,
      votePositions,
      introducedBills
    } = nextProps;
    let nextActivities = pressReleases.concat(votePositions, introducedBills);
    let allActivitiesSorted = _.sortBy(nextActivities, (activity) => {
      let date = activity.date ? activity.date : activity.introduced_date;
      date.match(/\d+/g).join('');
      return date;
    });
    allActivitiesSorted = _.reverse(allActivitiesSorted);

    // set state
    let nextState = Object.assign({}, { allActivitiesSorted: allActivitiesSorted});
    this.setState(nextState);
  }

  renderNewsFeedIndexDetails(){
    if (this.state.allActivitiesSorted.length > 0) {
      return this.state.allActivitiesSorted.map( activity => {
        let typeOfActivity;
        if (activity.question) {
          typeOfActivity = 'votePosition';
        } else if (activity.introduced_date){
          typeOfActivity = 'introducedBill';
        } else if (activity.statement_type){
          typeOfActivity = 'pressRelease';
        }

        if (typeOfActivity === 'votePosition') {
          return <VotePositionIndexDetail
          className='rep_news_feed_index_detail'
          key={activity.question}
          votePosition={activity}
          />;
        } else if (typeOfActivity === 'introducedBill') {
          return <IntroducedBillIndexDetail
          className='rep_news_feed_index_detail'
          key={activity.number}
          introducedBill={activity}
          />;
        } else if (typeOfActivity === 'pressRelease') {
          return <PressReleaseIndexDetail
          className='rep_news_feed_index_detail'
          key={activity.title}
          pressRelease={activity}
          />;
        }
      });
    } else {
      return null;
    }
  }

  render() {
    return (
      <div className='rep-news-feed'>
        <h2>NEWSFEED:</h2>
        <ul>
        {this.renderNewsFeedIndexDetails()}
        </ul>
      </div>
    );
  }

}

export default RepNewsFeed;
