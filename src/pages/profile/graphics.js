import React from 'react';
import s from '../../../styles/pages/profile.styl';
import Graph from '../../components/Graph';

const data = [
  {
    name: '14.03.2021',
    uv: 7,
  },
  {
    name: '15.03.2021',
    uv: 5,
  },
  {
    name: '16.03.2021',
    uv: 4,
  },
  {
    name: '17.03.2021',
    uv: 12,
  },
  {
    name: '18.03.2021',
    uv: 8,
  },
  {
    name: '19.03.2021',
    uv: 20,
  },
  {
    name: '20.03.2021',
    uv: 7,
  },
];

const allData = [
  {
    name: '14.03.2021',
    uv: 7,
  },
  {
    name: '15.03.2021',
    uv: 5,
  },
  {
    name: '16.03.2021',
    uv: 4,
  },
  {
    name: '17.03.2021',
    uv: 12,
  },
  {
    name: '18.03.2021',
    uv: 8,
  },
  {
    name: '19.03.2021',
    uv: 20,
  },
  {
    name: '20.03.2021',
    uv: 7,
  }, {
    name: '14.03.2021',
    uv: 7,
  },
  {
    name: '15.03.2021',
    uv: 5,
  },
  {
    name: '16.03.2021',
    uv: 4,
  },
  {
    name: '17.03.2021',
    uv: 12,
  },
  {
    name: '18.03.2021',
    uv: 8,
  },
  {
    name: '19.03.2021',
    uv: 20,
  },
  {
    name: '20.03.2021',
    uv: 7,
  }, {
    name: '14.03.2021',
    uv: 7,
  },
  {
    name: '15.03.2021',
    uv: 5,
  },
  {
    name: '16.03.2021',
    uv: 4,
  },
  {
    name: '17.03.2021',
    uv: 12,
  },
  {
    name: '18.03.2021',
    uv: 8,
  },
  {
    name: '19.03.2021',
    uv: 20,
  },
  {
    name: '20.03.2021',
    uv: 7,
  },
];

const Graphics = () => (
  <>
    <div className={s.whiteBox}>
      <div className={s.sectionTitle}>График активности за неделю</div>
      <div className={s.graphContainer}>
        <Graph data={data} />
      </div>
    </div>
    <div className={s.whiteBox}>
      <div className={s.sectionTitle}>График активности за все время</div>
      <div className={s.graphContainer}>
        <Graph data={allData} />
      </div>
    </div>
  </>
);

export default Graphics;
