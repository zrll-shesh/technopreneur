import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useInView, animate } from 'framer-motion'
import { Globe, Linkedin, Mail, MessageCircle, X } from 'lucide-react'
import { Section, Margin, Reveal, Scribble } from '../components/ui'
import { CONTACT, PHOTOS, STATS, TIMELINE } from '../data'

function Counter({ value, decimals = 0, prefix = '', suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!inView) return
    const c = animate(0, value, {
      duration: 1.6,
      ease: [0.2, 0.7, 0.2, 1],
      onUpdate: (v) => setN(v),
    })
    return () => c.stop()
  }, [inView, value])
  const shown = decimals ? n.toFixed(decimals) : Math.round(n).toLocaleString('id-ID')
  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {shown}
      {suffix}
    </span>
  )
}

export function ContactLinks({ dark = false }) {
  const items = [
    { href: CONTACT.portfolio, icon: Globe, label: 'Portofolio', sub: 'nazrilravipratama.vercel.app' },
    { href: CONTACT.whatsapp, icon: MessageCircle, label: 'WhatsApp', sub: CONTACT.whatsappLabel },
    { href: CONTACT.linkedin, icon: Linkedin, label: 'LinkedIn', sub: 'in/nazrilravipratama' },
    { href: `mailto:${CONTACT.email}`, icon: Mail, label: 'Email', sub: CONTACT.email },
  ]
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map(({ href, icon: Icon, label, sub }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          className={`group flex items-center gap-4 rounded-2xl border-2 p-4 transition-colors ${dark ? 'border-white/15 hover:border-marker' : 'border-ink/10 bg-white hover:border-cobalt'}`}
        >
          <span
            className={`grid h-11 w-11 shrink-0 place-items-center rounded-full transition-colors ${dark ? 'bg-white/10 text-marker group-hover:bg-marker group-hover:text-ink' : 'bg-mist text-cobalt group-hover:bg-cobalt group-hover:text-white'}`}
          >
            <Icon size={20} aria-hidden="true" />
          </span>
          <span className="min-w-0">
            <span className="block font-semibold">{label}</span>
            <span className={`block truncate text-sm ${dark ? 'text-paper/60' : 'text-ink/55'}`}>{sub}</span>
          </span>
        </a>
      ))}
    </div>
  )
}

function Polaroid({ photo, index, onOpen }) {
  return (
    <motion.button
      layoutId={`photo-${index}`}
      onClick={() => onOpen(index)}
      initial={{ opacity: 0, y: 40, rotate: 0 }}
      whileInView={{ opacity: 1, y: 0, rotate: photo.rotate }}
      whileHover={{ rotate: 0, scale: 1.03, zIndex: 10 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ type: 'spring', stiffness: 140, damping: 16, delay: (index % 3) * 0.08 }}
      className={`relative block w-full bg-white p-3 pb-4 text-left shadow-[0_14px_30px_rgba(12,18,54,0.14)] ${photo.wide ? 'col-span-2' : ''}`}
      aria-label={`Perbesar foto: ${photo.caption}`}
    >
      <span className="absolute -top-3 left-1/2 z-10 h-6 w-16 -translate-x-1/2 -rotate-3 bg-marker/80" aria-hidden="true" />
      <img
        src={photo.src}
        alt={photo.alt}
        loading="lazy"
        className={`w-full object-cover ${photo.wide ? 'aspect-[16/9]' : 'aspect-[3/4]'}`}
      />
      <p className="hand mt-3 text-[1.05rem] leading-snug text-ink/80">{photo.caption}</p>
    </motion.button>
  )
}

export default function Kenalan() {
  const [open, setOpen] = useState(null)

  useEffect(() => {
    if (open === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <Section id="kenalan">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <div>
          <p className="hand mb-4 text-2xl text-cobalt">sebelum mulai, kenalan dulu</p>
          <h2 className="display-lg font-extrabold">Halo, aku Nazril.</h2>
          <Scribble className="mt-3 h-4 w-48" />
          <div className="mt-8 max-w-prose space-y-5 text-lg leading-relaxed text-ink/80">
            <p>
              Nama lengkapku Nazril Ravi Pratama. Aku mahasiswa Sains Data semester 5 di Universitas Negeri Surabaya,
              International Undergraduate Program. Sehari-hari aku berkutat dengan data dan AI: magang sebagai AI
              Engineer di PT Aigra EON Indonesia yang membangun AI untuk pertanian, sekaligus jadi peneliti di Big Data
              Lab Analysis.
            </p>
            <p>
              Di luar itu, aku lumayan sering ikut lomba. Sejauh ini ada 35 lebih prestasi nasional dan internasional,
              dari data mining, analitik, sampai esai. Tapi jujur, yang paling ingin aku bagikan hari ini bukan
              daftar pialanya. Yang ingin aku bagikan adalah pola di baliknya: hampir semua karya yang pernah aku bikin
              berawal dari satu hal sederhana, yaitu keresahan.
            </p>
            <p>
              Aku juga pernah jadi asisten dosen, fasilitator komunitas data science, dan pembicara di beberapa kampus.
              Jadi anggap saja hari ini aku kakak kelas yang kebetulan jalan beberapa langkah lebih dulu.
            </p>
          </div>
          <Margin className="mt-8">
            I'm not here as someone who has it all figured out. I'm here as someone who's still learning, just a
            few steps ahead.
          </Margin>
          <div className="mt-10">
            <p className="mb-4 font-semibold">Mau tanya-tanya setelah kelas? Hubungi aku di sini.</p>
            <ContactLinks />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5 self-start sm:gap-7">
          {PHOTOS.map((p, k) => (
            <Polaroid key={p.src} photo={p} index={k} onOpen={setOpen} />
          ))}
        </div>
      </div>

      {/* Angka */}
      <div className="mt-24 grid gap-px overflow-hidden rounded-[22px] border-2 border-ink bg-ink sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((s, k) => (
          <Reveal key={k} delay={k * 0.08} className="h-full">
            <div className="flex h-full flex-col justify-between gap-6 bg-paper p-6">
              <p className={`font-extrabold tracking-tight ${s.compact ? 'text-3xl' : 'text-5xl'}`}>
                <Counter value={s.value} decimals={s.decimals} prefix={s.prefix} suffix={s.suffix} />
              </p>
              <p className="text-ink/65">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Jejak */}
      <div className="mt-24 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h3 className="display-md font-bold">Jejak singkat</h3>
          <p className="mt-4 max-w-sm text-lg text-ink/70">
            Bukan untuk pamer, tapi supaya kalian lihat bahwa semuanya dimulai dari langkah kecil yang diulang terus.
          </p>
        </div>
        <ol className="relative border-l-[3px] border-cobalt/25 pl-8">
          {TIMELINE.map((t, k) => (
            <motion.li
              key={k}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.45 }}
              className="relative pb-8 last:pb-0"
            >
              <span className="absolute -left-[42px] top-1.5 h-4 w-4 rounded-full border-[3px] border-cobalt bg-paper" />
              <p className="hand text-xl text-cobalt">{t.when}</p>
              <p className="mt-1 text-lg leading-relaxed">{t.what}</p>
            </motion.li>
          ))}
        </ol>
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            className="fixed inset-0 z-[70] grid place-items-center bg-ink/80 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            role="dialog"
            aria-label="Foto diperbesar"
          >
            <motion.figure
              layoutId={`photo-${open}`}
              className="relative max-h-[90svh] w-full max-w-xl bg-white p-4 pb-5"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={PHOTOS[open].src}
                alt={PHOTOS[open].alt}
                className="max-h-[72svh] w-full object-contain"
              />
              <figcaption className="hand mt-3 text-xl text-ink">{PHOTOS[open].caption}</figcaption>
              <button
                onClick={() => setOpen(null)}
                className="absolute -right-3 -top-3 grid h-11 w-11 place-items-center rounded-full bg-marker text-ink"
                aria-label="Tutup foto"
              >
                <X size={20} />
              </button>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  )
}
