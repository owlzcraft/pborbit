import Head from "next/head";

// import Footer from "./../footer/footer";
import Header from "../header/Header";

import {
  Box,
 
} from "@chakra-ui/react";
import Navbar from './../navbar/Navbar';
import Footer from '../footer/footer.tsx';

function Layout({ children, title = 'My Next.js App' }){

  return (
    <Box>
      <Header />
      {children}
      <Footer />
    </Box>
  );
}

export default Layout;
