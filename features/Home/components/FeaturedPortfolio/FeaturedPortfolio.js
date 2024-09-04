import { Box, Text } from '@chakra-ui/react';
import React from 'react'
import PortfolioSlider from './components/PortfolioSlider';
// import PortfolioSlider from './components/PortfolioSlider';

const FeaturedPortfolio = ({portfolios}) => {
  return (
    <Box id='portfolio' zIndex="0">
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
            Portfolio

            </Text>
            <Text
            fontSize="2xl"
            fontWeight="light"
            marginTop="1rem"
            marginBottom="3rem"
            paddingX="2rem"
            textAlign="center"
            
            >
                A selection of our work
            </Text>
            <PortfolioSlider portfolios={portfolios}/>

        </Box>  
        </Box>
        
    )
}

export default FeaturedPortfolio;