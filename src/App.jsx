import { MotionConfig } from 'framer-motion'
import Nav from './components/Nav'
import Hero from './sections/Hero'
import Kenalan from './sections/Kenalan'
import Tujuan from './sections/Tujuan'
import Masalah from './sections/Masalah'
import Kuis from './sections/Kuis'
import Technopreneur from './sections/Technopreneur'
import Teknologi from './sections/Teknologi'
import Produk from './sections/Produk'
import Bisnis from './sections/Bisnis'
import Validasi from './sections/Validasi'
import StudiKasus from './sections/StudiKasus'
import TanggungJawab from './sections/TanggungJawab'
import Pitching from './sections/Pitching'
import Penutup from './sections/Penutup'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Nav />
      <main>
        <Hero />
        <Kenalan />
        <Tujuan />
        <Technopreneur />
        <Teknologi />
        <Masalah />
        <Produk />
        <Bisnis />
        <Validasi />
        <TanggungJawab />
        <Pitching />
        <StudiKasus />
        <Kuis />
        <Penutup />
      </main>
    </MotionConfig>
  )
}
