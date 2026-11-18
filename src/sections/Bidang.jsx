import { motion } from 'framer-motion'
import { Section, ChapterHead, Margin, SubHead, Para } from '../components/ui'
import { TECHS, LESSONS_FIELD } from '../data'
import { TechExplorer } from './Teknologi'

const FLOW = [
  { t: 'Data', d: 'Catatan transaksi, foto, teks, atau sinyal sensor.' },
  { t: 'Pola', d: 'Kecenderungan yang ditemukan melalui analisis dan model AI.' },
  { t: 'Keputusan', d: 'Tindakan yang lebih tepat, lebih cepat, dan dapat dipertanggungjawabkan.' },
]

const WHY = [
  { t: 'Memahami pengguna', d: 'Setiap produk digital menghasilkan data tentang cara orang memakainya. Data membantu mengetahui fitur apa yang benar-benar dibutuhkan.' },
  { t: 'Memprediksi kebutuhan', d: 'Dari stok barang hingga risiko gagal panen, prediksi membantu bertindak sebelum masalah terjadi.' },
  { t: 'Mengotomatiskan pekerjaan', d: 'Pekerjaan berulang seperti memilah, mengenali, atau menjawab pertanyaan dapat dibantu AI, sehingga manusia fokus pada keputusan penting.' },
]

export default function Bidang() {
  return (
    <Section id="bidang">
      <ChapterHead
        kicker="Bidang pemateri"
        title="Mengenal data science dan kecerdasan buatan"
        lead="Setelah membahas technopreneurship secara umum, bagian ini memperkenalkan bidang yang ditekuni pemateri. Data science dan AI adalah salah satu teknologi yang paling banyak dipakai technopreneur saat ini."
      />

      <SubHead>Dari data menjadi keputusan</SubHead>
      <Para className="mb-8">
        Data science adalah ilmu mengolah data untuk menemukan pola dan membantu pengambilan keputusan. Kecerdasan
        buatan (AI) adalah sistem yang belajar dari data sehingga mampu meniru sebagian kemampuan manusia, seperti
        melihat, membaca, dan memperkirakan.
      </Para>
      <ol className="grid gap-4 md:grid-cols-3">
        {FLOW.map((f, k) => (
          <motion.li
            key={f.t}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: k * 0.15 }}
            className={`rounded-[22px] p-6 ${k === 2 ? 'bg-cobalt text-white' : 'border-2 border-ink/10 bg-white'}`}
          >
            <span className={`text-5xl font-extrabold ${k === 2 ? 'text-white/30' : 'text-cobalt/25'}`}>{k + 1}</span>
            <p className="mt-2 text-2xl font-bold">{f.t}</p>
            <p className={`mt-2 ${k === 2 ? 'text-white/85' : 'text-ink/75'}`}>{f.d}</p>
          </motion.li>
        ))}
      </ol>

      <SubHead>Mengapa bidang ini penting bagi technopreneur</SubHead>
      <div className="grid gap-5 md:grid-cols-3">
        {WHY.map((w) => (
          <div key={w.t} className="border-t-[5px] border-cobalt pt-4">
            <p className="text-xl font-bold">{w.t}</p>
            <p className="mt-2 text-ink/75">{w.d}</p>
          </div>
        ))}
      </div>

      <SubHead>Cabang-cabang dalam data science dan AI</SubHead>
      <Para className="mb-8">Pilih salah satu cabang untuk melihat penjelasan dan contoh penerapannya pada karya pemateri.</Para>
      <TechExplorer items={TECHS} exampleLabel="Contoh pada karya pemateri" layoutKey="field-bg" />

      <SubHead>Pelajaran dari pengalaman</SubHead>
      <div className="grid gap-5 md:grid-cols-2">
        {LESSONS_FIELD.map((l) => (
          <div key={l.t} className="rounded-[22px] border-2 border-ink/10 bg-white p-6 sm:p-7">
            <p className="text-2xl font-extrabold">{l.t}</p>
            <p className="mt-3 text-lg leading-relaxed text-ink/80">{l.d}</p>
          </div>
        ))}
      </div>
      <Margin className="mt-12">Data is only valuable when it helps someone make a better decision.</Margin>
    </Section>
  )
}
