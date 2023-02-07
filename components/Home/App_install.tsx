import { Flex, Box, Image } from '@chakra-ui/react';
// import Image from 'next/image';
import React from 'react';
import { FunctionComponent } from 'react'
const App_install: FunctionComponent = () => {
    return (
        <Flex w="90%" m='auto' color='white' mb="20px">
        <Box lineHeight={'7'} w="40%" m='auto' color='white' >
          <h1 style={{ fontSize: 30, fontWeight: 'bold', margin: "10px" }}>This App is available on your smart phone</h1>
          <p style={{ margin: 10 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aliquam excepturi eligendi dolorum illum voluptate obcaecati tenetur officiis alias a!</p>
          <Flex m="10px" gap="25px" lineHeight={'10'}>
            <Image src="/utils/common/apple-app.png"  alt="pb"/>
            <Image src="/utils/common/google-app.png" alt="pb" />
          </Flex>

          <Flex m="10px" >
            <Box w="65%" height={'35px'} borderBottomStartRadius="50px" borderTopStartRadius="50px" bgColor={'white'} color="black" pl="10px"> Enter Your Name</Box>
            <Box w="10%" height="35px" borderBottomEndRadius="50%" borderTopEndRadius={'50%'} bgColor={'green.600'} ></Box>
          </Flex>
        </Box>
        <Box w="55%" m='auto' color='white' >
          <Image w="100%" src="/utils/common/app-install.png" alt="pb" />
        </Box>
      </Flex>
    );
  };
  export default App_install;
  