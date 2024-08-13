import { Box , Fade, Text} from '@chakra-ui/react'
import React from 'react'
import HeroForm from '../HeroForm'

const HeroBanner = () => {
  return (
    // <Fade in>
    <Box
        position="relative"
        minHeight={{ base: "110vh" , sm: "70vh"}}
        backgroundImage={`url('https://images.unsplash.com/photo-1660917096320-79875bb7efd6?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`}
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundAttachment="fixed"

    >
        <Box
            position="absolute"
            width="100%"
            height="100%"
            backdropFilter="auto" backdropBlur="2px"
            opacity="1px"
        />
        <Box display="flex" flexDirection={{base: "column", sm: "row" }} alignItems="center" justifyContent={{ base: 'flex-start', sm: 'space-between'}}
        maxWidth='1280px'
        position='absolute'
        color='white'
        fontWeight='light'
        left='0'
        right='0'
        bottom='0'
        top="0"
        margin="0 auto"
        padding="2rem"
        >
            <Box width={{ base: "100%", sm: "50%"}}>
                <Text fontSize={{base:'4xl', sm:"5xl"}}  lineHeight='shorter' marginBottom='1.5rem'>
                    Book a Free Orientation 
                    today ...
                </Text>
            </Box>
            <Box width={{base:"100%", sm:"auto"}} marginTop={{ base: "2rem", sm: "0"}}><HeroForm/></Box>
        </Box>
    </Box>
    // </Fade>
  )
}

export default HeroBanner