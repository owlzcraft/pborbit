import Header from "../header/Header";
import Footer from "../footer/footer.tsx";
import { Box, Image } from "@chakra-ui/react";

import {
  Box,
 
} from "@chakra-ui/react";
import Navbar from './../navbar/Navbar';
import Footer from '../footer/footer.tsx';

function Layout({ children, title = 'My Next.js App' }){

  return (
    <Box>

      <Header />
      <Image position={"absolute"} right="10px" top={"-10px"} src="https://harvijas.com/wp-content/uploads/2021/05/banner-design.png" alt="" />
      {children}
      <Footer />
    </Box>
  );
}

export default Layout;
