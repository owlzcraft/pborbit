import React from "react";
import { Box, Flex, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";

import { PhoneIcon } from "@chakra-ui/icons";


const Footer = () => (
  <Box w="100%" as="footer" bg="gray.700" >
   
      <Box m="auto" w="80%"  border=" 1px solid red">
<Image src='/public/logo.png' alt="pb"  w="30px"
              h="30px"  />
      <Grid w="100%" templateColumns="repeat(3, 1fr)" gap={20}>
        <GridItem w="95%" color={"white"} border=" 1px solid red"> 
          <Text>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </Text>
          <Heading >Payment Accept </Heading>
        </GridItem>
        <GridItem m="20px" w="120%" color={"white"} border=" 1px solid red">
          <Flex direction={"column"}>
            <Box display={"flex"}>
              {" "}
              <PhoneIcon pt="6px" boxSize={6} color="purple" /><Text>Call Us: (210) 123451 (Sat-Thursday)</Text>
              <PhoneIcon pt="6px" boxSize={6} color="purple" /><Text>380 St Kilda Road, Georgia, U.S</Text>{" "}
            </Box>
            <Box display={"flex"}> <Text> Get it on App Store </Text> <Text> Get it on App Store </Text> </Box>
            <Box display={"flex"}gap="30px"> <Box>
            <a href="https://www.facebook.com/Bigbasketcom/"><Image
              src="https://cdn-icons-png.flaticon.com/128/733/733547.png"
              alt="insta"
              w="13px"
              h="13px"
            /></a></Box>
           <Box> <a href="https://www.instagram.com/bigbasketcom/"><Image
              src="https://cdn-icons-png.flaticon.com/128/733/733558.png"
              alt="insta"
              w="13px"
              h="13px"
            /></a></Box>
           <Box> <a href="https://twitter.com/Bigbasket_com"><Image
              src="https://cdn-icons-png.flaticon.com/128/733/733579.png"
              alt="insta"
              w="13px"
              h="13px"
            /></a></Box>
           <Box> <a href="https://in.pinterest.com/bigbasketcom/"><Image
              src="https://cdn-icons-png.flaticon.com/128/145/145808.png"
              alt="insta"
              w="13px"
              h="13px"
            /></a></Box>
          </Box>
          </Flex>
         
        </GridItem>
        <GridItem ml="200px" border=" 1px solid red" w="45%"  color={"white"} gap="10px">
          <Text mb={2}>Home</Text>
          <Text mb={2}>About us</Text>
          <Text mb={2}>Terms & Conditions</Text>
          <Text mb={2}>Privacy Polciy</Text>
          <Text mb={2}>Contact Us</Text>
        </GridItem>
      </Grid>
    </Box>
   
    <Text color="white" textAlign="center">
      © {new Date().getFullYear()} PBorbit Pvt. Ltd.. All Right Reserved
    </Text>
  </Box>
);

export default Footer;
