import { Box, Button, Center, Heading, Image, Text } from '@chakra-ui/react';
// import Image from 'next/image';
// import Image from 'next/image';
import React from 'react';
import { FunctionComponent } from 'react'
const How_it_work: FunctionComponent = () => {
    return (
     

        <Box>
        <Box>
          {" "}
          <Center>
            {" "}
            <Heading>How it Works</Heading>{" "}
          </Center>
          <Center mt="20px">
            {" "}
            <Text w="35%" textAlign="center" color="#B4B4B6">
              Lorem Ipsum is simply dummy text of the printing and type
              setting industryLorem Ipsum is simply
            </Text>{" "}
          </Center>
          <Center mt="20px">
            <Box bg={"white"} w="30%" borderRadius={"50px"}>
              <Button
                bg="#336EB1"
                w="50%"
                fontSize={"15px"}
                h="50px"
                borderRadius={"50px"}
              >
                {" "}
                Get Sarted{" "}
              </Button>
              <Button
                bg="white"
                color="black"
                w="50%"
                fontSize={"15px"}
                h="50px"
                borderRadius={"50px"}
              >
                {" "}
                Get Sarted{" "}
              </Button>
            </Box>
          </Center>{" "}
        </Box>
        <Box display="flex" pl="300px" pr="250px">

          <Box>

            <Image src="/utils/Common/how-player.png" alt="pb" />
          </Box>
          <Box p="120px">

            <Box display="flex" alignItems="center" gap={"25px"}>
              <Center boxSize="90px"
                display="flex"


                // textAlign={"center"}
                alignItems="center"
                bg="red"
                borderRadius="50%"
                color="black">
                <Center boxSize="80px"
                  // textAlign={"center"}
                  // alignItems="center"
                  bg="white"
                  borderRadius="50%"
                  color="black"  >01</Center> </Center>
              <Text> Create free account on PBorbit</Text>
            </Box>
            <Box display="flex" alignItems="center" gap={"25px"}>
              <Box boxSize="90px"
                textAlign={"center"}
                alignItems="center"
                bg="white"
                borderRadius="50%"
                color="black">02</Box>
              <Text>  Setup your account and website</Text>
            </Box>
            <Box display="flex" alignItems="center" gap={"25px"}>
              <Box boxSize="90px"
                textAlign={"center"}
                alignItems="center"
                bg="white"
                borderRadius="50%"
                color="black">03</Box>
              <Text>Reserve court and start Play</Text>
            </Box>
          </Box>

        </Box>/

        <Center>
         
          <Button
            mt="40px"
            colorScheme="whatsapp"
            w="20%"
            fontSize={"20px"}
            h="40px"
            borderRadius={"20px"}
          >
         
            Get Sarted
          </Button>
        </Center>
      </Box>
    );
  };
  export default How_it_work;
  