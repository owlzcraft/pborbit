import React from "react";
import { Box, Flex, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";

import { PhoneIcon } from "@chakra-ui/icons";


const Footer = () => (
  <Box w="100%" as="footer" bg="gray.700" py={8}>
    <Box pl="20px">
<img src="./logo.png" alt="pb" />
      <Grid w="100%" templateColumns="repeat(3, 1fr)" gap={1}>
        <GridItem w="35%" color={"white"}>
          <Text>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </Text>
          <Heading >Patment Accept </Heading>
        </GridItem>
        <GridItem w="75%" color={"white"}>
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
              w="30px"
              h="30px"
            /></a></Box>
           <Box> <a href="https://www.instagram.com/bigbasketcom/"><Image
              src="https://cdn-icons-png.flaticon.com/128/733/733558.png"
              alt="insta"
              w="30px"
              h="30px"
            /></a></Box>
           <Box> <a href="https://twitter.com/Bigbasket_com"><Image
              src="https://cdn-icons-png.flaticon.com/128/733/733579.png"
              alt="insta"
              w="30px"
              h="30px"
            /></a></Box>
           <Box> <a href="https://in.pinterest.com/bigbasketcom/"><Image
              src="https://cdn-icons-png.flaticon.com/128/145/145808.png"
              alt="insta"
              w="30px"
              h="30px"
            /></a></Box>
          </Box>
          </Flex>
         
        </GridItem>
        <GridItem w="35%" color={"white"}>
          <Text>Home</Text>
          <Text>About us</Text>
          <Text>Terms & Conditions</Text>
          <Text>Privacy Polciy</Text>
          <Text>Contact Us</Text>
        </GridItem>
      </Grid>
    </Box>

    <Text color="white" textAlign="center">
      © {new Date().getFullYear()} PBorbit Pvt. Ltd.. All Right Reserved
    </Text>
  </Box>
);

export default Footer;
