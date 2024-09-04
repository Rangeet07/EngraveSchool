import { Box, Link, Text } from '@chakra-ui/react';
import { usePortfolioFormat } from '../../Hooks/usePortfolioFormat'


const PortfolioCard = (portfolio) => {
  const {
    
    title,
    photo,
    name


  } = usePortfolioFormat(portfolio);
  return (
    <Box marginBottom="4rem" backgroundColor="#fff">
      <Link href='/portfolio'>
      <Box backgroundImage={`url("${photo}")`} height="250px"
        backgroundPosition="center center"
        backgroundSize="cover"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        


      >
        <Box height="50%" bgGradient="linear(to-t, #0a0b1cd9, #ffffff00 100%)"></Box>



      </Box>
      {/* <Box padding="1.5rem">
        <Text>{title}</Text>
      </Box> */}
      </Link>
    </Box>
  )
}

export default PortfolioCard