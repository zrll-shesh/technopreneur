import { motion } from 'framer-motion'
import { Section, ChapterHead, Cite, Margin, Reveal, KeyPoints, SubHead, Para, Table } from '../components/ui'
import { ETHICS, SDG_MAP } from '../data'

export default function TanggungJawab() {
  return (
    <Section id="etika">
      <ChapterHead
        no={8}
        title="Dampak dan etika teknologi"
        lead="Teknologi yang baik tidak hanya berhasil secara teknis dan bisnis, tetapi juga membawa manfaat dan tidak merugikan pihak lain."
      />

      <Reveal>
        <figure className="rounded-[26px] bg-pine p-8 text-white sm:p-12">
          <p className="text-3xl font-bold leading-snug sm:text-4xl">Khairunnas anfa'uhum linnas.</p>
          <p className="mt-4 max-w-prose text-xl text-white/90">Sebaik-baik manusia adalah yang paling bermanfaat bagi manusia lain.</p>
          <figcaption className="mt-4 text-white/70">HR. Ahmad dan Ath-Thabrani</figcaption>
        </figure>
      </Reveal>

      <SubHead>8.1 Mengaitkan dampak dengan SDGs</SubHead>
      <Cite source="United Nations (2015), Agenda 2030 for Sustainable Development" href="https://sdgs.un.org/goals">
        Menurut Perserikatan Bangsa-Bangsa (2015), Agenda 2030 memuat 17 Tujuan Pembangunan Berkelanjutan (SDGs) yang
        menjadi kerangka bersama negara-negara dunia untuk mengatasi kemiskinan, ketimpangan, dan krisis lingkungan.
      </Cite>
      <Para className="mb-8">Mengaitkan produk dengan SDGs membantu menunjukkan relevansi dampaknya, terutama pada pasar B2G.</Para>
      <Table head={['Proyek', 'Tujuan yang didukung']} rows={SDG_MAP} />

      <SubHead>8.2 Lima prinsip etika teknologi</SubHead>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {ETHICS.map((p, k) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30, rotate: k % 2 ? 2 : -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: k % 2 ? 1 : -1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: 'spring', stiffness: 140, damping: 16, delay: k * 0.08 }}
            className={`p-6 shadow-[4px_8px_0_rgba(12,18,54,0.1)] ${p.color}`}
          >
            <p className="text-xl font-extrabold">{p.title}</p>
            <p className="mt-3 leading-relaxed">{p.body}</p>
          </motion.div>
        ))}
      </div>
      <Margin className="mt-12">Build things you'd be proud to explain to your parents and your teachers.</Margin>

      <KeyPoints
        points={[
          'Nyatakan dampak dengan jelas dan kaitkan dengan SDGs bila relevan.',
          'Lima prinsip etika: privasi, keadilan, keamanan, kejujuran AI, dan transparansi.',
        ]}
      />
    </Section>
  )
}
