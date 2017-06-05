import React from 'react';
import PressReleaseIndexDetail from './press_release_index_detail';

class PressReleaseIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  renderPressReleaseIndexDetails(pressReleases){
    return pressReleases.map( pressRelease => {
      console.log('pressReleases.map( pressRelease => :', pressRelease);
      return <PressReleaseIndexDetail
        key={pressRelease.title}
        pressRelease={pressRelease}
        />;
    });
  }

  render() {
    console.log('inside PressReleaseIndex, props:', this.props);
    return (
      <div className='press-release-index'>
        <h2>Press Releases:</h2>
        <ul>
          {this.renderPressReleaseIndexDetails(this.props.pressReleases)}
        </ul>
      </div>
    );
  }

}

export default PressReleaseIndex;
