import cx from 'classnames';
import React from 'react';
import { useEffect, useState } from 'react/cjs/react.production.min';
import OutsideClickHandler from 'react-outside-click-handler/esm/OutsideClickHandler';
import s from './Select.styl';

const Select = ({ data, title, customControl, onSelect }) => {
  const [hide, setHide] = useState(true);

  return (
    <OutsideClickHandler onOutsideClick={() => setHide(true)}>
      <div className={s.wrap} onClick={() => setHide(!hide)}>
        <div>{title || 'Выбрать...'}</div>
        <div className={cx(s.list, hide && s.hide)}>
          {data.map(text => <div className={s.item} onClick={() => onSelect(text)}>{text}</div>)}
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default Select;
