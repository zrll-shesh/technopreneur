import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { Section, ChapterHead, Para } from '../components/ui'
import { CASES } from '../data'

export default function StudiKasus() {
  const [k, setK] = useState(0)
  const c = CASES[k]
  return (
    <Section id="studi-kasus" dark>
      <ChapterHead
        dark
        kicker="Studi kasus"
        title="Penerapan pada karya pemateri"
        lead="Empat proyek berikut menunjukkan penerapan seluruh materi: masalah, teknologi, model bisnis, ukuran pasar, dan status validasi. Setiap proyek mewakili jenis pasar yang berbeda."
      />
      <Para dark className="mb-8">
        Catatan: angka TAM bersumber dari data resmi, sedangkan SAM, SOM, dan harga adalah asumsi ilustratif untuk
        latihan perhitungan.
      </Para>

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
              <motion.span layoutId="case-pill" className="absolute inset-0 rounded-full bg-marker" transition={{ type: 'spring', stiffness: 300, damping: 30 }} />
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
              <span className="inline-block rounded-full border-2 border-marker px-3 py-1 text-sm font-bold text-marker">{c.segment}</span>
              <h3 className="display-lg mt-3 font-extrabold">{c.name}</h3>
            </div>
            {c.link && (
              <a
                href={c.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[48px] items-center gap-2 rounded-full border-2 border-white/25 px-5 font-semibold hover:border-marker hover:text-marker"
              >
                Buka demo <ExternalLink size={18} aria-hidden="true" />
              </a>
            )}
          </div>

          <div className="mt-8 grid gap-px overflow-hidden rounded-[22px] border-2 border-white/10 bg-white/10 md:grid-cols-3">
            {[
              ['Masalah', c.problem],
              ['Teknologi', c.tech],
              ['Model bisnis', c.model],
            ].map(([l, v]) => (
              <div key={l} className="bg-ink p-6">
                <p className="font-bold text-marker">{l}</p>
                <p className="mt-3 leading-relaxed text-paper/85">{v}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-prose text-lg text-paper/75">{c.context}</p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {c.market.map((m, j) => (
              <motion.div
                key={m.k}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + j * 0.1 }}
                className={`rounded-[20px] p-6 ${j === 2 ? 'bg-marker text-ink' : 'bg-white/[0.07]'}`}
              >
                <p className={`text-sm font-bold ${j === 2 ? 'text-ink/60' : 'text-paper/55'}`}>{m.k}</p>
                <p className="mt-1 text-4xl font-extrabold tabular-nums">{m.v}</p>
                <p className={`mt-2 text-sm leading-relaxed ${j === 2 ? 'text-ink/75' : 'text-paper/70'}`}>{m.d}</p>
              </motion.div>
            ))}
          </div>
          <p className="mt-4 text-paper/75">
            <span className="font-bold text-paper">Cara menghitung: </span>
            {c.calc}
          </p>
          <p className="mt-4 rounded-2xl border-2 border-white/10 p-5 text-lg">
            <span className="font-bold text-marker">Ilustrasi pendapatan: </span>
            {c.revenue}
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-[20px] bg-white/[0.05] p-6">
              <p className="font-bold text-marker">Status validasi saat ini</p>
              <p className="mt-2 leading-relaxed text-paper/85">{c.status}</p>
            </div>
            <div className="rounded-[20px] bg-white/[0.05] p-6">
              <p className="font-bold text-marker">Langkah validasi berikutnya</p>
              <p className="mt-2 leading-relaxed text-paper/85">{c.next}</p>
            </div>
          </div>
          <div className="mt-6 rounded-[20px] border-2 border-white/10 p-6">
            <p className="font-bold text-marker">Istilah dalam proyek ini</p>
            <dl className="mt-3 divide-y-2 divide-white/10">
              {c.terms.map(([t, d]) => (
                <div key={t} className="grid gap-1 py-3 sm:grid-cols-[11rem_1fr] sm:gap-6">
                  <dt className="font-bold">{t}</dt>
                  <dd className="text-paper/80">{d}</dd>
                </div>
              ))}
            </dl>
          </div>
        </motion.article>
      </AnimatePresence>
    </Section>
  )
}
