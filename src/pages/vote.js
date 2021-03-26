import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import Page from '../components/Page';
import Header from '../components/Header';
import s from '../../styles/pages/vote.styl';
import Row from '../components/UI/Grid/Row';
import Col from '../components/UI/Grid/Col';
import VoteCard from '../components/VoteCard';
import ConfirmVote from '../components/modals/ConfirmVoteModal';
import Reward from '../components/modals/RewardModal';

const participants = [
  {
    votes: 243,
    name: 'Deloitte CIS',
    description: 'Рейтинг самых богатых футбольных клубов — 2021⚽💰\n'
        + '          deloi.tt/3shATe8',
    id: 1,
  },
  {
    votes: 243,
    name: 'Deloitte CIS',
    description: 'Рейтинг самых богатых футбольных клубов — 2021⚽💰\n'
        + '          deloi.tt/3shATe8',
    id: 2,
  },
  {
    votes: 243,
    name: 'Deloitte CIS',
    description: 'Рейтинг самых богатых футбольных клубов — 2021⚽💰\n'
        + '          deloi.tt/3shATe8',
    id: 3,
  },
  {
    votes: 243,
    name: 'Deloitte CIS',
    description: 'Рейтинг самых богатых футбольных клубов — 2021⚽💰\n'
        + '          deloi.tt/3shATe8',
    id: 4,
  },
  {
    votes: 243,
    name: 'Deloitte CIS',
    description: 'Рейтинг самых богатых футбольных клубов — 2021⚽💰\n'
        + '          deloi.tt/3shATe8',
    id: 5,
  },
  {
    votes: 243,
    name: 'Deloitte CIS',
    description: 'Рейтинг самых богатых футбольных клубов — 2021⚽💰\n'
        + '          deloi.tt/3shATe8',
    id: 6,
  },
];

const Vote = () => {
  const [choosenID, setID] = useState(null);
  const [showGift, setShowGift] = useState(false);
  const [name, setName] = useState(null);
  const gift = 'https://www2.deloitte.com/content/dam/Deloitte/ru/Documents/technology-media-telecommunications/russian/media-consumption-russia-2020.pdf';
  const { search } = useLocation();

  const onChoose = id => {
    setID(id);
  };

  console.log('ID for blog: ', choosenID);

  const onConfirm = () => {
    setID(null);
    setShowGift(true);
  };

  useEffect(() => {
    const query = new URLSearchParams(search);
    const paramField = query.get('id');
    if (paramField) {
      onChoose(paramField);
      const todayVotes = localStorage.getItem('__votes__');
      localStorage.setItem('__votes__', todayVotes ? `${+todayVotes + 1}` : '8');
    }
  }, []);

  return (
    <Page>
      <Header />
      <div className={s.wrap}>
        <Row>
          <Col size={12} className={s.titleCol}>
            <div className={s.voteTitle}>Информационный бизнес</div>
          </Col>
          <Col size={12}>
            {participants.map((info, index) => (
              <VoteCard className={s.voteCard} onChoose={onChoose} id={info.id} info={info} position={+index + 1} />
            ))}
          </Col>
        </Row>
      </div>
      <ConfirmVote name={participants[choosenID ? choosenID - 1 : null]?.name} onConfirm={onConfirm} id={choosenID} setID={setID} />
      <Reward gift={gift} show={showGift} closeModal={() => setShowGift(false)} />
    </Page>
  );
};

export default Vote;
