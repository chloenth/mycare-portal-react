import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './DotNavigation.module.scss';

const cx = classNames.bind(styles);

const DotNavigation = ({ length, itemsPerPage, activeDot }) => {
  return (
    <div className={cx('dot-navigation', { hidden: length < 5 })}>
      {[...Array(Math.ceil(length / itemsPerPage))].map((_, index) => (
        <div
          key={index}
          className={cx('dot', { active: activeDot === index })}
        ></div>
      ))}
    </div>
  );
};

DotNavigation.propTypes = {
  length: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  activeDot: PropTypes.number.isRequired,
};

export default DotNavigation;
