import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import Vision from './components/Vision';
import Features from './components/Features';
import Team from './components/Team';
import News from './components/News';
import Contact from './components/Contact';

const cx = classNames.bind(styles);

const Home = () => {
  return (
    <div className={cx('wrapper')}>
      {/* Our Vision */}
      <Vision />

      {/* Features */}
      <Features />

      {/* Our Team */}
      <Team />

      {/* Latest News */}
      <News />

      {/* Contact */}
      <Contact />
    </div>
  );
};

export default Home;
