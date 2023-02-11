import * as React from "react";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
interface ISignupProps {}

const Signup: React.FunctionComponent<ISignupProps> | any = () => {
  return (
    <Box bg="#050017" pt="200px">
      <Flex
      
        flexDirection={"column"}
        alignItems={"center"}
        gap="10px"
      >
        <Image width="150px" src="/utils/common/logo.png" alt="pborbit_logo" />
        <Heading color={"white"}>Welcome Back</Heading>
        <Text color={"white"}>Start with signing up or sign in</Text>

        <Box
          display={"flex"}
          border={"1px solid white"}
          borderRadius="5px"
          w="22%"
          pl="10px"
        >
          {" "}
          <Image src="/utils/common/email2.svg" alt="pborbit_logo" />
          <Input color="white" border={"none"} placeholder="Enter Address" />
        </Box>

        <Box
          display={"flex"}
          border={"1px solid white"}
          borderRadius="5px"
          w="22%"
          pl="10px"
        >
          {" "}
          <Image src="/utils/common/attherate.svg" alt="pborbit_logo" />
          <Input color="white" border={"none"} placeholder="Enter Address" />
        </Box>

        <Box
          display={"flex"}
          border={"1px solid white"}
          borderRadius="5px"
          w="22%"
          pl="10px"
          pr="10px"
        >
          {" "}
          <Image src="/utils/common/password.svg" alt="pborbit_logo" />
          <Input color="white" border={"none"} placeholder="Enter Address" />
          <Image src="/utils/common/hide-2.svg" alt="pborbit_logo" />
        </Box>

        <Button mt="15px" bg="#00E276" color="white" pl="100px" pr="100px">
          Sign Up
        </Button>

        <Text mt="30px" color="white">
          Already have an account? Signin
        </Text>
      </Flex>
    </Box>
  );
};

export default Signup;
