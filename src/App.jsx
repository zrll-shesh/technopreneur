import { MotionConfig } from 'framer-motion'
import Nav from './components/Nav'
import Hero from './sections/Hero'
import Kenalan from './sections/Kenalan'
import Pemanasan from './sections/Pemanasan'
import Technopreneur from './sections/Technopreneur'
import Menemukan from './sections/Menemukan'
import Painkiller from './sections/Painkiller'
import LimaKenapa from './sections/LimaKenapa'
import Dampak from './sections/Dampak'
import Bisnis from './sections/Bisnis'
import Validasi from './sections/Validasi'
import StudiKasus from './sections/StudiKasus'
import TanggungJawab from './sections/TanggungJawab'
import SkorIde from './sections/SkorIde'
import Workshop from './sections/Workshop'
import Pitching from './sections/Pitching'
import Penutup from './sections/Penutup'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Nav />
      <main>
        <Hero />
        <Kenalan />
        <Pemanasan />
        <Technopreneur />
        <Menemukan />
        <Painkiller />
        <LimaKenapa />
        <Dampak />
        <Bisnis />
        <Validasi />
        <StudiKasus />
        <TanggungJawab />
        <SkorIde />
        <Workshop />
        <Pitching />
        <Penutup />
      </main>
    </MotionConfig>
  )
}
