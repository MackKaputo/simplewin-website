import { Box, Text } from '@chakra-ui/react'
import React from 'react'

export default function HowTournamentsWork() {
  return (
    <Box minH={["90vh"]} px={["1rem"]}>
        <Box py={["1rem"]}>
            <Text textAlign={["center"]} fontSize={["2xl"]}>
                How tournaments work
            </Text>
        </Box>
        <Box>
            Here is how it works
        </Box>
    </Box>
  )
}
