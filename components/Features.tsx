import { backgroundColors } from '@/app/colors'
import { Box, Button, Flex } from '@chakra-ui/react'
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
                🚀 In-Game Interactions - Chats in Your Local Language!
            </Box>
            <Box>
                Chats in Swahili, Lingala, or French!
            </Box>
            <Box>
                {`Chat with opponents, and make new friends along the way.  It's not just a game; it's a community `}🌐
            </Box>
        </Box>
        <Box py={["1rem"]}>
            <Box fontWeight={["bold"]} fontSize={["lg"]} py={[".4rem"]}>
                👫 Play Against Friends - Because Gaming Can be Better Together!
            </Box>
            <Box>
                {`You can join a table and Invite your buddies for epic showdowns, showcase your skills, and create memories that'll last a lifetime!`}
            </Box>
        </Box>
        <Box py={["1rem"]}>
            <Box fontWeight={["bold"]} fontSize={["lg"]} py={[".4rem"]}>
                🏆 Tournaments: Aim for the Grand Prize!
            </Box>
            <Box>
                {`Once you've mastered the basics, it's time to take your skills to the next level by joining our tournaments!`}<br />
                {` Choose the tournament size that suits your style and ambition. Whether you thrive in smaller, 
                    more intimate competitions or seek the grandeur of massive tournaments, our platform caters to your gaming preferences. 
                    The thrill of victory awaits in the arena of champions `}🎖️ 
            </Box>
            <Box display={["flex"]} justifyContent={["flex-start"]} pt={["1rem"]}>
                <Button variant={["outline"]} color={["white"]} borderColor={backgroundColors.pink}>
                    Learn more
                </Button>
            </Box>
        </Box>
        <Box py={["1rem"]}>
            <Box fontWeight={["bold"]} fontSize={["lg"]} py={[".4rem"]}>
                🔐 VIP Privileges - Exclusive Private Games 🌟
            </Box>
            <Box>
                {`Become a VIP player and unlock a realm of exclusive opportunities. Gain access to private games where you can compete with friends, 
                    fellow VIPs, and high rollers in an intimate setting. Enjoy special perks, exclusive events, and enhanced rewards that come with VIP status. 
                    Elevate your gaming experience and bask in the privileges reserved for our most esteemed players.
                `} 😊
            </Box>
        </Box>
    </Flex>
  )
}

export default Features
