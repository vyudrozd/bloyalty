import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Spinner from '../Spinner';
import s from './Button.styl';

const Button = ({
  children,
  size,
  variant,
  type,
  tabIndex,
  disabled,
  icon: Icon,
  onClick,
  iconClass,
  className,
  fullWidth,
  inGridCard,
  innerLoading,
  color,
}) => {
  // const innerLoading = true;

  const classes = cx(
    s.button,
    s[size],
    s[variant],
    s[color],
    Icon && s.withIcon,
    fullWidth && s.fullWidth,
    inGridCard && s.inGridCard,
    innerLoading && s.loading,
    className,
  );

  const spinnerColor = variant === 'primaryBlue' ? 'white' : 'red';

  return (
    <button className={classes} onClick={onClick} tabIndex={!disabled ? tabIndex : -1} disabled={disabled} type={type}>
      {innerLoading ? (
        <>
          <Spinner className={s.spinner} />
          {children}
        </>
      ) : (
        <>
          {Icon && <Icon className={iconClass && iconClass} />}
          {children}
        </>
      )}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.string,
  variant: PropTypes.oneOf(['primaryVelvet', 'secondary', 'tertiary', 'textLike']),
  type: PropTypes.string,
  tabIndex: PropTypes.number,
  disabled: PropTypes.bool,
  icon: PropTypes.any,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

Button.defaultProps = {
  size: 'large',
  variant: 'primaryVelvet',
  type: 'button',
  tabIndex: 0,
  disabled: false,
  icon: null,
  onClick: undefined,
  className: null,
};

export default Button;
