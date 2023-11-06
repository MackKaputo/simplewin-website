'use client'

import {
  Box,
  Text,
  Button,
} from '@chakra-ui/react'
import {TbBrandCashapp} from "react-icons/tb"
import { GiTrophy } from "react-icons/gi"
import Image from 'next/image'
import gameTableImage from "../public/images/game_table_view.jpeg"

export default function HeroSection() {
    return(
        <Box  minH={["80vh"]}>
          <Box pt={["1rem"]} px={["1rem"]}>
            <Text fontSize={["md"]} transform={["rotate(-2deg)"]} textAlign={["center"]} fontWeight={["bold"]}>
              Bet the Fun Way: Easy, Exciting, and All About You and Your Friends!
            </Text>
            <Text fontSize={["md"]} transform={["rotate(-2deg)"]} textAlign={["center"]}>
              Say Goodbye to Complex Games.
            </Text>
          </Box>

          <Box pt={["1.5rem"]} display={["grid"]} placeItems={["center"]}>
            <Image
              width={260}
              src={gameTableImage}
              alt='GameImage'
            />
          </Box>

          <Box display={["grid"]} placeItems={["center"]} pt={["2.5rem"]}>
            <Box>
              <Button size={["lg"]} leftIcon={<TbBrandCashapp style={{fontSize: "1.3rem"}}/>} rightIcon={<GiTrophy style={{fontSize: "1.3rem"}}/>} colorScheme='orange'>
                Enter to Play
              </Button>
            </Box>

            <Box pt={["4rem"]} fontSize={["xl"]}>
              <Text borderBottom={["1px solid white"]}>
                How it Works in 4 Steps
              </Text>
            </Box>
          </Box>

        </Box>
    )
}