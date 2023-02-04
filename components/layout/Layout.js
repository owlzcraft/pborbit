import Head from 'next/head';


import Navbar from './../navbar/Navbar';
import Footer from '../footer/footer.tsx';

function Layout({ children, title = 'My Next.js App' }){
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
