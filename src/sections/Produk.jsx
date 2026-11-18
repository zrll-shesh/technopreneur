import { motion } from 'framer-motion'
import { Section, ChapterHead, Margin, KeyPoints, SubHead, Para, Table } from '../components/ui'
import { PIPELINE, LESSONS, PROTO } from '../data'

export default function Produk() {
  return (
    <Section id="produk" dark>
      <ChapterHead
        dark
        no={4}
        title="Dari masalah ke produk teknologi"
        lead="Setelah masalah dirumuskan, langkah berikutnya adalah mengubahnya menjadi solusi yang bekerja. Bab ini membahas alur pengembangan produk berbasis data dan pelajaran teknis dari proyek nyata."
      />

      <SubHead>4.1 Alur pengembangan solusi berbasis data</SubHead>
      <Para dark className="mb-8">Setiap tahap memiliki satu pertanyaan kunci yang harus terjawab sebelum melangkah ke tahap berikutnya.</Para>
      <ol className="relative grid gap-3 border-l-[3px] border-white/15 pl-8">
        {PIPELINE.map((p, k) => (
          <motion.li
            key={p.t}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.4 }}
            className="relative grid gap-1 rounded-2xl bg-white/[0.05] p-5 sm:grid-cols-[13rem_1fr] sm:gap-6"
          >
            <span className="absolute -left-[46px] top-5 grid h-7 w-7 place-items-center rounded-full bg-marker text-sm font-extrabold text-ink">
              {k + 1}
            </span>
            <p className="text-xl font-bold text-marker">{p.t}</p>
            <p className="text-lg text-paper/80">{p.q}</p>
          </motion.li>
        ))}
      </ol>

      <SubHead>4.2 Empat pelajaran teknis dari lapangan</SubHead>
      <div className="grid gap-5 md:grid-cols-2">
        {LESSONS.map((l, k) => (
          <motion.div
            key={l.t}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: (k % 2) * 0.1 }}
            className="rounded-[22px] border-2 border-white/10 p-6 sm:p-7"
          >
            <p className="text-2xl font-extrabold">{l.t}</p>
            <p className="mt-3 text-lg leading-relaxed text-paper/80">{l.d}</p>
          </motion.div>
        ))}
      </div>

      <SubHead>4.3 Kamus metrik</SubHead>
      <Para dark className="mb-8">
        Metrik adalah angka untuk menilai seberapa baik sebuah model bekerja. Berikut arti metrik yang muncul dalam
        materi ini, dijelaskan dengan bahasa sederhana.
      </Para>
      <Table
        dark
        head={['Metrik', 'Arti sederhana', 'Cara membaca', 'Contoh dalam materi']}
        rows={[
          ['Akurasi', 'Persentase tebakan model yang benar.', 'Semakin tinggi semakin baik, tetapi bisa menipu jika data tidak seimbang.', 'IndoRoBERTa 88,2%'],
          ['mAP50', 'Ketepatan model menemukan dan memberi kotak pada objek. Dianggap benar jika kotaknya menutupi objek minimal 50%.', '0 sampai 1, semakin tinggi semakin baik.', 'AIO PestGuard 0,794'],
          ['Calibration error', 'Selisih antara keyakinan model dan kenyataan. Jika model berkata yakin 90%, idealnya benar pada 90% kasus.', 'Semakin mendekati 0 semakin jujur.', 'AIO PestGuard 0,036'],
          ['AUC-ROC', 'Kemampuan model membedakan dua kelompok, misalnya sakit dan sehat.', '0,5 sama dengan menebak acak, 1 berarti sempurna.', 'Deteksi glaukoma 0,9812'],
          ['MAPE', 'Rata-rata persentase meleset dari prediksi angka.', 'Semakin kecil semakin baik. 4% berarti rata-rata meleset sekitar 4%.', 'CIVIC-FOOD AI 4,02%'],
          ['R2', 'Seberapa besar naik turunnya data yang dapat dijelaskan model.', '0 sampai 1. 0,91 berarti model menjelaskan sekitar 91% variasi.', 'CIVIC-FOOD AI 0,91'],
        ]}
      />
      <Para dark className="mt-6">
        Tidak ada satu metrik yang selalu terbaik. Pilih metrik yang paling mencerminkan kerugian di dunia nyata.
        Pada deteksi penyakit, melewatkan pasien sakit jauh lebih berbahaya daripada salah menandai orang sehat.
      </Para>

      <SubHead>4.4 Mulai dari versi paling sederhana</SubHead>
      <Para dark className="mb-8">
        Produk tidak harus langsung dibangun dengan kode penuh. Pilih tingkat yang sesuai dengan pertanyaan yang ingin
        dijawab saat itu.
      </Para>
      <Table dark head={['Tingkat', 'Contoh alat', 'Tujuan']} rows={PROTO} />
      <Margin dark className="mt-12">A model that no one can use is just an experiment.</Margin>

      <KeyPoints
        dark
        points={[
          'Ikuti alur: rumuskan, kumpulkan, siapkan, bangun, evaluasi, jadikan produk, lalu pantau.',
          'Ukur juga ketidakpastian model, periksa kualitas data, dan pilih metrik yang sesuai tujuan pengguna.',
          'Mulai dari prototipe tanpa kode, lalu tingkatkan sesuai kebutuhan.',
        ]}
      />
    </Section>
  )
}
