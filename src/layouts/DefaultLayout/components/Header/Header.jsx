import { Link } from 'react-router-dom';

import config from '~/config';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';

import Button from '~/components/Button';

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        {/* Logo */}
        <Link to={config.routes.home} className={cx('logo-link')}>
          <img src={images.logo} alt="logo" className={cx('logo-img')} />
          <div className={cx('logo-brand')}>
            <p className={cx('brand-title')}>MyCare Portal</p>
            <p className={cx('brand-text')}>consulting</p>
          </div>
        </Link>

        {/* Navigation */}
        <div className={cx('navigation')}>
          <Link className={cx('nav-link')}>Schedule Appointment</Link>
          <Link className={cx('nav-link')}>Medical History</Link>
          <Link className={cx('nav-link')}>Latest News</Link>
          <Link className={cx('nav-link')}>Contact</Link>
        </div>

        {/* Actions */}
        <div className={cx('actions')}>
          <Button outline>Signin</Button>
          <Button outline>Signup</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
