import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import styles from './Vision.module.scss';
import Button from '~/components/Button';
import images from '~/assets/images';

const cx = classNames.bind(styles);

const Vision = () => {
  return (
    <section className={cx('vision')}>
      <div className={cx('inner')}>
        <div className={cx('grid')}>
          <div className={cx('container row')}>
            {/* Our Vision - Intro */}
            <div className={cx('vision-intro col c-6')}>
              <div className={cx('vision-header')}>
                <p className={cx('vision-sub-heading')}>Our Vision</p>
                <h2 className={cx('vision-heading')}>
                  Get the best treatment in MyCare Portal
                </h2>
              </div>

              <p className={cx('vision-desc')}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tristique arcu a nisi, semper. Ut cras odio ac sem ac.
              </p>

              <ul className={cx('vision-list')}>
                <li className={cx('vision-item')}>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className={cx('vision-icon')}
                  />
                  <span className={cx('vision-text')}>
                    Best and timely diagnosis
                  </span>
                </li>
                <li className={cx('vision-item')}>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className={cx('vision-icon')}
                  />
                  <span className={cx('vision-text')}>
                    Advanced medical equipments
                  </span>
                </li>
                <li className={cx('vision-item')}>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className={cx('vision-icon')}
                  />
                  <span className={cx('vision-text')}>
                    Experienced Professionals
                  </span>
                </li>
              </ul>

              <Button
                round
                dark
                className={cx('book-btn')}
                rightIcon={<FontAwesomeIcon icon={faArrowRight} />}
              >
                Book a session
              </Button>
            </div>

            <div className={cx('col c-1')}></div>

            {/* Our Vision - Image */}
            <img
              className={cx('vision-img', 'col', 'c-5')}
              src={images.vision}
              alt="vision"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
