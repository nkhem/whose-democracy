import React from 'react';

const RepIndexDetail = ({renderFollowBtn, rep, router}) => (
  <li className='rep-index-detail' onClick={() => {redirectToRepShowPg(rep, router);}}>
    <h2>Name: {rep.name}</h2>
    <p>Role: {rep.role}</p>
    <p>Party: {rep.party}</p>
    {renderFollowBtn(rep.id)}
  </li>
);

const redirectToRepShowPg = (rep, router) => {
  let officialMemberId = rep.id;
  router.replace(`/legislator/${officialMemberId}`);
};


export default RepIndexDetail;
