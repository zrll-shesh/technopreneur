import { motion } from 'framer-motion'
import { Section, ChapterHead, Margin } from '../components/ui'

const PRINCIPLES = [
  {
    title: 'Jaga data orang lain',
    body: 'Data santri, nilai, kesehatan, atau keuangan keluarga itu amanah. Kumpulkan seperlunya, simpan dengan aman, dan jangan pernah dibagikan tanpa izin.',
    color: 'bg-marker',
  },
  {
    title: 'Pastikan adil',
    body: 'AI belajar dari data, dan data bisa berat sebelah. Di proyek analisis kejahatan LAPD, aku menambahkan audit keadilan supaya hasilnya nggak merugikan kelompok tertentu.',
    color: 'bg-[#D4DBFF]',
  },
  {
    title: 'Jangan membahayakan',
    body: 'Di AIO PestGuard, setiap rekomendasi dicek dulu dengan daftar pestisida terlarang. Solusi yang salah bisa lebih berbahaya daripada tidak ada solusi.',
    color: 'bg-[#BFE8D6]',
  },
]

export default function TanggungJawab() {
  return (
    <Section id="tanggung-jawab">
      <ChapterHead
        no={9}
        title="Teknologi yang amanah."
        lead="Dampak yang baik juga berarti tidak merugikan orang lain. Semakin besar jangkauan sebuah teknologi, semakin besar juga tanggung jawab pembuatnya."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {PRINCIPLES.map((p, k) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 40, rotate: k % 2 ? 2 : -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: k % 2 ? 1 : -1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ type: 'spring', stiffness: 140, damping: 16, delay: k * 0.1 }}
            className={`p-7 shadow-[4px_8px_0_rgba(12,18,54,0.1)] ${p.color}`}
          >
            <p className="text-2xl font-extrabold">{p.title}</p>
            <p className="mt-3 text-lg leading-relaxed">{p.body}</p>
          </motion.div>
        ))}
      </div>
      <Margin className="mt-14">
        Build things you'd be proud to explain to your parents and your teachers.
      </Margin>
    </Section>
  )
}
