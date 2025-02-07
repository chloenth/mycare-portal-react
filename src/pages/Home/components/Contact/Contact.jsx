import classNames from 'classnames/bind';
import styles from './Contact.module.scss';
import Header from '../Header';

const cx = classNames.bind(styles);

const Contact = () => {
  return (
    <section className={cx('contact')}>
      <div className={cx('inner')}>
        {/* Header */}
        <Header subHeading="Contact Us" heading="Get better care" />
      </div>
    </section>
  );
};

export default Contact;
