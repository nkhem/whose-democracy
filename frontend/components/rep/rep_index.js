import React from 'react';
import RepIndexDetail from './rep_index_detail';

const RepIndex = ({searchResults, renderFollowBtn}) => (
  <div className='rep-index'>
    {searchResults.map(repData => (
      <RepIndexDetail
        key={repData.id}
        rep={repData}
        renderFollowBtn={renderFollowBtn}
        />
    ))}
  </div>
);


export default RepIndex;
