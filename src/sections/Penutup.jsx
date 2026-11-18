import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { QRCodeSVG } from 'qrcode.react'
import { ExternalLink } from 'lucide-react'
import { ContactLinks } from './Kenalan'
import { REFERENCES } from '../data'

const NEXT = [
  'Foto papan keresahan hari ini, simpan di galeri.',
  'Pilih satu keresahan yang paling bikin penasaran.',
  'Ngobrol dengan 5 orang yang merasakannya minggu ini.',
  'Bikin versi paling sederhana, bahkan cuma Google Form.',
  'Bawa ke lomba inovasi atau karya tulis tingkat SMA.',
]

const LINE = 'Mulai dari yang bikin kamu kesal. Siapa tahu, itu awal dari sesuatu yang besar.'

export default function Penutup() {
  const [url, setUrl] = useState('')
  useEffect(() => setUrl(window.location.origin), [])

  return (
    <section id="penutup" data-section className="grid-dark relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <p className="hand text-2xl text-marker">sebelum pulang</p>
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
          Start small. Start now. Start with a problem you actually care about.
        </motion.p>

        <div className="mt-20 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h3 className="display-md font-bold">Lima hal untuk minggu ini</h3>
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
              Pindai untuk membuka materi ini di HP kalian. Semua alat bantu tadi bisa dipakai lagi kapan saja.
            </p>
          </div>
        </div>

        <div className="mt-24">
          <h3 className="display-md font-bold">Terima kasih sudah belajar bareng.</h3>
          <p className="mt-3 max-w-prose text-lg text-paper/75">
            Kalau suatu hari kalian menemukan ide dan butuh teman diskusi, jangan sungkan menghubungi aku.
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
