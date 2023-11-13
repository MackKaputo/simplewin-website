import { Box, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import React from 'react'

export default function HowTournamentsWork() {
  return (
    <Box minH={["90vh"]} px={["1rem"]}>
        <Box py={["1rem"]}>
            <Text textAlign={["center"]} fontSize={["2xl"]}>
              Comment fonctionnent les tournois 🏆
            </Text>
        </Box>
        <Box>

          <Box display="flex" flexDirection={["column"]} gap={["1rem"]} py={["1rem"]}>
            <Box fontWeight={["bold"]} fontSize={["large"]}>
              {`Vue d'ensemble du Tournoi :`}
            </Box>
            <Box>
              {`
                Le format du tournoi suit le même déroulement que celui d'une partie standard, 
                avec pour objectif de progresser à travers plusieurs tables pour atteindre la phase 
                finale et émerger en tant que vainqueur ultime.
              `}
            </Box>
          </Box>
          <Box display="flex" flexDirection={["column"]} gap={["1rem"]} py={["1rem"]}>
            <Box fontWeight={["bold"]} fontSize={["large"]}>
              {`Structure du Tournoi :`}
            </Box>
            <Box>
              {`
                Chaque tournoi se compose de plusieurs tables, et les participants peuvent s'inscrire pour une seule place.
                Contrairement aux jeux , les tournois ont des heures de début et de fin spécifiques pour chaque étape, 
                assurant un environnement structuré et compétitif.
              `}
              <br />
              Supposons un tournoi avec la structure suivante frequente:
            </Box>
          </Box>
          <Box py={["1rem"]}>
            [ image ]
          </Box>
          
          <Box>
            <Box textAlign={["center"]} fontWeight={["bold"]} fontSize={["large"]}>
              Règles de la Phase 1 
            </Box>

            <Box display="flex" flexDirection={["column"]} gap={["1rem"]} py={["1rem"]}>
              <Box fontWeight={["bold"]} fontSize={["large"]}>
                {`Placement à la Table`}
              </Box>
              <Box>
                {`
                  Les participants commencent à différentes tables en Phase 1. L'objectif est de surpasser les adversaires en acquérant leurs jetons.
                `}
                <br />
              </Box>
            </Box>

            <Box display="flex" flexDirection={["column"]} gap={["1rem"]} py={["1rem"]}>
              <Box fontWeight={["bold"]} fontSize={["large"]}>
                {`Détermination des Gagnants :`}
              </Box>
              
              <UnorderedList>
                <ListItem>
                  {`Si, avant la fin de l'étape, vous êtes le dernier joueur à une table avec tous les autres participants à court de jetons, vous êtes déclaré vainqueur.`}
                </ListItem>
                <ListItem>
                  {`Si l'heure de fin arrive et que plusieurs joueurs restent, le gagnant est déterminé par le joueur ayant le plus grand nombre de jetons à ce moment-là.`}
                </ListItem>
              </UnorderedList>
            </Box>

            <Box display="flex" flexDirection={["column"]} gap={["1rem"]} py={["1rem"]}>
              <Box fontWeight={["bold"]} fontSize={["large"]}>
                {`Critères de Départage`}
              </Box>
              <UnorderedList>
                <ListItem>
                  {`En cas d'égalité au niveau du nombre de jetons, le joueur avec le plus grand nombre de victoires en tête-à-tête prend le dessus.`}
                </ListItem>
                <ListItem>
                  {`S'il persiste une égalité, le gagnant est le joueur qui serait le prochain leader si la partie devait se poursuivre.`}
                </ListItem>
              </UnorderedList>
            </Box>
          </Box>

          <Box >
            <Box textAlign={["center"]} fontWeight={["bold"]} fontSize={["large"]}>
              Règles de la Phase 2 
            </Box>

            <Box display="flex" flexDirection={["column"]} gap={["1rem"]} py={["1rem"]}>
              <Box fontWeight={["bold"]} fontSize={["large"]}>
                {`Avancement :`}
              </Box>
              <Box>
                {`
                  Les joueurs qui sortent vainqueurs de la Phase 1 passent à la Phase 2, la phase finale du tournoi.
                `}
                <br />
              </Box>
            </Box>

            <Box display="flex" flexDirection={["column"]} gap={["1rem"]} py={["1rem"]}>
              <Box fontWeight={["bold"]} fontSize={["large"]}>
                {`Dynamique de la Phase Finale :`}
              </Box>
              
              <UnorderedList>
                <ListItem>
                  {`La Phase 2, tout comme la Phase 1, a un début et une fin spécifiés.`}
                </ListItem>
                <ListItem>
                  {`Le nombre de gagnants en Phase 2 dépend de la structure du tournoi, avec des récompenses ou des parts clairement détaillées sur la page du tournoi.`}
                </ListItem>
              </UnorderedList>
            </Box>

            <Box display="flex" flexDirection={["column"]} gap={["1rem"]} py={["1rem"]}>
              <Box fontWeight={["bold"]} fontSize={["large"]}>
                {`Distribution des Récompenses :`}
              </Box>
              <UnorderedList>
                <ListItem>
                  {`Les récompenses varient en fonction du tournoi et sont explicitement détaillées sur la page du tournoi.`}
                </ListItem>
                <ListItem>
                  {`La fin de la Phase 2 marque la conclusion du tournoi, et les gagnants sont célébrés en fonction de leurs performances `}🎖️
                </ListItem>
              </UnorderedList>
            </Box>
          </Box>
        </Box>

        <Box py={["1rem"]}>
          {`
            En respectant ces règles, les participants s'engagent dans un tournoi structuré et compétitif, mettant en valeur leur habileté stratégique 
            et gagnant des récompenses en fonction de leurs performances.
          `}
        </Box>
    </Box>
  )
}


// Tournament Overview:

// The tournament format follows the same gameplay as a standard match, with the goal of progressing through multiple tables to reach the final stage and emerge as the ultimate winner.

// Tournament Structure:

// Each tournament consists of multiple tables, and participants can register for only one seat.
// Unlike casual games, tournaments have specific start and end times for each stage, ensuring a structured and competitive environment.
// Stage 1 Rules:

// Table Seating:

// Participants start at different tables in Stage 1. The objective is to outlast opponents by acquiring their tokens.
// Determining Winners:

// If, before the stage's end time, you are the last player at a table with all other participants out of tokens, you are declared the winner.
// If the end time arrives and multiple players remain, the winner is determined by the player with the highest token count at that moment.
// Tiebreakers:

// In the event of a tie in token count, the player with the most one-on-one wins takes precedence.
// If there is still a tie, the winner is the player who would be the next leader if the game were to continue.
// Stage 2 Rules:

// Advancement:

// Players who emerge as winners in Stage 1 proceed to Stage 2, the final stage of the tournament.
// Final Stage Dynamics:

// Stage 2, like Stage 1, has a specified start and end time.
// The number of winners in Stage 2 depends on the tournament structure, with rewards or shares clearly outlined on the tournament page.
// Reward Distribution:

// Rewards vary based on the tournament and are explicitly detailed on the tournament page.
// The end of Stage 2 marks the conclusion of the tournament, and winners are celebrated based on their achievements.
// By adhering to these rules, participants engage in a structured and competitive tournament, showcasing their strategic prowess and earning rewards based on their performance.