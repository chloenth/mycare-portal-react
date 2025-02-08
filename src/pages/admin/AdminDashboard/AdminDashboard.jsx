import classNames from 'classnames/bind';
import {
  faUserGroup,
  faUserPlus,
  faFileInvoice,
} from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';

import styles from './AdminDashboard.module.scss';
import StatsCard from '~/components/StatsCard';
import BarChart from '~/components/BarChart';

const cx = classNames.bind(styles);

const statsList = [
  {
    title: 'Total Invoice',
    icon: faFileInvoice,
    statsNumber: '1287',
    gapPercent: '2.14',
    gapNumber: '56',
    trendDown: false,
  },

  {
    title: 'Total Patients',
    icon: faUserGroup,
    statsNumber: '965',
    gapPercent: '3.78',
    gapNumber: '45',
    trendDown: false,
  },

  {
    title: 'New Patients',
    icon: faUserPlus,
    statsNumber: '156',
    gapPercent: '1.78',
    gapNumber: '38',
    trendDown: false,
  },

  {
    title: 'Appointments',
    icon: faCalendar,
    statsNumber: '965',
    gapPercent: '3.78',
    gapNumber: '45',
    trendDown: false,
  },
];

const AdminDashboard = () => {
  return (
    <div className={cx('wrapper')}>
      {/* Total Invoice */}
      {/* Total Patients */}
      {/* New Patients */}
      {/* Appointments */}

      {statsList &&
        statsList.map((item, index) => (
          <StatsCard
            key={index}
            className={cx('column-span-2')}
            title={item.title}
            icon={item.icon}
            statsNumber={item.statsNumber}
            gapPercent={item.gapPercent}
            gapNumber={item.gapNumber}
            trendDown={item.trendDown}
          />
        ))}

      {/* Calendar - Date picker + Date timetable */}
      <div className={cx('calendar')}>Calendar</div>

      {/* Patient Overview by age */}
      <div className={cx('patient-overview-by-age')}>
        <BarChart />
      </div>

      {/* Revenue */}
      <div className={cx('revenue')}>Revenue</div>

      {/* Summary container */}
      <div className={cx('summary-container')}>
        {/* Patient Overview by departments */}
        <div className={cx('patient-overview-by-departments')}>
          Patient overview by department
        </div>

        {/* Doctors' Schedule */}
        <div className={cx('doctor-schedule')}>Doctors Schedule</div>

        {/* Report */}
        <div className={cx('report')}>Report</div>
      </div>

      {/* Patient Appointment table */}
      <div className={cx('appointments-list')}>Patient Appointment table</div>

      {/* Recent Activity */}
      <div className={cx('recent-activity')}>Recent Activity</div>
    </div>
  );
};

export default AdminDashboard;
