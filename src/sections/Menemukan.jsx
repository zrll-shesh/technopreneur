import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Section, ChapterHead, Cite, Margin, KeyPoints, SubHead, Para, Table } from '../components/ui'
import { IDEA_SOURCES, LENSES } from '../data'

function Lens() {
  const places = Object.keys(LENSES)
  const [place, setPlace] = useState(places[0])
  return (
    <div className="rounded-[26px] bg-cobalt p-6 text-white sm:p-10">
      <p className="text-lg text-white/80">Pilih lokasi untuk melihat pertanyaan observasi yang dapat digunakan.</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {places.map((p) => (
          <button
            key={p}
            onClick={() => setPlace(p)}
            aria-pressed={place === p}
            className={`min-h-[44px] rounded-full px-5 font-semibold transition-colors ${place === p ? 'bg-marker text-ink' : 'bg-white/10 hover:bg-white/20'}`}
          >
            {p}
          </button>
        ))}
      </div>
      <ul className="mt-8 grid gap-4 md:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {LENSES[place].map((q, k) => (
            <motion.li
              key={place + k}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: k * 0.06 }}
              className="rounded-2xl bg-white p-5 text-lg font-medium text-ink"
            >
              {q}
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  )
}

export default function Menemukan() {
  return (
    <Section id="sumber-ide">
      <ChapterHead
        no={2}
        title="Dari mana ide yang baik berasal?"
        lead="Kesalahan yang paling sering terjadi saat mencari ide adalah memaksanya muncul. Ide yang kuat umumnya sudah ada di sekitar kita dan menunggu untuk diperhatikan."
      />

      <SubHead>2.1 Ide ditemukan, bukan dipikirkan</SubHead>
      <Cite source="Graham (2012), esai How to Get Startup Ideas" href="https://paulgraham.com/startupideas.html">
        Menurut Paul Graham (2012), pendiri Y Combinator, cara mendapatkan ide startup justru bukan dengan berusaha
        memikirkannya, melainkan dengan mencari masalah, terutama masalah yang kita alami sendiri. Ia merangkumnya
        dalam kalimat: "Live in the future, then build what's missing."
      </Cite>
      <Para className="mb-8">
        Perbedaan dua pendekatan tersebut dapat dilihat pada tabel berikut.
      </Para>
      <Table
        head={['Aspek', 'Memikirkan ide', 'Memperhatikan masalah']}
        rows={[
          ['Titik awal', 'Keinginan membuat sesuatu yang keren', 'Kesulitan nyata yang dialami orang'],
          ['Contoh hasil', 'Media sosial khusus santri, metaverse pesantren', 'Daftar piket berbasis kertas yang sering hilang'],
          ['Risiko', 'Terdengar menarik, tetapi tidak ada yang membutuhkan', 'Terlihat sederhana, sehingga sering diremehkan'],
          ['Pertanyaan kunci', '"Aplikasi apa yang bisa saya buat?"', '"Siapa yang kesulitan, dan mengapa?"'],
        ]}
      />

      <SubHead>2.2 Lima sumber ide</SubHead>
      <Para className="mb-8">Setiap sumber disertai pertanyaan pemantik yang dapat digunakan untuk latihan observasi.</Para>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {IDEA_SOURCES.map((s) => (
          <div key={s.title} className="flex flex-col rounded-[22px] border-2 border-ink/10 bg-white p-6">
            <h4 className="text-2xl font-extrabold">{s.title}</h4>
            <p className="mt-3 flex-1 text-lg leading-relaxed text-ink/80">{s.body}</p>
            <p className="mt-5 rounded-xl bg-marker px-4 py-3 font-medium">{s.ask}</p>
          </div>
        ))}
      </div>

      <SubHead>2.3 Waspadai schlep blindness</SubHead>
      <Cite source="Graham (2012), esai Schlep Blindness" href="https://paulgraham.com/schlep.html">
        Menurut Graham (2012), manusia cenderung tanpa sadar menghindari masalah yang tampak rumit dan membosankan.
        Ia menyebut kecenderungan ini schlep blindness. Akibatnya, peluang besar sering terlewat karena banyak orang
        enggan menyentuhnya.
      </Cite>
      <Para>
        Contohnya adalah Stripe. Pengelolaan pembayaran daring dikenal rumit karena melibatkan regulasi perbankan dan
        banyak pihak. Justru karena banyak yang menghindarinya, perusahaan yang bersedia menangani kerumitan tersebut
        tumbuh menjadi sangat besar.
      </Para>

      <SubHead>2.4 Keunggulan orang dalam</SubHead>
      <div className="rounded-[26px] bg-ink p-8 text-paper sm:p-10">
        <p className="max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl">
          Perusahaan besar tidak memahami kehidupan asrama sedalam para santri yang menjalaninya setiap hari.
        </p>
        <p className="mt-6 max-w-prose text-lg leading-relaxed text-paper/75">
          Kedekatan dengan masalah disebut insider advantage. Detail kecil seperti antrean kamar mandi saat subuh atau
          sandal yang tertukar di masjid tidak akan muncul di ruang rapat perusahaan, tetapi sangat dipahami oleh
          orang yang mengalaminya.
        </p>
      </div>

      <SubHead>2.5 Latihan observasi</SubHead>
      <Lens />
      <Margin className="mt-12">You don't need to be the smartest person in the room. You need to be the closest to the problem.</Margin>

      <KeyPoints
        points={[
          'Ide yang kuat lahir dari memperhatikan masalah, bukan dari memaksakan kreativitas.',
          'Lima sumber ide: keresahan pribadi, proses manual, keluhan orang lain, perkembangan teknologi, dan data.',
          'Masalah yang rumit dan membosankan sering menyimpan peluang besar.',
          'Kedekatan dengan masalah adalah keunggulan yang tidak dapat dibeli.',
        ]}
      />
    </Section>
  )
}
