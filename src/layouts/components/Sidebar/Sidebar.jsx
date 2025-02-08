import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBed,
  faCalendarDays,
  faCube,
  faStethoscope,
  faTableCellsLarge,
} from '@fortawesome/free-solid-svg-icons';
import {
  faBuilding,
  faCommentDots,
  faCreditCard,
  faSquareCheck,
} from '@fortawesome/free-regular-svg-icons';

import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Logo from '~/components/Logo';

const cx = classNames.bind(styles);

const Sidebar = () => {
  return (
    <aside className={cx('wrapper')}>
      {/* Logo */}
      <Logo className={cx('sidebar-logo')} />

      {/* Menu List */}
      <ul className={cx('menu-list')}>
        <li className={cx('menu-item', 'active')}>
          <a href="" className={cx('menu-link')}>
            <FontAwesomeIcon
              className={cx('menu-icon')}
              icon={faTableCellsLarge}
            />
            Dashboard
          </a>
        </li>

        <li className={cx('menu-item')}>
          <a href="" className={cx('menu-link')}>
            <FontAwesomeIcon className={cx('menu-icon')} icon={faSquareCheck} />
            Appointments
          </a>
        </li>

        <li className={cx('menu-item')}>
          <a href="" className={cx('menu-link')}>
            <FontAwesomeIcon className={cx('menu-icon')} icon={faBed} />
            Patients
          </a>
        </li>

        <li className={cx('menu-item')}>
          <a href="" className={cx('menu-link')}>
            <FontAwesomeIcon className={cx('menu-icon')} icon={faStethoscope} />
            Doctors
          </a>
        </li>

        <li className={cx('menu-item')}>
          <a href="" className={cx('menu-link')}>
            <FontAwesomeIcon className={cx('menu-icon')} icon={faBuilding} />
            Departments
          </a>
        </li>

        <li className={cx('menu-item')}>
          <a href="" className={cx('menu-link')}>
            <FontAwesomeIcon
              className={cx('menu-icon')}
              icon={faCalendarDays}
            />
            Doctors&apos;Schedule
          </a>
        </li>

        <li className={cx('menu-item')}>
          <a href="" className={cx('menu-link')}>
            <FontAwesomeIcon className={cx('menu-icon')} icon={faCreditCard} />
            Payments
          </a>
        </li>

        <li className={cx('menu-item')}>
          <a href="" className={cx('menu-link')}>
            <FontAwesomeIcon className={cx('menu-icon')} icon={faCube} />
            Inventory
          </a>
        </li>

        <li className={cx('menu-item')}>
          <a href="" className={cx('menu-link')}>
            <FontAwesomeIcon className={cx('menu-icon')} icon={faCommentDots} />
            Messages
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
