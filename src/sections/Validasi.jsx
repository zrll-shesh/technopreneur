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

const LAYERS_MKT = [
  {
    k: 'TAM',
    full: 'Total Addressable Market',
    q: 'Seberapa besar masalah ini secara keseluruhan?',
    d: 'Semua pihak yang memiliki masalah tersebut, tanpa memedulikan apakah kita mampu menjangkaunya atau tidak.',
    ex: 'Semua santri di satu kota yang membutuhkan sarapan setiap pagi.',
    n: '10.000 santri',
    size: 100,
    cls: 'bg-mist text-ink',
  },
  {
    k: 'SAM',
    full: 'Serviceable Available Market',
    q: 'Berapa yang bisa dilayani dengan produk, wilayah, dan saluran yang kita miliki sekarang?',
    d: 'Bagian dari TAM yang sesuai dengan produk kita dan dapat dijangkau secara nyata.',
    ex: 'Santri di pondok yang dapat kita antar sebelum jam 6 pagi.',
    n: '2.000 santri',
    size: 64,
    cls: 'bg-[#BCC6F5] text-ink',
  },
  {
    k: 'SOM',
    full: 'Serviceable Obtainable Market',
    q: 'Berapa yang realistis menjadi pelanggan dalam 1 sampai 3 tahun?',
    d: 'Bagian dari SAM yang dapat direbut dengan memperhitungkan pesaing, kapasitas produksi, dan kemampuan tim.',
    ex: 'Santri yang benar-benar berlangganan pada tahun pertama.',
    n: '200 santri',
    size: 32,
    cls: 'bg-cobalt text-white',
  },
]

function Circles() {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
      <div className="relative mx-auto aspect-square w-full max-w-[340px]" aria-hidden="true">
        {LAYERS_MKT.map((it, k) => (
          <motion.div
            key={it.k}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 120, damping: 14, delay: k * 0.2 }}
            className={`absolute flex items-start justify-center rounded-full pt-[6%] text-xl font-extrabold ${it.cls}`}
            style={{
              width: `${it.size}%`,
              height: `${it.size}%`,
              left: `${(100 - it.size) / 2}%`,
              bottom: 0,
              originY: 1,
            }}
          >
            {it.k}
          </motion.div>
        ))}
      </div>
      <ol className="space-y-4">
        {LAYERS_MKT.map((it) => (
          <li key={it.k} className="rounded-[20px] border-2 border-ink/10 bg-white p-5">
            <div className="flex flex-wrap items-baseline gap-x-3">
              <span className="text-2xl font-extrabold">{it.k}</span>
              <span className="text-ink/55">{it.full}</span>
            </div>
            <p className="mt-2 font-semibold text-cobalt">{it.q}</p>
            <p className="mt-1 text-ink/80">{it.d}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}

function WorkedExample() {
  return (
    <div className="mt-12 rounded-[26px] bg-ink p-6 text-paper sm:p-10">
      <p className="hand text-2xl text-marker">contoh sederhana</p>
      <p className="mt-2 max-w-3xl text-2xl font-bold leading-snug">
        Bayangkan kamu ingin membuat layanan pesan antar sarapan untuk santri, dipesan melalui aplikasi.
      </p>
      <p className="mt-2 text-paper/60">Angka berikut hanya ilustrasi untuk memahami cara berpikirnya.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {LAYERS_MKT.map((it, k) => (
          <motion.div
            key={it.k}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: k * 0.15 }}
            className={`rounded-[20px] p-6 ${k === 2 ? 'bg-marker text-ink' : 'bg-white/[0.07]'}`}
          >
            <p className={`text-sm font-bold ${k === 2 ? 'text-ink/60' : 'text-paper/55'}`}>{it.k}</p>
            <p className="mt-1 text-3xl font-extrabold">{it.n}</p>
            <p className={`mt-2 ${k === 2 ? 'text-ink/80' : 'text-paper/75'}`}>{it.ex}</p>
          </motion.div>
        ))}
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-[20px] border-2 border-white/10 p-6">
          <p className="font-bold text-marker">Dari mana angka 200?</p>
          <p className="mt-2 leading-relaxed text-paper/80">
            Dapur kita hanya mampu menyiapkan sekitar 200 porsi per pagi, dan sudah ada dua penjual lain. Jadi SOM
            ditentukan oleh kapasitas dan persaingan, bukan oleh harapan.
          </p>
        </div>
        <div className="rounded-[20px] border-2 border-white/10 p-6">
          <p className="font-bold text-marker">Perkiraan pendapatan</p>
          <p className="mt-2 leading-relaxed text-paper/80">
            200 pelanggan x Rp5.000 x 25 hari = <span className="font-bold text-paper">Rp25 juta per bulan</span>.
            Rumus umumnya: jumlah pelanggan SOM x harga x frekuensi pembayaran.
          </p>
        </div>
      </div>
    </div>
  )
}

const MISTAKES = [
  {
    t: 'Jebakan "cukup 1% saja"',
    d: 'Kalimat "jika 1% penduduk Indonesia memakai aplikasi ini..." terdengar meyakinkan, tetapi tidak menjelaskan bagaimana 1% itu didapat. Juri dan investor biasanya langsung meragukannya.',
  },
  {
    t: 'TAM terlalu luas',
    d: 'Menulis "semua orang Indonesia" sebagai TAM menunjukkan masalahnya belum dirumuskan dengan tajam. TAM harus berisi pihak yang benar-benar memiliki masalah tersebut.',
  },
  {
    t: 'Menghitung pengguna, bukan pembayar',
    d: 'Pada model B2B2C, pasar dihitung dari pihak yang membayar. Jika koperasi yang membayar, hitung jumlah koperasi dan nilai kontraknya.',
  },
]

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
      <Para className="mb-10">
        Sebelum membangun produk, kita perlu tahu seberapa besar peluangnya. TAM, SAM, dan SOM adalah tiga lapisan
        yang semakin menyempit: dari "semua yang mungkin" menuju "yang realistis dapat diraih". Ketiganya berbentuk
        lingkaran bertingkat karena setiap lapisan adalah bagian dari lapisan di atasnya.
      </Para>
      <Circles />
      <WorkedExample />

      <h4 className="mb-4 mt-14 text-2xl font-bold">Dua cara menghitung</h4>
      <Table
        head={['Cara', 'Langkah', 'Contoh', 'Kelebihan']}
        rows={[
          ['Top-down (dari atas)', 'Mulai dari angka besar data resmi, lalu dipersempit dengan persentase', '29,34 juta usaha tani, 30% relevan, 0,5% direbut', 'Cepat dan memakai data resmi'],
          ['Bottom-up (dari bawah)', 'Mulai dari kemampuan nyata menjangkau pelanggan, lalu dikalikan', 'Tim mengunjungi 20 koperasi per bulan, 25% setuju uji coba, masing-masing 100 petani', 'Lebih dipercaya karena berdasar kemampuan nyata'],
        ]}
      />
      <Para className="mt-6">
        Praktik terbaik adalah memakai keduanya. Jika hasil top-down jauh lebih besar daripada bottom-up, berarti
        asumsi persentasenya terlalu optimistis.
      </Para>

      <h4 className="mb-4 mt-14 text-2xl font-bold">Kesalahan yang sering terjadi</h4>
      <div className="grid gap-5 md:grid-cols-3">
        {MISTAKES.map((m) => (
          <div key={m.t} className="rounded-[20px] border-l-[6px] border-rose bg-white p-6">
            <p className="text-xl font-bold">{m.t}</p>
            <p className="mt-2 leading-relaxed text-ink/75">{m.d}</p>
          </div>
        ))}
      </div>

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
          'TAM adalah seluruh pasar, SAM adalah yang dapat dilayani, dan SOM adalah yang realistis direbut.',
          'Hitung dengan cara top-down dan bottom-up, lalu bandingkan hasilnya.',
        ]}
      />
    </Section>
  )
}
