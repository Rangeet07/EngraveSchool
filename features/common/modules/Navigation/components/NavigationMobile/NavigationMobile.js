import { Box, Button, Flex, IconButton, Image, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import Link from 'next/link';
import {HiHomeModern} from "react-icons/hi2"
import { navigationLinks } from '../../NavigationConsts';
import {HamburgerIcon} from '@chakra-ui/icons'


// import logo from './logo.jpg'
const NavigationMobile = () => {
  return (
    <Box
    color="black.600"
    padding="2rem"
    backgroundColor="=white"
    display={{ base: "block", md: "none"}}
    
    >
        <Flex alignItems="center" justifyContent="space-between">
          <Link href="/">
          <Box display="flex" gap="2" alignItems="center">
            {/* <HiHomeModern size="30" /> */}
            <Text fontSize="2xl" fontWeight="black">
              ENGRAVE
            </Text>
  {/* <Image src='logo.jpg' boxSize='150px' objectFit="cover"/> */}
          </Box>
          </Link>

          <Menu>
            <MenuButton 
            as={IconButton}
            aria-label='Options'
            icon={ <HamburgerIcon/>}
            variant="outline"
            />
            <MenuList>
            {navigationLinks.map((item) => (
            <NavigationLink key={item.title} {...item}/>
          ))
          }
          </MenuList>
           </Menu>


        </Flex>

    </Box>  )
}

export default NavigationMobile

const NavigationLink = ({title, link}) => {
  return (
    <Link href={link}>
      <MenuItem alignItems="center" gap="0.5rem">
        {title}
     </MenuItem>
    </Link>
  );
}