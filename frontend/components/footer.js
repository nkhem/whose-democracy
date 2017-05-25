import React from 'react';
require('../../.env').load();
class Footer extends React.Component {

  render() {
    console.log('process.env.CONGRESS_API_KEY',process.env.CONGRESS_API_KEY);

    return (
      <div className='footer' id={this.props.id}>
        <a href="https://github.com/nkhem/gulp" target="_blank">
          <i className="fa fa-github" aria-hidden="true"></i> github
        </a>
        <a href="https://www.linkedin.com/in/nkhem/" target="_blank">
          <i className="fa fa-linkedin-square" aria-hidden="true"></i> linkedin
        </a>
      </div>
    );
  }

}

export default Footer;
