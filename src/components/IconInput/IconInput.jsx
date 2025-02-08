import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './IconInput.module.scss';

const cx = classNames.bind(styles);

const IconInput = ({
  type,
  placeholder,
  icon,
  white,
  grey,
  roundCorner,
  className,
}) => {
  const classes = cx('input-wrap', {
    'white-input': white,
    'grey-input': grey,
    'round-corner': roundCorner,
    [className]: className,
  });

  return (
    <div className={classes}>
      <input type={type} placeholder={placeholder} />
      <FontAwesomeIcon icon={icon} className={cx('input-icon')} />
    </div>
  );
};

IconInput.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  white: PropTypes.bool,
  grey: PropTypes.bool,
  roundCorner: PropTypes.bool,
  className: PropTypes.string,
};

export default IconInput;
