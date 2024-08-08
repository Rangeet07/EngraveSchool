import { Box, Button, Flex, Link, Text } from '@chakra-ui/react'
import React from 'react'
import {PhoneIcon} from '@chakra-ui/icons'
import { FaWhatsappSquare } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";



const HeroForm = () => {
  return (
    <Box
        width="100%"
        padding="2rem"
        borderRadius="sm"
        backgroundColor="black"
        color="white"
        
    >
        <Text fontSize="xl" fontWeight="bold">
        "Uncover Your Creative Spirit"
        </Text>
        <Text fontSize="lg">Deep dive to become the pro artist</Text>
        <Flex gap={{base:"0" , sm: "1rem"}} flexDirection={{base:'column', sm: "row"}}>
        <Button  colorScheme="purple"  type="submit"  width="50%" fontSize="xl" padding="2rem" marginTop="2rem"> Book Now </Button>
        <Flex flexDirection='column' marginTop="2rem">
        <Link href='https://wa.me/9434810330' color='white' src=''  > <FaWhatsappSquare/>Book on Whatsapp</Link>
        <Link href='https://wa.me/9434810330' color='teal.600' src='' ><IoCallOutline/>Book on Call</Link>
        </Flex>
      

        {/* <Button type="submit" colorScheme="gray" width="100%" fontSize="xl" padding="2rem" marginTop="2rem"> Whatsapp </Button> */}


        </Flex>
    </Box>
)
}

export default HeroForm