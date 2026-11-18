import { motion } from 'framer-motion'
import { Section, ChapterHead } from '../components/ui'
import { OBJECTIVES, SECTIONS } from '../data'

const MAP_DESC = {
  konsep: 'Pengertian, unsur utama, dan karakteristik technopreneur.',
  'sumber-ide': 'Cara menemukan ide dari lingkungan sekitar.',
  masalah: 'Membedakan masalah bernilai dan menemukan akarnya.',
  dampak: 'Mengukur manfaat sebuah solusi bagi penggunanya.',
  bisnis: 'Pengguna, pembayar, model bisnis, dan Lean Canvas.',
  validasi: 'Menguji ide sebelum membangun solusi.',
  evaluasi: 'Rubrik penilaian dan matriks prioritas ide.',
  etika: 'Prinsip teknologi yang amanah.',
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
              <span className="hand text-xl text-cobalt">Bab {k + 1}</span>
              <span className="text-xl font-bold transition-colors group-hover:text-cobalt">{c.label}</span>
              <span className="text-ink/65">{MAP_DESC[c.id]}</span>
            </a>
          </li>
        ))}
      </ol>
    </Section>
  )
}
