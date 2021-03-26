import cx from 'classnames';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.styl';

const modalRoot = document.getElementById('app_modal');

const Modal = ({
  className,
  show,
  closeModal,
  children,
} = {}) => {
  const [modalEl] = useState(document.createElement('div'));

  useEffect(() => {
    modalRoot.appendChild(modalEl);

    return () => modalRoot.removeChild(modalEl);
  }, [show, modalEl]);

  if (!show) return null;
  return createPortal(
    <>
      <div className={cx(s.modalWrap, className)}>
        {children}
      </div>
      <div className={s.closeField} onClick={closeModal} />
    </>, modalEl,
  );
};

export default Modal;
