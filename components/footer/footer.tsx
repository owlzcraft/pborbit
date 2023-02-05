import React from "react";
import { Box, Flex, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";

import { PhoneIcon } from "@chakra-ui/icons";


const Footer = () => (

  <Box w={{lg:"100%",md:"100%",sm:"100%"}} as="footer" bg="#050017" >
    <Box m="auto" w={{lg:"80%",md:"80%",sm:"80%"}} pb={{lg:"70px",md:"20px" ,sm:"20px"}} pt={{lg:"70px",md:"20px" ,sm:"20px"}} >

      <Image src="/utils/Common/logo.png" w={{lg:"16%",md:"24%",sm:"24%"}}  mb={2} />

      <Grid w={{lg:"100%",md:"100%",sm:"100%"}}  templateColumns={{lg:"repeat(3, 1fr)" ,sm:"repeat(1, 1fr)"}} gap={1}>
        <GridItem w={{lg:"95%",md:"95%",sm:"95%"}} color={"white"}   >

          <Text color="#B4B4B6">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </Text>
          <Text  fontSize='24px' mt="20px" mb="20px" >Payment Accept </Text>
           <Box>
<Box display={"flex"} alignContent="center" pl="4px" ><Box border={"1px solid #B4B4B6"} w="43px" h="1px" mt="12px"></Box> 
<Image src="/utils/Common/paypal.png" w={{lg:"16%",md:"24%",sm:"24%"}}  /><Box border={"1px solid #B4B4B6"} w="43px" h="1px" mt="12px"></Box>    </Box>
<Box display={"flex"}>
  <Image src="/utils/Common/visa.png" boxSize={{lg:"10%",md:"24%",sm:"24%"}}  /> 
<Image src="/utils/Common/master.png" boxSize={{lg:"10%",md:"24%",sm:"24%"}}  />
<Image src="/utils/Common/discover.png" boxSize={{lg:"10%",md:"24%",sm:"24%"}}  />
<Image src="/utils/Common/american.png" boxSize={{lg:"10%",md:"24%",sm:"24%"}}  /> 
</Box>


           </Box>

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
