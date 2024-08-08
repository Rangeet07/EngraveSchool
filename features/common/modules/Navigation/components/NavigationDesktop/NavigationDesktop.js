import { Box, Button, Flex, Text } from '@chakra-ui/react'
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
            <HiHomeModern size="30" />
            <Text fontSize="2xl" fontWeight="black">
              ENGRAVE
            </Text>
          </Box>
          </Link>
          <Flex gap='12' alignItems='center' fontWeight="medium">
          {navigationLinks.map((item) => (
            <NavigationLink key={item.title} {...item}/>
          ))
          }
          <Button
            padding="1.5rem"
            colorScheme="blackAlpha"
            fontSize="0.8rem"
            fontWeight="medium"
          
          >

            BOOK 
          </Button>
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