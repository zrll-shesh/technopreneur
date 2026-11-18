import { motion } from 'framer-motion'
import { Section, ChapterHead } from '../components/ui'
import { OBJECTIVES, SECTIONS } from '../data'

const MAP_DESC = {
  konsep: 'Peran teknologi dan empat lapisan produk teknologi.',
  teknologi: 'Tujuh ragam teknologi dan masalah yang cocok untuknya.',
  masalah: 'Menemukan, menilai, dan merumuskan masalah.',
  produk: 'Tujuh tahap pengembangan produk dan empat prinsipnya.',
  bisnis: 'B2C, B2B, B2G, B2B2C, dan model pendapatan.',
  validasi: 'Tangga bukti validasi serta TAM, SAM, dan SOM.',
  bidang: 'Pengenalan data science dan AI, bidang pemateri.',
  'studi-kasus': 'Empat proyek pemateri lengkap dengan hitungan pasar.',
  etika: 'Dampak, SDGs, dan lima prinsip etika teknologi.',
  pitching: 'Struktur menyampaikan ide dalam 90 detik.',
}

export default function Tujuan() {
  const chapters = SECTIONS.filter((s) => MAP_DESC[s.id])
  return (
    <Section id="tujuan">
      <ChapterHead
        kicker="Pengantar"
        title="Tujuan pembelajaran"
        lead="Setelah mengikuti materi ini, peserta diharapkan mampu:"
      />
      <ol className="grid gap-4 md:grid-cols-2">
        {OBJECTIVES.map((o, k) => (
          <motion.li
            key={o}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: k * 0.06 }}
            className="flex gap-5 rounded-[20px] border-2 border-ink/10 bg-white p-6"
          >
            <span className="text-4xl font-extrabold leading-none text-cobalt tabular-nums">{k + 1}</span>
            <span className="text-lg leading-relaxed">{o}</span>
          </motion.li>
        ))}
      </ol>

      <h3 className="display-md mb-6 mt-20 font-bold">Peta materi</h3>
      <ol className="divide-y-2 divide-ink/10 border-y-2 border-ink/10">
        {chapters.map((c, k) => (
          <li key={c.id}>
            <a href={`#${c.id}`} className="group grid gap-1 py-5 sm:grid-cols-[6rem_1fr_1.4fr] sm:items-baseline sm:gap-6">
              <span className="hand text-xl text-cobalt">{['bidang', 'studi-kasus'].includes(c.id) ? 'Penerapan' : `Bab ${k + 1}`}</span>
              <span className="text-xl font-bold transition-colors group-hover:text-cobalt">{c.label}</span>
              <span className="text-ink/65">{MAP_DESC[c.id]}</span>
            </a>
          </li>
        ))}
      </ol>
    </Section>
  )
}
