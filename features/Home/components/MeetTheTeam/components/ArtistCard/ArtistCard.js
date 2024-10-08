import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

const ArtistCard = ({name, designation, image, description, title}) => {
  return (
<Box
padding="2rem"
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems={{base:"center", sm:"start"}}
    textAlign="center"
    marginBottom={{ base:"1rem", sm: "0"}}
>
    <Image 
        src={image}
        width="12rem"
        height="18rem"
        objectFit="cover"
        // borderRadius="full"
        marginBottom="2rem"
        shadow="md"
    
    />
    <Text color="purple.700" fontSize="4xl" fontWeight="bold">{name}</Text>
    <Text>{designation}</Text>
    <Text fontSize="lg" color="purple.600">
        {title}
    </Text>
    <Text fontSize="md" fontWeight="light"  marginTop="1rem" color="gray.600">{description}</Text>

</Box>


)
}

export default ArtistCard