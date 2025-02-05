import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import Vision from './components/Vision';

const cx = classNames.bind(styles);

const Home = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('vision')}>
        {/* Our Vision */}
        <Vision />

        {/* Features */}

        {/* Our Team */}
        {/* Latest News */}
        {/* Contact */}
      </div>
    </div>
  );
};

export default Home;
