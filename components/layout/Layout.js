import Header from "../header/Header";
import Footer from "../footer/footer.tsx";
import { Box, Image } from "@chakra-ui/react";

function Layout({ children, title = "My Next.js App" }) {
  return (
    <Box bg="#050116" position={"relative"} zIndex="22">
      <Header />
      <Image position={"absolute"} right="10px" top={"-10px"} src="https://harvijas.com/wp-content/uploads/2021/05/banner-design.png" alt="" />
      {children}
      <Footer />
    </Box>
  );
}

export default Layout;
