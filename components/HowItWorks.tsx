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
                    Buy tokens and dive into the gaming fun! Choose your preferred method, whether in-person or electronic payments.
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
                    {`Withdraw your tokens, convert to real money effortlessly! Choose from various methods, 
                    in-person or electronic payments. It's your winnings, your way!`}
                </Box>
            </Box>
        </Flex>
        <Box px={["1.5rem"]} boxShadow={["dark-lg"]} py={["1rem"]} mx={[".5rem"]} borderRadius={["lg"]} textAlign={["justify"]}>
            Discover the excitement! Go to the free games section and join a table, where you can experience demos without any deposit. 
            Test the gameplay and immerse yourself in the thrill, all without spending a dime!
        </Box>
    </Box>
  )
}


export default HowItWorks
