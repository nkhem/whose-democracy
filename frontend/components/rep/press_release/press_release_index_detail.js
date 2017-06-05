import React from 'react';

const PressReleaseIndexDetail = ({pressRelease}) => (
  <li>
    {pressRelease.date}: 
    <a href={pressRelease.url}>{pressRelease.title}</a>
  </li>
);

export default PressReleaseIndexDetail;
