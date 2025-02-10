import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './AppointmentSummary.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faSort,
} from '@fortawesome/free-solid-svg-icons';
import StatusLabel from '~/components/StatusLabel';
import { Status } from '~/constants';

const cx = classNames.bind(styles);

const AppointmentSummary = () => {
  const [dates, setDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split('T')[0],
  );

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
                <button
                  className={cx('date-btn', {
                    active: date.fullDate === selectedDate,
                  })}
                  onClick={() => setSelectedDate(date.fullDate)}
                >
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

      <table className={cx('appointment-table')}>
        <colgroup>
          <col style={{ width: '20%' }} />
          <col style={{ width: '13%' }} />
          <col style={{ width: '13%' }} />
          <col style={{ width: '22%' }} />
          <col style={{ width: '22%' }} />
          <col style={{ width: '15%' }} />
        </colgroup>

        <thead>
          <tr>
            <th>
              Name <FontAwesomeIcon icon={faSort} className={cx('icon-sort')} />
            </th>

            <th>
              Date <FontAwesomeIcon icon={faSort} className={cx('icon-sort')} />
            </th>

            <th>
              Time <FontAwesomeIcon icon={faSort} className={cx('icon-sort')} />
            </th>

            <th>
              Doctor{' '}
              <FontAwesomeIcon icon={faSort} className={cx('icon-sort')} />
            </th>

            <th>
              Treatment{' '}
              <FontAwesomeIcon icon={faSort} className={cx('icon-sort')} />
            </th>

            <th>
              Status{' '}
              <FontAwesomeIcon icon={faSort} className={cx('icon-sort')} />
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Caren G.Simpson</td>
            <td>20-07-28</td>
            <td>09:00 AM</td>
            <td>Dr.Petra Winsburry</td>
            <td>Routine Check-up</td>
            <td>
              <StatusLabel status={Status.CONFIRMED} />
            </td>
          </tr>

          <tr>
            <td>Edgar Warrow</td>
            <td>20-07-28</td>
            <td>10:30 AM</td>
            <td>Dr.Olivia Martinez</td>
            <td>Cardiac Consultation</td>
            <td>
              <StatusLabel status={Status.CONFIRMED} />
            </td>
          </tr>

          <tr>
            <td>Ocean Jane Lupre</td>
            <td>20-07-28</td>
            <td>11:00 AM</td>
            <td>Dr.Damian Sanchez</td>
            <td>Pediatric Check-Up</td>
            <td>
              <StatusLabel status={Status.PENDING} />
            </td>
          </tr>

          <tr>
            <td>Shane Riddick</td>
            <td>20-07-28</td>
            <td>01:00 PM</td>
            <td>Dr.Chloe Harrington</td>
            <td>Skin Allergy</td>
            <td>
              <StatusLabel status={Status.CANCELLED} />
            </td>
          </tr>

          <tr>
            <td>Queen Lawnston</td>
            <td>20-07-28</td>
            <td>02:30 PM</td>
            <td>Dr.Petra Winsburry</td>
            <td>Follow-Up Visit</td>
            <td>
              <StatusLabel status={Status.CONFIRMED} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentSummary;
