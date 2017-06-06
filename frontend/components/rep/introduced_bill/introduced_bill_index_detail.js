import React from 'react';

const IntroducedBillIndexDetail = ({introducedBill}) => (
  <li>
    {introducedBill.introduced_date}:
    <a href={introducedBill.congressdotgov_url}>{introducedBill.number}: {introducedBill.title}</a>
  </li>
);

export default IntroducedBillIndexDetail;
