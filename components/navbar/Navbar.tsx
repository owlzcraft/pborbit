import React from "react";
import Link from "next/link";
import { Flex } from "@chakra-ui/react";

const Navbar = () => (
  <Flex w={"70%"} p="4" color="white" justifyContent="space-evenly" >
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
  </Flex>
);

export default Navbar;
