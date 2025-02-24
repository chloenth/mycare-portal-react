import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserGroup,
  faUserPlus,
  faFileInvoice,
  faChevronDown,
  faEllipsis,
  faBroomBall,
  faArrowRight,
  faWrench,
  faCircleExclamation,
  faLayerGroup,
  faHospitalUser,
  faUserDoctor,
} from '@fortawesome/free-solid-svg-icons';
import {
  faCalendar,
  faCalendarCheck,
} from '@fortawesome/free-regular-svg-icons';

import styles from './AdminDashboard.module.scss';
import StatsCard from '~/components/StatsCard';
import BarChart from '~/components/BarChart';
import Button from '~/components/Button';
import LineChart from '~/components/LineChart';
import DonutChart from '~/components/DonutChart';
import images from '~/assets/images';
import StatusLabel from '~/components/StatusLabel';
import { Status } from '~/constants';
import AppointmentSummary from './components/AppointmentSummary';
import ScheduleOverview from './components/ScheduleOverview';

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
      <div className={cx('main-content')}>
        {/* Total Invoice */}
        {/* Total Patients */}
        {/* New Patients */}
        {/* Appointments */}

        {statsList &&
          statsList.map((item, index) => (
            <StatsCard
              key={index}
              className={cx('column-span-3')}
              title={item.title}
              icon={item.icon}
              statsNumber={item.statsNumber}
              gapPercent={item.gapPercent}
              gapNumber={item.gapNumber}
              trendDown={item.trendDown}
            />
          ))}

        {/* Patient Overview by age */}
        <div className={cx('patient-overview-by-age', 'column-span-6')}>
          <div className={cx('section-header')}>
            <h5 className={cx('section-heading')}>
              Patient Overview <span>by Age Stages</span>
            </h5>
            <Button
              className={cx('section-btn')}
              rightIcon={<FontAwesomeIcon icon={faChevronDown} />}
            >
              Last 8 Days
            </Button>
          </div>

          <div className={cx('section-body')}>
            <BarChart />
          </div>
        </div>

        {/* Revenue */}
        <div className={cx('revenue', 'column-span-6')}>
          <div className={cx('section-header')}>
            <h5 className={cx('section-heading')}>Revenue</h5>

            <div className={cx('revenue-btn-list')}>
              <Button className={cx('section-btn', 'revenue-btn', 'active')}>
                Week
              </Button>
              <Button className={cx('section-btn', 'revenue-btn')}>
                Month
              </Button>
              <Button className={cx('section-btn', 'revenue-btn')}>Year</Button>
            </div>
          </div>

          <div className={cx('section-body')}>
            <LineChart />
          </div>
        </div>

        {/* Summary container */}
        <div className={cx('summary-container', 'column-span-12')}>
          {/* Patient Overview by departments */}
          <div className={cx('patient-overview-by-departments')}>
            <div className={cx('section-header')}>
              <h5 className={cx('section-heading')}>
                Patient Overview <span>by Departments</span>
              </h5>
              <a href="">
                <FontAwesomeIcon icon={faEllipsis} />
              </a>
            </div>

            <div className={cx('section-body')}>
              <DonutChart />
            </div>
          </div>

          {/* Doctors' Schedule */}
          <div className={cx('doctor-schedule')}>
            <div className={cx('section-header')}>
              <h5 className={cx('section-heading')}>Doctors Schedule</h5>
              <a href="">
                <FontAwesomeIcon icon={faEllipsis} />
              </a>
            </div>

            <ul className={cx('section-body', 'doctors-list')}>
              {/* Doctors' item */}
              <li className={cx('doctors-item')}>
                <a href="" className={cx('doctors-link')}>
                  <img
                    src={images.userAvatar}
                    alt="doctor-avatar"
                    className={cx('doctor-avatar')}
                  />
                  <div className={cx('doctor-info')}>
                    <h6 className={cx('doctor-name')}>
                      Dr.Petra Winsburry
                      <span>General Medicine</span>
                    </h6>

                    <div className={cx('doctor-status')}>
                      <StatusLabel status={Status.AVAILABLE} />
                      <p className={cx('status-time')}>09:00 AM - 12:00 PM</p>
                    </div>
                  </div>
                </a>
              </li>

              {/* Doctors' item */}
              <li className={cx('doctors-item')}>
                <a href="" className={cx('doctors-link')}>
                  <img
                    src={images.userAvatar}
                    alt="doctor-avatar"
                    className={cx('doctor-avatar')}
                  />
                  <div className={cx('doctor-info')}>
                    <h6 className={cx('doctor-name')}>
                      Dr.Petra Winsburry
                      <span>General Medicine</span>
                    </h6>

                    <div className={cx('doctor-status')}>
                      <StatusLabel status={Status.UNAVAILABLE} />
                      <p className={cx('status-time')}>09:00 AM - 12:00 PM</p>
                    </div>
                  </div>
                </a>
              </li>

              {/* Doctors' item */}
              <li className={cx('doctors-item')}>
                <a href="" className={cx('doctors-link')}>
                  <img
                    src={images.userAvatar}
                    alt="doctor-avatar"
                    className={cx('doctor-avatar')}
                  />
                  <div className={cx('doctor-info')}>
                    <h6 className={cx('doctor-name')}>
                      Dr.Petra Winsburry
                      <span>General Medicine</span>
                    </h6>

                    <div className={cx('doctor-status')}>
                      <StatusLabel status={Status.AVAILABLE} />
                      <p className={cx('status-time')}>09:00 AM - 12:00 PM</p>
                    </div>
                  </div>
                </a>
              </li>

              {/* Doctors' item */}
              <li className={cx('doctors-item')}>
                <a href="" className={cx('doctors-link')}>
                  <img
                    src={images.userAvatar}
                    alt="doctor-avatar"
                    className={cx('doctor-avatar')}
                  />
                  <div className={cx('doctor-info')}>
                    <h6 className={cx('doctor-name')}>
                      Dr.Petra Winsburry
                      <span>General Medicine</span>
                    </h6>

                    <div className={cx('doctor-status')}>
                      <StatusLabel status={Status.UNAVAILABLE} />
                      <p className={cx('status-time')}>09:00 AM - 12:00 PM</p>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          {/* Report */}
          <div className={cx('report')}>
            <div className={cx('section-header')}>
              <h5 className={cx('section-heading')}>Report</h5>
              <a href="">
                <FontAwesomeIcon icon={faEllipsis} />
              </a>
            </div>

            <div className={cx('section-body')}>
              <ul className={cx('report-list')}>
                {/* Report item */}
                <li className={cx('report-item')}>
                  <FontAwesomeIcon
                    icon={faBroomBall}
                    className={cx('report-icon')}
                  />
                  <div className={cx('report-info')}>
                    <h5 className={cx('report-heading')}>
                      Room Cleaning Needed{' '}
                      <span className={cx('report-time')}>1 minutes ago</span>
                    </h5>
                    <FontAwesomeIcon
                      className={cx('action-btn')}
                      icon={faArrowRight}
                    />
                  </div>
                </li>

                {/* Report item */}
                <li className={cx('report-item')}>
                  <FontAwesomeIcon
                    icon={faWrench}
                    className={cx('report-icon')}
                  />
                  <div className={cx('report-info')}>
                    <h5 className={cx('report-heading')}>
                      Equipment Maintenance
                      <span className={cx('report-time')}>3 minutes ago</span>
                    </h5>
                    <FontAwesomeIcon
                      className={cx('action-btn')}
                      icon={faArrowRight}
                    />
                  </div>
                </li>

                {/* Report item */}
                <li className={cx('report-item')}>
                  <FontAwesomeIcon
                    icon={faCircleExclamation}
                    className={cx('report-icon')}
                  />
                  <div className={cx('report-info')}>
                    <h5 className={cx('report-heading')}>
                      HVAC System Issue
                      <span className={cx('report-time')}>5 minutes ago</span>
                    </h5>
                    <FontAwesomeIcon
                      className={cx('action-btn')}
                      icon={faArrowRight}
                    />
                  </div>
                </li>

                {/* Report item */}
                <li className={cx('report-item')}>
                  <FontAwesomeIcon
                    icon={faLayerGroup}
                    className={cx('report-icon')}
                  />
                  <div className={cx('report-info')}>
                    <h5 className={cx('report-heading')}>
                      Medication Restock
                      <span className={cx('report-time')}>1 hour ago</span>
                    </h5>
                    <FontAwesomeIcon
                      className={cx('action-btn')}
                      icon={faArrowRight}
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Patient Appointment table */}
        <div className={cx('appointments-section', 'column-span-12')}>
          <div className={cx('section-header')}>
            <h5 className={cx('section-heading')}>Patient Appointment</h5>
            <a href="" className={cx('appointments-view-btn')}>
              View All
            </a>
          </div>

          <div className={cx('section-body')}>
            <AppointmentSummary />
          </div>
        </div>
      </div>

      <div className={cx('sub-content')}>
        {/* Calendar - Date picker + Date timetable */}
        <div className={cx('schedule-overview')}>
          <ScheduleOverview />
        </div>

        {/* Recent Activity */}
        <div className={cx('recent-activity')}>
          <div className={cx('section-header')}>
            <h5 className={cx('section-heading')}>Recent Activity</h5>
            <a href="">
              <FontAwesomeIcon icon={faEllipsis} />
            </a>
          </div>

          <ul className={cx('recent-activity')}>
            <li>
              <FontAwesomeIcon icon={faHospitalUser} />
              <p>
                Patient John Doe registered in the system.
                <span>10:30 AM</span>
              </p>
            </li>

            <li>
              <FontAwesomeIcon icon={faUserDoctor} />
              <p>
                Dr.Smith updated availability for consultations on 23 February
                2025.
                <span>12:30 PM</span>
              </p>
            </li>

            <li>
              <FontAwesomeIcon icon={faCalendarCheck} />
              <p>
                Patient Jane Doe checked in for their appointment.
                <span>13:00 PM</span>
              </p>
            </li>

            <li>
              <FontAwesomeIcon icon={faHospitalUser} />
              <p>
                Patient John Doe registered in the system.
                <span>10:30 AM</span>
              </p>
            </li>

            <li>
              <FontAwesomeIcon icon={faUserDoctor} />
              <p>
                Dr.Smith updated availability for consultations on 23 February
                2025.
                <span>12:30 PM</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
