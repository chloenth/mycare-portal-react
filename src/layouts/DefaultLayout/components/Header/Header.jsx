import { Link } from 'react-router-dom';

import config from '~/config';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        {/* Logo */}
        <Link to={config.routes.home} className={cx('logo-link')}>
          <img src={images.logo} alt="logo" />
        </Link>
        {/* Navigation */}
        {/* Socials */}
        {/* Login button */}
      </div>
    </header>
  );
};

export default Header;
