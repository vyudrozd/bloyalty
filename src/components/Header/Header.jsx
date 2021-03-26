import React from 'react';
import { Link } from 'react-router-dom';
import s from './Header.styl';
import { Col, Row } from '../UI/Grid';

const Header = () => (
  <div className={s.wrap}>
    <Row className={s.row}>
      <Col size={12} className={s.col}>
        <div className={s.headerContainer}>
          <div className={s.logo}>
            <Link to="/">
              Bloyalty
            </Link>
          </div>
          <div className={s.rating}>
            <Link to="/vote">
              Рейтинг
            </Link>
          </div>
          <div className={s.profile}>
            <Link to="/profile">
              Профиль
            </Link>
          </div>
        </div>
      </Col>
    </Row>
  </div>
);

export default Header;
