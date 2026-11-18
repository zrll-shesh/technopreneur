import { useState } from 'react'
import { motion } from 'framer-motion'
import { Section, ChapterHead, Margin, Reveal } from '../components/ui'
import { IMPACT_PRESETS } from '../data'

function reachLabel(v) {
  const n = Math.round(Math.pow(10, v))
  if (n >= 1000000) return `${(n / 1000000).toLocaleString('id-ID', { maximumFractionDigits: 1 })} juta orang`
  if (n >= 1000) return `${Math.round(n / 1000).toLocaleString('id-ID')} ribu orang`
  return `${n.toLocaleString('id-ID')} orang`
}

function quadrant(reach, depth) {
  const wide = reach >= 3
  const deep = depth >= 5.5
  if (wide && deep) return { name: 'Lebar dan dalam', desc: 'Banyak orang terbantu, dan hidup mereka berubah nyata. Ini wilayah ide yang sangat kuat, biasanya juga paling sulit dibuat.' }
  if (!wide && deep) return { name: 'Dalam', desc: 'Jumlahnya belum banyak, tapi bagi mereka solusinya sangat berarti. Banyak startup hebat justru mulai dari sini.' }
  if (wide && !deep) return { name: 'Lebar', desc: 'Menjangkau banyak orang, tapi manfaatnya tipis. Hati-hati, ini sering jadi wilayah vitamin.' }
  return { name: 'Belum terasa', desc: 'Sedikit orang dan manfaatnya kecil. Gali lagi masalahnya, mungkin ada versi yang lebih tajam.' }
}

function ImpactPlot() {
  const [reach, setReach] = useState(2.6)
  const [depth, setDepth] = useState(6)
  const q = quadrant(reach, depth)
  const px = (reach / 6) * 100
  const py = 100 - ((depth - 1) / 9) * 100

  return (
    <div className="grid gap-8 rounded-[26px] border-2 border-ink/10 bg-white p-5 sm:p-8 lg:grid-cols-[1fr_1fr]">
      <div>
        <div className="mb-6 flex flex-wrap gap-2">
          {IMPACT_PRESETS.map((p) => (
            <button
              key={p.name}
              onClick={() => {
                setReach(p.reach)
                setDepth(p.depth)
              }}
              className="min-h-[40px] rounded-full bg-mist px-4 text-sm font-semibold hover:bg-cobalt hover:text-white"
            >
              {p.name}
            </button>
          ))}
        </div>
        <label htmlFor="reach" className="block font-semibold">
          Berapa banyak orang yang terbantu?
        </label>
        <p className="hand text-2xl text-cobalt">{reachLabel(reach)}</p>
        <input
          id="reach"
          type="range"
          min="0"
          max="6"
          step="0.1"
          value={reach}
          onChange={(e) => setReach(Number(e.target.value))}
          className="mt-2"
        />
        <label htmlFor="depth" className="mt-8 block font-semibold">
          Seberapa besar hidup mereka berubah?
        </label>
        <p className="hand text-2xl text-cobalt">{Math.round(depth)} dari 10</p>
        <input
          id="depth"
          type="range"
          min="1"
          max="10"
          step="0.5"
          value={depth}
          onChange={(e) => setDepth(Number(e.target.value))}
          className="mt-2"
        />
        <motion.div
          key={q.name}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 rounded-2xl bg-ink p-5 text-paper"
        >
          <p className="text-2xl font-bold text-marker">{q.name}</p>
          <p className="mt-1 text-lg text-paper/85">{q.desc}</p>
        </motion.div>
      </div>

      <div className="relative">
        <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-paper">
          <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
            <div className="border-b-2 border-r-2 border-dashed border-ink/15 p-3 text-sm font-semibold text-ink/45">Dalam</div>
            <div className="border-b-2 border-dashed border-ink/15 p-3 text-right text-sm font-semibold text-ink/45">Lebar dan dalam</div>
            <div className="flex items-end border-r-2 border-dashed border-ink/15 p-3 text-sm font-semibold text-ink/45">Belum terasa</div>
            <div className="flex items-end justify-end p-3 text-sm font-semibold text-ink/45">Lebar</div>
          </div>
          <motion.div
            className="absolute h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white bg-cobalt shadow-[0_6px_20px_rgba(35,55,217,0.45)]"
            animate={{ left: `${Math.min(94, Math.max(6, px))}%`, top: `${Math.min(94, Math.max(6, py))}%` }}
            transition={{ type: 'spring', stiffness: 220, damping: 20 }}
          />
        </div>
        <p className="mt-3 text-center text-sm text-ink/55">
          Ke kanan: makin banyak orang. Ke atas: makin besar perubahan hidupnya.
        </p>
      </div>
    </div>
  )
}

export default function Dampak() {
  const questions = [
    { q: 'Siapa yang terbantu?', d: 'Sebut orangnya sespesifik mungkin. Kalau jawabannya "semua orang", biasanya belum cukup tajam.' },
    { q: 'Seberapa sering masalahnya terjadi?', d: 'Masalah harian jauh lebih kuat daripada masalah setahun sekali.' },
    { q: 'Apa yang terjadi kalau dibiarkan?', d: 'Rugi waktu, rugi uang, rugi kesehatan, atau rugi kesempatan? Makin jelas ruginya, makin besar dampaknya.' },
  ]
  return (
    <Section id="dampak">
      <ChapterHead
        no={5}
        title="Dampak itu soal manfaat, bukan soal keren."
        lead="Kata impact sering terdengar besar dan jauh. Padahal artinya dekat sekali dengan nilai yang sudah kalian pelajari sejak lama."
      />

      <Reveal>
        <figure className="mb-16 rounded-[26px] bg-pine p-8 text-white sm:p-12">
          <p className="text-3xl font-bold leading-snug sm:text-4xl" lang="ar-Latn">
            Khairunnas anfa'uhum linnas.
          </p>
          <p className="mt-4 max-w-prose text-xl text-white/90">
            Sebaik-baik manusia adalah yang paling bermanfaat bagi manusia lain.
          </p>
          <figcaption className="mt-4 text-white/70">HR. Ahmad dan Ath-Thabrani</figcaption>
          <p className="hand mt-8 text-2xl text-marker">impact is just another word for manfaat</p>
        </figure>
      </Reveal>

      <h3 className="display-md mb-3 font-bold">Dampak punya dua arah: lebar dan dalam</h3>
      <p className="mb-8 max-w-prose text-lg text-ink/70">
        Membantu sedikit untuk sejuta orang dan membantu banyak untuk seratus orang sama-sama dampak. Geser
        penggeser di bawah, atau klik contohnya, lalu lihat ide itu jatuh di wilayah mana.
      </p>
      <ImpactPlot />

      <h3 className="display-md mb-8 mt-20 font-bold">Tiga pertanyaan untuk mengukur dampak</h3>
      <div className="grid gap-5 md:grid-cols-3">
        {questions.map((x, k) => (
          <Reveal key={x.q} delay={k * 0.1}>
            <div className="h-full border-t-[5px] border-cobalt pt-5">
              <p className="hand text-xl text-cobalt">pertanyaan {k + 1}</p>
              <p className="mt-1 text-2xl font-bold">{x.q}</p>
              <p className="mt-3 text-lg text-ink/75">{x.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Margin className="mt-14">
        Impact isn't about how big your idea sounds. It's about how much someone's life actually changes.
      </Margin>
    </Section>
  )
}
