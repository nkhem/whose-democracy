import React from 'react';
import PressReleaseIndexDetail from './press_release_index_detail';
import { Link } from 'react-router';

class PressReleaseIndex extends React.Component {

  renderPressReleaseIndexDetails(pressReleases){
    return pressReleases.map( pressRelease => {
      if(pressRelease.title) {
        return <PressReleaseIndexDetail
          key={pressRelease.title}
          pressRelease={pressRelease}
          />;
      } else {
        return null;
      }
    });
  }

  render() {
    return (
      <div className='press-release-index'>
        <h2>Press Releases:</h2>
        <ul>
          {this.renderPressReleaseIndexDetails(this.props.pressReleases)}
        </ul>
        <Link to="/legislator/${officialMemberId}/press_releases">See all Press Releases</Link>
      </div>
    );
  }

}

export default PressReleaseIndex;
