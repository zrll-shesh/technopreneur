import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Section, ChapterHead, Cite, Margin, Reveal } from '../components/ui'
import { IDEA_SOURCES, LENSES } from '../data'

const MODES = {
  pikir: {
    label: 'Mode memikirkan',
    desc: 'Duduk, buka buku kosong, lalu memaksa diri "harus dapat ide keren".',
    items: ['Media sosial khusus santri', 'Metaverse pesantren', 'Aplikasi AI serba bisa untuk sekolah'],
    verdict: 'Kedengarannya keren, tapi coba tanya: siapa yang benar-benar butuh ini besok pagi?',
  },
  perhati: {
    label: 'Mode memperhatikan',
    desc: 'Menjalani hari seperti biasa, tapi peka terhadap hal yang bikin repot.',
    items: [
      'Kenapa daftar piket masih di kertas yang sering hilang?',
      'Kenapa orang tua baru tahu nilai anak saat rapor?',
      'Kenapa ibu kantin selalu kehabisan menu yang sama?',
    ],
    verdict: 'Kedengarannya sepele, tapi semuanya masalah nyata dengan orang nyata yang merasakannya.',
  },
}

function ModeToggle() {
  const [mode, setMode] = useState('pikir')
  const m = MODES[mode]
  return (
    <div className="rounded-[26px] border-2 border-ink/10 bg-white p-5 sm:p-8">
      <div className="inline-flex rounded-full bg-mist p-1" role="tablist" aria-label="Pilih cara mencari ide">
        {Object.entries(MODES).map(([k, v]) => (
          <button
            key={k}
            role="tab"
            aria-selected={mode === k}
            onClick={() => setMode(k)}
            className="relative min-h-[44px] rounded-full px-4 font-semibold sm:px-6"
          >
            {mode === k && (
              <motion.span
                layoutId="mode-pill"
                className="absolute inset-0 rounded-full bg-cobalt"
                transition={{ type: 'spring', stiffness: 300, damping: 28 }}
              />
            )}
            <span className={`relative ${mode === k ? 'text-white' : 'text-ink/70'}`}>{v.label}</span>
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={mode}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
          className="mt-6"
        >
          <p className="text-lg text-ink/70">{m.desc}</p>
          <ul className="mt-5 space-y-3">
            {m.items.map((it, k) => (
              <motion.li
                key={it}
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 * k }}
                className={`rounded-2xl px-5 py-4 text-xl font-semibold ${mode === 'pikir' ? 'bg-paper text-ink/80' : 'bg-marker'}`}
              >
                {it}
              </motion.li>
            ))}
          </ul>
          <p className="mt-5 max-w-prose text-lg font-medium">{m.verdict}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

function Sources() {
  const [open, setOpen] = useState(0)
  return (
    <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="flex flex-col gap-2">
        {IDEA_SOURCES.map((s, k) => (
          <button
            key={s.title}
            onClick={() => setOpen(k)}
            aria-pressed={open === k}
            className={`flex min-h-[56px] items-center rounded-2xl px-5 text-left text-xl font-bold transition-colors ${open === k ? 'bg-ink text-paper' : 'bg-white text-ink hover:bg-mist'}`}
          >
            {s.title}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={open}
          initial={{ opacity: 0, rotate: -2, y: 16 }}
          animate={{ opacity: 1, rotate: 0, y: 0 }}
          exit={{ opacity: 0, rotate: 2, y: -16 }}
          transition={{ type: 'spring', stiffness: 220, damping: 22 }}
          className="lined flex flex-col justify-between rounded-[22px] border-2 border-ink/10 bg-white p-7"
        >
          <div>
            <h4 className="text-3xl font-extrabold">{IDEA_SOURCES[open].title}</h4>
            <p className="mt-4 text-xl leading-relaxed">{IDEA_SOURCES[open].body}</p>
          </div>
          <div className="mt-8 rounded-2xl bg-marker p-5">
            <p className="hand text-lg text-ink/60">coba tanya dirimu</p>
            <p className="mt-1 text-xl font-semibold">{IDEA_SOURCES[open].ask}</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

function Lens() {
  const places = Object.keys(LENSES)
  const [place, setPlace] = useState(places[0])
  return (
    <div className="rounded-[26px] bg-cobalt p-6 text-white sm:p-10">
      <p className="hand text-2xl text-marker">latihan 1 menit</p>
      <h4 className="display-md mt-2 font-bold">Pakai kacamata masalah</h4>
      <p className="mt-3 max-w-prose text-lg text-white/80">
        Pilih satu tempat yang kamu datangi setiap hari, lalu jawab pertanyaannya di kepala masing-masing.
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        {places.map((p) => (
          <button
            key={p}
            onClick={() => setPlace(p)}
            aria-pressed={place === p}
            className={`min-h-[44px] rounded-full px-5 font-semibold transition-colors ${place === p ? 'bg-marker text-ink' : 'bg-white/10 hover:bg-white/20'}`}
          >
            {p}
          </button>
        ))}
      </div>
      <ul className="mt-8 grid gap-4 md:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {LENSES[place].map((q, k) => (
            <motion.li
              key={place + k}
              initial={{ opacity: 0, y: 20, rotateX: -40 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: k * 0.08, type: 'spring', stiffness: 200, damping: 20 }}
              className="rounded-2xl bg-white p-5 text-lg font-medium text-ink"
            >
              {q}
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  )
}

export default function Menemukan() {
  return (
    <Section id="menemukan">
      <ChapterHead
        no={2}
        title="Ide bagus itu ditemukan, bukan dipikirkan."
        lead="Kesalahan paling umum saat mencari ide adalah memaksanya muncul. Padahal ide yang kuat biasanya sudah ada di sekitar kita, menunggu untuk diperhatikan."
      />

      <Cite source="Graham (2012), esai How to Get Startup Ideas" href="https://paulgraham.com/startupideas.html">
        Menurut Paul Graham (2012), pendiri Y Combinator, cara mendapat ide startup justru bukan dengan berusaha
        memikirkannya, melainkan dengan mencari masalah, terutama masalah yang kita alami sendiri. Ia merangkumnya
        dalam satu kalimat: "Live in the future, then build what's missing."
      </Cite>

      <ModeToggle />

      <h3 className="display-md mb-3 mt-20 font-bold">Lima tempat ide biasa bersembunyi</h3>
      <p className="mb-8 max-w-prose text-lg text-ink/70">Klik satu per satu. Setiap sumber punya pertanyaan pemancingnya sendiri.</p>
      <Sources />

      <div className="mt-20 grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <h3 className="display-md font-bold">Hati-hati dengan penyakit malas ribet</h3>
          <Cite source="Graham (2012), esai Schlep Blindness" href="https://paulgraham.com/schlep.html">
            Menurut Graham (2012), kita cenderung tanpa sadar menghindari masalah yang kelihatan ribet dan
            membosankan. Ia menyebutnya schlep blindness. Akibatnya, peluang besar justru sering dibiarkan
            karena semua orang malas menyentuhnya.
          </Cite>
          <p className="max-w-prose text-lg leading-relaxed text-ink/80">
            Contohnya Stripe. Mengurus pembayaran online itu terkenal rumit, penuh aturan bank, dan melelahkan.
            Justru karena banyak yang menghindar, Stripe yang mau berkutat dengan keribetan itu tumbuh jadi
            perusahaan raksasa.
          </p>
        </div>
        <Reveal>
          <div className="relative rounded-[26px] bg-ink p-8 text-paper sm:p-10">
            <p className="hand text-2xl text-marker">ini keunggulan kalian</p>
            <p className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
              Startup bermodal miliaran nggak tahu rasanya antre mandi jam empat pagi. Kalian tahu.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-paper/75">
              Hidup di dalam masalah adalah keunggulan yang nggak bisa dibeli. Orang menyebutnya insider advantage.
              Kalian paham detail kecil kehidupan asrama yang nggak akan pernah muncul di rapat perusahaan besar.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="mt-20">
        <Lens />
      </div>

      <Margin className="mt-12">
        You don't need to be the smartest person in the room. You need to be the one closest to the problem.
      </Margin>
    </Section>
  )
}
