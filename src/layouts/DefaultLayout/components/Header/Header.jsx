import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import Button from '~/components/Button';
import Logo from '~/components/Logo';

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        {/* Logo */}
        <Logo />

        {/* Navigation */}
        <div className={cx('navigation')}>
          <Link className={cx('nav-link')}>Schedule Appointment</Link>
          <Link className={cx('nav-link')}>Medical History</Link>
          <Link className={cx('nav-link')}>Latest News</Link>
          <Link className={cx('nav-link')}>Contact</Link>
        </div>

        {/* Actions */}
        <div className={cx('actions')}>
          <Button to="/signin" outline>
            Signin
          </Button>
          <Button to="/signup" outline>
            Signup
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
