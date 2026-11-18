import { Section, ChapterHead, Margin, KeyPoints, SubHead, Para, Table } from '../components/ui'
import { MARKETS, PAYER_EXAMPLES, REVENUE } from '../data'

export default function Bisnis() {
  return (
    <Section id="bisnis">
      <ChapterHead
        no={5}
        title="Model bisnis produk teknologi"
        lead="Bagian bisnis menjawab satu pertanyaan sederhana: siapa yang akan membiayai teknologi ini agar tetap berjalan? Jawabannya menentukan cara produk dirancang, dijual, dan dikembangkan."
      />

      <SubHead>5.1 Pengguna belum tentu pembayar</SubHead>
      <Para className="mb-8">
        Pihak yang memakai produk sering kali berbeda dengan pihak yang membayarnya. Kesalahan menebak pembayar adalah
        salah satu penyebab produk teknologi yang bagus tidak pernah menghasilkan.
      </Para>
      <Table head={['Produk', 'Pengguna', 'Pembayar']} rows={PAYER_EXAMPLES.map((p) => [p.name, p.user, p.payer])} />

      <SubHead>5.2 Empat jenis pasar: B2C, B2B, B2G, dan B2B2C</SubHead>
      <Para className="mb-8">
        Istilah ini menunjukkan kepada siapa produk dijual. Setiap jenis memiliki karakter yang sangat berbeda,
        sehingga strategi pengembangan teknologinya pun berbeda.
      </Para>
      <Table head={['Jenis', 'Pembeli', 'Jumlah pembeli', 'Nilai transaksi', 'Proses penjualan', 'Contoh']} rows={MARKETS} />
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {[
          { t: 'B2C menuntut kemudahan', d: 'Individu akan berhenti memakai jika aplikasinya rumit. Antarmuka dan kecepatan menjadi prioritas teknis.' },
          { t: 'B2B menuntut integrasi', d: 'Perusahaan ingin produk menyatu dengan sistem yang sudah ada, misalnya aplikasi kasir atau basis data.' },
          { t: 'B2G menuntut akuntabilitas', d: 'Pemerintah membutuhkan hasil yang dapat dijelaskan dan dipertanggungjawabkan. Explainable AI menjadi sangat penting.' },
        ].map((x) => (
          <div key={x.t} className="border-t-[5px] border-cobalt pt-4">
            <p className="text-xl font-bold">{x.t}</p>
            <p className="mt-2 text-ink/75">{x.d}</p>
          </div>
        ))}
      </div>

      <SubHead>5.3 Model pendapatan</SubHead>
      <Table head={['Model', 'Cara kerja', 'Contoh']} rows={REVENUE} />

      <SubHead>5.4 Hitungan sederhana yang sering terlupa</SubHead>
      <div className="rounded-[26px] bg-ink p-6 text-paper sm:p-10">
        <p className="max-w-3xl text-2xl font-bold leading-snug sm:text-3xl">
          Biaya mendapatkan satu pelanggan harus lebih kecil daripada uang yang dihasilkan pelanggan tersebut selama
          ia memakai produk.
        </p>
        <p className="mt-6 max-w-prose text-lg leading-relaxed text-paper/75">
          Dalam istilah bisnis, perbandingan ini disebut CAC (customer acquisition cost) dan LTV (lifetime value). Jika
          biaya promosi untuk satu warung Rp300.000, sedangkan warung hanya berlangganan tiga bulan dengan biaya
          Rp49.000 per bulan, setiap pelanggan justru merugikan. Pengguna yang banyak tidak menjamin bisnis yang sehat.
        </p>
      </div>
      <Margin className="mt-12">Users tell you if it's useful. Payers tell you if it's a business.</Margin>

      <KeyPoints
        points={[
          'Bedakan pengguna dan pembayar sejak awal perancangan.',
          'B2C, B2B, B2G, dan B2B2C memiliki jumlah pembeli, nilai transaksi, dan proses penjualan yang berbeda.',
          'Pastikan biaya mendapatkan pelanggan lebih kecil daripada nilai yang dihasilkan pelanggan.',
        ]}
      />
    </Section>
  )
}
