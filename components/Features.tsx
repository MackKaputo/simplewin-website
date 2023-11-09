import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

const Features = () => {
  return (
    <Flex py={["2rem"]} direction={["column"]} gap={["1rem"]} px={["1rem"]}>
        <Box>
            {`Your game, your rules! We're building an exciting platform just for you. 
            Your input matters, and we're here to listen and adapt. 
            Join us for a gaming experience crafted to your preferences!`}
        </Box>
        <Box>
            Chat, React, Play. Your expressions, your game
        </Box>
        <Box>
            Play tournaments of all sizes: mini, medium, large. Your game, your choice!
        </Box>
        <Box>
            Unlock VIP status for exclusive perks, offers, and a network of potential friends. Elevate your experience with us!
        </Box>
    </Flex>
  )
}

export default Features
