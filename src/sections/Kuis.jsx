import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, RotateCcw, X } from 'lucide-react'
import { Section, ChapterHead, Btn } from '../components/ui'
import { QUIZ } from '../data'

export default function Kuis() {
  const [ans, setAns] = useState({})
  const done = Object.keys(ans).length === QUIZ.length
  const score = Object.entries(ans).filter(([k, v]) => QUIZ[k].a === v).length
  return (
    <Section id="cek-pemahaman">
      <ChapterHead
        kicker="Evaluasi"
        title="Cek pemahaman"
        lead="Lima pertanyaan singkat untuk meninjau kembali materi. Pilih satu jawaban pada setiap soal."
      />
      <div className="space-y-5">
        {QUIZ.map((q, k) => {
          const picked = ans[k]
          return (
            <div key={k} className="rounded-[22px] border-2 border-ink/10 bg-white p-5 sm:p-6">
              <p className="text-lg font-bold">
                {k + 1}. {q.q}
              </p>
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {q.options.map((o, j) => {
                  const state = picked === undefined ? 'idle' : j === q.a ? 'good' : picked === j ? 'bad' : 'idle'
                  return (
                    <button
                      key={o}
                      disabled={picked !== undefined}
                      onClick={() => setAns((a) => ({ ...a, [k]: j }))}
                      className={`flex min-h-[52px] items-center gap-3 rounded-xl border-2 px-4 py-3 text-left transition-colors ${
                        state === 'good' ? 'border-pine bg-pine text-white' : state === 'bad' ? 'border-rose bg-rose/10' : 'border-ink/10 bg-paper hover:border-cobalt'
                      } ${picked !== undefined && state === 'idle' ? 'opacity-50' : ''}`}
                    >
                      <span className="shrink-0">
                        {state === 'good' ? <Check size={18} /> : state === 'bad' ? <X size={18} className="text-rose" /> : <span className="block h-[18px] w-[18px] rounded-full border-2 border-ink/30" />}
                      </span>
                      {o}
                    </button>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
      {done && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-[22px] bg-marker p-6"
        >
          <p className="text-2xl font-extrabold">
            Skor: {score} dari {QUIZ.length}
          </p>
          <Btn variant="ink" onClick={() => setAns({})}>
            <RotateCcw size={18} aria-hidden="true" /> Ulangi
          </Btn>
        </motion.div>
      )}
    </Section>
  )
}
