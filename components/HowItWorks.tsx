import { backgroundColors } from '@/app/colors'
import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const HowItWorks = () => {
  return (
    <Box mt={["2rem"]}>
        <Box fontSize={["xl"]} display={["grid"]} placeItems={["center"]}>
            <Text borderBottom={["1px solid white"]}>
                How it Works in 4 Steps
            </Text>
        </Box>
        <Flex gap={["1rem"]} px={["1.5rem"]} py={["1.5rem"]}>
            <Box borderRadius={["full"]} borderLeft={["1px solid gray"]}>
                <Box bg={backgroundColors.pink} fontWeight={["bold"]} p={[".3rem"]} borderRadius={["full"]} w={["2rem"]} h={["2rem"]} display={["grid"]} placeItems={["center"]}>
                    1
                </Box>
            </Box>
            <Box>
                <Box fontSize={["xl"]} pb={[".5rem"]}>
                    Create an Account
                </Box>
                <Box fontSize={["sm"]}>
                    Set up your account. It is super easy and we only need a few details
                </Box>
            </Box>
        </Flex>
        <Flex gap={["1rem"]} px={["1.5rem"]} py={["1.5rem"]}>
            <Box borderRadius={["full"]} borderLeft={["1px solid gray"]}>
                <Box bg={backgroundColors.pink} p={[".3rem"]} borderRadius={["full"]} w={["2rem"]} h={["2rem"]} display={["grid"]} placeItems={["center"]}>
                    2
                </Box>
            </Box>
            <Box>
                <Box fontSize={["xl"]} pb={[".5rem"]}>
                    Make a deposit (Buy Tokens)
                </Box>
                <Box fontSize={["sm"]}>
                    Here are some explanations about deposits. simple and straight forward
                </Box>
            </Box>
        </Flex>
        <Flex gap={["1rem"]} px={["1.5rem"]} py={["1.5rem"]}>
            <Box borderRadius={["full"]} borderLeft={["1px solid gray"]}>
                <Box bg={backgroundColors.pink} p={[".3rem"]} borderRadius={["full"]} w={["2rem"]} h={["2rem"]} display={["grid"]} placeItems={["center"]}>
                    3
                </Box>
            </Box>
            <Box>
                <Box fontSize={["xl"]} pb={[".5rem"]}>
                    Go to the Lobby, Join a Table
                </Box>
                <Box fontSize={["sm"]}>
                    We only have have one game you can join to play. You can play normal games or register for tournaments
                    of the same game!
                </Box>
            </Box>
        </Flex>
        <Flex gap={["1rem"]} px={["1.5rem"]} py={["1.5rem"]}>
            <Box borderRadius={["full"]} borderLeft={["1px solid gray"]}>
                <Box bg={backgroundColors.pink} p={[".3rem"]} borderRadius={["full"]} w={["2rem"]} h={["2rem"]} display={["grid"]} placeItems={["center"]}>
                    4
                </Box>
            </Box>
            <Box>
                <Box fontSize={["xl"]} pb={[".5rem"]}>
                    Make a Withdrawal
                </Box>
                <Box fontSize={["sm"]}>
                    Withdraw tokens, converted to real money as they were bought
                </Box>
            </Box>
        </Flex>
        <Box px={["1.5rem"]} boxShadow={["dark-lg"]} py={["1rem"]} mx={["1rem"]}>
            Wait... You can forget step 2 and 4 to play without any commitment by joining free game tables!
            These are for you to play without buying any tokens as a demo!
        </Box>
    </Box>
  )
}


export default HowItWorks
