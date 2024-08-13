import DefaultLayout from '@/features/Layouts/DefaultLayout'
import { Box, Button, SimpleGrid, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import courseconst, { courses } from '@/features/data/courseconst.js'
import BookForm from '@/features/Home/components/BookForm/BookForm'

const index = () => {
    const {isOpen, onClose, onOpen} = useDisclosure();

  return (
    <DefaultLayout>
<SimpleGrid

columns={{ base: 1, lg: 2 }}


>

{ courses.map((course) => (
    <Box
        position="relative"
        minHeight={{ base: "60vh" , sm: "70vh"}}
        backgroundImage={`url("${course.url}" ) `}
        backgroundPosition="center"
        backgroundSize="cover"

    >
        <Box
            position="absolute"
            width="100%"
            height="100%"
            opacity="0.65"
            backgroundColor="gray.900"
            
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
                    {course.name}
                </Text>
                <Text color="yellow">{course.duration}</Text>

                <Text >
                {course.description}
                </Text>
                <Text color="white" fontSize="3xl">
                    {course.price}
                </Text>
                <Button variant='solid' colorScheme='purple' onClick={onOpen}>
        BOOK
      </Button>
            </Box>
    
        </Box>
    </Box>
)
)}





</SimpleGrid>
<BookForm isOpen={isOpen} onClose={onClose}/>

</DefaultLayout>
  )
}

export default index