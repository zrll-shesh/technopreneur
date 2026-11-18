import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Download, Pause, Play, Printer, RotateCcw, Shuffle } from 'lucide-react'
import { Section, ChapterHead, Btn, Margin } from '../components/ui'
import { CANVAS_FIELDS, PROBLEM_BANK } from '../data'
import { beep, formatTime, useLocalStorage } from '../hooks'

const STEPS = [
  { t: 'Pilih satu keresahan', d: 'Ambil dari papan keresahan, atau minta dari generator di bawah.' },
  { t: 'Gali akarnya', d: 'Tanya "kenapa?" sampai lima kali.' },
  { t: 'Isi kanvas ide', d: 'Tulis singkat. Satu sampai dua kalimat per kotak sudah cukup.' },
  { t: 'Beri skor', d: 'Pakai kalkulator skor ide dan taruh di matriks.' },
  { t: 'Siapkan pitch', d: '90 detik untuk meyakinkan seisi kelas.' },
]

function Generator() {
  const [shown, setShown] = useState('Tekan tombol untuk dapat masalah acak')
  const [rolling, setRolling] = useState(false)
  const roll = () => {
    if (rolling) return
    setRolling(true)
    let n = 0
    const total = 14
    const tick = () => {
      setShown(PROBLEM_BANK[Math.floor(Math.random() * PROBLEM_BANK.length)])
      n += 1
      if (n < total) setTimeout(tick, 50 + n * 12)
      else setRolling(false)
    }
    tick()
  }
  return (
    <div className="flex h-full flex-col rounded-[22px] bg-ink p-6 text-paper sm:p-8">
      <p className="hand text-2xl text-marker">mentok? ambil satu</p>
      <h4 className="mt-1 text-2xl font-bold">Generator masalah asrama</h4>
      <div className="my-6 flex min-h-[120px] flex-1 items-center overflow-hidden rounded-2xl bg-white/5 px-5">
        <AnimatePresence mode="popLayout">
          <motion.p
            key={shown}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: rolling ? 0.08 : 0.3 }}
            className={`text-2xl font-bold ${rolling ? 'text-paper/60' : 'text-marker'}`}
          >
            {shown}
          </motion.p>
        </AnimatePresence>
      </div>
      <Btn variant="marker" onClick={roll} disabled={rolling}>
        <Shuffle size={18} aria-hidden="true" /> Kasih aku masalah
      </Btn>
    </div>
  )
}

export function Timer({ presets = [5, 10, 15, 20], dark = false }) {
  const [total, setTotal] = useState(presets[1] * 60)
  const [left, setLeft] = useState(presets[1] * 60)
  const [running, setRunning] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!running) return
    ref.current = setInterval(() => {
      setLeft((l) => {
        if (l <= 1) {
          clearInterval(ref.current)
          setRunning(false)
          beep()
          return 0
        }
        return l - 1
      })
    }, 1000)
    return () => clearInterval(ref.current)
  }, [running])

  const pick = (m) => {
    setRunning(false)
    setTotal(m * 60)
    setLeft(m * 60)
  }
  const pct = total ? left / total : 0
  const R = 88
  const C = 2 * Math.PI * R

  return (
    <div className={`flex h-full flex-col items-center rounded-[22px] p-6 sm:p-8 ${dark ? 'bg-white/5' : 'border-2 border-ink/10 bg-white'}`}>
      <p className={`hand self-start text-2xl ${dark ? 'text-marker' : 'text-cobalt'}`}>waktu kerja</p>
      <div className="relative my-4 h-56 w-56">
        <svg viewBox="0 0 200 200" className="h-full w-full -rotate-90" aria-hidden="true">
          <circle cx="100" cy="100" r={R} fill="none" stroke={dark ? 'rgba(255,255,255,0.1)' : '#DCE2EE'} strokeWidth="12" />
          <motion.circle
            cx="100"
            cy="100"
            r={R}
            fill="none"
            stroke={left === 0 ? '#FF5D73' : '#2337D9'}
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={C}
            animate={{ strokeDashoffset: C * (1 - pct) }}
            transition={{ duration: 0.5, ease: 'linear' }}
          />
        </svg>
        <p className="absolute inset-0 grid place-items-center text-5xl font-extrabold tabular-nums" aria-live="polite">
          {left === 0 ? 'Selesai' : formatTime(left)}
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {presets.map((m) => (
          <button
            key={m}
            onClick={() => pick(m)}
            className={`min-h-[40px] rounded-full px-4 text-sm font-semibold ${total === m * 60 ? 'bg-cobalt text-white' : dark ? 'bg-white/10' : 'bg-mist'}`}
          >
            {m} menit
          </button>
        ))}
      </div>
      <div className="mt-4 flex gap-2">
        <Btn onClick={() => left > 0 && setRunning((r) => !r)} disabled={left === 0}>
          {running ? <Pause size={18} aria-hidden="true" /> : <Play size={18} aria-hidden="true" />}
          {running ? 'Jeda' : 'Mulai'}
        </Btn>
        <Btn variant={dark ? 'ghostDark' : 'ghost'} onClick={() => pick(total / 60)}>
          <RotateCcw size={18} aria-hidden="true" /> Ulang
        </Btn>
      </div>
    </div>
  )
}

function Canvas() {
  const empty = Object.fromEntries(CANVAS_FIELDS.map((f) => [f.key, '']))
  const [data, setData] = useLocalStorage('kanvas-ide', empty)
  const filled = CANVAS_FIELDS.filter((f) => (data[f.key] || '').trim()).length

  const download = () => {
    const lines = [
      'KANVAS IDE',
      'Kelas Technopreneur, SMA Al Falah Boarding School Darmo',
      '',
      ...CANVAS_FIELDS.flatMap((f) => [`${f.label}:`, (data[f.key] || '-').trim() || '-', '']),
    ]
    const blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `kanvas-ide-${(data.team || 'tim').trim().replace(/\s+/g, '-').toLowerCase()}.txt`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="print-area rounded-[26px] border-2 border-ink/10 bg-white p-5 sm:p-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="hand text-2xl text-cobalt">kanvas ide</p>
          <h4 className="display-md font-bold">Satu halaman untuk satu ide</h4>
        </div>
        <div className="w-full max-w-[220px] no-print">
          <p className="text-sm text-ink/60">
            {filled} dari {CANVAS_FIELDS.length} kotak terisi
          </p>
          <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-mist">
            <motion.div
              className="h-full rounded-full bg-pine"
              animate={{ width: `${(filled / CANVAS_FIELDS.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {CANVAS_FIELDS.map((f) => (
          <div key={f.key} className={f.short ? '' : 'md:col-span-1'}>
            <label htmlFor={`cv-${f.key}`} className="block text-lg font-bold">
              {f.label}
            </label>
            <p className="text-sm text-ink/55">{f.hint}</p>
            {f.short ? (
              <input
                id={`cv-${f.key}`}
                value={data[f.key] || ''}
                onChange={(e) => setData((d) => ({ ...d, [f.key]: e.target.value }))}
                className="mt-2 min-h-[48px] w-full rounded-xl border-2 border-ink/10 bg-paper px-4 text-lg outline-none focus:border-cobalt"
              />
            ) : (
              <textarea
                id={`cv-${f.key}`}
                rows={3}
                value={data[f.key] || ''}
                onChange={(e) => setData((d) => ({ ...d, [f.key]: e.target.value }))}
                className="lined hand mt-2 w-full resize-y rounded-xl border-2 border-ink/10 bg-paper px-4 py-1 text-xl leading-8 outline-none focus:border-cobalt"
              />
            )}
          </div>
        ))}
      </div>
      <div className="no-print mt-8 flex flex-wrap gap-3">
        <Btn onClick={download}>
          <Download size={18} aria-hidden="true" /> Unduh kanvas
        </Btn>
        <Btn variant="ghost" onClick={() => window.print()}>
          <Printer size={18} aria-hidden="true" /> Cetak atau simpan PDF
        </Btn>
        <Btn variant="ghost" onClick={() => setData(empty)}>
          Kosongkan
        </Btn>
      </div>
    </div>
  )
}

export default function Workshop() {
  return (
    <Section id="workshop">
      <ChapterHead
        no={11}
        title="Workshop: ide dari asrama."
        lead="Saatnya praktik. Bentuk kelompok 4 sampai 5 orang, campur kelas 10, 11, dan 12. Kakak kelas biasanya tajam di analisis, adik kelas sering berani dengan ide liar. Kombinasinya pas."
      />

      <ol className="mb-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {STEPS.map((s, k) => (
          <motion.li
            key={s.t}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: k * 0.07 }}
            className="rounded-2xl border-2 border-ink/10 bg-white p-5"
          >
            <p className="hand text-2xl text-cobalt">langkah {k + 1}</p>
            <p className="mt-1 text-lg font-bold">{s.t}</p>
            <p className="mt-1 text-ink/70">{s.d}</p>
          </motion.li>
        ))}
      </ol>

      <div className="grid gap-6 lg:grid-cols-2">
        <Generator />
        <Timer />
      </div>

      <div className="mt-6">
        <Canvas />
      </div>

      <Margin className="mt-14">
        Done is better than perfect. Write it down first, polish it later.
      </Margin>
    </Section>
  )
}
