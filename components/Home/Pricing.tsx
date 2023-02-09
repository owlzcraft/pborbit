/* eslint-disable jsx-a11y/alt-text */
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FunctionComponent } from "react";

const Pricing: FunctionComponent = () => {
    const newLocal:object = {
        w:"55%",
        position:"absolute",
        bottom:"10px",
        right:"30px",
        src:"/utils/Common/price-bg.png",
        alt:"pborbit",

        zIndex:"-1"} 
  return (
    <Box position={"relative"} zIndex="0">
      <Center mt="40px">
        {" "}
        <Heading>{"How it Works"}</Heading>{" "}
      </Center>
      <Center mt="20px">
        {" "}
        <Text w={["90%","35%"]} textAlign="center" color="#B4B4B6">
          Lorem Ipsum is simply dummy text of the printing and type setting
          industryLorem Ipsum is simply
        </Text>{" "}
      </Center>
      <Center>
        <Flex gap={10} mt="40px"  display={{ lg: "flex", md: "flex", sm: "block" }}>
          <Box bg="#10023B" w={["90%","50%"]}borderRadius={"10px"} position={"relative"}>
            <Image
              position={"absolute"}
              w="15%"
              src="/utils/Common/price-player.png"
              alt="pb"
              top="20px"
              left="20px"
            />
            <Center
              bg="#4B3294"
              borderTopEndRadius={"10px"}
              borderTopStartRadius={"10px"}
              mb="10px"
            >
              <Heading fontSize="20px" p="20px">
                {" "}
                Player{" "}
              </Heading>{" "}
            </Center>

            <Center>
              <Flex>
                {" "}
                <Heading fontSize="20px">$12</Heading> <Text> per annul</Text>{" "}
              </Flex>
            </Center>
            <Center mb="20px" mr="60px">
              <Text color="#B4B4B6" fontSize="10px">
                of single{" "}
              </Text>
            </Center>
            <Box p="20px">
              <Box display="flex" alignItems="center" gap={"10px"}>
                {" "}
                <Image
                  boxSize="20px"
                  src="/utils/Common/checklist.png"
                  alt="pb"
                />{" "}
                <Text> Court reservations</Text>
              </Box>
              <Box display="flex" alignItems="center" gap={"10px"}>
                {" "}
                <Image
                  boxSize="20px"
                  src="/utils/Common/checklist.png"
                  alt="pb"
                />
                <Text> Community Manage</Text>
              </Box>
              <Box display="flex" alignItems="center" gap={"10px"}>
                {" "}
                <Image
                  boxSize="20px"
                  src="/utils/Common/checklist.png"
                  alt="pb"
                />
                <Text> Manage Your Court Easily</Text>
              </Box>
              <Box display="flex" alignItems="center" gap={"10px"}>
                {" "}
                <Image
                  boxSize="20px"
                  src="/utils/Common/checklist.png"
                  alt="pb"
                />
                <Text> Court reservations</Text>
              </Box>
              <Box display="flex" alignItems="center" gap={"10px"}>
                {" "}
                <Image
                  boxSize="20px"
                  src="/utils/Common/checklist.png"
                  alt="pb"
                />
                <Text> Install app and get Rewards</Text>
              </Box>

              <Box display="flex" alignItems="center" gap={"10px"}>
                {" "}
                <Image
                  boxSize="20px"
                  src="/utils/Common/checklist.png"
                  alt="pb"
                />
                <Text> Community Manage</Text>
              </Box>

              <Center>
                <Button
                  mt="30px"
                  colorScheme="whatsapp"
                  w="50%"
                  fontSize={"13px"}
                  h="30px"
                  borderRadius={"20px"}
                >
                  {" "}
                  Get Sarted{" "}
                </Button>
              </Center>
            </Box>
          </Box>
          <Box bg="#10023B" w={["90%","50%"]} mt={["20px","0px"]} mb={["20px" ,"0px"]} borderRadius={"10px"} position={"relative"}>
            <Image
              position={"absolute"}
              w="15%"
              src="/utils/Common/price-player.png"
              alt="pb"
              top="20px"
              left="20px"
            />
            <Center
              bg="#4B3294"
              borderTopEndRadius={"10px"}
              borderTopStartRadius={"10px"}
              mb="10px"
            >
              <Heading fontSize="20px" p="20px">
                {" "}
                Player{" "}
              </Heading>{" "}
            </Center>

            <Center>
              <Flex>
                {" "}
                <Heading fontSize="20px">$12</Heading> <Text> per annul</Text>{" "}
              </Flex>
            </Center>
            <Center mb="20px" mr="60px">
              <Text color="#B4B4B6" fontSize="10px">
                of single{" "}
              </Text>
            </Center>
            <Box p="20px">
              <Box display="flex" alignItems="center" gap={"10px"}>
                {" "}
                <Image
                  boxSize="20px"
                  src="/utils/Common/checklist.png"
                  alt="pb"
                />{" "}
                <Text> Court reservations</Text>
              </Box>
              <Box display="flex" alignItems="center" gap={"10px"}>
                {" "}
                <Image
                  boxSize="20px"
                  src="/utils/Common/checklist.png"
                  alt="pb"
                />
                <Text> Community Manage</Text>
              </Box>
              <Box display="flex" alignItems="center" gap={"10px"}>
                {" "}
                <Image
                  boxSize="20px"
                  src="/utils/Common/checklist.png"
                  alt="pb"
                />
                <Text> Manage Your Court Easily</Text>
              </Box>
              <Box display="flex" alignItems="center" gap={"10px"}>
                {" "}
                <Image
                  boxSize="20px"
                  src="/utils/Common/checklist.png"
                  alt="pb"
                />
                <Text> Court reservations</Text>
              </Box>
              <Box display="flex" alignItems="center" gap={"10px"}>
                {" "}
                <Image
                  boxSize="20px"
                  src="/utils/Common/checklist.png"
                  alt="pb"
                />
                <Text> Install app and get Rewards</Text>
              </Box>

              <Box display="flex" alignItems="center" gap={"10px"}>
                {" "}
                <Image
                  boxSize="20px"
                  src="/utils/Common/checklist.png"
                  alt="pb"
                />
                <Text> Community Manage</Text>
              </Box>
              <Center>
                <Button
                  mt="30px"
                  colorScheme="whatsapp"
                  w="50%"
                  fontSize={"13px"}
                  h="30px"
                  borderRadius={"20px"}
                >
                  {" "}
                  Get Sarted{" "}
                </Button>
              </Center>
            </Box>
          </Box>{" "}
        </Flex>
      </Center>

      <Image style= {newLocal}  />
    </Box>
  );
};
export default Pricing;
