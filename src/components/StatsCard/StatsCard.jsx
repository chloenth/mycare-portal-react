import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowTrendDown,
  faArrowTrendUp,
  faEllipsis,
} from '@fortawesome/free-solid-svg-icons';

import styles from './StatsCard.module.scss';

const cx = classNames.bind(styles);

const StatsCard = ({
  title,
  icon,
  statsNumber,
  trendDown,
  gapPercent,
  gapNumber,
  className,
}) => {
  return (
    <div className={cx('stats-card', { [className]: className })}>
      <div className={cx('card-header')}>
        <div className={cx('card-heading')}>
          <FontAwesomeIcon icon={icon} className={cx('card-icon')} />
          <span>{title}</span>
        </div>
        <FontAwesomeIcon icon={faEllipsis} className={cx('card-icon')} />
      </div>

      <div className={cx('card-body')}>
        <div className={cx('card-statistic')}>
          <p className={cx('stats-number')}>{statsNumber}</p>
          <div className={cx('stats-gap')}>
            <FontAwesomeIcon
              icon={trendDown ? faArrowTrendDown : faArrowTrendUp}
              className={cx('gap-icon')}
            />
            <span className={cx('gap-number')}>
              {trendDown ? '-' : '+'}
              {gapPercent}%
            </span>
          </div>
        </div>

        <p className={cx('stats-desc')}>{gapNumber} more than yesterday</p>
      </div>
    </div>
  );
};

StatsCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  statsNumber: PropTypes.number.isRequired,
  trendDown: PropTypes.bool,
  gapPercent: PropTypes.number,
  gapNumber: PropTypes.number,
  className: PropTypes.string,
};

export default StatsCard;
