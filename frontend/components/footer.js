import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div className='footer' id={this.props.id}>
        <a href="https://github.com/nkhem/whose-democracy" target="_blank">
          <i className="fa fa-github" aria-hidden="true"></i>
        </a>
        <a href="https://www.linkedin.com/in/nkhem/" target="_blank">
          <i className="fa fa-linkedin-square" aria-hidden="true"></i>
        </a>
      </div>
    );
  }

}

export default Footer;
