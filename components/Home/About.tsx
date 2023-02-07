import { Box, Button, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { FunctionComponent } from 'react'
const About: FunctionComponent = () => {
    return (
        <Box
        display={"flex"}
        justifyContent="space-between"
        mt="40px"
        p="120px"
      >
        <Box>
          <Image src="/utils/Common/about-img.png" alt="pborbit" />{" "}
        </Box>
        <Box pl="190px" w="50%" mt="80px">
          <Heading>About PBorbit</Heading>
          <Text pt="10px" color="#B4B4B6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industryLorem Ipsum is simply dummy Lorem Ipsum is simply dummy
            text of the printing typesetting industryLorem Ipsum is simply
            dummy
          </Text>
          <Heading mt="10px" mb="10px">
            What we do
          </Heading>

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

          <Button
            mt="40px"
            colorScheme="whatsapp"
            w="50%"
            fontSize={"20px"}
            h="40px"
            borderRadius={"20px"}
          >
            {" "}
            Get Sarted{" "}
          </Button>
        </Box>
      </Box>

    );
  };
  export default About;
  