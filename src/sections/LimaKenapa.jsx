import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { RotateCcw } from 'lucide-react'
import { Section, ChapterHead, Btn, Margin } from '../components/ui'
import { WHY_DEMO } from '../data'
import { useLocalStorage } from '../hooks'

function Demo() {
  const [step, setStep] = useState(0)
  const total = WHY_DEMO.chain.length
  const finished = step >= total
  return (
    <div className="rounded-[26px] border-2 border-ink/10 bg-white p-5 sm:p-8">
      <p className="hand text-xl text-ink/55">masalah di permukaan</p>
      <p className="mt-1 text-2xl font-extrabold sm:text-3xl">{WHY_DEMO.problem}</p>

      <ol className="mt-6 space-y-3">
        <AnimatePresence>
          {WHY_DEMO.chain.slice(0, step).map((c, k) => (
            <motion.li
              key={k}
              initial={{ opacity: 0, x: -20, height: 0 }}
              animate={{ opacity: 1, x: 0, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 22 }}
              className="flex gap-4"
              style={{ paddingLeft: `${Math.min(k, 4) * 14}px` }}
            >
              <span className="hand mt-1 shrink-0 text-lg text-cobalt">kenapa? {k + 1}</span>
              <span className="rounded-xl bg-paper px-4 py-2 text-lg">{c}</span>
            </motion.li>
          ))}
        </AnimatePresence>
      </ol>

      <AnimatePresence>
        {finished && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-6 rounded-2xl bg-marker p-6"
          >
            <p className="text-xl font-bold">{WHY_DEMO.insight}</p>
            <p className="mt-3 text-lg">{WHY_DEMO.idea}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-6 flex flex-wrap gap-3">
        {!finished ? (
          <Btn onClick={() => setStep((s) => s + 1)}>Tanya "kenapa?" lagi</Btn>
        ) : (
          <Btn variant="ghost" onClick={() => setStep(0)}>
            <RotateCcw size={18} aria-hidden="true" /> Ulangi dari awal
          </Btn>
        )}
        <span className="self-center text-ink/55">
          {Math.min(step, total)} dari {total} pertanyaan
        </span>
      </div>
    </div>
  )
}

function TryYours() {
  const [data, setData] = useLocalStorage('lima-kenapa', { problem: '', answers: ['', '', '', '', ''] })
  const filledUntil = data.answers.findIndex((a) => !a.trim())
  const visible = data.problem.trim() ? (filledUntil === -1 ? 5 : filledUntil + 1) : 0

  const setAnswer = (k, v) =>
    setData((d) => ({ ...d, answers: d.answers.map((a, j) => (j === k ? v : a)) }))

  return (
    <div className="rounded-[26px] bg-cobalt p-5 text-white sm:p-8">
      <p className="hand text-2xl text-marker">giliran kalian</p>
      <h4 className="display-md mt-1 font-bold">Gali satu keresahan dari papan tadi</h4>
      <label htmlFor="why-problem" className="mt-6 block font-semibold">
        Masalah yang terlihat
      </label>
      <input
        id="why-problem"
        value={data.problem}
        onChange={(e) => setData((d) => ({ ...d, problem: e.target.value }))}
        placeholder="Contoh: sandal sering ketuker di masjid"
        className="mt-2 min-h-[52px] w-full rounded-2xl border-2 border-white/20 bg-white/10 px-5 text-lg text-white outline-none placeholder:text-white/45 focus:border-marker"
      />
      <div className="mt-4 space-y-3">
        <AnimatePresence>
          {data.answers.slice(0, visible).map((a, k) => (
            <motion.div
              key={k}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              style={{ marginLeft: `${k * 12}px` }}
            >
              <label htmlFor={`why-${k}`} className="hand text-lg text-marker">
                kenapa? {k + 1}
              </label>
              <input
                id={`why-${k}`}
                value={a}
                onChange={(e) => setAnswer(k, e.target.value)}
                placeholder="Karena..."
                className="mt-1 min-h-[48px] w-full rounded-xl border-2 border-white/20 bg-white/10 px-4 text-lg text-white outline-none placeholder:text-white/40 focus:border-marker"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      {filledUntil === -1 && data.problem.trim() && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 rounded-2xl bg-white p-5 text-lg font-semibold text-ink"
        >
          Akar masalahmu kemungkinan ada di jawaban terakhir: "{data.answers[4]}". Sekarang tanya: bagian mana dari
          akar ini yang bisa dibantu teknologi?
        </motion.p>
      )}
      <button
        onClick={() => setData({ problem: '', answers: ['', '', '', '', ''] })}
        className="mt-5 min-h-[44px] rounded-full px-4 text-white/70 underline underline-offset-4 hover:text-white"
      >
        Kosongkan
      </button>
    </div>
  )
}

export default function LimaKenapa() {
  return (
    <Section id="lima-kenapa">
      <ChapterHead
        no={4}
        title="Tanya kenapa, lima kali."
        lead="Masalah yang pertama terlihat biasanya cuma gejala. Teknik 5 Whys, yang dipopulerkan di pabrik Toyota, membantu kita menggali sampai ke akarnya. Caranya sederhana: terus tanya kenapa sampai jawabannya nggak bisa digali lagi."
      />
      <div className="grid gap-8 lg:grid-cols-2">
        <Demo />
        <TryYours />
      </div>
      <Margin className="mt-12">
        Solve the root, not the symptom. The root is usually where technology fits best.
      </Margin>
    </Section>
  )
}
