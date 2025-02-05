import PropTypes from 'prop-types';
import Header from './components/Header/Header';
import Footer from './components/Footer';

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
