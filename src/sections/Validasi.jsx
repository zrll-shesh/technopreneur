import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, X, RotateCcw } from 'lucide-react'
import { Section, ChapterHead, Cite, Margin, Btn } from '../components/ui'
import { MOM_TEST } from '../data'

function FailBar() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  return (
    <div ref={ref} className="rounded-[26px] bg-ink p-6 text-paper sm:p-10">
      <p className="text-lg text-paper/70">Alasan paling sering startup tutup</p>
      <p className="mt-2 text-3xl font-extrabold sm:text-4xl">Nggak ada yang butuh produknya.</p>
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
      <p className="mt-4 text-paper/70">dari catatan kegagalan yang dianalisis CB Insights</p>
    </div>
  )
}

function MomQuiz() {
  const [answers, setAnswers] = useState({})
  const score = Object.entries(answers).filter(([k, v]) => MOM_TEST[k].good === v).length
  const done = Object.keys(answers).length === MOM_TEST.length

  return (
    <div className="space-y-5">
      {MOM_TEST.map((q, k) => {
        const picked = answers[k]
        return (
          <div key={k} className="rounded-[22px] border-2 border-ink/10 bg-white p-5 sm:p-6">
            <p className="hand text-lg text-cobalt">pasangan {k + 1}: mana pertanyaan yang lebih jujur?</p>
            <div className="mt-3 grid gap-3 md:grid-cols-2">
              {['a', 'b'].map((opt) => {
                const isGood = q.good === opt
                const state = !picked ? 'idle' : isGood ? 'good' : picked === opt ? 'bad' : 'idle'
                return (
                  <motion.button
                    key={opt}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => !picked && setAnswers((a) => ({ ...a, [k]: opt }))}
                    disabled={Boolean(picked)}
                    className={`flex min-h-[64px] items-start gap-3 rounded-2xl border-2 p-4 text-left text-lg transition-colors ${
                      state === 'good'
                        ? 'border-pine bg-pine text-white'
                        : state === 'bad'
                          ? 'border-rose bg-rose/10 text-ink'
                          : 'border-ink/10 bg-paper hover:border-cobalt'
                    } ${picked && state === 'idle' ? 'opacity-50' : ''}`}
                  >
                    <span className="mt-0.5 shrink-0">
                      {state === 'good' ? <Check size={20} /> : state === 'bad' ? <X size={20} className="text-rose" /> : <span className="block h-5 w-5 rounded-full border-2 border-ink/30" />}
                    </span>
                    <span>"{q[opt]}"</span>
                  </motion.button>
                )
              })}
            </div>
            {picked && (
              <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mt-3 text-ink/75">
                {q.why}
              </motion.p>
            )}
          </div>
        )
      })}
      {done && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap items-center justify-between gap-4 rounded-[22px] bg-marker p-6"
        >
          <p className="text-2xl font-extrabold">
            {score} dari {MOM_TEST.length} tepat.
          </p>
          <Btn variant="ink" onClick={() => setAnswers({})}>
            <RotateCcw size={18} aria-hidden="true" /> Ulangi kuis
          </Btn>
        </motion.div>
      )}
    </div>
  )
}

const STEPS = [
  { t: 'Tulis asumsimu', d: 'Contoh: "santri rela pakai aplikasi untuk antre laundry". Ini masih tebakan, belum fakta.' },
  { t: 'Ngobrol dengan 5 orang', d: 'Pakai pertanyaan jujur tadi. Dengarkan lebih banyak daripada menjelaskan.' },
  { t: 'Bikin versi paling sederhana', d: 'Nggak perlu aplikasi. Google Form, grup WhatsApp, atau kertas di pintu sudah cukup untuk menguji.' },
  { t: 'Lihat apa yang mereka lakukan', d: 'Perilaku lebih jujur daripada kata-kata. Kalau mereka benar-benar pakai, itu sinyal.' },
  { t: 'Perbaiki, lalu ulangi', d: 'Setiap putaran membuat idemu lebih tajam. Ini bukan gagal, ini belajar.' },
]

export default function Validasi() {
  return (
    <Section id="validasi">
      <ChapterHead
        no={7}
        title="Validasi: jangan membohongi diri sendiri."
        lead="Ide yang terasa hebat di kepala belum tentu dibutuhkan di dunia nyata. Sebelum membangun apa pun, pastikan dulu ada orang yang benar-benar merasakan masalahnya."
      />

      <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
        <FailBar />
        <Cite source="CB Insights, The Top Reasons Startups Fail" href="https://www.cbinsights.com/research/startup-failure-reasons-top/">
          Menurut analisis CB Insights terhadap 101 catatan kegagalan startup, alasan yang paling sering disebut
          adalah tidak adanya kebutuhan pasar, muncul pada 42 persen kasus. Mereka membangun solusi untuk masalah
          yang ternyata nggak cukup dirasakan orang.
        </Cite>
      </div>

      <h3 className="display-md mb-3 mt-20 font-bold">Kuis: pertanyaan jujur atau pertanyaan jebakan?</h3>
      <p className="mb-8 max-w-prose text-lg text-ink/70">
        Rob Fitzpatrick dalam buku The Mom Test punya aturan sederhana: tanya soal kejadian di masa lalu, bukan
        pendapat soal masa depan. Karena kalau kamu tanya "ideku bagus nggak?", bahkan ibumu sendiri pasti bilang
        bagus. Coba tebak pertanyaan mana yang lebih jujur.
      </p>
      <MomQuiz />

      <h3 className="display-md mb-8 mt-20 font-bold">Langkah validasi yang bisa kalian lakukan minggu ini</h3>
      <ol className="grid gap-5 md:grid-cols-5">
        {STEPS.map((s, k) => (
          <motion.li
            key={s.t}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: k * 0.08 }}
            className="relative rounded-[22px] bg-white p-5"
          >
            <span className="text-5xl font-extrabold text-cobalt/20">{k + 1}</span>
            <p className="mt-2 text-xl font-bold">{s.t}</p>
            <p className="mt-2 text-ink/75">{s.d}</p>
          </motion.li>
        ))}
      </ol>

      <Margin className="mt-14">
        Talk to people about their life, not about your idea. The truth is in what they've already done.
      </Margin>
    </Section>
  )
}
