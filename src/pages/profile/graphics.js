import React, { useEffect, useState } from 'react';
import s from '../../../styles/pages/profile.styl';
import Graph from '../../components/Graph';
import Button from '../../components/UI/Button';

const data = [
  {
    name: '20.03.2021',
    votes: 7,
  },
  {
    name: '21.03.2021',
    votes: 5,
  },
  {
    name: '22.03.2021',
    votes: 4,
  },
  {
    name: '23.03.2021',
    votes: 12,
  },
  {
    name: '24.03.2021',
    votes: 8,
  },
  {
    name: '25.03.2021',
    votes: 20,
  },
];

const allData = [
  // {
  //   name: '06.03.2021',
  //   votes: 7,
  // },
  // {
  //   name: '07.03.2021',
  //   votes: 5,
  // },
  // {
  //   name: '08.03.2021',
  //   votes: 13,
  // },
  // {
  //   name: '09.03.2021',
  //   votes: 13,
  // },
  // {
  //   name: '10.03.2021',
  //   votes: 8,
  // },
  // {
  //   name: '11.03.2021',
  //   votes: 20,
  // },
  // {
  //   name: '12.03.2021',
  //   votes: 19,
  // }, {
  //   name: '13.03.2021',
  //   votes: 8,
  // },
  // {
  //   name: '14.03.2021',
  //   votes: 5,
  // },
  // {
  //   name: '15.03.2021',
  //   votes: 4,
  // },
  // {
  //   name: '16.03.2021',
  //   votes: 15,
  // },
  // {
  //   name: '17.03.2021',
  //   votes: 4,
  // },
  // {
  //   name: '18.03.2021',
  //   votes: 20,
  // },
  // {
  //   name: '19.03.2021',
  //   votes: 2,
  // },
  {
    name: '20.03.2021',
    likes: 80,
  },
  {
    name: '21.03.2021',
    likes: 102,
  },
  {
    name: '22.03.2021',
    likes: 40,
  },
  {
    name: '23.03.2021',
    likes: 63,
  },
  {
    name: '24.03.2021',
    likes: 59,
  },
  {
    name: '25.03.2021',
    likes: 30,
  },
];

const Graphics = () => {
  const [votes, setVotes] = useState(7);
  const [instVotes, setInstVotes] = useState(21);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const newVotes = localStorage.getItem('__votes__');
    const newInstVotes = localStorage.getItem('__instVotes__');
    if (newVotes) {
      setVotes(+newVotes);
    } else {
      setVotes(7);
      localStorage.setItem('__votes__', '7');
    }
    if (newInstVotes) {
      setInstVotes(+newInstVotes);
    } else {
      setInstVotes(25);
      localStorage.setItem('__instVotes__', '25');
    }
  }, []);

  const onUpdateGraphic = () => {
    setLoading(true);
    setTimeout(() => {
      const newVotes = localStorage.getItem('__instVotes__');
      console.log(newVotes, !!newVotes);
      if (newVotes) {
        setInstVotes(+newVotes + 1);
        localStorage.setItem('__instVotes__', `${+newVotes + 1}`);
      } else {
        setInstVotes(7);
        localStorage.setItem('__instVotes__', '7');
      }
      setLoading(false);
    }, 1000);
  };

  const activityData = [...data, {
    name: '26.03.2021',
    votes,
  }];

  const wholeData = [...allData, {
    name: '26.03.2021',
    likes: instVotes,
  }];

  return (
    <>
      <div className={s.whiteBox}>
        <Button innerLoading={loading} onClick={onUpdateGraphic}>
          Обновить графики
        </Button>
      </div>
      <div className={s.whiteBox}>
        <div className={s.sectionTitle}>Активность за неделю</div>
        <div className={s.graphContainer}>
          <Graph data={activityData} />
        </div>
      </div>
      <div className={s.whiteBox}>
        <div className={s.sectionTitle}>Лайки за неделю</div>
        <div className={s.graphContainer}>
          <Graph data={wholeData} dateKey="likes" />
        </div>
      </div>
    </>
  );
};

export default Graphics;
