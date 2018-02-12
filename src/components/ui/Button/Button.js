import React from 'react';

import classes from './Button.css';

const button = (props) => (
  <button
    disabled={props.disabled}
    className={[classes.Button, classes[props.btnType]].join(' ')}
    onClick={props.clicked}>
      {props.label || 'OK'}
  </button>
);

export default button;
