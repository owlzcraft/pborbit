import { Box, Button, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { FunctionComponent } from 'react'
const HomePage: FunctionComponent = () => {
return (
        <Box pt={["100px","220px","220px","200px","320px"]} w="50%" ml={["40px","40px","40px","90px","30px"]}>
        <Text color={"green"} fontSize={["15px","15px","30px","30px","30px"]}>
          We are pborbit
        </Text>
        <Heading fontSize={["15px","15px","30px","30px","40px"]} pr={["10px","10px","15px","10px","150px"]}>
          Court reservation platform for private community, parks, and HOAs
        </Heading>
        <Text fontSize={["10px","15px","30px","30px","30px"]}>
          Our Activate suite of business apps gives your Lorem ipsum dolor
          sit amet, consectetur.
        </Text>
        <Button
          mt="40px"
          colorScheme="whatsapp"
          w={["70%","30px","15px","30px","40%"]}
          fontSize={["15px","15px","30px","30px","30px"]}
          h={["40px","15px","30px","30px","60px"]}
          borderRadius={["20px","15px","30px","30px","20px"]}
        >
        
          Get Sarted →→
        </Button>
      </Box>
    );
  };
  export default HomePage;
