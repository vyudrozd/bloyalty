import cx from 'classnames';
import React from 'react';
import { useRef } from 'react/cjs/react.production.min';
import s from './Input.styl';

const Input = ({
  id,
  callback,
  inputWrapClass,
  className,
  disabled,
  placeholder,
  type,
  meta: {
    touched, error, active, form,
  } = {},
  input: {
    value = '', onChange, onBlur, onFocus, name,
  } = {},
}) => {
  const inputRef = useRef(null);
  const handleChange = e => {
    if (onChange) onChange(e);
    if (callback) callback(e);
  };

  const classes = cx(s.input, disabled && s.disabled, className);

  const inputProps = {
    className: classes,
    onChange: handleChange,
    placeholder,
    id,
    onBlur,
    onFocus,
    name,
    value,
    type,
    ref: inputRef,
  };
  return (
    <div className={cx(s.inputWrap, inputWrapClass)}>
      <input {...inputProps} />
      {error && touched && <span className={s.error}>{error}</span>}
    </div>
  );
};

export default Input;
