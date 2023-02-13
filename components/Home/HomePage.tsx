import { Box, Button,  Heading, Image, SlideFade, Text } from '@chakra-ui/react';
import React from 'react';
import { Fade } from 'react-reveal';
import { FunctionComponent } from 'react'
const HomePage: FunctionComponent|any = () => {
return (
        <Box   position="relative" pt={["100px","220px","220px","200px","320px"]} w="50%" ml={["80px","80px","80px","80px","85px"]} mb={["0px","0px","0px","190px","175px"]}>
          {/* shp1 */}
          <Image
            
            position="absolute"
            left={["-95px","-108px","-98px","-63px","-74px"]}
            top={["154px","250px","308px","203px","322px"]}
             w={["29%","20%","20%","9%","6%"]}
            src="/utils/Common/shp1.png"
            alt="pborbit"
          />
          
          <Image
            
            position="absolute"
            left={["-95px","-108px","-98px","-117px","-157px"]}
            top={["154px","250px","308px","256px","452"]}
             w={["29%","20%","20%","20%","20%"]}
            src="/utils/Common/top_left.png"
            alt="pborbit"
          />
        <Text color={["green","green","green","green","green"]} fontSize={["15px","15px","30px","30px","30px"]}>
          We are pborbit
        </Text>
        <Heading style={{fontFamily:"Poppins, sans-serif"}} fontSize={["15px","20px","30px","30px","40px"]} pr={["30px","50px","50px","100px","150px"]}>
          Court reservation platform for private community, parks, and HOAs
        </Heading>
        <Fade left casecode>
        <Text fontSize={["10px","15px","30px","30px","30px"]}   wordBreak={"break-word"} >
          Our Activate suite of business apps gives your Lorem ipsum dolor
          sit amet, consectetur.
        </Text>
        </Fade>
        <Button
          mt={["10px", "10px", "10px","10px" ,"40px"]}
          colorScheme="whatsapp"
          w={["100%", "53%", "35%", "35%","35%"]}
          fontSize={["15px", "16px", "16px", "16px","16px", "20px"]}
          h={["40px", "30px", "30px", "40px","40px"]}
          borderRadius={["20px", "20px", "20px", "20px","20px"]}
        >
          Get Sarted →
        </Button>
      </Box>
    );
  };
  export default HomePage;
