import cx from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import s from './Layout.styl';
import { Col, Row } from '../UI/Grid';
import Button from '../UI/Button';

const links = [
  {
    url: '/profile',
    text: 'Главная',
  },
  {
    url: '/profile/graphics',
    text: 'Графики',
  },
  {
    url: '/profile/brand',
    text: 'Бренд',
  },
];

const ProfileLayout = ({ children, disableWhiteBox }) => (
  <div className={s.wrap}>
    <Row>
      <Col size={3}>
        <div className={cx(s.leftPart, s.whiteBox)}>
          <div className={s.imgContainer}>
            <img alt="Deloitte" src="https://instagram.frix2-1.fna.fbcdn.net/v/t51.2885-19/s320x320/13402406_532985290225422_964375496_a.jpg?tp=1&_nc_ht=instagram.frix2-1.fna.fbcdn.net&_nc_ohc=ZbeNAYkBDDYAX--F-Zq&edm=ABfd0MgBAAAA&ccb=7-4&oh=f48711a5ef878c043056bebf48ffc55c&oe=60BF2509&_nc_sid=7bff83" />
          </div>
          <div className={s.tabsTitle}>Профиль</div>
          <ul className={s.linkTabs}>
            {links.map(link => (
              <Link to={link.url} activeClassName={s.active} onlyActiveOnIndex key={link.url}>
                {link.text}
              </Link>
            )) }
          </ul>
          <div className={s.tabsTitle}>
            Ваша статистика
          </div>
          <div className={s.smallInfo}>
            <div className={s.smallInfoContainer}>
              <div className={s.votesToday}>
                <div className={s.votesTodayCount}>0.85%</div>
                <div>ER</div>
              </div>
              <div className={s.votesTotal}>
                <div className={s.votesTotalCount}>4527</div>
                <div>Всего подписчиков</div>
              </div>
            </div>
            <div className={cx(s.profileHint, s.hintText)}>
              Недовольны результатом? Попробуйте
              {' '}
              <Button variant="textLike" className={s.hintText}>доступные уроки</Button>
            </div>
          </div>
        </div>
      </Col>
      <Col size={9}>
        <div className={cx(s.rightPart, !disableWhiteBox && s.whiteBox, disableWhiteBox && s.paddingRemover)}>
          {children}
        </div>
      </Col>
    </Row>
  </div>
);

export default ProfileLayout;
