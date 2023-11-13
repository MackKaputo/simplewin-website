import { backgroundColors } from '@/app/colors'
import { Box, Button, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

const Features = () => {
  return (
    <Flex direction={["column"]} gap={["1rem"]} px={["1rem"]} pb={["3rem"]}>
        <Box py={["1rem"]}>
            <Box fontWeight={["bold"]} fontSize={["lg"]} py={[".4rem"]}>
                {/* 🤝 Your Voice Matters! */}
                🤝 Votre voix compte !
            </Box>
            <Box>
                {/* {`
                    Our platform is designed with your preferences in mind, 
                    and we're committed to creating a game that not only excites but resonates with every player. Your voice matters,
                    and we're here to listen and adapt, ensuring a fair and thrilling adventure that evolves with your input. 
                    Join us on this journey, where your ideas shape the game!`
                } */}
                {`
                    Notre plateforme est conçue en tenant compte de vos préférences, et nous nous engageons à créer un jeu qui non seulement excite, 
                    mais résonne avec chaque joueur. Votre voix compte, et nous sommes là pour écouter et nous adapter, garantissant une aventure équitable 
                    et passionnante qui évolue avec vos contributions. Rejoignez-nous dans cette aventure où vos idées façonnent le jeu !
                `}
            </Box>
        </Box>
        <Box py={["1rem"]}>
            <Box fontWeight={["bold"]} fontSize={["lg"]} py={[".4rem"]}>
                {/* 🚀 In-Game Interactions - Chats in Your Local Language! */}
                🚀 Interactions en jeu - Des discussions dans votre langue locale !
            </Box>
            <Box>
                {/* Chats in Swahili, Lingala, or French! */}
                Chats en Swahili, Lingala ou français !
            </Box>
            <Box>
                {/* {`Chat with opponents, and make new friends along the way.  It's not just a game; it's a community `}🌐 */}
                {`Discutez avec vos adversaires et faites de nouveaux amis en chemin. Ce n'est pas juste un jeu ; c'est une communauté!`} 🌐
            </Box>
        </Box>
        <Box py={["1rem"]}>
            <Box fontWeight={["bold"]} fontSize={["lg"]} py={[".4rem"]}>
                {/* 👫 Play Against Friends - Because Gaming Can be Better Together! */}
                {`👫 Jouez contre des amis - Parce que le jeu peut être meilleur ensemble !`}
            </Box>
            <Box>
                {/* {`You can join a table and Invite your buddies for epic showdowns, showcase your skills, and create memories that'll last a lifetime!`} */}
                {`Rejoignez une table et invitez vos amis pour des confrontations épiques, mettez en valeur vos compétences, et créez des souvenirs qui dureront toute une vie !`}
            </Box>
        </Box>
        <Box py={["1rem"]}>
            <Box fontWeight={["bold"]} fontSize={["lg"]} py={[".4rem"]}>
                {/* 🏆 Tournaments: Aim for the Grand Prize! */}
                🏆 Tournois : Visez le Grand Prix !
            </Box>
            <Box>
                {/* {`Once you've mastered the basics, it's time to take your skills to the next level by joining our tournaments!`}<br /> */}
                {/* {` Choose the tournament size that suits your style and ambition. Whether you thrive in smaller, 
                    more intimate competitions or seek the grandeur of massive tournaments, our platform caters to your gaming preferences. 
                    The thrill of victory awaits in the arena of champions 
                `}🎖️ */}
                {`Une fois que vous avez maîtrisé les bases, il est temps de perfectionner vos compétences en participant à nos tournois !`}<br />
                {`
                    Choisissez la taille de tournoi qui convient à votre style et à vos ambitions. Que vous excelliez dans des compétitions plus petites et plus intimes, 
                    ou que vous recherchiez la grandeur des tournois massifs, notre plateforme répond à vos préférences de jeu. 
                    La joie de la victoire vous attend dans l'arène des champions.
                `} 🎖️
            </Box>
            <Box display={["flex"]} justifyContent={["flex-start"]} pt={["1rem"]}>
                <Link href="/how-tournaments-work">
                    <Button variant={["outline"]} color={["white"]} borderColor={backgroundColors.pink}>
                        {/* Learn more */}
                        En savoir plus
                    </Button>
                </Link>
            </Box>
        </Box>
        <Box py={["1rem"]}>
            <Box fontWeight={["bold"]} fontSize={["lg"]} py={[".4rem"]}>
                {/* 🔐 VIP Privileges - Exclusive Private Games 🌟 */}
                🔐 Privilèges VIP - Jeux privés exclusifs 
            </Box>
            <Box>
                {/* {`Become a VIP player and unlock a realm of exclusive opportunities. Gain access to private games where you can compete with friends, 
                    fellow VIPs, and high rollers in an intimate setting. Enjoy special perks, exclusive events, and enhanced rewards that come with VIP status. 
                    Elevate your gaming experience and bask in the privileges reserved for our most esteemed players.
                `} 😊 */}
                {`
                    Devenez un joueur VIP et débloquez un monde d'opportunités exclusives. 
                    Accédez à des jeux privés où vous pouvez rivaliser avec des amis, d'autres VIP et des gros joueurs dans un cadre intimiste. 
                    Profitez d'avantages spéciaux, d'événements exclusifs et de récompenses améliorées réservées aux membres VIP. 
                    Élevez votre expérience de jeu et profitez des privilèges réservés à nos joueurs les plus estimés
                `} 👑
            </Box>
        </Box>
    </Flex>
  )
}

export default Features
