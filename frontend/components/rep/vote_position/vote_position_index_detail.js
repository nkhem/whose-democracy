import React from 'react';

const VotePositionIndexDetail = ({votePosition}) => (
  <li>
    <p>Date: {votePosition.date}</p>
    <p>Question: {votePosition.question}</p>
    <p>Description: {votePosition.description}</p>
    <p>Position: {votePosition.position}</p>
    <br />
  </li>
);

export default VotePositionIndexDetail;
