import React from 'react';
import s from './Header.styl';
import { Col, Row } from '../UI/Grid';

const Header = () => (
  <div className={s.wrap}>
    <Row className={s.row}>
      <Col size={12} className={s.col}>
        <div className={s.headerContainer}>
          <div className={s.logo}>TopBlog</div>
        </div>
      </Col>
    </Row>
  </div>
);

export default Header;
