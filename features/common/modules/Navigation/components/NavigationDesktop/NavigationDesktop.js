import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import Link from 'next/link';
import React from 'react'
import {HiHomeModern} from "react-icons/hi2"
import { navigationLinks } from '../../NavigationConsts';


const NavigationDesktop = () => {
  return (
    <Box
    color="black"
    paddingY="2rem"
    backgroundColor="white"
    display={{ base: "none", md: "block"}}
    >
      <Box maxWidth="1280px" margin="0 auto">
        <Flex alignItems="center" justifyContent="space-between">
          <Link href="/">
          <Box display="flex" gap="2" alignItems="center">
            {/* <HiHomeModern size="30" />
            <Text fontSize="2xl" fontWeight="black">
              ENGRAVE
            </Text> */}
            <Image src='logo.jpg' width="100px" height="40px" position="absolute" top="10px" left="5px" boxSize='100px' objectFit="cover"/> 
          </Box>
          </Link>
          <Flex gap='12' alignItems='center' fontWeight="medium">
          {navigationLinks.map((item) => (
            <NavigationLink key={item.title} {...item}/>
          ))
          }
       
          </Flex>
        </Flex>

      </Box>
    </Box>
  );
}

export default NavigationDesktop;

const NavigationLink = ({title, link}) => {
  return (
    <Link href={link}>
      <Flex alignItems="center" gap="0.5rem">
        {title}
     </Flex>
    </Link>
  );
}