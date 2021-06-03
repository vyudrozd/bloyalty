import cx from 'classnames';
import React, { useState } from 'react';
import { useRef } from 'react/cjs/react.production.min';
import OutsideClickHandler from 'react-outside-click-handler';
import Copy from '../../../../public/static/icons/copy.svg';
import Check from '../../../../public/static/icons/check.svg';
import s from './Input.styl';

const Input = ({
  id,
  callback,
  inputWrapClass,
  className,
  disabled,
  placeholder,
  type,
  copyValue,
  copyStyle,
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

  const [isCopied, setCopied] = useState(false);

  const copyHandler = () => {
    navigator.clipboard.writeText(copyValue)
      .then(() => {
        setCopied(true);
      })
      .catch(err => {
        console.log('Something went wrong', err);
        setCopied(false);
      });
  };

  console.log(error);

  const classes = cx(s.input, disabled && s.disabled, className);

  const inputProps = {
    className: classes,
    onChange: copyStyle ? null : handleChange,
    placeholder,
    id,
    onBlur,
    onFocus,
    name,
    value: value || copyValue,
    type,
    ref: inputRef,
  };
  return (
    <div className={cx(s.inputWrap, copyStyle && s.copyInput, inputWrapClass)}>
      <input {...inputProps} />
      {copyStyle && (
        <OutsideClickHandler onOutsideClick={() => setCopied(false)}>
          <div role="button" tabIndex={0} className={s.copy} onClick={() => copyHandler(copyValue, setCopied())}>
            {isCopied ? <Check /> : <Copy />}
          </div>
        </OutsideClickHandler>
      )}
      {error && touched && <span className={s.error}>{error}</span>}
    </div>
  );
};

export default Input;
