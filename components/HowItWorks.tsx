import { backgroundColors } from '@/app/colors'
import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const HowItWorks = () => {
  return (
    <Box mt={["2rem"]}>
        <Box fontSize={["xl"]} display={["grid"]} placeItems={["center"]}>
            <Text borderBottom={["1px solid white"]}>
                {/* How it Works in 4 Steps */}
                Comment ça fonctionne en 4 étapes
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
                    {/* Create an Account */}
                    Créer un compte
                </Box>
                <Box fontSize={["sm"]}>
                    {/* Set up your account. It is super easy and we only need a few details */}
                    {`Configurez votre compte. C'est super facile et nous avons juste besoin de quelques détails.`}
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
                    {/* Make a deposit (Buy Tokens) */}
                    {`Effectuez un dépôt (Achetez des jetons)`}
                </Box>
                <Box fontSize={["sm"]}>
                    {/* Buy tokens and dive into the gaming fun! Choose your preferred method, whether in-person or online payments. */}
                    Achetez des jetons et plongez dans le plaisir du jeu ! Choisissez votre méthode préférée, que ce soit en personne ou en ligne.
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
                    {/* Navigate to the Lobby - Join a Table */}
                    Accédez au hall - Rejoignez une table
                </Box>
                <Box fontSize={["sm"]} textAlign={["justify"]}>
                    {/* {` 
                        You'll encounter many tables, each hosting the same game and having different minimum and maximum buyin amounts.
                        Now comes the moment of anticipation! Click on your chosen table, and voila – you're in. 
                    `} */}
                    {`
                        Vous rencontrerez de nombreuses tables, chacune proposant le même jeu avec des montants d'achat minimum et maximum différents.
                        Le moment tant attendu arrive ! Cliquez sur la table de votre choix, et voilà – vous y êtes.
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
                    {/* Make a Withdrawal */}
                    Effectuer un retrait
                </Box>
                <Box fontSize={["sm"]} textAlign={["justify"]}>
                    {/* {`
                        Withdraw your tokens, converted to real money effortlessly! Choose from various methods, 
                        in-person or online withdrawals. It's your winnings, your way!
                    `} */}
                    {`
                        Retirez vos jetons, convertis sans effort en argent réel ! Choisissez parmi diverses méthodes, 
                        que ce soit des retraits en personne ou en ligne. Ce sont vos gains, à votre manière !
                    `}
                </Box>
            </Box>
        </Flex>
        <Box px={["1.5rem"]} boxShadow={["dark-lg"]} py={["1rem"]} mx={[".5rem"]} borderRadius={["lg"]} textAlign={["justify"]}>
            {/* {`
                🤔 You don't know how to play yet? Don't worry 😊, here is how you play, and you can watch a video in action with explanations,
                You will see how simple and exciting it is!
            `} */}
            {`
                🤔 Vous ne savez pas encore comment jouer ? Ne vous inquiétez pas 😊, voici comment jouer, et vous pouvez regarder une vidéo en action avec des explications.
                Vous verrez à quel point c'est simple et excitant !
            `}
        </Box>
    </Box>
  )
}


export default HowItWorks
