import DefaultLayout from '@/features/Layouts/DefaultLayout'
import { Box, Button, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import courseconst, { courses } from '@/features/data/courseconst.js'

const index = () => {
  return (
    <DefaultLayout>
<SimpleGrid

columns={{ base: 1, lg: 2 }}


>

{ courses.map((course) => (
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
                    {course.name}
                </Text>
                <Text color="yellow">{course.duration}</Text>

                <Text isTruncated>
                {course.description}
                </Text>
                <Button variant='solid' colorScheme='purple'>
        Read More
      </Button>
            </Box>
    
        </Box>
    </Box>
)
)}





</SimpleGrid>
</DefaultLayout>
  )
}

export default index