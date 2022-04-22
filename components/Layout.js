import Header from './Header';
import Footer from './Footer';

const Layout = (props) => {
  return (
    <div className='relative'>
      <div className='top-0'>
        <Header />
      </div>
      {props.children}
      <div className='bottom-0'>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
