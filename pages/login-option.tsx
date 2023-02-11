import { Box, Button, Center, Flex, Heading, Image, Text } from "@chakra-ui/react";
import * as React from "react";

interface IAppProps {}

const Login_option: React.FunctionComponent<IAppProps> | any = () => {
  return (
    <Box bg="#050017" pt="200px">
      <Flex flexDirection={"column"} alignItems="center" gap={"20px"}>
        <Image src="/utils/Common/logo.png" alt="" />
<Heading color={"white"}>Let’s Get Started</Heading>

<Text color={"white"}>Start with signing up or sign in</Text>
        <Flex
          w="18%"
          alignItems="center"
          bg=" white"
          gap={"10px"}
          p="10px"
        //   color={""}
          borderRadius={"10px"}
        >
          {" "}
          <Box>
            <Image src="/utils/Common/email.svg" alt="" />{" "}
          </Box>{" "}
          <Box w="80%"  >

          <Text

//   w="100%"
textAlign={"center"}
            fontSize={"15px"}
            >
            Sign up with Email
          </Text>{" "}
              </Box>
        </Flex>
        <Box color={"white"}>OR</Box>
        <Flex
          w="18%"
          alignItems="center"
          bg=" white"
          gap={"10px"}
          p="10px"
        //   color={"white"}
          borderRadius={"10px"}
        >
          <Box>
            {" "}
            <Image src="/utils/Common/apple.svg" alt="" />
          </Box>{" "}
          <Box w="80%" >

          <Text
            fontSize={"15px"}
            // h="40px"
            borderRadius={"20px"}
            align="center"
            >
            Sign up with Apple
          </Text>{" "}
              </Box>
        </Flex>
        <Flex
          w="18%"
          alignItems="center"
          bg=" white"
          gap={"10px"}
          p="10px"
        //   color={"white"}
          borderRadius={"10px"}
        >
       
            <Image src="/utils/Common/google.svg" alt="" />
   <Box w="80%" >

          <Text
            fontSize={"15px"}
            // h="40px"
            textAlign="center"
            >
      Sign up with Google
          </Text>
              </Box>
        </Flex>
        <Text color="white">Already have an account? Signin</Text>
      </Flex>
    </Box>
  );
};

export default Login_option;
