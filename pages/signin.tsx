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
import * as React from "react";

interface ISigninProps {}

const Signin: React.FunctionComponent<ISigninProps> | any = () => {
  return (
    <Flex
      bg="#050017"
      pt={["166px","200px","200px","200px","200px" ]} pb={["110px","400px","400px","40px","140px"]}
     
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
      <Box
        w="22%"
        fontSize={"14px"}
        display="flex"
        alignItems={"center"}
        justifyContent={"space-between"}

        color="#6A6A6A"
      >
        <Checkbox>Remember me</Checkbox>
        <Text fontSize={"14px"}>Forgot Password ?</Text>
      </Box>

      <Button mt="15px" bg="#00E276" color="white" pl="110px" pr="110px">
        Login
      </Button>

      <Text mt="30px" color="white">
        Don’t have an account? SignUp
      </Text>
    </Flex>
  );
};

export default Signin;
