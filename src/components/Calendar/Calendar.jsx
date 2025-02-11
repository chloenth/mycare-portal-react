import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import styles from './Calendar.module.scss';

const cx = classNames.bind(styles);

const Calendar = ({
  title,
  weekdays,
  weeks,
  currentDate,
  onHandleSelectedDate,
}) => {
  return (
    <div className={cx('calendar-wrapper')}>
      <div className={cx('calendar-header')}>
        <div className={cx('calendar-title')}>{title}</div>
        <div className={cx('calendar-control')}>
          <FontAwesomeIcon
            icon={faChevronLeft}
            className={cx('calendar-control-icon')}
          />
          <FontAwesomeIcon
            icon={faChevronRight}
            className={cx('calendar-control-icon')}
          />
        </div>
      </div>

      <div className={cx('calendar-body')}>
        <ul className={cx('weekdays-list')}>
          {weekdays.map((day, index) => (
            <li key={index}>{day}</li>
          ))}
        </ul>

        <div className={cx('calendar-dates')}>
          {weeks &&
            weeks.map((week, index) => (
              <ul key={index} className={cx('dates-list-row')}>
                {week &&
                  week.map((dateItem, index) => (
                    <li
                      key={index}
                      className={cx('date-item', {
                        disabled: dateItem.month != title.split(' ')[0],
                        current: dateItem.fullDate === currentDate,
                      })}
                      onClick={() => onHandleSelectedDate(dateItem.fullDate)}
                    >
                      {dateItem.date}
                    </li>
                  ))}
              </ul>
            ))}
        </div>
      </div>
    </div>
  );
};

Calendar.propTypes = {
  title: PropTypes.string.isRequired,
  weekdays: PropTypes.array.isRequired,
  weeks: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        fullDate: PropTypes.string.isRequired, // Example: '2024-02-10'
        month: PropTypes.string.isRequired, // Example: 'February'
        weekday: PropTypes.string.isRequired, // Example: 'Sunday'
        date: PropTypes.number.isRequired, // Example: 10
      }),
    ),
  ),
  currentDate: PropTypes.string.isRequired,
  onHandleSelectedDate: PropTypes.func.isRequired,
};

export default Calendar;
