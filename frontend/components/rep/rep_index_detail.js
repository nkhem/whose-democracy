import React from 'react';

const RepIndexDetail = ({renderFollowBtn, rep}) => (
  <li className='rep-index-detail'>
    <h2>Name: {rep.name}</h2>
    <p>Role: {rep.role}</p>
    <p>Party: {rep.party}</p>
    {renderFollowBtn(rep.id)}
  </li>
);


export default RepIndexDetail;
