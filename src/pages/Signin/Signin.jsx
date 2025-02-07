import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';

import styles from './Signin.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

const Signin = () => {
  return (
    <div className={cx('wrapper')}>
      <h2 className={cx('heading')}>Welcome to MyCare Portal</h2>
      <form action="" className={cx('auth-form')}>
        <div className={cx('input-wrap')}>
          <input type="text" placeholder="Username" />
          <FontAwesomeIcon icon={faUser} className={cx('input-icon')} />
        </div>

        <div className={cx('input-wrap')}>
          <input type="text" placeholder="Password" />
          <FontAwesomeIcon icon={faLock} className={cx('input-icon')} />
        </div>

        <Button className={cx('form-btn')}>Login</Button>

        <div className={cx('actions')}>
          <a href="">Forgot password?</a>
          <Link to="/signup">Don’t have an account? Signup here!</Link>
        </div>
      </form>
    </div>
  );
};

export default Signin;
