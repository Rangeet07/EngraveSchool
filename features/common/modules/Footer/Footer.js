import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import { courses, about, Internship, ourClients } from './footerConsts'
import Link from 'next/link'
import { HiHomeModern } from 'react-icons/hi2'
import { FaFacebook, FaInstagram, FaPhone, FaWhatsapp } from 'react-icons/fa'


const Footer = () => {
  return (
    <Box backgroundColor="black">
<Box
    maxWidth="1280px"
    margin="0 auto"
    paddingY="3rem"
    paddingX={{ base: "2rem", sm: "0"}}


>
    <SimpleGrid
        columns="2"
        color="whiteAlpha.700"
        gap={{base:"4rem", sm:"1rem"}}
        minChildWidth="150px"
        >
            <Flex flexDirection="column">
                <FooterHeader title="Contact Us"/>
                {courses.map((item) => (
                    <FooterLink key={item.name} {...item} />
                ))}
            </Flex>
            <Flex flexDirection="column">
                <FooterHeader title="Quick Links"/>
                {about.map((item) => (
                    <FooterLink key={item.name} {...item} />
                ))}
            </Flex>
             {/* <Flex flexDirection="column" >
                <FooterHeader title="Social Media"/>

                <Link href="https://www.instagram.com/engrave_tattoo_school/"><FaInstagram/></Link>
                <Link href="https://www.facebook.com/engravetat"><FaFacebook/></Link>
                <Link href='https://wa.me/9434810330'><FaWhatsapp/></Link>
                {Internship.map((item) => (
                    <FooterLink key={item.name} {...item} />
                ))}
            </Flex> */}
            {/* // <Flex flexDirection="column">
            //     <FooterHeader title="Our Clients"/>
            //     {ourClients.map((item) => (
            //         <FooterLink key={item.name} {...item} />
            //     ))}
            // </Flex>  */}
        </SimpleGrid>


</Box>
<Box
    
    display='flex'
    padding="2rem"
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
    color="white"
>
    <Flex gap="1rem" padding="1rem"> 
    <Link href="https://www.instagram.com/engrave_tattoo_school/"><FaInstagram/></Link>
                <Link href="https://www.facebook.com/engravetat"><FaFacebook/></Link>
                <Link href='https://wa.me/9434810330'><FaWhatsapp/></Link>
    </Flex>

<Box display="flex" gap="2" alignItems="center">

    <HiHomeModern/>
    <Text fontSize="lg" fontWeight="black">
        ENGRAVE
    </Text>
</Box>

<Text marginTop="1rem" fontSize="xs" textAlign="center">
    All rights reserved - Copyright ENGRAVE
</Text>
</Box>
    </Box>
  )
}

export default Footer

const FooterLink = ({name, link})=> {
    return(
        <Text>
            <Link href={link}>
                
                {name}
                </Link>
        </Text>
    )
};

const FooterHeader = ({title}) => {
    return(
        <Text  as="h4" fontWeight="Light" fontSize="xl" marginBottom="1rem">
{title}

        </Text>
    )
}
 