import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import { testimonials } from './testimonialsConsts'
import TestimonialCard from './components/TestimonialCard'

const Testimonials = () => {
  return (
<Box id="stories" backgroundColor="purple.50">
    <Box
        maxWidth="1280px"
        margin="0 auto"
        paddingY={{base: "3rem", sm: "6rem"}}
    >
        <Text
            fontSize={{ base: "4xl", sm: "5xl"}}
            lineHeight="shorter"
            fontWeight="light"
            paddingX="2rem"
            textAlign="center"
        >
            Success Stories
        </Text>
        <Text 
        fontSize="2xl"
        marginTop="1rem"
        fontWeight="light"
        marginBottom="3rem"
        paddingX="2rem"
        textAlign="center"
        >
            Here's what our mentees have to say.
         </Text>
         <SimpleGrid columns="3" minChildWidth="300px" gap={{base:"0.5rem", sm:"2.5rem"}}>

            {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
         </SimpleGrid>
    </Box>
</Box> 
 )
}

export default Testimonials