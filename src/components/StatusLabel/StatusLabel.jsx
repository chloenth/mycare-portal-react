import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './StatusLabel.module.scss';
import { Status } from '~/constants';

const cx = classNames.bind(styles);

const Label = ({ status, className }) => {
  const classes = cx('status-label', {
    [status]: status,
    [className]: className,
  });

  return <div className={classes}>{status}</div>;
};

Label.propTypes = {
  status: PropTypes.oneOf([...Object.values(Status)]).isRequired,
  className: PropTypes.string,
};

export default Label;
