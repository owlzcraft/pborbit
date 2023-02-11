import { Box, Button, Center, Flex, Image, Text } from "@chakra-ui/react";
import * as React from "react";
import Link from "next/link";
interface IAppProps {}

const Login: React.FunctionComponent<IAppProps> | any = () => {
  return (
    <Box bg="#050017" pt={["166px","200px","200px","200px","200px" ]}pb={["110px","400px","400px","40px","40px"]} position="relative" >
        <Image w={["80%","41%","41%","41%","41%" ]}position="absolute" bottom={["14px","0px" ]} src="/utils/Common/bg.png" alt="" />
      <Flex flexDirection={"column"} alignItems="center" gap={"20px"}>
        <Image w={["41%","41%","41%","41%","20%" ]} mb={["20px","20px","20px","20px" ,"20px"]} src="/utils/Common/logo.png" alt="" />

        <Flex
         w={["50%","41%","41%","18%","18%" ]}
         alignItems="center"
         bg=" #1ED760"
         gap={[ "0px", "10px"]}
         p={[ "10px", "10px"]}
         color={"white"}
         borderRadius={"10px"}
        >
          <Link href="/signup"></Link>
          <Box>
            <Image  w={["50%","100%" ]}  src="/utils/Common/user.svg" alt="" />{" "}
          </Box>{" "}
          <Text
           
            fontSize={["10px", "14px"]}
          >
            Signup as Player
          </Text>{" "}
        </Flex>
        <Box color={"white"}>OR</Box>
        <Flex
           w={["50%","41%","41%","22%","22%" ]}
          alignItems="center"
          bg=" #1ED760"
          gap={[ "0px", "10px"]}
          p={[ "10px", "10px"]}
          color={"white"}
          borderRadius={"10px"}
        >
          <Link href="/signup">
          <Box>
            {" "}
            <Image w={["50%","100%" ]}  src="/utils/Common/user2.svg" alt="" />
          </Box>{" "}
          <Text
            fontSize={["10px", "14px"]}
            // h="40px"
            borderRadius={"20px"}
          >
            Signup as HOA Admin
          </Text>
          </Link> 
        </Flex>

        <Image  w={["36%","12%" ]} src="/utils/Common/play-player.png" alt="" />

        <Text color="white">Already have an account? Signin</Text>
      </Flex>
    </Box>
  );
};

export default Login;
