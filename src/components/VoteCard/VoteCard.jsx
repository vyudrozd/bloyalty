import cx from 'classnames';
import React from 'react';
import s from './VoteCard.styl';
import Button from '../UI/Button';

const VoteCard = ({
  className, onChoose, id, info = {}, position,
}) => {
  const {
    link = 'https://instagram.frix2-1.fna.fbcdn.net/v/t51.2885-19/s320x320/13402406_532985290225422_964375496_a.jpg?tp=1&_nc_ht=instagram.frix2-1.fna.fbcdn.net&_nc_ohc=ZbeNAYkBDDYAX--F-Zq&edm=ABfd0MgBAAAA&ccb=7-4&oh=f48711a5ef878c043056bebf48ffc55c&oe=60BF2509&_nc_sid=7bff83',
    votes,
    name,
    description,
  } = info;

  console.log(info);

  return (
    <div className={cx(s.wrap, className)}>
      <div className={s.position}>
        {position}
        .
      </div>
      <div className={s.avatar}>
        <img alt="avatar" src="https://is2-ssl.mzstatic.com/image/thumb/Podcasts113/v4/95/3d/75/953d7532-662a-3e20-9fa0-fba59613ef0b/mza_11692907723537832568.jpg/1200x1200bb.jpg" />
      </div>
      <div className={s.nameWrap}>
        <div className={s.name}>{name}</div>
        <div className={s.description}>
          {description}
        </div>
      </div>
      <div className={s.voteStat}>
        {+votes}
        <br />
        голосов
      </div>
      <div className={s.actions}>
        <Button onClick={() => onChoose(id)}>Выбрать</Button>
      </div>
    </div>
  );
};

export default VoteCard;
