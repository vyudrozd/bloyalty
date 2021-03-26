import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import s from './Material.styl';
import PDF from '../../../public/static/icons/pdf17.svg';
import File from '../../../public/static/icons/file.svg';
import Link from '../../../public/static/icons/link.svg';

const map = {
  pdf: { Component: PDF },
  file: { Component: File },
  link: { Component: Link },
};

const Material = ({
  className, variant, materialName, authorName, href,
}) => {
  const currentVariant = map[variant];
  return (
    <a href={href} target="_blank" rel="noreferrer noopener" className={cx(s.wrap, s[variant], className)}>
      <div className={s.icon}>
        <currentVariant.Component />
      </div>
      <div className={s.infoContainer}>
        <div className={s.materialName}>{materialName}</div>
        <div className={s.authorName}>{`Автор: ${authorName}`}</div>
      </div>
    </a>
  );
};

Material.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['file', 'pdf', 'link']),
  materialName: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
};

Material.defaultProps = {
  className: null,
  variant: 'file',
};

export default Material;
