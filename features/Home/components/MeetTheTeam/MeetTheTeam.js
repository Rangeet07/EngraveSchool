import { Box, Button, Flex, Image, Link, Text } from '@chakra-ui/react'
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
            {/* {artists.map((artist) => (
               <ArtistCard  key={artist.name} {...artist} />
            ))} */}

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
        src="./hero/Rijudisplay.jpg"
        width="12rem"
        height="18rem"
        objectFit="cover"
        // borderRadius="full"
        marginBottom="2rem"
        shadow="md"
    
    />
    <Text color="purple.700" fontSize="4xl" fontWeight="bold">Riju Nath</Text>
    <Text>(Lead Mentor, Founder) </Text>
    <Text fontSize="lg" color="purple.600">
    An Expert in Black & Grey Realism Tattoo Art & an Amazing Customize Tattoo Designer.
    </Text>
    <Text fontSize="md" fontWeight="light"  marginTop="1rem" color="gray.600">Riju Nath's impact on the tattooing world is undeniable, with his expertise spanning hyper-realism, color surrealism, and conceptual Hindu mythology-inspired tattoos. Renowned not just as the best in Siliguri, but among the top nationaly, his accolades include prestigious awards from international convention.</Text>

       <Link href='/our-mentor'> 
                <Button variant='solid' colorScheme='purple' >
        Read More
      </Button>
      </Link>
</Box>
        </Flex>

    </Box>
  )
}

export default MeetTheTeam