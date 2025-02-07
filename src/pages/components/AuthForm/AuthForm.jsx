import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './AuthForm.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

const AuthForm = ({ heading, inputList, btnText, login, action }) => {
  return (
    <div className={cx('wrapper')}>
      <h2 className={cx('heading')}>{heading}</h2>
      <form action="" className={cx('auth-form')}>
        {inputList &&
          inputList.map((input, index) => (
            <div key={index} className={cx('input-wrap')}>
              <input type={input.type} placeholder={input.placeholder} />
              <FontAwesomeIcon icon={input.icon} className={cx('input-icon')} />
            </div>
          ))}

        <Button className={cx('form-btn')}>{btnText}</Button>

        <div className={cx('actions')}>
          {login && <a href="">Forgot password?</a>}

          <Link to={action.link}>{action.text}</Link>
        </div>
      </form>
    </div>
  );
};

AuthForm.propTypes = {
  heading: PropTypes.string.isRequired,
  inputList: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired, // Ensures "type" is a required string
      placeholder: PropTypes.string.isRequired, // Ensures "placeholder" is a required string
      icon: PropTypes.object.isRequired, // Ensures "icon" is a required object (FontAwesome icon)
    }),
  ).isRequired,
  btnText: PropTypes.string.isRequired,
  login: PropTypes.bool,
  action: PropTypes.shape({
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
};

export default AuthForm;
