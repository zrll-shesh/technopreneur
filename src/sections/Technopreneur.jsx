import { motion } from 'framer-motion'
import { Section, ChapterHead, Cite, Margin, Reveal, KeyPoints, SubHead, Para, Table } from '../components/ui'
import { EXAMPLES, LAYERS } from '../data'

export default function Technopreneur() {
  return (
    <Section id="konsep">
      <ChapterHead
        no={1}
        title="Teknologi sebagai alat"
        lead="Technopreneur adalah orang yang memakai teknologi untuk menyelesaikan masalah nyata, lalu memastikan solusinya dapat bertahan. Kata kuncinya: teknologi adalah alat, bukan tujuan."
      />

      <SubHead>1.1 Pengertian</SubHead>
      <Cite source="Bailetti (2012), Technology Innovation Management Review" href="https://timreview.ca/node/520">
        Menurut Bailetti (2012), technology entrepreneurship adalah upaya mengumpulkan orang dan sumber daya yang
        berkaitan erat dengan kemajuan ilmu pengetahuan dan teknologi, dengan tujuan menciptakan sekaligus menangkap
        nilai.
      </Cite>
      <div className="grid max-w-4xl gap-6 sm:grid-cols-2">
        <Reveal className="rounded-[22px] bg-marker p-6">
          <p className="hand text-xl">menciptakan nilai</p>
          <p className="mt-2 text-2xl font-bold">Peran teknologi</p>
          <p className="mt-2 text-lg">Teknologi membuat masalah terselesaikan lebih cepat, lebih akurat, dan untuk lebih banyak orang.</p>
        </Reveal>
        <Reveal delay={0.1} className="rounded-[22px] bg-pine p-6 text-white">
          <p className="hand text-xl text-white/80">menangkap nilai</p>
          <p className="mt-2 text-2xl font-bold">Peran bisnis</p>
          <p className="mt-2 text-lg text-white/85">Bisnis memastikan solusi memiliki sumber daya untuk terus berjalan dan berkembang.</p>
        </Reveal>
      </div>

      <SubHead>1.2 Empat lapisan produk teknologi</SubHead>
      <Para className="mb-8">
        Hampir setiap produk teknologi, sesederhana atau secanggih apa pun, tersusun dari empat lapisan berikut.
        Contohnya diambil dari AIO PestGuard.
      </Para>
      <ol className="grid gap-4 md:grid-cols-4">
        {LAYERS.map((l, k) => (
          <motion.li
            key={l.t}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: k * 0.12 }}
            className="relative flex flex-col rounded-[22px] border-2 border-ink/10 bg-white p-6"
          >
            <span className="text-5xl font-extrabold text-cobalt/25">{k + 1}</span>
            <p className="mt-2 text-xl font-bold">{l.t}</p>
            <p className="mt-2 flex-1 text-ink/75">{l.d}</p>
            <p className="mt-4 rounded-xl bg-paper px-3 py-2 text-sm font-medium">{l.ex}</p>
          </motion.li>
        ))}
      </ol>
      <Para className="mt-8">
        Banyak pemula hanya berfokus pada lapisan kedua, yaitu model. Padahal nilai baru tercipta di lapisan keempat:
        ketika pengguna benar-benar mengambil keputusan yang lebih baik.
      </Para>

      <SubHead>1.3 Mengapa teknologi mengubah skala</SubHead>
      <Para className="mb-8">
        Warung membutuhkan tambahan pegawai untuk melayani lebih banyak pembeli. Sebaliknya, satu model AI atau satu
        aplikasi dapat melayani seribu maupun sejuta pengguna dengan tambahan biaya yang relatif kecil, karena perangkat
        lunak dapat disalin hampir tanpa biaya. Inilah keunggulan utama technopreneur.
      </Para>
      <Table
        head={['Aspek', 'Usaha konvensional', 'Usaha berbasis teknologi']}
        rows={[
          ['Sumber keunggulan', 'Lokasi, harga, dan layanan', 'Inovasi, data, dan kemampuan teknis'],
          ['Cara bertumbuh', 'Menambah pegawai dan cabang', 'Menambah pengguna dengan biaya tambahan yang kecil'],
          ['Aset utama', 'Barang dan tempat usaha', 'Perangkat lunak, data, dan model'],
          ['Contoh', 'Jasa laundry', 'Aplikasi antrean laundry untuk banyak asrama'],
        ]}
      />

      <SubHead>1.4 Contoh dari Indonesia</SubHead>
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
      <Margin className="mt-12">Technology is the how. The problem is the why.</Margin>

      <KeyPoints
        points={[
          'Technopreneurship menggabungkan peran teknologi (menciptakan nilai) dan bisnis (menangkap nilai).',
          'Produk teknologi tersusun dari data, model, aplikasi, dan keputusan pengguna.',
          'Keunggulan teknologi terletak pada kemampuan menjangkau banyak orang dengan biaya tambahan yang kecil.',
        ]}
      />
    </Section>
  )
}
