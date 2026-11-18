import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Section, ChapterHead, Cite, Margin, Reveal } from '../components/ui'
import { EXAMPLES } from '../data'

const PARTS = [
  { key: 'masalah', label: 'Masalah nyata', color: 'bg-marker text-ink', missing: 'Teknologi canggih yang nggak dipakai siapa-siapa. Keren di demo, sepi di dunia nyata.' },
  { key: 'teknologi', label: 'Teknologi yang pas', color: 'bg-cobalt text-white', missing: 'Usaha biasa. Tetap bagus, tapi susah menjangkau banyak orang dengan cepat.' },
  { key: 'bisnis', label: 'Model bisnis', color: 'bg-pine text-white', missing: 'Proyek keren yang berhenti begitu uang jajan dan tenaga pembuatnya habis.' },
]

function Formula() {
  const [off, setOff] = useState(null)
  return (
    <div className="rounded-[26px] border-2 border-ink/10 bg-white p-5 sm:p-8">
      <p className="mb-6 text-lg text-ink/70">
        Klik salah satu bagian untuk melihat apa yang terjadi kalau bagian itu hilang.
      </p>
      <div className="flex flex-wrap items-center gap-3 sm:gap-4">
        {PARTS.map((p, k) => (
          <motion.div
            key={p.key}
            className="flex items-center gap-3 sm:gap-4"
            initial={{ opacity: 0, x: -30 * (k + 1) }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 160, damping: 16, delay: k * 0.15 }}
          >
            <motion.button
              onClick={() => setOff(off === p.key ? null : p.key)}
              animate={off === p.key ? { opacity: 0.25, scale: 0.92 } : { opacity: 1, scale: 1 }}
              className={`rounded-2xl px-5 py-4 text-lg font-bold sm:text-xl ${p.color} ${off === p.key ? 'line-through' : ''}`}
              aria-pressed={off === p.key}
            >
              {p.label}
            </motion.button>
            {k < PARTS.length - 1 && <span className="text-3xl font-light text-ink/40">+</span>}
          </motion.div>
        ))}
        <span className="text-3xl font-light text-ink/40">=</span>
        <motion.div
          layout
          className={`rounded-2xl border-[3px] px-5 py-4 text-lg font-bold sm:text-xl ${off ? 'border-dashed border-rose text-rose' : 'border-ink text-ink'}`}
        >
          {off ? 'Belum jadi' : 'Solusi yang berdampak dan bertahan'}
        </motion.div>
      </div>
      <AnimatePresence mode="wait">
        <motion.p
          key={off || 'utuh'}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="mt-6 min-h-[3.5rem] max-w-prose text-lg"
        >
          {off
            ? `Tanpa ${PARTS.find((p) => p.key === off).label.toLowerCase()}: ${PARTS.find((p) => p.key === off).missing}`
            : 'Ketiganya lengkap. Ada orang yang terbantu, ada cara untuk menjangkau mereka, dan ada alasan solusinya terus hidup.'}
        </motion.p>
      </AnimatePresence>
    </div>
  )
}

export default function Technopreneur() {
  return (
    <Section id="technopreneur">
      <ChapterHead
        no={1}
        title="Technopreneur itu sebenarnya apa?"
        lead="Gampangnya, technopreneur adalah orang yang memakai teknologi untuk menyelesaikan masalah orang lain, lalu membuat solusinya bisa bertahan karena ada yang mau membiayainya."
      />

      <Cite
        source="Bailetti (2012), Technology Innovation Management Review"
        href="https://timreview.ca/node/520"
      >
        Menurut Bailetti (2012), technology entrepreneurship adalah upaya mengumpulkan orang dan sumber daya yang
        berkaitan erat dengan kemajuan ilmu pengetahuan dan teknologi, dengan tujuan menciptakan sekaligus menangkap
        nilai.
      </Cite>

      <div className="mb-14 grid max-w-4xl gap-6 sm:grid-cols-2">
        <Reveal className="rounded-[22px] bg-marker p-6">
          <p className="hand text-xl">menciptakan nilai</p>
          <p className="mt-2 text-2xl font-bold">Itu dampak.</p>
          <p className="mt-2 text-lg">Ada orang yang hidupnya jadi lebih mudah, lebih aman, atau lebih baik.</p>
        </Reveal>
        <Reveal delay={0.1} className="rounded-[22px] bg-pine p-6 text-white">
          <p className="hand text-xl text-white/80">menangkap nilai</p>
          <p className="mt-2 text-2xl font-bold">Itu bisnis.</p>
          <p className="mt-2 text-lg text-white/85">Ada cara agar solusinya menghasilkan dan bisa terus berjalan.</p>
        </Reveal>
      </div>

      <h3 className="display-md mb-6 font-bold">Rumusnya kira-kira begini</h3>
      <Formula />

      <h3 className="display-md mb-3 mt-20 font-bold">Mereka juga nggak mulai dari yang canggih</h3>
      <p className="mb-8 max-w-prose text-lg text-ink/70">
        Tiga nama yang pasti kalian kenal. Perhatikan bagaimana semuanya dimulai.
      </p>
      <div className="grid gap-5 md:grid-cols-3">
        {EXAMPLES.map((e, k) => (
          <Reveal key={e.name} delay={k * 0.1}>
            <article className="h-full rounded-[22px] border-2 border-ink/10 bg-white p-6">
              <div className="flex items-baseline justify-between">
                <h4 className="text-2xl font-extrabold">{e.name}</h4>
                <span className="hand text-xl text-cobalt">sejak {e.year}</span>
              </div>
              <p className="mt-4 text-lg leading-relaxed text-ink/80">{e.story}</p>
            </article>
          </Reveal>
        ))}
      </div>
      <Margin className="mt-12">
        None of them started with "let's build a fancy app". They started with a problem.
      </Margin>
    </Section>
  )
}
