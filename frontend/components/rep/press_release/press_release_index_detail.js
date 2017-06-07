import React from 'react';

const PressReleaseIndexDetail = ({pressRelease, className}) => (
  <li className={className}>
    {pressRelease.date}:
    <a href={pressRelease.url}>
      <h3>Released statement:</h3>
      <p>{pressRelease.title}</p>
    </a>
  </li>
);

export default PressReleaseIndexDetail;
