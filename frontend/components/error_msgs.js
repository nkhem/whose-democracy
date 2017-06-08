import React from 'react';
import _ from 'lodash';

const ErrorMsgs = props => {
  if (props.errors && props.errors.length === 1) {
    return (
      <div className='error-msgs' id={`${props.id}`}>
        {props.errors[0]}
      </div>
    );
  } else if (props.errors && props.errors.length > 1) {
    return (
      <ul className='error-msgs' id={`${props.id}`}>
        {_.map(props.errors, err => <li key={err}>{err}</li>)}
      </ul>
    );
  } else {
    return null;
  }
};

export default ErrorMsgs;
