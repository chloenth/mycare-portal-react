import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

const Button = ({ children, outline }) => {
  const classes = cx('wrapper', { outline });

  return (
    <button className={classes}>
      <span className={cx('title')}>{children}</span>
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  outline: PropTypes.bool,
};

export default Button;
