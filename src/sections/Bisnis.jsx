import { Section, ChapterHead, Cite, Margin, KeyPoints, SubHead, Para, Table } from '../components/ui'
import { CANVAS_BLOCKS, MODELS, PAYER_EXAMPLES } from '../data'

const AREA = {
  problem: 'lg:col-start-1 lg:row-start-1 lg:row-span-2',
  solution: 'lg:col-start-2 lg:row-start-1',
  metrics: 'lg:col-start-2 lg:row-start-2',
  uvp: 'lg:col-start-3 lg:row-start-1 lg:row-span-2 bg-marker',
  advantage: 'lg:col-start-4 lg:row-start-1',
  channels: 'lg:col-start-4 lg:row-start-2',
  segment: 'lg:col-start-5 lg:row-start-1 lg:row-span-2',
  cost: 'lg:col-start-1 lg:col-span-2 lg:row-start-3',
  revenue: 'lg:col-start-3 lg:col-span-3 lg:row-start-3',
}

export default function Bisnis() {
  return (
    <Section id="bisnis">
      <ChapterHead
        no={5}
        title="Nilai bisnis"
        lead="Solusi yang bermanfaat tetapi tidak memiliki sumber pendanaan umumnya berhenti di tengah jalan. Nilai bisnis memastikan manfaat sebuah solusi dapat terus berlanjut."
      />

      <SubHead>5.1 Pengguna dan pembayar</SubHead>
      <Para className="mb-8">
        Pihak yang memakai solusi belum tentu pihak yang membayarnya. Di lingkungan sekolah berasrama, santri adalah
        pengguna, sedangkan orang tua atau sekolah sering menjadi pembayar. Memahami perbedaan ini menentukan kepada
        siapa solusi ditawarkan.
      </Para>
      <Table head={['Solusi', 'Pengguna', 'Pembayar']} rows={PAYER_EXAMPLES.map((p) => [p.name, p.user, p.payer])} />

      <SubHead>5.2 Lima model bisnis</SubHead>
      <Para className="mb-8">Model bisnis menjelaskan bagaimana solusi memperoleh pendapatan. Pilih yang paling sesuai dengan karakter pembayarnya.</Para>
      <Table
        head={['Model', 'Cara kerja', 'Contoh', 'Kelebihan', 'Tantangan']}
        rows={MODELS.map((m) => [m.name, m.what, m.example, m.plus, m.minus])}
      />

      <SubHead>5.3 Lean Canvas</SubHead>
      <Para className="mb-8">
        Lean Canvas adalah kerangka satu halaman yang dikembangkan Ash Maurya dari Business Model Canvas, dirancang
        khusus untuk usaha rintisan. Kerangka ini membantu merangkum seluruh ide dalam sembilan bagian.
      </Para>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5 lg:grid-rows-[auto_auto_auto]">
        {CANVAS_BLOCKS.map((b) => (
          <div key={b.t} className={`rounded-2xl border-2 border-ink/10 bg-white p-5 ${AREA[b.area]}`}>
            <p className="text-lg font-bold">{b.t}</p>
            <p className="mt-2 text-ink/75">{b.d}</p>
          </div>
        ))}
      </div>

      <SubHead>5.4 Faktor waktu</SubHead>
      <Cite
        source="Gross (2015), TED Talk The single biggest reason why start-ups succeed"
        href="https://www.ted.com/talks/bill_gross_the_single_biggest_reason_why_start_ups_succeed"
      >
        Menurut Bill Gross (2015), pendiri Idealab, analisis terhadap sekitar 200 perusahaan menunjukkan bahwa faktor
        yang paling menentukan keberhasilan startup adalah ketepatan waktu (timing), melampaui ide, tim, model bisnis,
        dan pendanaan.
      </Cite>
      <Para className="mb-8">Oleh karena itu, setiap ide perlu menjawab pertanyaan: mengapa solusi ini baru mungkin dibuat sekarang?</Para>
      <Table
        head={['Dahulu', 'Sekarang']}
        rows={[
          ['Mengenali hama memerlukan ahli yang datang langsung ke sawah.', 'Model AI dapat berjalan di browser ponsel petani.'],
          ['Membuat aplikasi memerlukan tim besar dan waktu berbulan-bulan.', 'Pelajar dapat membuat prototipe dengan bantuan AI dalam waktu singkat.'],
          ['Data hanya dimiliki perusahaan besar.', 'BPS dan banyak lembaga membuka datanya untuk publik.'],
        ]}
      />
      <Margin className="mt-12">A good idea at the wrong time is still the wrong idea.</Margin>

      <KeyPoints
        points={[
          'Bedakan pengguna dan pembayar, karena keduanya dapat merupakan pihak yang berbeda.',
          'Lima model bisnis umum: langganan, komisi, freemium, penjualan ke lembaga, dan iklan.',
          'Lean Canvas merangkum ide dalam sembilan bagian pada satu halaman.',
          'Setiap ide perlu menjawab mengapa waktunya tepat sekarang.',
        ]}
      />
    </Section>
  )
}
