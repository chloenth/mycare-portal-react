import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './AuthForm.module.scss';
import Button from '~/components/Button';
import IconInput from '~/components/IconInput';

const cx = classNames.bind(styles);

const AuthForm = ({ heading, inputList, btnText, login, action }) => {
  return (
    <div className={cx('wrapper')}>
      <h2 className={cx('heading')}>{heading}</h2>
      <form action="" className={cx('auth-form')}>
        {inputList &&
          inputList.map((input, index) => (
            <IconInput
              white
              key={index}
              type={input.type}
              placeholder={input.placeholder}
              icon={input.icon}
            />
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
