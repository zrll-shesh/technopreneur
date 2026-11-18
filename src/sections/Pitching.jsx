import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Pause, Play, Plus, RotateCcw, X } from 'lucide-react'
import { Section, ChapterHead, Btn, Margin } from '../components/ui'
import { PITCH_STAGES } from '../data'
import { beep, useLocalStorage } from '../hooks'

const PITCH_LEN = 90

function PitchClock() {
  const [t, setT] = useState(0)
  const [running, setRunning] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!running) return
    ref.current = setInterval(() => {
      setT((v) => {
        if (v >= PITCH_LEN - 1) {
          clearInterval(ref.current)
          setRunning(false)
          beep()
          return PITCH_LEN
        }
        return v + 1
      })
    }, 1000)
    return () => clearInterval(ref.current)
  }, [running])

  const stageIdx = PITCH_STAGES.findIndex((s) => t >= s.from && t < s.to)

  return (
    <div className="rounded-[26px] border-2 border-white/10 bg-white/[0.04] p-5 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="text-6xl font-extrabold tabular-nums sm:text-7xl">
          {t}
          <span className="text-2xl text-paper/50"> / {PITCH_LEN} detik</span>
        </p>
        <div className="flex gap-2">
          <Btn variant="marker" onClick={() => t < PITCH_LEN && setRunning((r) => !r)} disabled={t >= PITCH_LEN}>
            {running ? <Pause size={18} aria-hidden="true" /> : <Play size={18} aria-hidden="true" />}
            {running ? 'Jeda' : 'Mulai pitch'}
          </Btn>
          <Btn
            variant="ghostDark"
            onClick={() => {
              setRunning(false)
              setT(0)
            }}
          >
            <RotateCcw size={18} aria-hidden="true" /> Ulang
          </Btn>
        </div>
      </div>

      <div className="mt-6 flex h-4 overflow-hidden rounded-full bg-white/10">
        {PITCH_STAGES.map((s, k) => {
          const w = ((s.to - s.from) / PITCH_LEN) * 100
          const fill = Math.max(0, Math.min(1, (t - s.from) / (s.to - s.from)))
          return (
            <div key={k} className="relative h-full border-r-2 border-ink last:border-r-0" style={{ width: `${w}%` }}>
              <motion.div className="h-full bg-marker" animate={{ width: `${fill * 100}%` }} transition={{ ease: 'linear', duration: 0.9 }} />
            </div>
          )
        })}
      </div>

      <ol className="mt-6 grid gap-3 md:grid-cols-5">
        {PITCH_STAGES.map((s, k) => {
          const on = k === stageIdx && t > 0
          const past = t >= s.to
          return (
            <motion.li
              key={s.title}
              animate={{ scale: on ? 1.04 : 1 }}
              className={`rounded-2xl p-4 transition-colors ${on ? 'bg-marker text-ink' : past ? 'bg-white/5 text-paper/45' : 'bg-white/5 text-paper'}`}
            >
              <p className={`text-sm tabular-nums ${on ? 'text-ink/60' : 'text-paper/50'}`}>
                detik {s.from} sampai {s.to}
              </p>
              <p className="mt-1 text-lg font-bold">{s.title}</p>
              <p className={`mt-1 text-sm ${on ? 'text-ink/80' : 'text-paper/65'}`}>{s.body}</p>
            </motion.li>
          )
        })}
      </ol>
    </div>
  )
}

function Voting() {
  const [teams, setTeams] = useLocalStorage('voting-pitch', [])
  const [name, setName] = useState('')
  const max = Math.max(1, ...teams.map((t) => t.votes))
  const sorted = [...teams].sort((a, b) => b.votes - a.votes)

  const add = (e) => {
    e.preventDefault()
    const n = name.trim()
    if (!n) return
    setTeams((t) => [...t, { id: Date.now(), name: n, votes: 0 }])
    setName('')
  }
  const vote = (id, d) => setTeams((t) => t.map((x) => (x.id === id ? { ...x, votes: Math.max(0, x.votes + d) } : x)))

  return (
    <div className="rounded-[26px] bg-paper p-5 text-ink sm:p-8">
      <p className="hand text-2xl text-cobalt">papan suara</p>
      <h4 className="display-md font-bold">Ide mana yang paling meyakinkan?</h4>
      <p className="mt-2 text-lg text-ink/70">
        Tambahkan nama tim, lalu klik baris tim setiap ada yang memilih. Tim tidak boleh memilih dirinya sendiri.
      </p>
      <form onSubmit={add} className="mt-6 flex flex-col gap-3 sm:flex-row">
        <label htmlFor="team-name" className="sr-only">
          Nama tim
        </label>
        <input
          id="team-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nama tim atau nama ide"
          className="min-h-[52px] flex-1 rounded-full border-2 border-ink/15 bg-white px-5 text-lg outline-none focus:border-cobalt"
        />
        <Btn type="submit">
          <Plus size={18} aria-hidden="true" /> Tambah tim
        </Btn>
      </form>
      <ul className="mt-6 space-y-3">
        <AnimatePresence>
          {sorted.map((t, k) => (
            <motion.li key={t.id} layout initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
              <button
                onClick={() => vote(t.id, 1)}
                className="relative min-h-[56px] flex-1 overflow-hidden rounded-2xl bg-white text-left"
                aria-label={`Tambah suara untuk ${t.name}`}
              >
                <motion.span
                  className={`absolute inset-y-0 left-0 ${k === 0 && t.votes > 0 ? 'bg-marker' : 'bg-mist'}`}
                  animate={{ width: `${(t.votes / max) * 100}%` }}
                  transition={{ type: 'spring', stiffness: 200, damping: 24 }}
                />
                <span className="relative flex items-center justify-between px-5">
                  <span className="text-lg font-bold">{t.name}</span>
                  <span className="text-2xl font-extrabold tabular-nums">{t.votes}</span>
                </span>
              </button>
              <button
                onClick={() => vote(t.id, -1)}
                className="grid h-11 w-11 place-items-center rounded-full text-xl font-bold hover:bg-white"
                aria-label={`Kurangi suara ${t.name}`}
              >
                -
              </button>
              <button
                onClick={() => setTeams((all) => all.filter((x) => x.id !== t.id))}
                className="grid h-11 w-11 place-items-center rounded-full hover:bg-white"
                aria-label={`Hapus ${t.name}`}
              >
                <X size={18} />
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
      {teams.length === 0 && <p className="hand mt-4 text-2xl text-ink/45">Belum ada tim. Tambahkan tim pertama di atas.</p>}
      {teams.length > 0 && (
        <button onClick={() => setTeams((t) => t.map((x) => ({ ...x, votes: 0 })))} className="mt-4 min-h-[44px] text-ink/60 underline underline-offset-4 hover:text-ink">
          Nol-kan semua suara
        </button>
      )}
    </div>
  )
}

export default function Pitching() {
  return (
    <Section id="pitching" dark>
      <ChapterHead
        dark
        no={12}
        title="Pitching dalam 90 detik."
        lead="Ide sebagus apa pun nggak akan jalan kalau nggak bisa dijelaskan. Setiap tim punya 90 detik. Ikuti struktur di bawah, dan biarkan penghitung waktunya menuntun."
      />
      <PitchClock />
      <div className="mt-10">
        <Voting />
      </div>
      <Margin dark className="mt-14">
        Don't pitch your technology. Pitch the problem, and let your solution be the obvious answer.
      </Margin>
    </Section>
  )
}
