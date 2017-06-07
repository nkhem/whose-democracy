import React from 'react';

const VotePositionIndexDetail = ({votePosition, className}) => (
  <li  className={className}>
    <p>{votePosition.date}:</p>
    <h3>Cast Vote</h3>
    <p>Question: {votePosition.question}</p>
    <p>Description: {votePosition.description}</p>
    <p>Position: {votePosition.position}</p>
    <br />
  </li>
);

export default VotePositionIndexDetail;
