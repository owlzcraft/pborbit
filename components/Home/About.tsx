import { Box, Button, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { FunctionComponent } from 'react'
import { Fade } from 'react-reveal';
import { Flex } from '@chakra-ui/react';
const About: FunctionComponent = () => {
    return (
        <Box
       
        justifyContent="space-between"
        mt="40px"
        p={["40px","20px","50px","100px", "120px"]}
        display={[ "block", "flex",  "flex"  ,"flex","flex" ]}
      >
        <Box>
        <Fade left casecode>
          <Image src="/utils/Common/about-img.png" alt="pborbit" />
          </Fade>
        </Box>
        <Box pl={["0px", "0px","60px", "90px", "190px"]} w={["90%","50%","50%","50%","50%" ]}mt="80px">
        <Fade right casecode>
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
<Flex flexDirection={"column"} gap="10px" >
          <Box display="flex" alignItems="center" gap={"10px"}>
            {" "}
            <Image
              boxSize={["20px","20px","20px","20px","20px"]}
              src="/utils/Common/checklist.png"
              alt="pb"
             
            />{" "}
            <Text> Court reservations</Text>
          </Box>
          <Box display="flex" alignItems="center" gap={"10px"}>
            {" "}
            <Image
              boxSize={["20px"]}
              src="/utils/Common/checklist.png"
              alt="pb"
            />
            <Text> Community Manage</Text>
          </Box>
          <Box display="flex" alignItems="center" gap={"10px"}>
            {" "}
            <Image
              boxSize={["20px"]}
              src="/utils/Common/checklist.png"
              alt="pb"
            />
            <Text> Manage Your Court Easily</Text>
          </Box>
          <Box display="flex" alignItems="center" gap={"10px"}>
            {" "}
            <Image
              boxSize={["20px"]}
              src="/utils/Common/checklist.png"
              alt="pb"
            />
            <Text> Court reservations</Text>
          </Box>
          <Box display="flex" alignItems="center" gap={"10px"}>
            {" "}
            <Image
              boxSize={["20px"]}
              src="/utils/Common/checklist.png"
              alt="pb"
            />
            <Text> Install app and get Rewards</Text>
          </Box>

          <Box display="flex" alignItems="center" gap={"10px"}>
            {" "}
            <Image
              boxSize={["20px"]}
              src="/utils/Common/checklist.png"
              alt="pb"
            />
            <Text> Community Manage</Text>
          </Box>

          <Button
          mt={["10px", "10px", "10px","10px" ,"40px"]}
          colorScheme="whatsapp"
          w={["100%", "100%", "100%", "100%","100%"]}
          fontSize={["15px", "16px", "16px", "16px","16px", "20px"]}
          h={["40px", "30px", "30px", "40px","40px"]}
          borderRadius={["20px", "20px", "20px", "20px","20px"]}
        >
          Get Sarted →
        </Button>
        </Flex>
        </Fade>
        </Box>
      </Box>

    );
  };
  export default About;
  