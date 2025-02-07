import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
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
  to,
  href,
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
  let Comp = 'button';

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
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
  to: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
