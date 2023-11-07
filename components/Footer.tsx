import { backgroundColors } from '@/app/colors'
import { Box } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box py={["2rem"]} px={["1.5rem"]} bg={backgroundColors.dark_gray} opacity={[".7"]}>
        Here Comes the Footer Boys!
    </Box>
  )
}

export default Footer
