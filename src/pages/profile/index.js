import React from 'react';
import s from '../../../styles/pages/profile.styl';
import Graph from '../../components/Graph';
import Material from '../../components/Material';

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
  {
    name: '26.03.2021',
    votes: 7,
  },
];

const Profile = () => (
  <>
    <div className={s.whiteBox}>
      <div className={s.profileName}>
        Deloitte CIS
      </div>
      <div className={s.profileDescription}>
        Рейтинг самых богатых футбольных клубов — 2021⚽💰
        deloi.tt/3shATe8
      </div>
    </div>
    <div className={s.whiteBox}>
      <div className={s.sectionTitle}>
        Ваши последние полученные награды
      </div>
      <Material className={s.material} materialName="Lesson 1" authorName="Blogger1" variant="pdf" />
      <Material className={s.material} materialName="Lesson 2" authorName="Blogger2" variant="file" />
      <Material className={s.material} materialName="Lesson 3" authorName="Blogger3" variant="link" />
    </div>
    <div className={s.whiteBox}>
      <div className={s.sectionTitle}>График активности за неделю</div>
      <div className={s.graphContainer}>
        <Graph data={data} />
      </div>
    </div>
  </>
);

export default Profile;
