import React from 'react';
import { withRouter } from 'react-router';

import * as CongressApiRepUtil from '../../util/congress_api/rep_util';

class RepShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      officialMemberId: props.params.officialMemberId,
      repData: {}
    };
  }

  componentWillMount() {
    CongressApiRepUtil
      .fetchIndividualRepData(this.state.officialMemberId)
      .then( res => {
        this.setState({
          officialMemberId: this.state.officialMemberId,
          repData: res.results[0]
        });
      });
  }

  render() {
    return (
      <div className='rep-show'>
        <h2>Name: {this.state.repData.first_name} {this.state.repData.last_name}</h2>
        <p>cspan_id: {this.state.repData.cspan_id}</p>
        <p>govtrack_id: {this.state.repData.govtrack_id}</p>
        <p>icpsr_id: {this.state.repData.icpsr_id}</p>
        <p>votesmart_id: {this.state.repData.votesmart_id}</p>
      </div>
    );
  }

}

export default withRouter(RepShow);
