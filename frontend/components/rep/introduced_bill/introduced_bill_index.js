import React from 'react';
import IntroducedBillIndexDetail from './introduced_bill_index_detail';

class IntroducedBillIndex extends React.Component {

  renderIntroducedBillIndexDetails(introducedBills){
    return introducedBills.map( introducedBill => {
      if(introducedBill.title) {
        return <IntroducedBillIndexDetail
          key={introducedBill.number}
          introducedBill={introducedBill}
          />;
      } else {
        return null;
      }
    });
  }

  render() {
    return (
      <div className='introduced-bill-index'>
        <h2>Bills Introduced:</h2>
        <ul>
          {this.renderIntroducedBillIndexDetails(this.props.introducedBills)}
        </ul>
      </div>
    );
  }

}

export default IntroducedBillIndex;
