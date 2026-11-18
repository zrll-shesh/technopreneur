import { motion } from 'framer-motion'
import { Section, ChapterHead, Margin, KeyPoints, SubHead, Para, Table } from '../components/ui'
import { PK_TABLE, PK_EXAMPLES, PROBLEM_TRAITS, WHY_DEMO } from '../data'

export default function Masalah() {
  return (
    <Section id="masalah">
      <ChapterHead
        no={3}
        title="Masalah yang layak diselesaikan"
        lead="Tidak semua masalah layak dijadikan dasar sebuah usaha. Bab ini membahas cara membedakan masalah yang bernilai, menemukan akarnya, dan merumuskannya dengan jelas."
      />

      <SubHead>3.1 Painkiller dan vitamin</SubHead>
      <Para className="mb-8">
        Dalam dunia startup, solusi sering diibaratkan sebagai obat. Painkiller (pereda nyeri) adalah solusi yang harus
        ada karena menghilangkan rasa sakit yang nyata. Vitamin adalah solusi yang menyenangkan bila ada, tetapi tidak
        dicari ketika tidak ada. Ide yang memiliki nilai bisnis umumnya berbentuk painkiller.
      </Para>
      <Table head={['Aspek', 'Painkiller', 'Vitamin']} rows={PK_TABLE.map((r) => [r.aspect, r.pk, r.vit])} />
      <Para className="mb-6 mt-10">Contoh penerapannya:</Para>
      <Table
        head={['Ide', 'Jenis', 'Alasan']}
        rows={PK_EXAMPLES.map((e) => [
          e.idea,
          <span key={e.idea} className={`inline-block rounded-full px-3 py-1 text-sm font-bold ${e.type === 'Painkiller' ? 'bg-rose/15 text-rose' : 'bg-pine/15 text-pine'}`}>{e.type}</span>,
          e.why,
        ])}
      />
      <Margin className="mt-10">People pay for painkillers. They only think about buying vitamins.</Margin>

      <SubHead>3.2 Empat ciri masalah bernilai</SubHead>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {PROBLEM_TRAITS.map((t) => (
          <div key={t.t} className="rounded-[22px] border-2 border-ink/10 bg-white p-6">
            <p className="text-xl font-bold">{t.t}</p>
            <p className="mt-2 text-ink/75">{t.d}</p>
          </div>
        ))}
      </div>

      <SubHead>3.3 Menemukan akar masalah dengan 5 Whys</SubHead>
      <Para className="mb-8">
        Masalah yang pertama terlihat sering kali hanya gejala. Teknik 5 Whys, yang dipopulerkan dalam sistem produksi
        Toyota, membantu menggali akar masalah dengan bertanya "mengapa?" secara berulang hingga jawabannya tidak dapat
        digali lebih jauh. Berikut contoh penerapannya.
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

      <SubHead>3.4 Merumuskan pernyataan masalah</SubHead>
      <Para className="mb-8">
        Setelah akar masalah ditemukan, rumuskan dalam satu kalimat yang jelas. Rumusan ini menjadi pegangan agar
        solusi tetap fokus.
      </Para>
      <div className="rounded-[26px] bg-ink p-6 text-paper sm:p-10">
        <p className="text-paper/60">Templat</p>
        <p className="mt-2 text-2xl font-bold leading-snug sm:text-3xl">
          <span className="text-marker">[Siapa]</span> mengalami kesulitan <span className="text-marker">[apa]</span>, karena{' '}
          <span className="text-marker">[akar masalah]</span>, sehingga <span className="text-marker">[kerugian]</span>.
        </p>
        <p className="mt-8 text-paper/60">Contoh</p>
        <p className="mt-2 max-w-3xl text-xl leading-relaxed">
          Santri putra kelas 10 kesulitan mendapatkan giliran mesin cuci, karena seluruh penghuni mencuci pada waktu yang
          sama tanpa jadwal, sehingga waktu belajar berkurang hingga satu jam setiap pekan.
        </p>
      </div>

      <KeyPoints
        points={[
          'Prioritaskan masalah bertipe painkiller: mendesak, rutin, dan merugikan.',
          'Masalah bernilai bersifat sering terjadi, mendesak, merugikan, dan pihak terdampaknya jelas.',
          'Gunakan 5 Whys untuk membedakan gejala dari akar masalah.',
          'Rumuskan masalah dalam satu kalimat: siapa, kesulitan apa, karena apa, dan kerugiannya.',
        ]}
      />
    </Section>
  )
}
