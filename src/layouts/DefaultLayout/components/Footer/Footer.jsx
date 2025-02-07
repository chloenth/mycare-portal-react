import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <footer className={cx('wrapper')}>
      <div className={cx('social-list')}>
        <a href="">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>

        <a href="">
          <FontAwesomeIcon icon={faInstagram} />
        </a>

        <a href="">
          <FontAwesomeIcon icon={faTwitter} />
        </a>

        <a href="">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>

        <a href="">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>
      <p className={cx('copyright')}>
        &copy; 2025 Chloe N - Huong Nguyen. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
