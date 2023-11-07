import Features from '@/components/Features'
import HeroSection from '@/components/HeroSection'
import HowItWorks from '@/components/HowItWorks'
import HowToPlay from '@/components/HowToPlay'

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowItWorks />  
      <HowToPlay />
      <Features />
    </>
  )
}
