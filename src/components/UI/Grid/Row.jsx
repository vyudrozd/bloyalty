import cx from 'classnames';
import React from 'react';

import s from './Grid.styl';

const Row = ({
  children, variant = 'div', nowrap, ref, className,
}) => {
  const classes = cx(s.row, nowrap && s.nowrap, className);

  return React.createElement(variant, { className: classes, ref }, children);
};

export default Row;
