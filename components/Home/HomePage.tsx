import { Box, Button, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { FunctionComponent } from 'react'
const HomePage: FunctionComponent = () => {
    return (
        <Box pt="320px" w="50%" ml="90px">
        <Text color={"green"} fontSize={"30px"}>
          We are pborbit
        </Text>
        <Heading fontSize={"70px"}>
          Court reservation platform for private community, parks, and HOAs{" "}
        </Heading>
        <Text fontSize={"35px"}>
          Our Activate suite of business apps gives your Lorem ipsum dolor
          sit amet, consectetur.
        </Text>
        <Button
          mt="40px"
          colorScheme="whatsapp"
          w="40%"
          fontSize={"30px"}
          h="60px"
          borderRadius={"30px"}
        >
          {" "}
          Get Sarted →→{" "}
        </Button>
      </Box>
    );
  };
  export default HomePage;
  