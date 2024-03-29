import cx from 'classnames';
import React from 'react';
import s from './Spinner.styl';

const colors = {
  red: '#f21827',
  blue: '#016FFF',
  white: '#fff',
};

const Spinner = ({ className, size = 32, color = '#d6d6d6' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" className={cx(s.icon, className)}>
    <circle
      cx="50"
      cy="50"
      r="32"
      strokeWidth="8"
      stroke={color}
      strokeDasharray="50.26548245743669 50.26548245743669"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);

export default Spinner;
