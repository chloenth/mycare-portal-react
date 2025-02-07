import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Logo.module.scss';
import config from '~/config';
import images from '~/assets/images';

const cx = classNames.bind(styles);

const Logo = ({ className }) => {
  return (
    <Link
      to={config.routes.home}
      className={cx('logo-link', { [className]: className })}
    >
      <img src={images.logo} alt="logo" className={cx('logo-img')} />
      <div className={cx('logo-brand')}>
        <p className={cx('brand-title')}>MyCare Portal</p>
        <p className={cx('brand-text')}>consulting</p>
      </div>
    </Link>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
};

export default Logo;
