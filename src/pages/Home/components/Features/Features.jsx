import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import styles from './Features.module.scss';
import Header from '../Header';
import Button from '~/components/Button';
import images from '~/assets/images';

const cx = classNames.bind(styles);

const Features = () => {
  return (
    <section className={cx('features')}>
      <div className={cx('inner')}>
        {/* Header */}
        <Header subHeading="Features" heading="State of the art treatment" />

        {/* Art Treatment list */}
        <ul className={cx('art-treatment-list')}>
          <li className={cx('art-treatment-item')}>
            <div
              style={{ backgroundImage: `url(${images.treatmentRobotic})` }}
              className={cx('art-treatment-img')}
            />
            <p className={cx('art-treatment-desc')}>Robotic Surgery</p>
          </li>

          <li className={cx('art-treatment-item')}>
            <div
              style={{ backgroundImage: `url(${images.treatment3DMapping})` }}
              className={cx('art-treatment-img')}
            />
            <p className={cx('art-treatment-desc')}>3D Mapping</p>
          </li>

          <li className={cx('art-treatment-item')}>
            <div
              style={{
                backgroundImage: `url(${images.treatment3DPrintedOrgans})`,
              }}
              className={cx('art-treatment-img')}
            />
            <p className={cx('art-treatment-desc')}>3D Printed organs</p>
          </li>

          <li className={cx('art-treatment-item')}>
            <div
              style={{
                backgroundImage: `url(${images.treatmentAiSurgery})`,
              }}
              className={cx('art-treatment-img')}
            />
            <p className={cx('art-treatment-desc')}>AI Surgery</p>
          </li>
        </ul>

        <Button
          round
          dark
          className={cx('features-btn')}
          rightIcon={<FontAwesomeIcon icon={faArrowRight} />}
        >
          Read more
        </Button>

        {/* iframe - video */}
        <iframe
          width="80%"
          height="515"
          src="https://www.youtube.com/embed/gdMS0J2WxRg"
          allow="autoplay; encrypted-media"
          allowfullscreen
          className={cx('features-video')}
        ></iframe>
      </div>
    </section>
  );
};

export default Features;
