import cx from 'classnames';
import React from 'react';
import s from './VoteCard.styl';
import Button from '../UI/Button';

const VoteCard = ({
  className, onChoose, id, info = {}, position,
}) => {
  const {
    link = 'https://instagram.frix2-1.fna.fbcdn.net/v/t51.2885-19/s320x320/13402406_532985290225422_964375496_a.jpg?tp=1&_nc_ht=instagram.frix2-1.fna.fbcdn.net&_nc_ohc=ouaYcxbwU4AAX9tH_4D&edm=ABfd0MgAAAAA&ccb=7-4&oh=04f504a57fdf3fa3bde8ebaab8e4b6dc&oe=6086FB89&_nc_sid=7bff83',
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
        <img alt="avatar" src="https://instagram.frix2-1.fna.fbcdn.net/v/t51.2885-19/s320x320/13402406_532985290225422_964375496_a.jpg?tp=1&_nc_ht=instagram.frix2-1.fna.fbcdn.net&_nc_ohc=ouaYcxbwU4AAX9tH_4D&edm=ABfd0MgAAAAA&ccb=7-4&oh=04f504a57fdf3fa3bde8ebaab8e4b6dc&oe=6086FB89&_nc_sid=7bff83" />
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
