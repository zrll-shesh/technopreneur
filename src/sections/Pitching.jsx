import { motion } from 'framer-motion'
import { Section, ChapterHead, Margin, KeyPoints, SubHead, Para } from '../components/ui'
import { PITCH_STAGES } from '../data'

const TIPS = [
  { t: 'Mulai dari masalah', d: 'Audiens perlu merasakan masalahnya sebelum mendengar solusinya.' },
  { t: 'Gunakan data sederhana', d: 'Satu angka yang jelas lebih meyakinkan daripada banyak klaim.' },
  { t: 'Hindari istilah teknis', d: 'Jelaskan seolah kepada adik kelas yang belum mengenal teknologinya.' },
  { t: 'Berlatih minimal tiga kali', d: 'Latihan membuat penyampaian lebih tenang dan tepat waktu.' },
]

export default function Pitching() {
  return (
    <Section id="pitching" dark>
      <ChapterHead
        dark
        no={9}
        title="Menyampaikan ide"
        lead="Ide yang baik perlu disampaikan dengan jelas agar mendapat dukungan. Pitch adalah presentasi singkat untuk meyakinkan audiens, baik juri lomba, calon mitra, maupun calon pengguna."
      />

      <SubHead>9.1 Struktur pitch 90 detik</SubHead>
      <Para dark className="mb-8">Struktur berikut membagi 90 detik menjadi lima bagian yang saling berurutan.</Para>
      <div className="flex h-4 overflow-hidden rounded-full bg-white/10">
        {PITCH_STAGES.map((s, k) => (
          <motion.div
            key={s.title}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: k * 0.2, duration: 0.4 }}
            className={`h-full origin-left border-r-2 border-ink last:border-r-0 ${k % 2 ? 'bg-marker/60' : 'bg-marker'}`}
            style={{ width: `${((s.to - s.from) / 90) * 100}%` }}
          />
        ))}
      </div>
      <ol className="mt-6 grid gap-3 md:grid-cols-5">
        {PITCH_STAGES.map((s) => (
          <li key={s.title} className="rounded-2xl bg-white/[0.06] p-5">
            <p className="text-sm tabular-nums text-paper/55">
              Detik {s.from} sampai {s.to}
            </p>
            <p className="mt-1 text-xl font-bold text-marker">{s.title}</p>
            <p className="mt-2 text-paper/80">{s.body}</p>
          </li>
        ))}
      </ol>

      <SubHead>9.2 Tips penyampaian</SubHead>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {TIPS.map((t) => (
          <div key={t.t} className="border-t-[5px] border-marker pt-4">
            <p className="text-xl font-bold">{t.t}</p>
            <p className="mt-2 text-paper/75">{t.d}</p>
          </div>
        ))}
      </div>
      <Margin dark className="mt-12">Don't pitch your technology. Pitch the problem, and let your solution be the obvious answer.</Margin>

      <KeyPoints
        dark
        points={[
          'Pitch yang efektif dimulai dari masalah, bukan dari teknologi.',
          'Struktur 90 detik: pembuka, masalah, solusi, nilai bisnis, dan penutup.',
          'Kejelasan dan latihan lebih menentukan daripada kecanggihan istilah.',
        ]}
      />
    </Section>
  )
}
