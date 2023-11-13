import { backgroundColors } from '@/app/colors'
import { Box } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box py={["2rem"]} px={["1.5rem"]} bg={backgroundColors.dark_gray} opacity={[".8"]}>
        <Box>
          {/* About */}
          À propos
        </Box>
        <Box>
          Contact
        </Box>
        <Box>
          FAQ
        </Box>
        <Box>
          Facebook - Instagram - Tiktok - WhatSapp
        </Box>
    </Box>
  )
}

export default Footer
