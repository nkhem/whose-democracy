import React from 'react';
import PressReleaseIndexDetail from './press_release_index_detail';

class PressReleaseIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  renderPressReleaseIndexDetails(pressReleases){
    return pressReleases.map( pressRelease => {
      return <PressReleaseIndexDetail
        key={pressRelease.title}
        pressRelease={pressRelease}
        />;
    });
  }

  render() {
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
