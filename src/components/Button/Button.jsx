import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

const Button = ({
  children,
  outline,
  pillShaped,
  roundIcon,
  dark,
  className,
  leftIcon,
  rightIcon,
  onClick,
  ...passProps
}) => {
  const classes = cx('wrapper', {
    [className]: className,
    outline,
    'pill-shaped': pillShaped,
    'round-icon': roundIcon,
    dark,
  });
  const props = { onClick, ...passProps };

  return (
    <button className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  outline: PropTypes.bool,
  pillShaped: PropTypes.bool,
  roundIcon: PropTypes.bool,
  dark: PropTypes.bool,
  className: PropTypes.string,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
