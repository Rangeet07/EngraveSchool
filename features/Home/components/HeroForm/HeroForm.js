import { Box, Button, Flex, Link, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import {PhoneIcon} from '@chakra-ui/icons'
import { FaWhatsapp, FaWhatsappSquare } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import BookForm from '../BookForm/BookForm';



const HeroForm = () => {

    const {isOpen, onClose, onOpen} = useDisclosure();

  return (
    <>
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
        <Button  colorScheme="purple" onClick={onOpen} type="submit"  width="50%" fontSize="xl" padding="2rem" marginTop="2rem"> Book Now </Button>
        <Flex flexDirection='column' marginTop="2rem">
        <Link display="flex" href='https://wa.me/919609526126'  color='#30ea66' src=''  > <FaWhatsapp /><Text paddingX="4px" >Book on Whatsapp</Text></Link>
        <Link display="flex" href='tel:919609526126'   color='white' src='' ><IoCallOutline/><Text paddingX="4px" >Book on Call</Text></Link>
        </Flex>
      

        {/* <Button type="submit" colorScheme="gray" width="100%" fontSize="xl" padding="2rem" marginTop="2rem"> Whatsapp </Button> */}


        </Flex>
    </Box>
    <BookForm isOpen={isOpen} onClose={onClose}/>
    </>
)
}

export default HeroForm