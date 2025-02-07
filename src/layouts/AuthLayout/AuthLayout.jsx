import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './AuthLayout.module.scss';
import Logo from '~/components/Logo';

const cx = classNames.bind(styles);

const AuthLayout = ({ children }) => {
  return (
    <div className={cx('wrapper')}>
      {/* Logo */}
      <Logo className={cx('auth-logo')} />
      {children}
    </div>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthLayout;
