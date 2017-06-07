import React from 'react';

const TopContributorIndexDetail = ({topContributor, className}) => (
  <li className={className}>
    <h3>Organization Name: {topContributor.org_name}</h3>
    <p>Total donations from individuals employed by org or their immediate family member: ${topContributor.indivs}</p>
    <p>Total donations from organizations PACs: ${topContributor.pacs}</p>
    <p>Total: ${topContributor.total}</p>
  </li>
);

export default TopContributorIndexDetail;
