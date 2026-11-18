import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { Section, ChapterHead } from '../components/ui'
import { CASES } from '../data'

const ROWS = [
  { key: 'pain', label: 'Keresahan' },
  { key: 'tech', label: 'Teknologi' },
  { key: 'business', label: 'Nilai bisnis' },
]

export default function StudiKasus() {
  const [k, setK] = useState(0)
  const c = CASES[k]
  return (
    <Section id="studi-kasus" dark>
      <ChapterHead
        dark
        kicker="Studi kasus"
        title="Penerapan pada karya pemateri"
        lead="Berikut tiga proyek yang menunjukkan bagaimana konsep dalam materi ini diterapkan, dari keresahan hingga nilai bisnis."
      />

      <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:px-0" role="tablist">
        {CASES.map((x, j) => (
          <button
            key={x.id}
            role="tab"
            aria-selected={k === j}
            onClick={() => setK(j)}
            className={`relative min-h-[52px] shrink-0 rounded-full px-5 text-lg font-bold transition-colors ${k === j ? 'text-ink' : 'text-paper/70 hover:text-paper'}`}
          >
            {k === j && (
              <motion.span
                layoutId="case-pill"
                className="absolute inset-0 rounded-full bg-marker"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative">{x.name}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.article
          key={c.id}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.3 }}
          className="mt-8"
        >
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="hand text-2xl text-marker">{c.tag}</p>
              <h3 className="display-lg font-extrabold">{c.name}</h3>
            </div>
            {c.link && (
              <a
                href={c.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[48px] items-center gap-2 rounded-full border-2 border-white/25 px-5 font-semibold hover:border-marker hover:text-marker"
              >
                Buka demo langsung <ExternalLink size={18} aria-hidden="true" />
              </a>
            )}
          </div>

          <div className="mt-10 grid gap-px overflow-hidden rounded-[22px] border-2 border-white/10 bg-white/10 md:grid-cols-3">
            {ROWS.map((r, j) => (
              <motion.div
                key={r.key}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 + j * 0.08 }}
                className="bg-ink p-6 sm:p-8"
              >
                <p className="font-bold text-marker">{r.label}</p>
                <p className="mt-3 text-lg leading-relaxed text-paper/85">{c[r.key]}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, rotate: -2, y: 16 }}
            animate={{ opacity: 1, rotate: -1, y: 0 }}
            transition={{ delay: 0.45, type: 'spring', stiffness: 180, damping: 16 }}
            className="mt-8 max-w-3xl bg-marker p-6 text-ink sm:p-8"
          >
            <p className="hand text-xl text-ink/60">pelajaran</p>
            <p className="mt-2 text-2xl font-bold leading-snug">{c.lesson}</p>
          </motion.div>
        </motion.article>
      </AnimatePresence>

    </Section>
  )
}
