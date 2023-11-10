import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

const Features = () => {
  return (
    <Flex direction={["column"]} gap={["1rem"]} px={["1rem"]} pb={["3rem"]}>
        <Box py={["1rem"]}>
            <Box fontWeight={["bold"]} fontSize={["lg"]} py={[".4rem"]}>
                🤝 Your Voice Matters!
            </Box>
            <Box>
                {`
                Our platform is designed with your preferences in mind, 
                and we're committed to creating a game that not only excites but resonates with every player. Your voice matters,
                and we're here to listen and adapt, ensuring a fair and thrilling adventure that evolves with your input. 
                Join us on this journey, where your ideas shape the game!`
                }
            </Box>
        </Box>
        <Box py={["1rem"]}>
            <Box fontWeight={["bold"]} fontSize={["lg"]} py={[".4rem"]}>
                🚀 In-Game Interaction - Expressions in Your Local Language!
            </Box>
            <Box>
                Chats in Swahili, Lingala, or French!
            </Box>
                Chat, React, Play. Your expressions, your game
        </Box>
        <Box py={["1rem"]}>
            <Box fontWeight={["bold"]} fontSize={["lg"]} py={[".4rem"]}>
                👫 Play Against Friends - Because Gaming is Better Together!
            </Box>
            <Box>
                {`You can join a table and Invite your buddies for epic showdowns, showcase your skills, and create memories that'll last a lifetime!`}
            </Box>
        </Box>
    </Flex>
  )
}

export default Features
