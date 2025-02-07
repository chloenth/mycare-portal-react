// import { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import styles from './News.module.scss';
import Header from '../Header';
import Button from '~/components/Button';
import images from '~/assets/images';
import DotNavigation from '../DotNavigation';
import { useScrollNavigation } from '~/hooks';

const cx = classNames.bind(styles);

const newsList = [
  {
    image: images.vision,
    date: '16th March 2021',
    title:
      'Dr.Aboobacker and team succesfully done the world’s first head implant.',
    content:
      'A hardworking and motivated professional, always striving for excellence in every task. With a keen eye for detail and a passion for innovation, they bring creativity and efficiency to the workplace',
  },
  {
    image: images.treatmentRobotic,
    date: '16th March 2021',
    title:
      'Dr.Aboobacker and team succesfully done the world’s first head implant.',
    content:
      'A hardworking and motivated professional, always striving for excellence in every task. With a keen eye for detail and a passion for innovation, they bring creativity and efficiency to the workplace',
  },
  {
    image: images.treatment3DMapping,
    date: '16th March 2021',
    title:
      'Dr.Aboobacker and team succesfully done the world’s first head implant.',
    content:
      'A hardworking and motivated professional, always striving for excellence in every task. With a keen eye for detail and a passion for innovation, they bring creativity and efficiency to the workplace',
  },
  {
    image: images.treatment3DPrintedOrgans,
    date: '16th March 2021',
    title:
      'Dr.Aboobacker and team succesfully done the world’s first head implant.',
    content:
      'A hardworking and motivated professional, always striving for excellence in every task. With a keen eye for detail and a passion for innovation, they bring creativity and efficiency to the workplace',
  },
  {
    image: images.treatmentAiSurgery,
    date: '16th March 2021',
    title:
      'Dr.Aboobacker and team succesfully done the world’s first head implant.',
    content:
      'A hardworking and motivated professional, always striving for excellence in every task. With a keen eye for detail and a passion for innovation, they bring creativity and efficiency to the workplace',
  },
  {
    image: images.vision,
    date: '16th March 2021',
    title:
      'Dr.Aboobacker and team succesfully done the world’s first head implant.',
    content:
      'A hardworking and motivated professional, always striving for excellence in every task. With a keen eye for detail and a passion for innovation, they bring creativity and efficiency to the workplace',
  },
];

const News = () => {
  const { containerRef, activeDot } = useScrollNavigation();
  const itemsPerPage = 4;

  return (
    <section className={cx('news')}>
      <div className={cx('inner')}>
        {/* Header */}
        <Header subHeading="Latest News" heading="Hot Topics" />

        <ul className={cx('news-list')} ref={containerRef}>
          {newsList &&
            newsList.map((item, index) => (
              <li key={index} className={cx('news-item')}>
                <div
                  style={{ backgroundImage: `url(${item.image})` }}
                  className={cx('news-img')}
                />
                <div className={cx('news-body')}>
                  <p className={cx('news-date')}>{item.date}</p>
                  <h3 className={cx('news-title')}>{item.title}</h3>
                  <p className={cx('news-content')}>{item.content}</p>

                  <div className={cx('news-btn')}>
                    <Button
                      dark
                      roundIcon
                      rightIcon={<FontAwesomeIcon icon={faArrowRight} />}
                    ></Button>
                  </div>
                </div>
              </li>
            ))}
        </ul>

        {/* Dot Navigation */}
        <DotNavigation
          length={newsList.length}
          activeDot={activeDot}
          itemsPerPage={itemsPerPage}
        />
      </div>
    </section>
  );
};

export default News;
