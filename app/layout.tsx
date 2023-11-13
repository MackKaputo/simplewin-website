import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from '@/components/NavBar'
import { backgroundColors } from './colors'
import styles from "./main.module.css"
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SimpleWin',
  description: `SimpleWin, simple play, simple win. 
  Play a simple live multiplayer game and enjoy the thrill of real money at stake.
  Proudly Congolese`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body style={{ backgroundColor: backgroundColors.main_background, color: "white"}} className={styles.body}>
        <ChakraProvider>
          <NavBar />
          {children}
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  )
}
