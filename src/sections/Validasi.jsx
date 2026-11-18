import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Section, ChapterHead, Cite, Margin, KeyPoints, SubHead, Para, Table } from '../components/ui'
import { EVIDENCE, MOM_TABLE } from '../data'

function FailBar() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  return (
    <div ref={ref} className="rounded-[26px] bg-ink p-6 text-paper sm:p-10">
      <p className="text-lg text-paper/70">Alasan paling sering startup berhenti beroperasi</p>
      <p className="mt-2 text-3xl font-extrabold sm:text-4xl">Tidak ada kebutuhan pasar.</p>
      <div className="mt-8 h-14 w-full overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="flex h-full items-center justify-end rounded-full bg-rose pr-5 text-2xl font-extrabold text-white"
          initial={{ width: '0%' }}
          animate={{ width: inView ? '42%' : '0%' }}
          transition={{ duration: 1.4, ease: [0.2, 0.7, 0.2, 1] }}
        >
          42%
        </motion.div>
      </div>
    </div>
  )
}

function Circles() {
  const items = [
    { k: 'TAM', d: 'Total Addressable Market: seluruh pihak yang memiliki masalah tersebut.', size: '100%', cls: 'bg-mist' },
    { k: 'SAM', d: 'Serviceable Available Market: bagian yang dapat dijangkau produk dengan kemampuan saat ini.', size: '68%', cls: 'bg-[#BCC6F5]' },
    { k: 'SOM', d: 'Serviceable Obtainable Market: bagian yang realistis direbut dalam beberapa tahun.', size: '36%', cls: 'bg-cobalt text-white' },
  ]
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2">
      <div className="relative mx-auto aspect-square w-full max-w-[360px]">
        {items.map((it, k) => (
          <motion.div
            key={it.k}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 120, damping: 14, delay: k * 0.2 }}
            className={`absolute bottom-0 left-1/2 flex -translate-x-1/2 items-start justify-center rounded-full pt-5 text-xl font-extrabold ${it.cls}`}
            style={{ width: it.size, height: it.size }}
          >
            {it.k}
          </motion.div>
        ))}
      </div>
      <dl className="space-y-5">
        {items.map((it) => (
          <div key={it.k}>
            <dt className="text-2xl font-extrabold">{it.k}</dt>
            <dd className="mt-1 text-lg text-ink/75">{it.d}</dd>
          </div>
        ))}
        <p className="rounded-2xl bg-marker p-4 font-medium">
          Rumus pendapatan sederhana: jumlah pelanggan SOM x harga x frekuensi pembayaran.
        </p>
      </dl>
    </div>
  )
}

export default function Validasi() {
  return (
    <Section id="validasi">
      <ChapterHead
        no={6}
        title="Validasi pasar"
        lead="Validasi pasar adalah proses membuktikan bahwa masalahnya nyata, pasarnya cukup besar, dan ada pihak yang bersedia membayar. Semua ini sebaiknya dibuktikan sebelum sumber daya besar dikeluarkan untuk membangun teknologi."
      />

      <SubHead>6.1 Mengapa validasi penting</SubHead>
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
        <FailBar />
        <Cite source="CB Insights, The Top Reasons Startups Fail" href="https://www.cbinsights.com/research/startup-failure-reasons-top/">
          Menurut analisis CB Insights terhadap 101 catatan kegagalan startup, alasan yang paling sering disebut adalah
          tidak adanya kebutuhan pasar, yaitu pada 42 persen kasus.
        </Cite>
      </div>

      <SubHead>6.2 Tangga bukti validasi</SubHead>
      <Para className="mb-8">Bukti validasi memiliki tingkat kekuatan yang berbeda. Semakin tinggi anak tangganya, semakin kuat buktinya.</Para>
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end">
        {EVIDENCE.map((e, k) => (
          <motion.div
            key={e.t}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: k * 0.1 }}
            className={`flex-1 rounded-2xl p-5 ${k === EVIDENCE.length - 1 ? 'bg-pine text-white' : 'border-2 border-ink/10 bg-white'}`}
            style={{ minHeight: `${120 + k * 26}px` }}
          >
            <p className={`text-sm ${k === EVIDENCE.length - 1 ? 'text-white/70' : 'text-ink/50'}`}>Tingkat {e.s}</p>
            <p className="mt-1 text-lg font-bold">{e.t}</p>
            <p className={`mt-1 text-sm ${k === EVIDENCE.length - 1 ? 'text-white/85' : 'text-ink/70'}`}>{e.d}</p>
          </motion.div>
        ))}
      </div>
      <div className="mt-8 rounded-[22px] border-l-[8px] border-rose bg-white p-6">
        <p className="text-xl font-bold">Menang lomba belum termasuk validasi pasar.</p>
        <p className="mt-2 max-w-prose text-lg text-ink/75">
          Penghargaan kompetisi membuktikan gagasan dan kemampuan teknis dinilai baik oleh juri. Namun juri bukan
          pembeli. Validasi pasar baru terjadi ketika calon pengguna memakai dan calon pembayar bersedia membayar.
        </p>
      </div>

      <SubHead>6.3 Mengukur besar pasar: TAM, SAM, SOM</SubHead>
      <Circles />

      <SubHead>6.4 Wawancara yang jujur</SubHead>
      <Para className="mb-8">
        Rob Fitzpatrick dalam The Mom Test (2013) menjelaskan bahwa pertanyaan tentang pendapat menghasilkan jawaban
        sopan, bukan jawaban jujur. Tanyakan kejadian di masa lalu dan perilaku nyata.
      </Para>
      <Table head={['Pertanyaan lemah', 'Pertanyaan kuat', 'Alasan']} rows={MOM_TABLE.slice(0, 3).map((r) => [r.weak, r.strong, r.why])} />
      <Margin className="mt-12">Opinions are cheap. Payments are proof.</Margin>

      <KeyPoints
        points={[
          'Alasan paling umum kegagalan startup adalah tidak adanya kebutuhan pasar.',
          'Bukti validasi bertingkat dari data sekunder hingga pembayaran pertama.',
          'TAM, SAM, dan SOM membantu memperkirakan besar pasar secara realistis.',
        ]}
      />
    </Section>
  )
}
