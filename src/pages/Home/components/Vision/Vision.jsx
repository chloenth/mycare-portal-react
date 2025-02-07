import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import styles from './Vision.module.scss';
import Button from '~/components/Button';
import images from '~/assets/images';
import Header from '../Header';

const cx = classNames.bind(styles);

const Vision = () => {
  return (
    <section className={cx('vision')}>
      <div className={cx('inner')}>
        {/* Our Vision - Intro */}
        <div className={cx('vision-intro')}>
          <Header
            subHeading="Our Vision"
            heading="Get the best treatment in MyCare Portal"
          />

          <p className={cx('vision-desc')}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique
            arcu a nisi, semper. Ut cras odio ac sem ac.
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
            pillShaped
            dark
            className={cx('book-btn')}
            rightIcon={<FontAwesomeIcon icon={faArrowRight} />}
          >
            Book a session
          </Button>
        </div>

        {/* Our Vision - Image */}
        <img className={cx('vision-img')} src={images.vision} alt="vision" />
      </div>
    </section>
  );
};

export default Vision;
