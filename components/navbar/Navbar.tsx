import React from "react";
import Link from "next/link";
import { Flex, HStack } from "@chakra-ui/react";

const Navbar = () => (
  <Flex w={"70%"}  p="4"  color="red">
    <HStack w="100%" spacing={10}>
      <Link href="/">
        <h1>Home</h1>
      </Link>
      <Link href="/Features">
        <h1>Features</h1>
      </Link>
      <Link href="/Pricing">
        <h1>Pricing</h1>
      </Link>
      <Link href="/Contactus">
        <h1>Contact Us</h1>
      </Link>
    </HStack>
  </Flex>
);

export default Navbar;
