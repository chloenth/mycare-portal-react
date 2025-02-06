import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const Header = ({ subHeading, heading }) => {
  return (
    <header className={cx('header')}>
      <p className={cx('sub-heading')}>{subHeading}</p>
      <h2 className={cx('heading')}>{heading}</h2>
    </header>
  );
};

Header.propTypes = {
  subHeading: PropTypes.string,
  heading: PropTypes.string,
};

export default Header;
