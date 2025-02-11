import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ScheduleOverview.module.scss';
import Calendar from '~/components/Calendar';
import useWeekDatesForMonth from '~/hooks/useWeekDatesForMonth';
import DailySchedule from '../DailySchedule';

const cx = classNames.bind(styles);

const ScheduleOverview = () => {
  const { weeks, title, currentDate, weekdays } = useWeekDatesForMonth();
  const [selectedDate, setSelectedDate] = useState(currentDate);

  const handleSelectedDate = (selectedDate) => {
    setSelectedDate(selectedDate);
  };

  return (
    <div className={cx('wrapper')}>
      {/* Calendar */}
      <Calendar
        title={title}
        weekdays={weekdays}
        weeks={weeks}
        currentDate={currentDate}
        onHandleSelectedDate={handleSelectedDate}
      />

      {/* Daily Schedule */}
      <DailySchedule selectedDate={selectedDate} />
    </div>
  );
};

export default ScheduleOverview;
