import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './AppointmentSummary.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const AppointmentSummary = () => {
  const [dates, setDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    const generateDates = () => {
      const today = new Date();
      const newDates = [];

      for (let i = -6; i <= 7; i++) {
        const date = new Date();
        date.setDate(today.getDate() + i);

        const weekday = date.toLocaleDateString('en-US', { weekday: 'short' }); // Mon, Tue,..
        const day = date.getDate(); // 16, 17,..

        newDates.push({
          fullDate: date.toISOString().split('T')[0], // YYYY-MM-DD
          weekday,
          day,
        });
      }

      setDates(newDates);
    };

    generateDates();
  }, []);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('date-control')}>
        <FontAwesomeIcon
          icon={faChevronLeft}
          className={cx('date-control-icon')}
        />
        <ul className={cx('date-list')}>
          {dates &&
            dates.map((date, index) => (
              <li key={index} className={cx('date-item')}>
                <button className={cx('date-btn')}>
                  {date.weekday} <span>{date.day}</span>
                </button>
              </li>
            ))}
        </ul>
        <FontAwesomeIcon
          icon={faChevronRight}
          className={cx('date-control-icon')}
        />
      </div>
    </div>
  );
};

export default AppointmentSummary;
