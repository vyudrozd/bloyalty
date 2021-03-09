import React from 'react';
import s from './Page.styl';

const Page = ({ children }) => (
  <div className={s.pageContainer}>
    {children}
  </div>
);

export default Page;
