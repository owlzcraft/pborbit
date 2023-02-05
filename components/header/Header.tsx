import { Box, Button, Stack, Image, Flex, Spacer } from "@chakra-ui/react";
import React from "react";
import Navbar from "../navbar/Navbar";

function Header() {
  return (
   
     
        <Flex w={"1500px"} alignItems={"center"} style={{position:"fixed" ,zIndex:"12" }} >
          <Box bg={"teal"} p="2" >
            <Image width="150px" src="/utils/common/logo.png" alt="pborbit_logo" />
          </Box>
          <Spacer />
          <Box  bg="teal" w="50%">
            <Flex
              alignItems={"center"}
              
              justifyContent="space-arround"
            >
              <Navbar  />
              <Button p={2} w={"160px"} colorScheme="whatsapp" >
                Login/Signup
              </Button>
            </Flex>
          </Box>
        </Flex>
     
 
  );
}

export default Header;
