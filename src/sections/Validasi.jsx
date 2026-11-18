import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Section, ChapterHead, Cite, Margin, KeyPoints, SubHead, Para, Table } from '../components/ui'
import { MOM_TABLE, VALIDATION_STEPS } from '../data'

function FailBar() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  return (
    <div ref={ref} className="rounded-[26px] bg-ink p-6 text-paper sm:p-10">
      <p className="text-lg text-paper/70">Alasan paling sering startup berhenti beroperasi</p>
      <p className="mt-2 text-3xl font-extrabold sm:text-4xl">Tidak ada kebutuhan pasar.</p>
      <div className="mt-8 h-14 w-full overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="flex h-full items-center justify-end rounded-full bg-rose pr-5 text-2xl font-extrabold text-white"
          initial={{ width: '0%' }}
          animate={{ width: inView ? '42%' : '0%' }}
          transition={{ duration: 1.4, ease: [0.2, 0.7, 0.2, 1] }}
        >
          42%
        </motion.div>
      </div>
    </div>
  )
}

const LOOP = ['Bangun', 'Ukur', 'Pelajari']

export default function Validasi() {
  return (
    <Section id="validasi">
      <ChapterHead
        no={6}
        title="Validasi ide"
        lead="Ide yang terasa hebat belum tentu dibutuhkan. Validasi adalah proses menguji asumsi tentang masalah dan solusi kepada calon pengguna sebelum sumber daya besar dikeluarkan."
      />

      <SubHead>6.1 Mengapa validasi penting</SubHead>
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
        <FailBar />
        <Cite source="CB Insights, The Top Reasons Startups Fail" href="https://www.cbinsights.com/research/startup-failure-reasons-top/">
          Menurut analisis CB Insights terhadap 101 catatan kegagalan startup, alasan yang paling sering disebut adalah
          tidak adanya kebutuhan pasar, yaitu pada 42 persen kasus. Banyak startup membangun solusi untuk masalah yang
          ternyata tidak cukup dirasakan oleh calon penggunanya.
        </Cite>
      </div>

      <SubHead>6.2 Prinsip wawancara: The Mom Test</SubHead>
      <Para className="mb-6">
        Rob Fitzpatrick dalam buku The Mom Test (2013) menjelaskan bahwa pertanyaan tentang pendapat cenderung
        menghasilkan jawaban yang sopan, bukan jawaban yang jujur. Bahkan seorang ibu pasti akan mengatakan ide anaknya
        bagus. Karena itu, wawancara sebaiknya mengikuti tiga prinsip:
      </Para>
      <ol className="mb-10 grid gap-4 md:grid-cols-3">
        {[
          'Tanyakan kejadian di masa lalu, bukan rencana di masa depan.',
          'Tanyakan perilaku yang sudah dilakukan, bukan pendapat.',
          'Dengarkan lebih banyak daripada menjelaskan ide sendiri.',
        ].map((p, k) => (
          <li key={p} className="flex gap-4 rounded-[20px] bg-white p-5">
            <span className="text-3xl font-extrabold text-cobalt">{k + 1}</span>
            <span className="text-lg">{p}</span>
          </li>
        ))}
      </ol>
      <Table head={['Pertanyaan lemah', 'Pertanyaan kuat', 'Alasan']} rows={MOM_TABLE.map((r) => [r.weak, r.strong, r.why])} />

      <SubHead>6.3 Minimum Viable Product</SubHead>
      <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
        <Para>
          Minimum Viable Product (MVP) adalah versi paling sederhana dari sebuah produk yang cukup untuk menguji
          apakah ide benar-benar dibutuhkan. Konsep ini dipopulerkan Eric Ries melalui buku The Lean Startup (2011)
          dengan siklus bangun, ukur, dan pelajari. MVP tidak harus berupa aplikasi. Formulir daring, grup pesan, atau
          papan pengumuman sudah dapat menjadi MVP.
        </Para>
        <div className="relative mx-auto aspect-square w-full max-w-[300px]">
          <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full" aria-hidden="true">
            <motion.circle
              cx="100" cy="100" r="74" fill="none" stroke="#2337D9" strokeWidth="3" strokeDasharray="6 8"
              animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              style={{ originX: '100px', originY: '100px' }}
            />
          </svg>
          {LOOP.map((l, k) => {
            const a = (Math.PI * 2 * k) / 3 - Math.PI / 2
            return (
              <span
                key={l}
                className="absolute grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-ink text-lg font-bold text-paper"
                style={{ left: `${50 + Math.cos(a) * 37}%`, top: `${50 + Math.sin(a) * 37}%` }}
              >
                {l}
              </span>
            )
          })}
        </div>
      </div>

      <SubHead>6.4 Langkah validasi</SubHead>
      <ol className="grid gap-5 md:grid-cols-5">
        {VALIDATION_STEPS.map((s, k) => (
          <li key={s.t} className="rounded-[22px] bg-white p-5">
            <span className="text-5xl font-extrabold text-cobalt/25">{k + 1}</span>
            <p className="mt-2 text-xl font-bold">{s.t}</p>
            <p className="mt-2 text-ink/75">{s.d}</p>
          </li>
        ))}
      </ol>
      <Margin className="mt-12">Talk to people about their life, not about your idea.</Margin>

      <KeyPoints
        points={[
          'Alasan paling umum kegagalan startup adalah tidak adanya kebutuhan pasar.',
          'Wawancara yang baik menggali pengalaman dan perilaku nyata, bukan pendapat.',
          'MVP adalah versi paling sederhana untuk menguji ide, tidak harus berupa aplikasi.',
        ]}
      />
    </Section>
  )
}
