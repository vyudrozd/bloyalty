import cx from 'classnames';
import React from 'react';
import s from './Grid.styl';

const handleGridCountClassName = (media, size) => {
  if (typeof size === 'string' && size.split('-').length === 2) {
    const splitted = size.split('-');

    return s[`col-${media}-${splitted[0]}-${splitted[1]}`];
  }
  return s[`col-${media}-${size}-12`];
};

/**
 * колонка сетки
 * @size если size принимает строку типа "2-10", то размер считается по 10ти колоночной сетке
 */
const Col = ({
  children, variant = 'div', size = 12, sizeL, sizeT, sizeM, className,
}) => {
  const classes = cx(
    s.col,
    s[`col-${size}`],
    sizeL && handleGridCountClassName('laptop', sizeL),
    sizeT && handleGridCountClassName('tablet', sizeT),
    sizeM && handleGridCountClassName('mobile', sizeM),
    className,
  );

  return React.createElement(variant, { className: classes }, children);
};

export default Col;
