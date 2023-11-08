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
        <Box  minH={["60vh"]}>
          <Box pt={["0rem"]} px={["1rem"]}>
            <Text fontSize={["xl"]} transform={["rotate(0deg)"]} textAlign={["center"]} fontWeight={["bold"]}>
              Bet the Fun Way: Easy, Exciting, and All About You!
            </Text>
            <Text fontSize={["md"]} transform={["rotate(0deg)"]} textAlign={["center"]}>
              Say Goodbye to Complex Games.
            </Text>
          </Box>

          <Box pt={["1.5rem"]} display={["grid"]} placeItems={["center"]} transform={["skew(20deg) rotateX(.07turn)"]}>
            <Image
              width={200}
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
          </Box>

        </Box>
    )
}