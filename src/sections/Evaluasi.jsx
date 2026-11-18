import { Section, ChapterHead, Margin, KeyPoints, SubHead, Para, Table } from '../components/ui'
import { RUBRIC, SCORE_BANDS } from '../data'

const MATRIX = [
  { t: 'Proyek besar', d: 'Dampak tinggi, sulit dibuat. Kerjakan bertahap.', cls: 'bg-white' },
  { t: 'Prioritas utama', d: 'Dampak tinggi, mudah dibuat. Kerjakan sekarang.', cls: 'bg-marker' },
  { t: 'Tunda', d: 'Dampak rendah, sulit dibuat. Simpan dahulu.', cls: 'bg-white' },
  { t: 'Kemenangan kecil', d: 'Dampak rendah, mudah dibuat. Cocok untuk latihan.', cls: 'bg-white' },
]

export default function Evaluasi() {
  return (
    <Section id="evaluasi">
      <ChapterHead
        no={7}
        title="Evaluasi ide"
        lead="Seluruh konsep sebelumnya dapat dirangkum menjadi alat evaluasi sederhana. Alat ini membantu membandingkan beberapa ide secara objektif sebelum memilih satu untuk dikembangkan."
      />

      <SubHead>7.1 Rubrik penilaian</SubHead>
      <Para className="mb-8">Berikan skor 1 sampai 5 untuk setiap kriteria. Gunakan deskripsi berikut sebagai acuan.</Para>
      <Table head={['Kriteria', 'Pertanyaan', 'Skor 1', 'Skor 3', 'Skor 5']} rows={RUBRIC.map((r) => [r.c, r.q, r.s1, r.s3, r.s5])} />

      <SubHead>7.2 Interpretasi skor</SubHead>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {SCORE_BANDS.map((b, k) => (
          <div key={b.t} className={`rounded-[22px] p-6 ${['bg-pine text-white', 'bg-cobalt text-white', 'bg-marker', 'bg-rose text-white'][k]}`}>
            <p className="text-sm opacity-80">Total {b.range}</p>
            <p className="mt-1 text-2xl font-extrabold">{b.t}</p>
            <p className="mt-2 opacity-90">{b.d}</p>
          </div>
        ))}
      </div>

      <SubHead>7.3 Matriks dampak dan kemudahan</SubHead>
      <Para className="mb-8">
        Untuk membandingkan beberapa ide, petakan setiap ide berdasarkan dampaknya (rata-rata skor jangkauan,
        frekuensi, dan kerugian) serta kemudahan pembuatannya (skor kelayakan).
      </Para>
      <div className="relative mx-auto max-w-3xl pl-8">
        <div className="grid grid-cols-2 gap-3">
          {MATRIX.map((m) => (
            <div key={m.t} className={`rounded-2xl border-2 border-ink/10 p-6 ${m.cls}`}>
              <p className="text-xl font-bold">{m.t}</p>
              <p className="mt-2 text-ink/75">{m.d}</p>
            </div>
          ))}
        </div>
        <p className="absolute left-0 top-1/2 -translate-x-1/3 -translate-y-1/2 -rotate-90 whitespace-nowrap text-sm text-ink/55">Dampak</p>
        <p className="mt-3 text-center text-sm text-ink/55">Kemudahan dibuat</p>
      </div>
      <Margin className="mt-12">A score won't decide for you. It shows you where to dig deeper.</Margin>

      <KeyPoints
        points={[
          'Nilai ide dengan lima kriteria: jangkauan, frekuensi, kerugian, pihak pembayar, dan kelayakan.',
          'Total skor membantu menentukan langkah berikutnya, bukan menjadi keputusan akhir.',
          'Matriks dampak dan kemudahan membantu memilih prioritas di antara beberapa ide.',
        ]}
      />
    </Section>
  )
}
