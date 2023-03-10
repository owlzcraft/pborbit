
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { Fade } from 'react-reveal';
import React from "react";
import { FunctionComponent } from "react";


const Pricing: FunctionComponent | any = () => {
  const newLocal:object |any= {
      w:"77%",
      position:"absolute",
      bottom:"57px",
      right:"2px",


      zIndex:"-1"} 


  const NewType: String = "relative";

  return(

  <Box position={["relative", "relative", "relative"]} zIndex="0" mb="40px">
    <Center mt="40px">

      <Heading>Our Best Pricing</Heading>
    </Center>
    <Center mt="20px">

      <Text w={["90%", "35%"]} textAlign="center" color="#B4B4B6">
        Lorem Ipsum is simply dummy text of the printing and type setting
        industryLorem Ipsum is simply
      </Text>
    </Center>
<Center>
    <Flex 
    // mt="40px"
    gap="40px" 
    //  ml={["50px", "20px", "20px", "80px", "200px"]}
     w={["80%", "90%","80%", "85%","60%"]} 
     alignItems="center"
    display={["block","block", "block","flex","flex" ]}>
       
    <Box   w={["100%", "100%","100%", "90%","90%"]}>
  <Fade top casecode >
       <Box  _hover={{ bg: 'white',color:"black" ,transform:"scale(1.1)" }} mb="40px" bg="#10023B" pb="50px" 
       w={["100%", "100%","100%", "90%","90%"]} mt="40px" borderRadius={"10px"} position={"relative"}>
        <Image
          position={"absolute"}
          src="/utils/Common/price-player.png"
          alt="pb"
          
          
          w="13%"
          top={["36px","45px","35px","27px","16px"]}
          left={["40px","60px","80px","100px","63px"]}
        />
        <Center
          bg="#4B3294"
          borderTopEndRadius={"10px"}
          borderTopStartRadius={"10px"}
          mb="10px"
        >
          <Heading fontSize="40px" p="20px">

            Player
          </Heading>
        </Center>

        <Center>
          <Flex mt="40px">
            {" "}
            <Heading fontSize="40px">$12</Heading> <Text> per annul</Text>{" "}
          </Flex>
        </Center>
        <Center mb="20px" 
        // mr="60px"
        >
          <Text color="#B4B4B6" fontSize="10px">
            of single{" "}
          </Text>
        </Center>
        <Flex flexDirection="column" gap ="20px" alignItems={"center"}>
          <Box display={"flex"} flexDirection="column" gap ="20px">
          <Box display="flex" alignItems="center" gap={"10px"}>
            {" "}
            <Image
              boxSize="20px"
              src="/utils/Common/checklist.png"
              alt="pb"
            />{" "}
            <Text fontSize="20px"> Court reservations</Text>
          </Box>
          <Box display="flex" alignItems="center" gap={"10px"}>
            {" "}
            <Image
              boxSize="20px"
              src="/utils/Common/checklist.png"
              alt="pb"
            />
            <Text fontSize="20px"> Community Manage</Text>
          </Box>
          <Box display="flex" alignItems="center" gap={"10px"}>
            {" "}
            <Image
              boxSize="20px"
              src="/utils/Common/checklist.png"
              alt="pb"
            />
            <Text fontSize="20px"> Manage Your Court Easily</Text>
          </Box>
          <Box display="flex" alignItems="center" gap={"10px"}>
            {" "}
            <Image
              boxSize="20px"
              src="/utils/Common/checklist.png"
              alt="pb"
            />
            <Text fontSize="20px"> Court reservations</Text>
          </Box>
          <Box display="flex" alignItems="center" gap={"10px"}>
            {" "}
            <Image
              boxSize="20px"
              src="/utils/Common/checklist.png"
              alt="pb"
            />
            <Text fontSize="20px"> Install app and get Rewards</Text>
          </Box>

          <Box display="flex" alignItems="center" gap={"10px"}>
            {" "}
            <Image
              boxSize="20px"
              src="/utils/Common/checklist.png"
              alt="pb"
            />
            <Text fontSize="20px"> Community Manage</Text>
          </Box>

          </Box>
          <Button
            mt={["30px", "40px"]}
            colorScheme="whatsapp"
            w="50%"
            fontSize={"13px"}

            borderRadius={"20px"}
          >
            {" "}
            Get Sarted{" "}
          </Button>

        </Flex>
      </Box>
      </Fade>
      </Box>
      <Box  w={["100%", "100%","100%", "90%","90%"]}>
        <Fade bottom casecode>
      <Box  _hover={{ bg: 'white',color:"black" ,transform:"scale(1.1)" }} bg="#10023B" pb="50px"
       w={["100%", "100%","100%", "90%","90%"]} borderRadius={"10px"} position={"relative"}>
        <Image
          position={"absolute"}
          w="13%"
          src="/utils/Common/price-player.png"
          alt="pb"
          // w="9%"
          top={["36px","45px","35px","27px","16px"]}
          left={["40px","60px","80px","100px","63px"]}
        />
        <Center
          bg="#4B3294"
          borderTopEndRadius={"10px"}
          borderTopStartRadius={"10px"}
          mb="10px"
        >
          <Heading fontSize="40px" p="20px">

            Player
          </Heading>
        </Center>

        <Center>
          <Flex mt="40px">
            {" "}
            <Heading fontSize="40px">$12</Heading> <Text> per annul</Text>{" "}
          </Flex>
        </Center>
        <Center mb="20px" 
        // mr="60px"
        >
          <Text color="#B4B4B6" fontSize="10px">
            of single{" "}
          </Text>
        </Center>
        <Flex flexDirection="column" gap ="20px" alignItems={"center"}>
          <Box display={"flex"} flexDirection="column" gap ="20px">
          <Box display="flex" alignItems="center" gap={"10px"}>
            {" "}
            <Image
              boxSize="20px"
              src="/utils/Common/checklist.png"
              alt="pb"
            />{" "}
            <Text fontSize="20px"> Court reservations</Text>
          </Box>
          <Box display="flex" alignItems="center" gap={"10px"}>
            {" "}
            <Image
              boxSize="20px"
              src="/utils/Common/checklist.png"
              alt="pb"
            />
            <Text fontSize="20px"> Community Manage</Text>
          </Box>
          <Box display="flex" alignItems="center" gap={"10px"}>
            {" "}
            <Image
              boxSize="20px"
              src="/utils/Common/checklist.png"
              alt="pb"
            />
            <Text fontSize="20px"> Manage Your Court Easily</Text>
          </Box>
          <Box display="flex" alignItems="center" gap={"10px"}>
            {" "}
            <Image
              boxSize="20px"
              src="/utils/Common/checklist.png"
              alt="pb"
            />
            <Text fontSize="20px"> Court reservations</Text>
          </Box>
          <Box display="flex" alignItems="center" gap={"10px"}>
            {" "}
            <Image
              boxSize="20px"
              src="/utils/Common/checklist.png"
              alt="pb"
            />
            <Text fontSize="20px"> Install app and get Rewards</Text>
          </Box>

          <Box display="flex" alignItems="center" gap={"10px"}>
            {" "}
            <Image
              boxSize="20px"
              src="/utils/Common/checklist.png"
              alt="pb"
            />
            <Text fontSize="20px"> Community Manage</Text>
          </Box>

          </Box>
          <Button
            mt={["30px", "40px"]}
            colorScheme="whatsapp"
            w="50%"
            fontSize={"13px"}

            borderRadius={"20px"}
          >
            {" "}
            Get Sarted{" "}
          </Button>

        </Flex>
        </Box>
    </Fade>
      </Box>
      
    </Flex>
    </Center>

     <Image style= {newLocal}
      
      src="/utils/Common/price-bg.png"
        alt="pborbit" /> 
  </Box>

  );
};
export default Pricing;
