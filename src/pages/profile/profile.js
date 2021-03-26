import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import ReactLoading from 'react-loading';
import ProfileLayout from '../../components/ProfileLayout';
import s from '../../../styles/pages/profile.styl';
import Main from './index';
import Graphic from './graphics';
import Brand from './brand';
import Header from '../../components/Header';

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

const Profile = ({ match }) => {
  console.log(match);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header />
      {loading ? (
          <div className={s.loadingWrap}>
        <ReactLoading type="spin" width="10%" height="10%" color="#feba00" />
          </div>
      ) : (
        <ProfileLayout disableWhiteBox>
          <Route path={`${match.path}/brand`} component={Brand} />
          <Route path={`${match.path}/graphics`} component={Graphic} />
          <Route exact path={`${match.path}/`} component={Main} />
        </ProfileLayout>
      )}
    </>
  );
};

export default Profile;
