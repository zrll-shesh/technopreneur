import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Section, ChapterHead, Cite, Margin, KeyPoints, SubHead, Para, Table } from '../components/ui'
import { TECHS_GENERAL, NO_AI } from '../data'

export function TechExplorer({ items, exampleLabel = 'Contoh di dunia nyata', layoutKey = 'tech-bg' }) {
  const [k, setK] = useState(0)
  const t = items[k]
  const rows = [
    { l: 'Cara kerja sederhana', v: t.analogy },
    { l: 'Cocok untuk masalah', v: t.fit },
    { l: exampleLabel, v: t.mine, hl: true },
    { l: 'Contoh di lingkungan sekolah', v: t.school },
    { l: 'Alat untuk mulai belajar', v: t.start },
  ]
  return (
    <div className="grid gap-6 lg:grid-cols-[0.8fr_1.6fr]">
      <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0" role="tablist">
        {items.map((x, j) => (
          <button
            key={x.name}
            role="tab"
            aria-selected={k === j}
            onClick={() => setK(j)}
            className={`relative min-h-[52px] shrink-0 rounded-2xl px-5 text-left font-bold transition-colors ${k === j ? 'text-white' : 'bg-white hover:bg-mist'}`}
          >
            {k === j && (
              <motion.span layoutId={layoutKey} className="absolute inset-0 rounded-2xl bg-cobalt" transition={{ type: 'spring', stiffness: 300, damping: 30 }} />
            )}
            <span className="relative">{x.name}</span>
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.article
          key={k}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.22 }}
          className="rounded-[24px] border-2 border-ink/10 bg-white p-6 sm:p-8"
        >
          <h4 className="text-3xl font-extrabold">{t.name}</h4>
          <p className="mt-3 text-xl leading-relaxed">{t.what}</p>
          <dl className="mt-6 divide-y-2 divide-ink/5">
            {rows.map((r) => (
              <div key={r.l} className="grid gap-1 py-4 sm:grid-cols-[12rem_1fr] sm:gap-6">
                <dt className="font-bold text-cobalt">{r.l}</dt>
                <dd className={`text-lg leading-relaxed ${r.hl ? 'rounded-xl bg-marker/60 px-3 py-2' : ''}`}>{r.v}</dd>
              </div>
            ))}
          </dl>
        </motion.article>
      </AnimatePresence>
    </div>
  )
}

export default function Teknologi() {
  return (
    <Section id="teknologi">
      <ChapterHead
        no={2}
        title="Ragam teknologi untuk technopreneur"
        lead="Technopreneurship tidak hanya tentang aplikasi atau AI. Teknologi yang dapat dipakai sangat beragam, dari perangkat lunak hingga bioteknologi. Yang penting adalah mengetahui teknologi apa yang cocok untuk jenis masalah tertentu."
      />

      <SubHead>2.1 Tujuh ragam teknologi</SubHead>
      <Para className="mb-8">Pilih teknologi untuk melihat penjelasan, kecocokan masalah, dan contoh penerapannya.</Para>
      <TechExplorer items={TECHS_GENERAL} />

      <SubHead>2.2 Tidak semua masalah membutuhkan teknologi canggih</SubHead>
      <Para className="mb-8">
        Godaan terbesar saat ini adalah memakai teknologi paling canggih untuk setiap ide. Padahal solusi paling
        sederhana yang berhasil adalah solusi terbaik. Teknologi yang rumit membutuhkan biaya, waktu, dan perawatan
        yang lebih besar.
      </Para>
      <Table head={['Situasi', 'Solusi yang lebih tepat']} rows={NO_AI} />

      <SubHead>2.3 Mengapa sekarang waktu yang tepat</SubHead>
      <Cite
        source="Gross (2015), TED Talk The single biggest reason why start-ups succeed"
        href="https://www.ted.com/talks/bill_gross_the_single_biggest_reason_why_start_ups_succeed"
      >
        Menurut Bill Gross (2015), pendiri Idealab, analisis terhadap sekitar 200 perusahaan menunjukkan bahwa faktor
        paling menentukan keberhasilan startup adalah ketepatan waktu (timing), melampaui ide, tim, model bisnis, dan
        pendanaan.
      </Cite>
      <Table
        head={['Dahulu', 'Sekarang']}
        rows={[
          ['Mengenali hama memerlukan ahli yang datang ke sawah.', 'Model AI dapat berjalan langsung di browser ponsel.'],
          ['Pembayaran nontunai membutuhkan mesin khusus.', 'Usaha kecil cukup menempelkan kode QRIS.'],
          ['Membuat aplikasi membutuhkan tim pemrogram.', 'Alat tanpa kode memungkinkan pelajar membuat prototipe sendiri.'],
          ['Perangkat elektronik eksperimen sangat mahal.', 'Mikrokontroler dan sensor dapat dibeli dengan harga terjangkau.'],
          ['Data hanya dimiliki lembaga besar.', 'BPS dan banyak lembaga membuka datanya untuk publik.'],
        ]}
      />
      <Margin className="mt-12">The best solution is the simplest one that actually works.</Margin>

      <KeyPoints
        points={[
          'Ragam teknologi meliputi aplikasi digital, marketplace, fintech, IoT, AI, teknologi hijau, dan bioteknologi.',
          'Pilih teknologi berdasarkan masalah, dan utamakan solusi paling sederhana yang berhasil.',
          'Alat yang dahulu mahal kini dapat diakses pelajar dengan biaya terjangkau.',
        ]}
      />
    </Section>
  )
}
