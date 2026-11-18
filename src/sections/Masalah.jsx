import { motion } from 'framer-motion'
import { Section, ChapterHead, Cite, Margin, KeyPoints, SubHead, Para, Table } from '../components/ui'
import { IDEA_SOURCES, PK_TABLE, WHY_DEMO } from '../data'

export default function Masalah() {
  return (
    <Section id="masalah">
      <ChapterHead
        no={3}
        title="Menemukan masalah yang tepat"
        lead="Teknologi sehebat apa pun akan sia-sia jika dipakai untuk masalah yang salah. Bab ini membahas cara menemukan masalah, menilai kelayakannya, dan merumuskannya agar siap diselesaikan dengan teknologi."
      />

      <SubHead>3.1 Mulai dari masalah, bukan dari teknologi</SubHead>
      <Cite source="Graham (2012), esai How to Get Startup Ideas" href="https://paulgraham.com/startupideas.html">
        Menurut Paul Graham (2012), pendiri Y Combinator, cara mendapatkan ide startup justru bukan dengan berusaha
        memikirkannya, melainkan dengan mencari masalah, terutama masalah yang dialami sendiri. Ia merangkumnya dalam
        kalimat: "Live in the future, then build what's missing."
      </Cite>
      <Table
        head={['Aspek', 'Mulai dari teknologi', 'Mulai dari masalah']}
        rows={[
          ['Pertanyaan awal', '"Apa yang bisa saya buat dengan AI?"', '"Siapa yang kesulitan, dan mengapa?"'],
          ['Contoh hasil', 'Chatbot serba bisa untuk sekolah', 'Pengingat setoran hafalan untuk santri yang sering tertinggal'],
          ['Risiko', 'Canggih, tetapi tidak ada yang membutuhkan', 'Tampak sederhana sehingga sering diremehkan'],
        ]}
      />

      <SubHead>3.2 Lima sumber masalah</SubHead>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {IDEA_SOURCES.map((s) => (
          <div key={s.title} className="flex flex-col rounded-[22px] border-2 border-ink/10 bg-white p-6">
            <h4 className="text-xl font-extrabold">{s.title}</h4>
            <p className="mt-3 flex-1 leading-relaxed text-ink/80">{s.body}</p>
            <p className="mt-4 rounded-xl bg-marker px-4 py-3 text-sm font-medium">{s.ask}</p>
          </div>
        ))}
      </div>
      <Para className="mt-8">
        Kedekatan dengan masalah adalah keunggulan yang tidak dapat dibeli. Santri memahami detail kehidupan asrama
        yang tidak akan pernah muncul di ruang rapat perusahaan teknologi besar.
      </Para>

      <SubHead>3.3 Painkiller atau vitamin</SubHead>
      <Para className="mb-8">
        Painkiller adalah solusi yang harus ada karena menghilangkan rasa sakit yang nyata. Vitamin menyenangkan bila
        ada, tetapi tidak dicari ketika tidak ada. Produk teknologi yang bernilai bisnis umumnya berbentuk painkiller.
      </Para>
      <Table head={['Aspek', 'Painkiller', 'Vitamin']} rows={PK_TABLE.map((r) => [r.aspect, r.pk, r.vit])} />

      <SubHead>3.4 Menggali akar masalah dengan 5 Whys</SubHead>
      <Para className="mb-8">
        Teknik ini, yang dipopulerkan dalam sistem produksi Toyota, menggali akar masalah dengan bertanya "mengapa?"
        secara berulang. Akar masalah sering kali menunjukkan di mana teknologi paling berperan.
      </Para>
      <div className="rounded-[26px] border-2 border-ink/10 bg-white p-6 sm:p-8">
        <p className="text-ink/60">Masalah yang terlihat</p>
        <p className="mt-1 text-2xl font-extrabold sm:text-3xl">{WHY_DEMO.problem}</p>
        <ol className="mt-6 space-y-3">
          {WHY_DEMO.chain.map((c, k) => (
            <motion.li
              key={k}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ delay: k * 0.12 }}
              className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4"
              style={{ paddingLeft: `${k * 14}px` }}
            >
              <span className="hand shrink-0 text-lg text-cobalt">mengapa? {k + 1}</span>
              <span className="rounded-xl bg-paper px-4 py-2 text-lg">{c}</span>
            </motion.li>
          ))}
        </ol>
        <p className="mt-6 rounded-2xl bg-marker p-5 text-lg font-semibold">{WHY_DEMO.insight}</p>
      </div>

      <SubHead>3.5 Merumuskan pernyataan masalah</SubHead>
      <div className="rounded-[26px] bg-ink p-6 text-paper sm:p-10">
        <p className="text-paper/60">Templat</p>
        <p className="mt-2 text-2xl font-bold leading-snug sm:text-3xl">
          <span className="text-marker">[Siapa]</span> mengalami kesulitan <span className="text-marker">[apa]</span>, karena{' '}
          <span className="text-marker">[akar masalah]</span>, sehingga <span className="text-marker">[kerugian]</span>.
        </p>
        <p className="mt-8 text-paper/60">Contoh</p>
        <p className="mt-2 max-w-3xl text-xl leading-relaxed">
          Petani bawang merah kesulitan mengenali serangan hama sejak dini, karena tidak ada ahli yang dapat dihubungi
          dengan cepat, sehingga serangan baru diketahui setelah tanaman rusak.
        </p>
      </div>
      <Margin className="mt-12">Fall in love with the problem, not with your solution.</Margin>

      <KeyPoints
        points={[
          'Mulailah dari masalah nyata, bukan dari teknologi yang ingin dipakai.',
          'Prioritaskan masalah bertipe painkiller: mendesak, rutin, dan merugikan.',
          'Gunakan 5 Whys untuk menemukan akar masalah, lalu rumuskan dalam satu kalimat.',
        ]}
      />
    </Section>
  )
}
