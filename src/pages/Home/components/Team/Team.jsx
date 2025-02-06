import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import styles from './Team.module.scss';
import Header from '../Header';
import Button from '~/components/Button';
import images from '~/assets/images';

const cx = classNames.bind(styles);
const employeeList = [
  {
    img: images.employee1,
    name: 'Dr.Aboobacke',
    title: 'Neurosurgeon',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    img: images.employee2,
    name: 'Dr.Aboobacke',
    title: 'Neurosurgeon',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    img: images.employee1,
    name: 'Dr.Aboobacke',
    title: 'Neurosurgeon',
    description:
      'A hardworking and motivated professional, always striving for excellence in every task. With a keen eye for detail and a passion for innovation, they bring creativity and efficiency to the workplace',
  },
  {
    img: images.employee2,
    name: 'Dr.Aboobacke',
    title: 'Neurosurgeon',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    img: images.employee1,
    name: 'Dr.Aboobacke',
    title: 'Neurosurgeon',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    img: images.employee2,
    name: 'Dr.Aboobacke',
    title: 'Neurosurgeon',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    img: images.employee1,
    name: 'Dr.Aboobacke',
    title: 'Neurosurgeon',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    img: images.employee2,
    name: 'Dr.Aboobacke',
    title: 'Neurosurgeon',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    img: images.employee1,
    name: 'Dr.Aboobacke',
    title: 'Neurosurgeon',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

const Team = () => {
  const employeeListRef = useRef();
  const [activeDot, setActiveDot] = useState(0);

  const itemsPerPage = 4;

  useEffect(() => {
    const handleScroll = () => {
      if (employeeListRef.current) {
        const scrollLeft = employeeListRef.current.scrollLeft;
        const width = employeeListRef.current.clientWidth;
        const activeDot = Math.ceil(scrollLeft / width);
        setActiveDot(activeDot);
      }
    };

    const employeeList = employeeListRef.current;
    employeeList.addEventListener('scroll', handleScroll);
    return () => employeeList.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={cx('team')}>
      <div className={cx('inner')}>
        {/* Header */}
        <Header
          className="text-center"
          subHeading="Our Team"
          heading="Meet our people"
        />

        <ul className={cx('employee-list')} ref={employeeListRef}>
          {employeeList &&
            employeeList.map((employee, index) => (
              <li key={index} className={cx('employee-item')}>
                <img
                  src={employee.img}
                  alt="Dr.Aboobacker"
                  className={cx('employee-img')}
                />
                <div className={cx('employee-content')}>
                  <h3 className={cx('employee-name')}>{employee.name}</h3>
                  <p className={cx('employee-title')}>{employee.title}</p>
                  <p className={cx('employee-desc')}>{employee.description}</p>
                </div>

                <Button
                  round
                  dark
                  className={cx('features-btn')}
                  rightIcon={<FontAwesomeIcon icon={faArrowRight} />}
                >
                  Read more
                </Button>
              </li>
            ))}
        </ul>

        {/* Dot Navigation */}
        <div className={cx('dot-navigation')}>
          {[...Array(Math.ceil(employeeList.length / itemsPerPage))].map(
            (_, index) => (
              <div
                key={index}
                className={cx('dot', { active: activeDot === index })}
              ></div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default Team;
