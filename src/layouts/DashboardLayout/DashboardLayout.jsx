import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './DashboardLayout.module.scss';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const cx = classNames.bind(styles);

const DashboardLayout = ({ children }) => {
  return (
    <div className={cx('wrapper')}>
      {/* Sidebar */}
      <div className={cx('sidebar')}>
        <Sidebar />
      </div>

      <div className={cx('container')}>
        {/* Header */}
        <Header />
        <div className={cx('content')}>{children}</div>
      </div>
    </div>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardLayout;
