'use client'

import {
  Box,
  Text,
  Button,
} from '@chakra-ui/react'
import {TbBrandCashapp} from "react-icons/tb"
import { GiTrophy } from "react-icons/gi"
import Image from 'next/image'
import gameTableImage from "../public/images/game_table_view.jpg"

export default function HeroSection() {
    return(
      <Box  minH={["60vh"]} pt={["1rem"]} px={["1rem"]}>
        <Box pt={["0rem"]} >
          <Text fontSize={["xl"]} textAlign={["center"]} fontWeight={["bold"]}>
            {/* Bet the Fun Way: Easy, Exciting, and All About You! */}
            Pariez de manière amusante : Simple, passionnante, et centrée sur vous !
          </Text>

          <Text  fontSize={["md"]} textAlign={["center"]} display={["none", "inherit"]}>
            {`we're on a mission to create the ultimate betting platform game that's not just fun but fair for everyone. 
            We believe in transparency, player collaboration, and an unforgettable gaming experience.`}
          </Text>

          <Text fontSize={["md"]} textAlign={["center"]}>
            {/* Say Goodbye to Complex Games. */}
            Dites adieu aux Jeux Complexes.
          </Text>
        </Box>

        <Box pt={["1.5rem"]} display={["grid"]} placeItems={["center"]}>
          <Box>
          <Image
            width={200}
            src={gameTableImage}
            alt='GameImage'
          />
          </Box>
        </Box>

        <Box display={["grid"]} placeItems={["center"]} pt={["2rem"]}>
          <Box>
            <Button size={["lg"]} leftIcon={<TbBrandCashapp style={{fontSize: "1.3rem"}}/>} rightIcon={<GiTrophy style={{fontSize: "1.3rem"}}/>} colorScheme='orange'>
              {/* Enter to Play */}
              Entrer pour jouer
            </Button>
          </Box>
          <Box pt={["2rem"]}>
            <Text  fontSize={["md"]} textAlign={["center"]} display={["inherit", "none", "none"]}>
              {/* {`we're on a mission to create the ultimate betting platform game that's not just fun but fair for everyone. 
              We believe in transparency, player collaboration, and an unforgettable gaming experience.`} */}
              {`Nous sommes en mission pour créer la plateforme de jeu de paris ultime, qui n'est pas seulement amusante, mais aussi juste et équitable pour tous.
                Nous croyons en la transparence, la collaboration avec les joueurs et une expérience de jeu inoubliable.`}
            </Text>
          </Box>
        </Box>
      </Box>
    )
}