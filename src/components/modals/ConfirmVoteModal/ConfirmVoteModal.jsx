import React from 'react';
import Modal from '../../Modal';
import s from './ConfirmVote.styl';
import Button from '../../UI/Button';

const ConfirmVote = ({
  id, name, setID, onConfirm,
}) => {
  const closeModal = () => setID(null);

  return (
    <Modal className={s.modalWrap} show={id} closeModal={closeModal}>
      <div className={s.top}>
        Подтверждение
      </div>
      <div className={s.contentPart}>
        <div className={s.modalInfo}>
          Вы собираетесь проголосовать за
          {' '}
          <b>{name}</b>
          {' '}
          <br />
          <br />
          Вы уверены в вашем выборе?
        </div>
        <div className={s.buttons}>
          <Button onClick={onConfirm}>Подтвердить</Button>
          <Button variant="primaryWhite" onClick={closeModal}>Отклонить</Button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmVote;
