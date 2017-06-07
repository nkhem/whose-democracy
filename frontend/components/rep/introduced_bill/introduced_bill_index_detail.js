import React from 'react';

const IntroducedBillIndexDetail = ({introducedBill, className}) => (
  <li className={className}>
    {introducedBill.introduced_date}:
    <a href={introducedBill.congressdotgov_url}>
      <h3>Introduced bill {introducedBill.number}</h3>
      <p>{introducedBill.title}</p>
    </a>
  </li>
);

export default IntroducedBillIndexDetail;
