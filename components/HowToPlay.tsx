import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const HowToPlay = () => {
  return (
    <Flex mb={["1rem"]} p={["1rem"]} textAlign={["justify"]} direction={["column"]} gap={["1rem"]}>
        <Box fontSize={["xl"]} display={["grid"]} placeItems={["center"]}>
            <Text borderBottom={["1px solid white"]}>
                How To Play
            </Text>
        </Box>
        <Flex direction={["column"]} gap={[".8rem"]}>
          
          <Box>
            <Text fontWeight={["bold"]} py={[".3rem"]}>
              Join a Table
            </Text>
            <Text>
              {`Start by joining a table. Decide how many tokens you want to bring to the game. 
              Let's say you and your opponent both join with 10 tokens each.`}
            </Text>
          </Box>
          <Box>
            <Text fontWeight={["bold"]} py={[".3rem"]}>
              The Leader-Follower Dynamic
            </Text>
            <Text>
              {`Each round, there's a leader and a follower. The leader goes first, followed by the follower, 
              and the outcome determines the winner of the round.`}
            </Text>
          </Box>
          <Box>
            <Text fontWeight={["bold"]} py={[".3rem"]}>
              Playing as the Leader
            </Text>
            <Text>
              {`If you're the leader for the round, you'll be presented with a choice: "H" or "T". 
              Pick one – let's say you choose "H".`}
            </Text>
          </Box>
          <Box>
            <Text fontWeight={["bold"]} py={[".3rem"]}>
            Playing as the Follower
            </Text>
            <Text>
            {`Now it's the follower's turn. As the follower, you have additional decisions to make. 
            You'll also choose between "H" and "T" and decide how much you want to bet. For example, you decide to bet 5 tokens on "T."`}
            </Text>
          </Box>
          <Box>
            <Text fontWeight={["bold"]} py={[".3rem"]}>
              Determining the Outcome
            </Text>
            <Text>
              {`With your choice of "H" as the leader and the follower's choice of "T" with a 5-token bet, it's time to see who wins the round.`}
            </Text>
          </Box>
          <Box>
            <Text fontWeight={["bold"]} py={[".3rem"]}>
              The Winner Takes It All
            </Text>
            <Text>
              {`In this round, the follower loses the bet because they didn't select your value ("H"). As the leader, 
              you claim the 5 tokens bet by the follower. Your pot now contains 15 tokens, while the follower's pot decreases to 5 tokens.`}
            </Text>
          </Box>
          <Box>
            <Text fontWeight={["bold"]} py={[".3rem"]}>
              Switch Roles for the Next Round
            </Text>
            <Text>
              Get ready for the next round! You become the follower, and the previous follower becomes the leader. 
              The game continues with these roles switching back and forth.
            </Text>
          </Box>

          <Box boxShadow={["dark-lg"]} py={["1rem"]} mx={[".5rem"]} borderRadius={["lg"]} textAlign={["justify"]} px={["1rem"]}>
            {`That's the essence of the game! With every round, the stakes get higher, and 
            it's a battle of wits and strategy. `} <br />Can you outsmart your opponent and claim victory?
          </Box>
        </Flex>
    </Flex>
  )
}


// French

// Êtes-vous prêt à mettre votre chance et votre stratégie à l'épreuve dans ce jeu de paris passionnant ? Voici comment jouer :

// Rejoignez une Table : Commencez par rejoindre une table. Décidez combien de jetons vous souhaitez apporter au jeu. Disons que vous et votre adversaire rejoignez tous les deux avec 10 jetons chacun.

// La Dynamique du Leader-Suiveur : À chaque tour, il y a un leader et un suiveur. Le leader joue en premier, suivi du suiveur, et le résultat détermine le gagnant du tour.

// Jouer en tant que Leader : Si vous êtes le leader pour le tour, vous aurez le choix : "H" ou "T". Choisissez-en un – disons que vous choisissez "H".

// Jouer en tant que Suiveur : Maintenant, c'est au tour du suiveur. En tant que suiveur, vous avez des décisions supplémentaires à prendre. Vous choisirez également entre "H" et "T" et déciderez combien vous voulez parier. Par exemple, vous décidez de parier 5 jetons sur "T".

// Détermination du Résultat : Avec votre choix de "H" en tant que leader et le choix du suiveur de "T" avec un pari de 5 jetons, il est temps de voir qui remporte le tour.

// Le Vainqueur Remporte Tout : Dans ce tour, le suiveur perd le pari car il n'a pas choisi votre valeur ("H"). En tant que leader, vous réclamez les 5 jetons misés par le suiveur. Votre pot contient maintenant 15 jetons, tandis que le pot du suiveur diminue à 5 jetons.

// Changez de Rôles pour le Prochain Tour : Préparez-vous pour le tour suivant ! Vous devenez le suiveur, et le précédent suiveur devient le leader. Le jeu continue avec ces rôles qui s'inversent.

// C'est l'essence du jeu ! À chaque tour, les enjeux augmentent, et c'est un combat d'astuce et de stratégie. Pouvez-vous surpasser votre adversaire et revendiquer la victoire ?

export default HowToPlay
