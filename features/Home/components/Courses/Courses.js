import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, Divider, Flex, Grid, GridItem, Heading, Image, Link, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import BookForm from '../BookForm/BookForm'



const Courses = () => {
  return (
    <Box >
        <Box
        maxWidth="1280px"
        margin="0 auto"
        color="black"
        paddingY={{base:'3rem', small:'6rem'}}
        
        
        >
            <Text
            fontSize={{ base: "4xl", sm: "5xl"}}
            lineHeight="shorter"
            fontWeight="light"
            paddingX="2rem"
            textAlign="center"
            
            
            >
                Discover Our Courses

            </Text>
        </Box>

        {/* <Box marginBottom="4rem" backgroundColor="#fff">
            <Box backgroundImage={`url('./hero/herobg1.jpg')`} height="250px" backgroundPosition="center center" width="300px"
            backgroundSize="cover"
            position="relative"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"

            >
            </Box>
        <Box padding='1rem'>
            <Text fontSize='xl' fontWeight="medium" marginBottom="1rem">
            DIPLOMA COURSE IN TATTOO ART
            </Text>
            <Text fontWeight="light" fontSize="sm" isTruncated>
            A 6-month tattoo training program aimed to prepare students for a career in tattoo art. It is, however, more than just a tattoo course; it is a 360° Tattoo Training Program designed to assist prospective tattoo artists in pursuing a career in the industry. 
            </Text>
        </Box>
        
        <Button  colorScheme="purple"  type="submit"  width="50%" fontSize="xl" padding="2rem" marginTop="2rem"> Book Now </Button>

        </Box> */}





<SimpleGrid 

columns={{ base: 1, lg: 2 }}

>


<Box
        position="relative"
        minHeight={{ base: "60vh" , sm: "70vh"}}
        backgroundImage={`url('https://images.unsplash.com/photo-1660917096335-d3a6b1f22ff5?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`}
        backgroundPosition="center"
        backgroundSize="cover"

    >
        <Box
            position="absolute"
            width="100%"
            height="100%"
            // opacity="0.85"
            // backgroundColor="purple.900"
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
                <Text fontSize={{base:'4xl', sm:"5xl"}} lineHeight='shorter' marginBottom='1.5rem'>
                FOUNDATION COURSE IN TATTOO ART
                </Text>
                <Text color="yellow">45 days</Text>
                <Text isTruncated>
                A 45-day accelerated curriculum that improves your tattoo skills by teaching the fundamentals of tattoo art & design and providing you with a hands-on tattooing experience. It also exposes you to business management & marketing. A highly recommended course for self-taught or rising artists wishing to improve their tattoo
                </Text>

                <Link href='/courses'> 

                <Button variant='solid' colorScheme='purple'>
        Read More
      </Button>
      </Link>
            </Box>
    
        </Box>
    </Box>
    <Box
        position="relative"
        minHeight={{ base: "60vh" , sm: "70vh"}}
        backgroundImage={`url('https://images.unsplash.com/photo-1607281503082-f01fedd97a5b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fHRhdHRvb3xlbnwwfHwwfHx8MA%3D%3D')`}
        backgroundPosition="center"
        backgroundSize="cover"

    >
        <Box
            position="absolute"
            width="100%"
            height="100%"
            // opacity="0.85"
            // backgroundColor="purple.900"
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
                <Text fontSize={{base:'4xl', sm:"5xl"}} lineHeight='shorter' marginBottom='1.5rem'>
                DIPLOMA COURSE IN TATTOO ART

                </Text>
                <Text color="#805ad5">6 months</Text>
                <Text isTruncated>
                Designed for people who are determined to make a career in the tattoo industry. The complete course covers all aspects of tattoo learning, from building the right foundation to master the advanced level of tattoo techniques.
                </Text>
                <Link href='/courses'> 
                <Button variant='solid' colorScheme='purple' >
        Read More
      </Button>
      </Link>
            </Box>
        </Box>
    </Box>

    </SimpleGrid>
    <BookForm/>

    </Box>
  )
}

export default Courses