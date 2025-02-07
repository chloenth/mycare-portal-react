import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faLocationDot,
  faMobileButton,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import styles from './Contact.module.scss';
import Header from '../Header';

import Button from '~/components/Button';

const cx = classNames.bind(styles);

const Contact = () => {
  return (
    <section className={cx('contact')}>
      <div className={cx('inner')}>
        {/* Header */}
        <Header
          className="text-center"
          subHeading="Contact Us"
          heading="Get better care"
        />

        <div className={cx('contact-info')}>
          <ul className={cx('contact-list')}>
            <li className={cx('contact-item')}>
              <FontAwesomeIcon
                className={cx('contact-icon')}
                icon={faLocationDot}
              />
              Chicago, US
            </li>
            <li className={cx('contact-item')}>
              <FontAwesomeIcon
                className={cx('contact-icon')}
                icon={faMobileButton}
              />
              Phone: <a href="tel:+00 151515">+00 151515</a>
            </li>
            <li className={cx('contact-item')}>
              <FontAwesomeIcon
                className={cx('contact-icon')}
                icon={faEnvelope}
              />
              Email: <a href="mailto:mail@mail.com">mail@mail.com</a>
            </li>
          </ul>

          <form action="" className={cx('contact-form')}>
            <div className={cx('form-container')}>
              <input
                type="text"
                placeholder="Name"
                required
                className={cx('form-name')}
              />
              <input
                type="email"
                placeholder="Email"
                required
                className={cx('form-email')}
              />
              <textarea
                type="text"
                placeholder="Message"
                required
                className={cx('form-message')}
              />
            </div>

            <Button className={cx('form-btn')} dark>
              SEND
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
