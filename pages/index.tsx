import Head from "next/head";
import { Inter } from "@next/font/google";

import styles from "@/styles/Home.module.css";
import {
  Box,
  Button,
  Center,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  Flex
} from "@chakra-ui/react";
import Home from "./Home";
// declare module "react-Reveal";
const inter = Inter({ subsets: ["latin"] });

export default function Homee() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"></link> */}
      </Head>
      
      <main>
        <Box bg="#050017" color={"white"}>

{/* main image */}
          <Image 
        position="absolute"
          w={["65%","65%", "65%","65%","65%"]}
              right={[ "1px","1px","1px","1px","10px"]}
              top={["0px","0px","0px","0px","-1px"]}
              zIndex= "1"
            src="/utils/Common/banner-1.png"
            alt="pborbit"
          />

         

          

         
          <Image
            style={{
              position: "absolute",
              right: "-20px",
              // left: "1140px",
              top: "940px",
              zIndex: 1,
            }}
            src="/utils/Common/half-circle.png"
            alt="pborbit"
          />
{/* leading page */}
          <Home />
        </Box>
      </main>
    </>
  );
}
