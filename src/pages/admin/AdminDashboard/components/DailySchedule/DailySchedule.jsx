import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';

import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

import styles from './DailySchedule.module.scss';

const cx = classNames.bind(styles);

const DailySchedule = ({ selectedDate }) => {
  const date = new Date(selectedDate);
  const formattedDate = date.toLocaleDateString('en-GB', {
    weekday: 'long',
    day: '2-digit',
    month: 'short',
  });

  const title = formattedDate.replace(' ', ', ');

  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <h6 className={cx('title')}>{title}</h6>
        <FontAwesomeIcon icon={faSquarePlus} className={cx('icon')} />
      </div>

      <div className={cx('schedule')}>
        <FullCalendar
          plugins={[timeGridPlugin, interactionPlugin]}
          initialView="timeGridDay" // Hiển thị dạng khung giờ
          allDaySlot={false} // Tắt phần "All Day"
          slotMinTime="08:00:00" // Giờ bắt đầu trong ngày
          slotMaxTime="18:00:00" // Giờ kết thúc trong ngày
          height="auto"
          headerToolbar={false} // Ẩn tiêu đề và nút điều khiển
          events={[
            {
              title: 'Task 1',
              start: '2025-02-11T08:00:00',
              end: '2025-02-11T10:00:00',
            },
            {
              title: 'Task 2',
              start: '2025-02-11T13:00:00',
              end: '2025-02-11T15:00:00',
            },
            {
              title: 'Task 3',
              start: '2025-02-11T16:00:00',
              end: '2025-02-11T18:00:00',
            },
          ]}
        />
      </div>
    </div>
  );
};

DailySchedule.propTypes = {
  selectedDate: PropTypes.string.isRequired,
};

export default DailySchedule;
