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
        <Flex gap={["1rem"]} px={["1.5rem"]} py={["1.3rem"]}>
            <Box borderRadius={["full"]} borderLeft={["1px solid gray"]}>
                <Box bg={backgroundColors.pink} fontWeight={["bold"]} p={[".3rem"]} borderRadius={["full"]} w={["1.5rem"]} h={["1.5rem"]} display={["grid"]} placeItems={["center"]} alignContent={["center"]}>
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
        <Flex gap={["1rem"]} px={["1.5rem"]} py={["1.3rem"]}>
            <Box borderRadius={["full"]} borderLeft={["1px solid gray"]}>
                <Box bg={backgroundColors.pink} p={[".3rem"]} borderRadius={["full"]} w={["1.5rem"]} h={["1.5rem"]} display={["grid"]} placeItems={["center"]} alignContent={["center"]}>
                    2
                </Box>
            </Box>
            <Box>
                <Box fontSize={["xl"]} pb={[".5rem"]}>
                    Make a deposit (Buy Tokens)
                </Box>
                <Box fontSize={["sm"]}>
                    Buy tokens and dive into the gaming fun! Choose your preferred method, whether in-person or online payments.
                </Box>
            </Box>
        </Flex>
        <Flex gap={["1rem"]} px={["1.5rem"]} py={["1.3rem"]}>
            <Box borderRadius={["full"]} borderLeft={["1px solid gray"]}>
                <Box bg={backgroundColors.pink} p={[".3rem"]} borderRadius={["full"]} w={["1.5rem"]} h={["1.5rem"]} display={["grid"]} placeItems={["center"]} alignContent={["center"]}>
                    3
                </Box>
            </Box>
            <Box>
                <Box fontSize={["xl"]} pb={[".5rem"]}>
                    Navigate to the Lobby - Join a Table
                </Box>
                <Box fontSize={["sm"]} textAlign={["justify"]}>
                    {` 
                        You'll encounter many tables, each hosting the same game and having different minimum and maximum buyin amounts.
                        Now comes the moment of anticipation! Click on your chosen table, and voila – you're in. 
                    `}
                </Box>
            </Box>
        </Flex>
        <Flex gap={["1rem"]} px={["1.5rem"]} py={["1.3rem"]}>
            <Box borderRadius={["full"]} borderLeft={["1px solid gray"]}>
                <Box bg={backgroundColors.pink} p={[".3rem"]} borderRadius={["full"]} w={["1.5rem"]} h={["1.5rem"]} display={["grid"]} placeItems={["center"]} alignContent={["center"]}>
                    4
                </Box>
            </Box>
            <Box>
                <Box fontSize={["xl"]} pb={[".5rem"]}>
                    Make a Withdrawal
                </Box>
                <Box fontSize={["sm"]} textAlign={["justify"]}>
                    {`Withdraw your tokens, converted to real money effortlessly! Choose from various methods, 
                    in-person or online withdrawals. It's your winnings, your way!`}
                </Box>
            </Box>
        </Flex>
        <Box px={["1.5rem"]} boxShadow={["dark-lg"]} py={["1rem"]} mx={[".5rem"]} borderRadius={["lg"]} textAlign={["justify"]}>
            {`
                🤔 You don't know how to play yet? Don't worry 😊, here is how you play, and you can watch a video in action with explanations,
                You will see how simple and exciting it is!
            `}
        </Box>
    </Box>
  )
}


export default HowItWorks
