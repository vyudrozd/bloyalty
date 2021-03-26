import React from 'react';
import Modal from '../../Modal';
import s from './RewardModal.styl';
import Button from '../../UI/Button';
import Material from '../../Material';

const Reward = ({ show, gift, closeModal }) => (
  <Modal className={s.modalWrap} show={show} closeModal={closeModal}>
    <div className={s.top}>
      Награда
    </div>
    <div className={s.contentPart}>
      <Material className={s.material} authorName="Deloitte" materialName="Demo" variant="link" href={gift} />
      <div className={s.buttons}>
        <Button onClick={closeModal}>Спасибо</Button>
      </div>
    </div>
  </Modal>
);

export default Reward;
