import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import {
  faChevronDown,
  faGear,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import IconInput from '~/components/IconInput';
import images from '~/assets/images';

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <div className={cx('header-wrapper')}>
      {/* Header - input search */}
      <IconInput
        grey
        roundCorner
        className={cx('header-search')}
        type="text"
        placeholder="Search..."
        icon={faMagnifyingGlass}
      />

      {/* Header - actions */}
      <ul className={cx('actions-list')}>
        <li className={cx('action-item')}>
          <a href="" className={cx('action-link')}>
            <FontAwesomeIcon icon={faGear} className={cx('action-icon')} />
          </a>
        </li>

        <li className={cx('action-item')}>
          <a href="" className={cx('action-link')}>
            <FontAwesomeIcon icon={faBell} className={cx('action-icon')} />
          </a>
        </li>

        <li className={cx('action-item')}>
          <a href="" className={cx('action-link')}>
            <img
              src={images.userAvatar}
              alt="user-avatar"
              className={cx('user-avatar')}
            />
            <span className={cx('user-name')}>Alfredo Westervelt</span>
            <FontAwesomeIcon
              icon={faChevronDown}
              className={cx('action-icon')}
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
