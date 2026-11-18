import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { HERO_PAIRS, MARQUEE } from '../data'

const TITLE = 'Ide besar sering lahir dari hal yang bikin kita kesal.'

function KeresahanBoard() {
  const reduce = useReducedMotion()
  const [i, setI] = useState(0)
  const [typed, setTyped] = useState(0)
  const [phase, setPhase] = useState('type')
  const pair = HERO_PAIRS[i]

  useEffect(() => {
    if (reduce) {
      setTyped(pair.pain.length)
      setPhase('idea')
      const t = setTimeout(() => {
        setI((v) => (v + 1) % HERO_PAIRS.length)
      }, 6000)
      return () => clearTimeout(t)
    }
    let t
    if (phase === 'type') {
      if (typed < pair.pain.length) {
        t = setTimeout(() => setTyped((v) => v + 1), typed === 0 ? 900 : 38)
      } else {
        t = setTimeout(() => setPhase('draw'), 350)
      }
    } else if (phase === 'draw') {
      t = setTimeout(() => setPhase('idea'), 900)
    } else if (phase === 'idea') {
      t = setTimeout(() => setPhase('out'), 4200)
    } else if (phase === 'out') {
      t = setTimeout(() => {
        setI((v) => (v + 1) % HERO_PAIRS.length)
        setTyped(0)
        setPhase('type')
      }, 500)
    }
    return () => clearTimeout(t)
  }, [phase, typed, pair, reduce])

  const showArrow = phase === 'draw' || phase === 'idea'
  const showIdea = phase === 'idea'

  return (
    <div className="relative mx-auto h-[440px] w-full max-w-[460px] sm:h-[480px]" aria-live="polite">
      {/* Sticky note keresahan */}
      <motion.div
        key={`note-${i}`}
        initial={{ opacity: 0, y: -30, rotate: -12 }}
        animate={phase === 'out' ? { opacity: 0, y: 20, rotate: -2 } : { opacity: 1, y: 0, rotate: -4 }}
        transition={{ type: 'spring', stiffness: 180, damping: 18 }}
        className="absolute left-0 top-2 w-[78%] bg-marker p-6 shadow-[6px_10px_0_rgba(12,18,54,0.12)]"
      >
        <span className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 rotate-2 bg-white/60" aria-hidden="true" />
        <p className="hand mb-2 text-lg text-ink/60">keresahan</p>
        <p className="hand min-h-[96px] text-[1.65rem] leading-snug text-ink">
          {pair.pain.slice(0, typed)}
          {phase === 'type' && !reduce && (
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="ml-0.5 inline-block h-6 w-[3px] translate-y-1 bg-ink"
            />
          )}
        </p>
      </motion.div>

      {/* Coretan panah */}
      <svg
        viewBox="0 0 200 160"
        fill="none"
        className="absolute right-4 top-[150px] h-40 w-44 sm:top-[160px]"
        aria-hidden="true"
      >
        <motion.path
          d="M30 10 C 20 70, 70 120, 160 128"
          stroke="#2337D9"
          strokeWidth="4"
          strokeLinecap="round"
          initial={false}
          animate={{ pathLength: showArrow ? 1 : 0, opacity: showArrow ? 1 : 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        />
        <motion.path
          d="M140 112 L 162 128 L 138 142"
          stroke="#2337D9"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={false}
          animate={{ pathLength: showArrow ? 1 : 0, opacity: showArrow ? 1 : 0 }}
          transition={{ duration: 0.3, delay: showArrow ? 0.7 : 0 }}
        />
      </svg>

      {/* Kartu ide */}
      <AnimatePresence>
        {showIdea && (
          <motion.div
            key={`idea-${i}`}
            initial={{ opacity: 0, scale: 0.85, rotate: 6, y: 20 }}
            animate={{ opacity: 1, scale: 1, rotate: 2, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', stiffness: 220, damping: 18 }}
            className="absolute bottom-0 right-0 w-[80%] rounded-[18px] border-[3px] border-cobalt bg-white p-6 shadow-[8px_8px_0_#2337D9]"
          >
            <p className="hand mb-1 text-lg text-cobalt">jadi ide</p>
            <p className="text-xl font-semibold leading-snug">{pair.idea}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute -bottom-10 left-0 flex gap-2" aria-hidden="true">
        {HERO_PAIRS.map((_, k) => (
          <span
            key={k}
            className={`h-1.5 rounded-full transition-all duration-500 ${k === i ? 'w-8 bg-cobalt' : 'w-3 bg-ink/20'}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function Hero() {
  const words = TITLE.split(' ')
  return (
    <section id="mulai" data-section className="relative overflow-hidden">
      <div
        className="mx-auto grid min-h-[100svh] max-w-6xl items-center gap-16 px-5 pb-24 pt-20 sm:px-8 lg:grid-cols-[1.15fr_1fr] lg:gap-10"
        style={{ paddingTop: 'max(5rem, calc(env(safe-area-inset-top, 0px) + 3rem))' }}
      >
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mb-8 max-w-md text-base text-ink/65"
          >
            Kelas technopreneur untuk SMA Al Falah Boarding School Darmo, bersama Nazril Ravi Pratama
          </motion.p>
          <h1 className="display-xl font-extrabold">
            {words.map((w, k) => (
              <motion.span
                key={k}
                className="mr-[0.22em] inline-block"
                initial={{ opacity: 0, y: '0.6em', rotate: 3 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ delay: 0.25 + k * 0.07, duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
              >
                {w}
              </motion.span>
            ))}
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="mt-8 max-w-xl text-xl leading-relaxed text-ink/75"
          >
            Hari ini kita belajar cara menemukan ide teknologi yang punya dampak nyata dan nilai bisnis. Bukan dari
            khayalan, tapi dari keresahan yang kalian temui setiap hari.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <a
              href="#kenalan"
              className="inline-flex min-h-[48px] items-center rounded-full bg-cobalt px-6 text-lg font-semibold text-white transition-colors hover:bg-ink"
            >
              Mulai kelas
            </a>
            <a
              href="#skor-ide"
              className="inline-flex min-h-[48px] items-center rounded-full border-2 border-ink/15 px-6 text-lg font-semibold transition-colors hover:border-cobalt hover:text-cobalt"
            >
              Langsung ke alat bantu
            </a>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="hand mt-10 text-2xl text-cobalt"
          >
            Every great product starts as someone's annoying problem.
          </motion.p>
        </div>
        <KeresahanBoard />
      </div>

      <div className="relative -rotate-[1.5deg] border-y-[3px] border-ink bg-marker py-4" aria-hidden="true">
        <div className="overflow-hidden">
          <div className="marquee-track">
            {[...MARQUEE, ...MARQUEE].map((m, k) => (
              <span key={k} className="hand flex items-center whitespace-nowrap px-6 text-2xl text-ink">
                {m}
                <svg viewBox="0 0 20 20" className="ml-12 h-4 w-4" fill="#0C1236">
                  <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" />
                </svg>
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="h-10" />
    </section>
  )
}
