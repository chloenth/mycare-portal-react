import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import Vision from './components/Vision';
import Features from './components/Features';

const cx = classNames.bind(styles);

const Home = () => {
  return (
    <div className={cx('wrapper')}>
      {/* Our Vision */}
      <Vision />

      {/* Features */}
      <Features />

      {/* Our Team */}
      {/* Latest News */}
      {/* Contact */}
    </div>
  );
};

export default Home;
