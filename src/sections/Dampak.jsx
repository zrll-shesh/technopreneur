import { Section, ChapterHead, Cite, Margin, Reveal, KeyPoints, SubHead, Para, Table } from '../components/ui'

const QUADS = [
  { name: 'Dalam', desc: 'Sedikit orang, perubahan besar.', ex: 'Pengingat obat untuk lansia', cls: 'bg-white' },
  { name: 'Lebar dan dalam', desc: 'Banyak orang, perubahan besar.', ex: 'Layanan transportasi daring', cls: 'bg-marker' },
  { name: 'Belum terasa', desc: 'Sedikit orang, perubahan kecil.', ex: 'Tema tampilan grup kelas', cls: 'bg-white' },
  { name: 'Lebar', desc: 'Banyak orang, perubahan kecil.', ex: 'Filter foto media sosial', cls: 'bg-white' },
]

export default function Dampak() {
  return (
    <Section id="dampak">
      <ChapterHead
        no={4}
        title="Mengukur dampak"
        lead="Dampak (impact) adalah perubahan nyata yang dirasakan pengguna setelah masalahnya terselesaikan. Konsep ini sejalan dengan nilai yang telah lama dipelajari."
      />

      <Reveal>
        <figure className="rounded-[26px] bg-pine p-8 text-white sm:p-12">
          <p className="text-3xl font-bold leading-snug sm:text-4xl">Khairunnas anfa'uhum linnas.</p>
          <p className="mt-4 max-w-prose text-xl text-white/90">
            Sebaik-baik manusia adalah yang paling bermanfaat bagi manusia lain.
          </p>
          <figcaption className="mt-4 text-white/70">HR. Ahmad dan Ath-Thabrani</figcaption>
        </figure>
      </Reveal>

      <SubHead>4.1 Dua dimensi dampak</SubHead>
      <Para className="mb-8">
        Dampak dapat dilihat dari dua dimensi. Jangkauan (lebar) menunjukkan berapa banyak orang yang terbantu.
        Kedalaman menunjukkan seberapa besar perubahan yang dirasakan setiap orang. Keduanya sama-sama bernilai.
      </Para>
      <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div className="relative">
          <div className="grid grid-cols-2 gap-3">
            {QUADS.map((q) => (
              <div key={q.name} className={`aspect-[5/4] rounded-2xl border-2 border-ink/10 p-5 ${q.cls}`}>
                <p className="text-xl font-bold">{q.name}</p>
                <p className="mt-1 text-ink/70">{q.desc}</p>
                <p className="hand mt-3 text-lg text-cobalt">{q.ex}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-center text-sm text-ink/55">Sumbu mendatar: jangkauan. Sumbu tegak: kedalaman perubahan.</p>
        </div>
        <Para>
          Banyak startup besar justru memulai dari kuadran "dalam": melayani sekelompok kecil pengguna dengan sangat
          baik, kemudian memperluas jangkauan. Ide di kuadran "lebar" perlu diwaspadai karena sering kali berupa
          vitamin.
        </Para>
      </div>

      <SubHead>4.2 Tiga pertanyaan pengukur dampak</SubHead>
      <div className="grid gap-5 md:grid-cols-3">
        {[
          { q: 'Siapa yang terbantu?', d: 'Sebutkan secara spesifik. Jawaban "semua orang" menandakan rumusan yang belum tajam.' },
          { q: 'Seberapa sering?', d: 'Masalah harian memberikan dampak yang jauh lebih terasa daripada masalah tahunan.' },
          { q: 'Apa akibatnya jika dibiarkan?', d: 'Semakin jelas kerugian waktu, uang, kesehatan, atau kesempatan, semakin besar dampaknya.' },
        ].map((x, k) => (
          <div key={x.q} className="border-t-[5px] border-cobalt pt-5">
            <p className="text-sm text-ink/55">Pertanyaan {k + 1}</p>
            <p className="mt-1 text-2xl font-bold">{x.q}</p>
            <p className="mt-3 text-lg text-ink/75">{x.d}</p>
          </div>
        ))}
      </div>

      <SubHead>4.3 Indikator dampak</SubHead>
      <Para className="mb-8">Dampak sebaiknya dinyatakan dengan indikator yang dapat diukur, bukan hanya klaim.</Para>
      <Table
        head={['Jenis indikator', 'Contoh pengukuran']}
        rows={[
          ['Waktu', 'Waktu antre laundry berkurang dari 60 menit menjadi 10 menit'],
          ['Biaya', 'Kerugian gagal panen petani menurun'],
          ['Penggunaan', 'Jumlah santri yang memakai layanan setiap minggu'],
          ['Perilaku', 'Persentase setoran hafalan yang tepat waktu meningkat'],
        ]}
      />

      <SubHead>4.4 Menghubungkan dengan SDGs</SubHead>
      <Cite source="United Nations (2015), Agenda 2030 for Sustainable Development" href="https://sdgs.un.org/goals">
        Menurut Perserikatan Bangsa-Bangsa (2015), Agenda 2030 memuat 17 Tujuan Pembangunan Berkelanjutan (SDGs) yang
        menjadi kerangka bersama negara-negara dunia untuk mengatasi kemiskinan, ketimpangan, dan krisis lingkungan.
      </Cite>
      <Para>
        Mengaitkan ide dengan SDGs membantu menunjukkan relevansinya secara lebih luas. Misalnya, AI deteksi hama
        mendukung SDG 2 (Tanpa Kelaparan), aplikasi belajar mendukung SDG 4 (Pendidikan Berkualitas), dan pengingat
        obat mendukung SDG 3 (Kehidupan Sehat dan Sejahtera).
      </Para>
      <Margin className="mt-12">Impact isn't about how big your idea sounds. It's about how much someone's life actually changes.</Margin>

      <KeyPoints
        points={[
          'Dampak diukur dari jangkauan (berapa banyak orang) dan kedalaman (seberapa besar perubahan).',
          'Gunakan tiga pertanyaan: siapa yang terbantu, seberapa sering, dan apa akibatnya jika dibiarkan.',
          'Nyatakan dampak dengan indikator terukur dan kaitkan dengan SDGs bila relevan.',
        ]}
      />
    </Section>
  )
}
