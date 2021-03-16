import React from 'react';
import s from '../../../styles/pages/profile.styl';
import Graph from '../../components/Graph';
import Material from '../../components/Material';

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

const Profile = () => (
  <>
    <div className={s.whiteBox}>
      <div className={s.profileName}>
        John Doe
      </div>
      <div className={s.profileDescription}>
        Веду курсы по английскому языку на протяжении 8 лет
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
