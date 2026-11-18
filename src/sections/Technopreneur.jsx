import { Section, ChapterHead, Cite, Margin, Reveal, KeyPoints, SubHead, Para, Table } from '../components/ui'
import { EXAMPLES } from '../data'

const PARTS = [
  { label: 'Masalah nyata', color: 'bg-marker text-ink', role: 'Menjadi alasan solusi dibutuhkan.', missing: 'Teknologi canggih yang tidak digunakan siapa pun.' },
  { label: 'Teknologi yang tepat', color: 'bg-cobalt text-white', role: 'Menjadi cara menyelesaikan masalah secara efisien dan luas.', missing: 'Usaha konvensional yang sulit menjangkau banyak orang dengan cepat.' },
  { label: 'Model bisnis', color: 'bg-pine text-white', role: 'Menjadi sumber daya agar solusi terus berjalan.', missing: 'Proyek yang berhenti ketika dana dan tenaga pembuatnya habis.' },
]

const TRAITS = [
  { t: 'Peka terhadap masalah', d: 'Terbiasa memperhatikan hal yang menyulitkan orang di sekitarnya.' },
  { t: 'Berpikir berbasis data', d: 'Mengambil keputusan dari bukti, bukan sekadar perasaan.' },
  { t: 'Berani bereksperimen', d: 'Menguji ide dalam skala kecil dan belajar dari hasilnya.' },
  { t: 'Terus belajar', d: 'Mengikuti perkembangan teknologi yang relevan dengan masalahnya.' },
  { t: 'Berorientasi manfaat', d: 'Mengukur keberhasilan dari perubahan yang dirasakan pengguna.' },
]

export default function Technopreneur() {
  return (
    <Section id="konsep">
      <ChapterHead
        no={1}
        title="Konsep dasar technopreneurship"
        lead="Istilah technopreneur merupakan gabungan dari kata technology dan entrepreneur. Secara sederhana, technopreneur adalah wirausahawan yang menjadikan teknologi sebagai alat utama untuk menyelesaikan masalah dan menciptakan nilai."
      />

      <SubHead>1.1 Pengertian</SubHead>
      <Cite source="Bailetti (2012), Technology Innovation Management Review" href="https://timreview.ca/node/520">
        Menurut Bailetti (2012), technology entrepreneurship adalah upaya mengumpulkan orang dan sumber daya yang
        berkaitan erat dengan kemajuan ilmu pengetahuan dan teknologi, dengan tujuan menciptakan sekaligus menangkap
        nilai.
      </Cite>
      <Para>
        Definisi tersebut memuat dua kata kunci yang menjadi dasar seluruh materi ini. Keduanya harus hadir bersamaan:
        solusi yang bermanfaat tetapi tidak berkelanjutan akan berhenti di tengah jalan, sedangkan usaha yang
        menghasilkan tetapi tidak bermanfaat tidak akan bertahan lama.
      </Para>
      <div className="mt-8 grid max-w-4xl gap-6 sm:grid-cols-2">
        <Reveal className="rounded-[22px] bg-marker p-6">
          <p className="hand text-xl">menciptakan nilai</p>
          <p className="mt-2 text-2xl font-bold">Dampak</p>
          <p className="mt-2 text-lg">Kehidupan pengguna menjadi lebih mudah, lebih aman, atau lebih baik.</p>
        </Reveal>
        <Reveal delay={0.1} className="rounded-[22px] bg-pine p-6 text-white">
          <p className="hand text-xl text-white/80">menangkap nilai</p>
          <p className="mt-2 text-2xl font-bold">Nilai bisnis</p>
          <p className="mt-2 text-lg text-white/85">Solusi menghasilkan pendapatan sehingga dapat terus berjalan dan berkembang.</p>
        </Reveal>
      </div>

      <SubHead>1.2 Entrepreneur dan technopreneur</SubHead>
      <Para className="mb-8">
        Keduanya sama-sama penting bagi perekonomian. Perbedaannya terletak pada cara nilai diciptakan dan
        disebarluaskan.
      </Para>
      <Table
        head={['Aspek', 'Entrepreneur', 'Technopreneur']}
        rows={[
          ['Fokus utama', 'Menyediakan produk atau jasa bagi pelanggan', 'Menyelesaikan masalah dengan memanfaatkan teknologi'],
          ['Sumber keunggulan', 'Lokasi, harga, layanan, dan jaringan', 'Inovasi, data, dan kemampuan teknis'],
          ['Cara bertumbuh', 'Seiring bertambahnya tenaga kerja dan cabang', 'Dapat menjangkau banyak orang tanpa kenaikan biaya yang sebanding'],
          ['Contoh', 'Toko kelontong, katering, jasa laundry', 'Aplikasi antrean laundry, platform belajar daring'],
        ]}
      />

      <SubHead>1.3 Tiga unsur utama</SubHead>
      <Para className="mb-8">Sebuah solusi technopreneurship yang utuh memerlukan tiga unsur berikut.</Para>
      <div className="grid gap-5 md:grid-cols-3">
        {PARTS.map((p, k) => (
          <Reveal key={p.label} delay={k * 0.1}>
            <div className="flex h-full flex-col overflow-hidden rounded-[22px] border-2 border-ink/10 bg-white">
              <p className={`px-6 py-5 text-xl font-bold ${p.color}`}>{p.label}</p>
              <div className="flex flex-1 flex-col gap-4 p-6">
                <p className="text-lg">{p.role}</p>
                <p className="mt-auto border-t-2 border-dashed border-ink/10 pt-4 text-ink/70">
                  <span className="font-semibold text-rose">Tanpa unsur ini: </span>
                  {p.missing}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <SubHead>1.4 Karakteristik technopreneur</SubHead>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {TRAITS.map((t) => (
          <div key={t.t} className="border-t-[5px] border-cobalt pt-4">
            <p className="text-xl font-bold">{t.t}</p>
            <p className="mt-2 text-ink/75">{t.d}</p>
          </div>
        ))}
      </div>

      <SubHead>1.5 Contoh dari Indonesia</SubHead>
      <Para className="mb-8">Tiga perusahaan berikut tidak dimulai dari teknologi yang canggih, melainkan dari masalah yang jelas.</Para>
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
      <Margin className="mt-12">None of them started with a fancy app. They started with a problem.</Margin>

      <KeyPoints
        points={[
          'Technopreneurship bertujuan menciptakan nilai (dampak) dan menangkap nilai (bisnis) secara bersamaan.',
          'Unsur utamanya adalah masalah nyata, teknologi yang tepat, dan model bisnis.',
          'Keunggulan technopreneur terletak pada kemampuan menjangkau banyak orang secara efisien.',
        ]}
      />
    </Section>
  )
}
