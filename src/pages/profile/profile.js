import React from 'react';
import { Route } from 'react-router-dom';
import ProfileLayout from '../../components/ProfileLayout';
import s from '../../../styles/pages/profile.styl';
import Main from './index';
import Graphic from './graphics';
import Brand from './brand';

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
  return (
    <ProfileLayout disableWhiteBox>
      <Route path={`${match.path}/brand`} component={Brand} />
      <Route path={`${match.path}/graphics`} component={Graphic} />
      <Route exact path={`${match.path}/`} component={Main} />
    </ProfileLayout>
  );
};

export default Profile;
