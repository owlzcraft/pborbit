import { Box, Button, Stack, Image, Flex, Spacer } from "@chakra-ui/react";
import React from "react";
import Navbar from "../navbar/Navbar";

function Header() {
  return (
    <>
      <Box display={"flex"} justifyContent="center" id="header">
        <Flex w={"95%"} p="25px" alignItems={"center"}>
          <Box p="2" >
            <Image
              width="150px"
              src="/utils/common/logo.png"
              alt="pborbit_logo"
            />
          </Box>
          <Spacer />
          <Box borderRadius="7px" w="50%" h="60px" bg="teal"> 
          {/* bg="#050116" */}
            <Flex alignItems={"center"} justifyContent="space-arround">
              <Navbar />
              <Button p={2} w={"160px"} colorScheme="whatsapp">
                Login/Signup
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default Header;
