import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { QRCodeSVG } from 'qrcode.react'
import { ExternalLink } from 'lucide-react'
import { ContactLinks } from './Kenalan'
import { REFERENCES, SUMMARY, GLOSSARY } from '../data'

const NEXT = [
  'Catat setidaknya tiga masalah yang ditemui selama satu minggu.',
  'Pilih satu masalah dan gali akarnya dengan teknik 5 Whys.',
  'Wawancarai lima orang yang mengalami masalah tersebut.',
  'Buat versi paling sederhana dari solusinya.',
  'Kembangkan menjadi karya untuk lomba inovasi atau karya tulis tingkat SMA.',
]

const LINE = 'Mulailah dari masalah yang paling dekat. Bisa jadi, itulah awal dari sesuatu yang besar.'

export default function Penutup() {
  const [url, setUrl] = useState('')
  useEffect(() => setUrl(window.location.origin), [])

  return (
    <section id="penutup" data-section className="grid-dark relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <p className="hand text-2xl text-marker">penutup</p>
        <h2 className="display-xl mt-4 max-w-5xl font-extrabold">
          {LINE.split(' ').map((w, k) => (
            <motion.span
              key={k}
              className="mr-[0.22em] inline-block"
              initial={{ opacity: 0.12 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 1 }}
              transition={{ delay: k * 0.09, duration: 0.4 }}
            >
              {w}
            </motion.span>
          ))}
        </h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
          className="hand mt-8 text-3xl text-marker"
        >
          Start small. Start now. Start with a problem you truly care about.
        </motion.p>

        <div className="mt-20 grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="display-md font-bold">Ringkasan materi</h3>
            <ul className="mt-6 space-y-3">
              {SUMMARY.map((x) => (
                <li key={x} className="flex gap-3 text-lg leading-relaxed text-paper/85">
                  <span className="mt-[0.6em] h-2 w-2 shrink-0 rounded-full bg-marker" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="display-md font-bold">Daftar istilah</h3>
            <dl className="mt-6 divide-y-2 divide-white/10">
              {GLOSSARY.map((g) => (
                <div key={g.t} className="grid gap-1 py-3 sm:grid-cols-[9rem_1fr] sm:gap-4">
                  <dt className="font-bold text-marker">{g.t}</dt>
                  <dd className="text-paper/80">{g.d}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h3 className="display-md font-bold">Langkah tindak lanjut</h3>
            <ol className="mt-8 space-y-4">
              {NEXT.map((n, k) => (
                <motion.li
                  key={n}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: k * 0.08 }}
                  className="flex gap-5 border-b-2 border-white/10 pb-4"
                >
                  <span className="text-3xl font-extrabold text-marker tabular-nums">{k + 1}</span>
                  <span className="pt-1 text-xl">{n}</span>
                </motion.li>
              ))}
            </ol>
          </div>
          <div className="flex flex-col items-start gap-5">
            <div className="rounded-[22px] bg-paper p-5">
              {url ? (
                <QRCodeSVG value={url} size={200} fgColor="#0C1236" bgColor="#F2F4F8" level="M" />
              ) : (
                <div className="h-[200px] w-[200px]" />
              )}
            </div>
            <p className="text-lg text-paper/75">
              Pindai kode ini untuk membuka materi melalui ponsel.
            </p>
          </div>
        </div>

        <div className="mt-24">
          <h3 className="display-md font-bold">Terima kasih.</h3>
          <p className="mt-3 max-w-prose text-lg text-paper/75">
            Untuk diskusi lebih lanjut mengenai ide, lomba, atau data science, silakan menghubungi kontak berikut.
          </p>
          <div className="mt-8 max-w-3xl">
            <ContactLinks dark />
          </div>
        </div>

        <div className="mt-24 border-t-2 border-white/10 pt-10">
          <h3 className="text-xl font-bold">Daftar rujukan</h3>
          <ul className="mt-5 space-y-3">
            {REFERENCES.map((r) => (
              <li key={r.text} className="max-w-4xl text-paper/70">
                {r.text}{' '}
                {r.href && (
                  <a href={r.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-marker underline underline-offset-4">
                    tautan <ExternalLink size={13} aria-hidden="true" />
                  </a>
                )}
              </li>
            ))}
          </ul>
          <p className="mt-12 text-sm text-paper/45">
            Dibuat oleh Nazril Ravi Pratama untuk SMA Al Falah Boarding School Darmo, Surabaya, 2026.
          </p>
        </div>
      </div>
    </section>
  )
}
