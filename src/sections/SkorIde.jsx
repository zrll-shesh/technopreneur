import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus, X } from 'lucide-react'
import { Section, ChapterHead, Btn, Margin } from '../components/ui'
import { useLocalStorage } from '../hooks'

const CRITERIA = [
  { key: 'reach', label: 'Banyak orang merasakannya', short: 'Jangkauan' },
  { key: 'freq', label: 'Masalahnya sering terjadi', short: 'Frekuensi' },
  { key: 'pain', label: 'Sakitnya benar-benar terasa', short: 'Rasa sakit' },
  { key: 'pay', label: 'Ada yang mau membayar', short: 'Pembayar' },
  { key: 'build', label: 'Bisa dibuat dengan kemampuan kami', short: 'Bisa dibuat' },
]

const INITIAL = { reach: 3, freq: 3, pain: 3, pay: 3, build: 3 }

function verdict(total) {
  if (total >= 21) return { title: 'Kuat', body: 'Saatnya validasi ke calon pengguna. Jangan tunggu sempurna.', color: 'bg-pine text-white' }
  if (total >= 15) return { title: 'Menjanjikan', body: 'Cari kriteria dengan skor terendah, lalu perbaiki di bagian itu dulu.', color: 'bg-cobalt text-white' }
  if (total >= 9) return { title: 'Masih vitamin', body: 'Gali lagi pakai 5 Whys. Mungkin ada versi masalah yang lebih tajam.', color: 'bg-marker text-ink' }
  return { title: 'Simpan dulu', body: 'Ide ini butuh masalah yang lebih nyata. Kembali ke papan keresahan.', color: 'bg-rose text-white' }
}

function Radar({ values }) {
  const size = 300
  const c = size / 2
  const r = 110
  const n = CRITERIA.length
  const point = (i, v) => {
    const a = (Math.PI * 2 * i) / n - Math.PI / 2
    return [c + Math.cos(a) * r * (v / 5), c + Math.sin(a) * r * (v / 5)]
  }
  const path =
    CRITERIA.map((k, i) => {
      const [x, y] = point(i, values[k.key])
      return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)} ${y.toFixed(1)}`
    }).join(' ') + ' Z'

  return (
    <svg viewBox={`-55 -5 ${size + 110} ${size + 10}`} className="mx-auto w-full max-w-[400px]" role="img" aria-label="Grafik radar skor ide">
      {[1, 2, 3, 4, 5].map((lv) => (
        <polygon
          key={lv}
          points={CRITERIA.map((_, i) => point(i, lv).join(',')).join(' ')}
          fill="none"
          stroke="rgba(12,18,54,0.12)"
          strokeWidth="1.5"
        />
      ))}
      {CRITERIA.map((_, i) => {
        const [x, y] = point(i, 5)
        return <line key={i} x1={c} y1={c} x2={x} y2={y} stroke="rgba(12,18,54,0.12)" strokeWidth="1.5" />
      })}
      <motion.path
        d={path}
        animate={{ d: path }}
        transition={{ type: 'spring', stiffness: 160, damping: 18 }}
        fill="rgba(35,55,217,0.22)"
        stroke="#2337D9"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {CRITERIA.map((k, i) => {
        const [x, y] = point(i, 6.3)
        return (
          <text key={k.key} x={x} y={y} textAnchor="middle" dominantBaseline="middle" fontSize="13" fontWeight="600" fill="#0C1236">
            {k.short}
          </text>
        )
      })}
    </svg>
  )
}

const QUADS = [
  { name: 'Proyek besar, cicil pelan-pelan', pos: 'left-3 top-3' },
  { name: 'Kerjakan sekarang', pos: 'right-3 top-3 text-right' },
  { name: 'Simpan dulu', pos: 'left-3 bottom-3' },
  { name: 'Kemenangan kecil', pos: 'right-3 bottom-3 text-right' },
]

export default function SkorIde() {
  const [name, setName] = useState('')
  const [vals, setVals] = useState(INITIAL)
  const [ideas, setIdeas] = useLocalStorage('matriks-ide', [])
  const total = Object.values(vals).reduce((a, b) => a + b, 0)
  const v = verdict(total)

  const addToMatrix = () => {
    const label = name.trim() || `Ide ${ideas.length + 1}`
    const impact = (vals.reach + vals.freq + vals.pain) / 3
    setIdeas((list) => [...list, { id: Date.now(), label, impact, build: vals.build, total }])
    setName('')
    setVals(INITIAL)
  }

  return (
    <Section id="skor-ide">
      <ChapterHead
        no={10}
        title="Beri skor idemu."
        lead="Sekarang semua pelajaran tadi kita rangkum jadi alat ukur sederhana. Lima kriteria, masing-masing skor 1 sampai 5. Jujur ya, karena yang dibohongi nanti diri sendiri."
      />

      <div className="grid gap-8 rounded-[26px] border-2 border-ink/10 bg-white p-5 sm:p-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <label htmlFor="idea-name" className="block font-semibold">
            Nama ide
          </label>
          <input
            id="idea-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Contoh: Antrean laundry pintar"
            className="mt-2 min-h-[52px] w-full rounded-2xl border-2 border-ink/15 bg-paper px-5 text-lg outline-none focus:border-cobalt"
          />
          <div className="mt-6 space-y-6">
            {CRITERIA.map((c) => (
              <div key={c.key}>
                <div className="flex items-baseline justify-between gap-4">
                  <label htmlFor={`c-${c.key}`} className="font-semibold">
                    {c.label}
                  </label>
                  <span className="hand text-2xl text-cobalt tabular-nums">{vals[c.key]}</span>
                </div>
                <input
                  id={`c-${c.key}`}
                  type="range"
                  min="1"
                  max="5"
                  step="1"
                  value={vals[c.key]}
                  onChange={(e) => setVals((s) => ({ ...s, [c.key]: Number(e.target.value) }))}
                  className="mt-2"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <Radar values={vals} />
          <div className="mt-4 text-center">
            <p className="text-ink/60">Total skor</p>
            <motion.p key={total} initial={{ scale: 1.3 }} animate={{ scale: 1 }} className="text-6xl font-extrabold tabular-nums">
              {total}
              <span className="text-2xl text-ink/40">/25</span>
            </motion.p>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`mt-5 rounded-2xl p-5 ${v.color}`}
            >
              <p className="text-2xl font-extrabold">{v.title}</p>
              <p className="mt-1 text-lg opacity-90">{v.body}</p>
            </motion.div>
          </AnimatePresence>
          <Btn className="mt-5 w-full" onClick={addToMatrix}>
            <Plus size={18} aria-hidden="true" /> Taruh di matriks
          </Btn>
        </div>
      </div>

      <h3 className="display-md mb-3 mt-20 font-bold">Matriks dampak dan kemudahan</h3>
      <p className="mb-8 max-w-prose text-lg text-ink/70">
        Bandingkan beberapa ide sekaligus. Dampak dihitung dari rata-rata jangkauan, frekuensi, dan rasa sakit.
        Kemudahan diambil dari skor "bisa dibuat".
      </p>
      <div className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[22px] border-2 border-ink/10 bg-white">
          <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
            <div className="border-b-2 border-r-2 border-dashed border-ink/10" />
            <div className="border-b-2 border-dashed border-ink/10 bg-marker/30" />
            <div className="border-r-2 border-dashed border-ink/10" />
            <div />
          </div>
          {QUADS.map((q) => (
            <p key={q.name} className={`absolute max-w-[45%] text-sm font-semibold text-ink/50 ${q.pos}`}>
              {q.name}
            </p>
          ))}
          <AnimatePresence>
            {ideas.map((it) => {
              const x = 8 + ((it.build - 1) / 4) * 84
              const y = 92 - ((it.impact - 1) / 4) * 84
              return (
                <motion.div
                  key={it.id}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  <span className="block h-5 w-5 rounded-full border-[3px] border-white bg-cobalt shadow" />
                  <span className="absolute left-1/2 top-6 -translate-x-1/2 whitespace-nowrap rounded-md bg-ink px-2 py-0.5 text-xs font-semibold text-paper">
                    {it.label}
                  </span>
                </motion.div>
              )
            })}
          </AnimatePresence>
          <p className="absolute bottom-1 left-1/2 -translate-x-1/2 text-xs text-ink/45">makin ke kanan, makin mudah dibuat</p>
          <p className="absolute left-1 top-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap text-xs text-ink/45">makin ke atas, makin berdampak</p>
        </div>
        <div>
          {ideas.length === 0 ? (
            <p className="hand text-2xl text-ink/45">Belum ada ide di matriks. Beri skor satu ide, lalu klik "Taruh di matriks".</p>
          ) : (
            <ul className="space-y-2">
              {[...ideas]
                .sort((a, b) => b.total - a.total)
                .map((it) => (
                  <li key={it.id} className="flex items-center justify-between gap-3 rounded-xl bg-white px-4 py-3">
                    <span className="min-w-0 truncate font-semibold">{it.label}</span>
                    <span className="flex items-center gap-2">
                      <span className="tabular-nums text-ink/60">{it.total}/25</span>
                      <button
                        onClick={() => setIdeas((l) => l.filter((x) => x.id !== it.id))}
                        className="grid h-8 w-8 place-items-center rounded-full hover:bg-mist"
                        aria-label={`Hapus ${it.label}`}
                      >
                        <X size={16} />
                      </button>
                    </span>
                  </li>
                ))}
            </ul>
          )}
        </div>
      </div>
      <Margin className="mt-14">
        A score won't decide for you. It just shows you where to dig deeper.
      </Margin>
    </Section>
  )
}
