import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { artists } from './artistConsts'
import ArtistCard from './components/ArtistCard'

const MeetTheTeam = () => {
  return (
    <Box id="team" maxWidth="1280px" margin="0 auto" paddingY={{base:"3rem", sm: "6rem"}} 
    >
        <Text
            fontSize={{ base:"4xl", sm: "5xl"}}
            lineHeight="shorter"
            fontWeight="light"
            paddingX="2rem"
            textAlign="center"
            alignItems="center"
        >
            Meet The Mentor
        </Text>
        {/* <Text
            fontSize="2xl"
            fontWeight="light"
            marginTop="1rem"
            marginBottom="3rem"
            paddingX="2rem"
            textAlign="center"
        
        >
            The best in the industry, at your service 24/7
        </Text> */}
        <Flex
            direction={{ base:"column", sm:"row"}}
            justifyContent="space-between"
            gap="1.5rem"

        >
            {artists.map((artist) => (
               <ArtistCard  key={artist.name} {...artist} />
            ))}
        </Flex>

    </Box>
  )
}

export default MeetTheTeam