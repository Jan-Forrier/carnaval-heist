import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Programma from '@/components/Programma'
import Kaart from '@/components/Kaart'
import Praktisch from '@/components/Praktisch'
import Kinderen from '@/components/Kinderen'
import LekkerGenieten from '@/components/LekkerGenieten'
import Carnavalstermen from '@/components/Carnavalstermen'
import Deelnemen from '@/components/Deelnemen'
import Fotogalerij from '@/components/Fotogalerij'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="flex flex-col items-start relative w-full min-h-screen">
      <Header />
      <main className="bg-white flex flex-col items-start w-full">
        <Hero />
        <Programma />
        <Kaart />
        <Praktisch />
        <Kinderen />
        <LekkerGenieten />
        <Carnavalstermen />
        <Deelnemen />
        <Fotogalerij />
      </main>
      <Footer />
    </div>
  )
}
