import React from 'react';
import RepIndexDetail from './rep_index_detail';
import { withRouter } from 'react-router';

const RepIndex = ({searchResults, renderFollowBtn, router}) => (
  <div className='rep-index'>
    {searchResults.map(repData => (
      <RepIndexDetail
        key={repData.id}
        rep={repData}
        renderFollowBtn={renderFollowBtn}
        router={router}
        />
    ))}
  </div>
);


export default withRouter(RepIndex);
