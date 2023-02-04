import { Box, Button, Stack, Image, Flex, Spacer } from "@chakra-ui/react";
import React from "react";
import Navbar from "../navbar/Navbar";

function Header() {
  return (
    <>
      <header>
        <Flex w={"1500px"} alignItems={"center"}>
          <Box bg={"teal"} p="2" >
            <Image width="150px" src="pborbit.png" alt="Logo" />
          </Box>
          <Spacer />
          <Box  bg="teal" w="50%">
            <Flex
              alignItems={"center"}
              spacing={8}
              justifyContent="space-arround"
            >
              <Navbar  />
              <Button p={2} w={"160px"} colorScheme="whatsapp" N={40}>
                Login/Signup
              </Button>
            </Flex>
          </Box>
        </Flex>
      </header>
    </>
  );
}

export default Header;
