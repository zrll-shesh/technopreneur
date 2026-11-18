import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Section, ChapterHead, Cite, Margin, Reveal } from '../components/ui'
import { MODELS, PAYER_EXAMPLES } from '../data'

function PayerSwitch() {
  const [k, setK] = useState(0)
  const ex = PAYER_EXAMPLES[k]
  return (
    <div className="rounded-[26px] border-2 border-ink/10 bg-white p-5 sm:p-8">
      <div className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
        {PAYER_EXAMPLES.map((e, j) => (
          <button
            key={e.name}
            onClick={() => setK(j)}
            aria-pressed={k === j}
            className={`min-h-[44px] shrink-0 rounded-full px-4 font-semibold transition-colors ${k === j ? 'bg-ink text-paper' : 'bg-mist hover:bg-ink/10'}`}
          >
            {e.name}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={k}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="mt-8 grid items-center gap-4 sm:grid-cols-[1fr_auto_1fr]"
        >
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="rounded-2xl bg-marker p-6"
          >
            <p className="hand text-lg text-ink/60">yang memakai</p>
            <p className="mt-1 text-2xl font-extrabold">{ex.user}</p>
          </motion.div>
          <svg viewBox="0 0 80 30" className="mx-auto h-8 w-20 rotate-90 sm:rotate-0" aria-hidden="true">
            <motion.path
              d="M4 15 C 25 4, 50 26, 72 15 M62 7 L74 15 L62 23"
              fill="none"
              stroke="#2337D9"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </svg>
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="rounded-2xl bg-pine p-6 text-white"
          >
            <p className="hand text-lg text-white/70">yang membayar</p>
            <p className="mt-1 text-2xl font-extrabold">{ex.payer}</p>
          </motion.div>
          <p className="mt-2 text-lg sm:col-span-3">{ex.why}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

function ModelTabs() {
  const [k, setK] = useState(0)
  const m = MODELS[k]
  return (
    <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
      <div className="flex flex-row flex-wrap gap-2 lg:flex-col">
        {MODELS.map((x, j) => (
          <button
            key={x.name}
            onClick={() => setK(j)}
            aria-pressed={k === j}
            className={`relative min-h-[52px] rounded-2xl px-5 text-left text-lg font-bold transition-colors ${k === j ? 'text-white' : 'bg-white hover:bg-mist'}`}
          >
            {k === j && (
              <motion.span
                layoutId="model-bg"
                className="absolute inset-0 rounded-2xl bg-cobalt"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative">{x.name}</span>
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={k}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.22 }}
          className="rounded-[22px] border-2 border-ink/10 bg-white p-6 sm:p-8"
        >
          <h4 className="text-3xl font-extrabold">{m.name}</h4>
          <p className="mt-3 text-xl">{m.what}</p>
          <div className="mt-6 rounded-2xl bg-paper p-5">
            <p className="hand text-lg text-cobalt">contoh di sekitar kita</p>
            <p className="mt-1 text-lg font-medium">{m.example}</p>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div>
              <p className="font-bold text-pine">Kelebihan</p>
              <p className="mt-1 text-ink/80">{m.plus}</p>
            </div>
            <div>
              <p className="font-bold text-rose">Tantangan</p>
              <p className="mt-1 text-ink/80">{m.minus}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default function Bisnis() {
  return (
    <Section id="bisnis">
      <ChapterHead
        no={6}
        title="Nilai bisnis: siapa yang mau membayar?"
        lead="Ide yang bermanfaat tapi tidak punya sumber dana biasanya berhenti di tengah jalan. Nilai bisnis bukan soal serakah. Ini soal memastikan manfaatnya bisa terus mengalir."
      />

      <h3 className="display-md mb-3 font-bold">Yang memakai belum tentu yang membayar</h3>
      <p className="mb-8 max-w-prose text-lg text-ink/70">
        Ini insight yang sering terlewat. Di lingkungan boarding school contohnya jelas sekali: santri yang memakai,
        tapi orang tua atau sekolah yang membayar.
      </p>
      <PayerSwitch />

      <h3 className="display-md mb-3 mt-20 font-bold">Lima cara solusi menghasilkan</h3>
      <p className="mb-8 max-w-prose text-lg text-ink/70">
        Nggak harus rumit. Pilih yang paling cocok dengan siapa pembayarnya.
      </p>
      <ModelTabs />

      <div className="mt-20 grid gap-10 lg:grid-cols-2 lg:items-start">
        <div>
          <h3 className="display-md font-bold">Satu pertanyaan lagi: kenapa sekarang?</h3>
          <Cite
            source="Gross (2015), TED Talk The single biggest reason why start-ups succeed"
            href="https://www.ted.com/talks/bill_gross_the_single_biggest_reason_why_start_ups_succeed"
          >
            Menurut Bill Gross (2015), pendiri Idealab, setelah menganalisis sekitar 200 perusahaan, faktor yang
            paling menentukan keberhasilan startup ternyata adalah timing. Pengaruhnya mengalahkan ide, tim, model
            bisnis, bahkan pendanaan.
          </Cite>
        </div>
        <Reveal>
          <div className="space-y-4">
            {[
              { then: 'Dulu, mengenali hama butuh ahli datang langsung ke sawah.', now: 'Sekarang, model AI bisa jalan di browser HP petani.' },
              { then: 'Dulu, bikin aplikasi butuh tim besar dan berbulan-bulan.', now: 'Sekarang, pelajar bisa bikin prototipe dalam semalam dengan bantuan AI.' },
              { then: 'Dulu, data cuma dimiliki perusahaan besar.', now: 'Sekarang, BPS dan banyak lembaga membuka datanya untuk publik.' },
            ].map((x, k) => (
              <div key={k} className="grid gap-px overflow-hidden rounded-2xl border-2 border-ink/10 sm:grid-cols-2">
                <p className="bg-white p-5 text-lg text-ink/60">{x.then}</p>
                <p className="bg-marker p-5 text-lg font-semibold">{x.now}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <Margin className="mt-14">
        A good idea at the wrong time is still the wrong idea. Ask yourself: why is this possible now?
      </Margin>
    </Section>
  )
}
