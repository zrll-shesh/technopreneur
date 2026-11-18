import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

export function Section({ id, dark = false, children, className = '' }) {
  return (
    <section
      id={id}
      data-section
      className={`relative ${dark ? 'grid-dark' : ''} ${className}`}
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">{children}</div>
    </section>
  )
}

export function Scribble({ className = '', color = '#2337D9', delay = 0.2 }) {
  return (
    <svg
      viewBox="0 0 320 24"
      fill="none"
      aria-hidden="true"
      className={`block ${className}`}
      preserveAspectRatio="none"
    >
      <motion.path
        d="M4 14 C 60 4, 110 22, 160 12 S 260 4, 316 12"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay, ease: 'easeInOut' }}
      />
    </svg>
  )
}

export function HandCircle({ color = '#2337D9' }) {
  return (
    <svg
      viewBox="0 0 120 60"
      fill="none"
      aria-hidden="true"
      className="pointer-events-none absolute -inset-x-4 -inset-y-3 h-[calc(100%+24px)] w-[calc(100%+32px)]"
      preserveAspectRatio="none"
    >
      <motion.path
        d="M18 12 C 45 2, 100 4, 112 22 C 122 40, 80 56, 50 54 C 18 52, 2 40, 8 24 C 12 14, 30 8, 48 7"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      />
    </svg>
  )
}

export function ChapterHead({ no, title, lead, dark = false, kicker }) {
  return (
    <header className="mb-14 max-w-3xl">
      <div className={`hand relative mb-5 inline-block px-2 text-2xl ${dark ? 'text-marker' : 'text-cobalt'}`}>
        {kicker || `Bab ${no}`}
        <HandCircle color={dark ? '#FFE14D' : '#2337D9'} />
      </div>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
        className="display-lg font-extrabold"
      >
        {title}
      </motion.h2>
      <Scribble className="mt-3 h-4 w-48" color={dark ? '#FFE14D' : '#2337D9'} />
      {lead && (
        <p className={`mt-6 max-w-prose text-xl leading-relaxed ${dark ? 'text-paper/80' : 'text-ink/75'}`}>
          {lead}
        </p>
      )}
    </header>
  )
}

/* Kutipan rujukan, ditulis sebagai "Menurut ..." */
export function Cite({ children, source, href, dark = false }) {
  return (
    <figure
      className={`my-10 max-w-prose border-l-[6px] pl-6 ${dark ? 'border-marker' : 'border-cobalt'}`}
    >
      <blockquote className="text-xl leading-relaxed">{children}</blockquote>
      <figcaption className={`mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm ${dark ? 'text-paper/60' : 'text-ink/60'}`}>
        <span>{source}</span>
        {href && (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-1 underline decoration-2 underline-offset-4 ${dark ? 'hover:text-marker' : 'hover:text-cobalt'}`}
          >
            Buka sumber <ExternalLink size={14} aria-hidden="true" />
          </a>
        )}
      </figcaption>
    </figure>
  )
}

/* Catatan pinggir berbahasa Inggris, gaya tulisan tangan */
export function Margin({ children, dark = false, className = '' }) {
  return (
    <motion.p
      initial={{ opacity: 0, rotate: -3, x: -10 }}
      whileInView={{ opacity: 1, rotate: -1.5, x: 0 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.5 }}
      className={`hand max-w-xl text-2xl leading-snug sm:text-[1.7rem] ${dark ? 'text-marker' : 'text-cobalt'} ${className}`}
    >
      {children}
    </motion.p>
  )
}

export function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay, ease: [0.2, 0.7, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function Btn({ children, onClick, variant = 'solid', className = '', type = 'button', ...rest }) {
  const styles = {
    solid: 'bg-cobalt text-white hover:bg-ink',
    ink: 'bg-ink text-paper hover:bg-cobalt',
    ghost: 'border-2 border-ink/15 bg-white/60 text-ink hover:border-cobalt hover:text-cobalt',
    marker: 'bg-marker text-ink hover:bg-white',
    ghostDark: 'border-2 border-white/20 text-paper hover:border-marker hover:text-marker',
  }
  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full px-5 py-2.5 font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-40 ${styles[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}

export function Panel({ children, className = '', dark = false }) {
  return (
    <div
      className={`rounded-[22px] border-2 p-6 sm:p-8 ${dark ? 'border-white/10 bg-white/[0.04]' : 'border-ink/10 bg-white'} ${className}`}
    >
      {children}
    </div>
  )
}

export function KeyPoints({ points, dark = false }) {
  return (
    <aside
      className={`mt-16 rounded-[22px] border-l-[8px] p-6 sm:p-8 ${dark ? 'border-marker bg-white/[0.06]' : 'border-cobalt bg-white'}`}
    >
      <p className={`hand text-2xl ${dark ? 'text-marker' : 'text-cobalt'}`}>poin penting</p>
      <ul className="mt-3 space-y-2">
        {points.map((p) => (
          <li key={p} className="flex gap-3 text-lg leading-relaxed">
            <span className={`mt-[0.6em] h-2 w-2 shrink-0 rounded-full ${dark ? 'bg-marker' : 'bg-cobalt'}`} />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export function SubHead({ children, dark = false }) {
  return (
    <h3 className={`display-md mb-4 mt-20 font-bold ${dark ? '' : ''}`}>{children}</h3>
  )
}

export function Para({ children, dark = false, className = '' }) {
  return (
    <p className={`max-w-prose text-lg leading-relaxed ${dark ? 'text-paper/80' : 'text-ink/80'} ${className}`}>{children}</p>
  )
}

export function Table({ head, rows, dark = false }) {
  return (
    <div className={`overflow-x-auto rounded-[20px] border-2 ${dark ? 'border-white/10' : 'border-ink/10 bg-white'}`}>
      <table className="w-full min-w-[620px] border-collapse text-left">
        <thead>
          <tr className={dark ? 'bg-white/10' : 'bg-ink text-paper'}>
            {head.map((h) => (
              <th key={h} scope="col" className="px-5 py-4 text-base font-bold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, k) => (
            <tr key={k} className={`border-t-2 ${dark ? 'border-white/10' : 'border-ink/5'} ${k % 2 && !dark ? 'bg-paper/60' : ''}`}>
              {r.map((c, j) => (
                <td key={j} className={`px-5 py-4 align-top text-[1.02rem] leading-relaxed ${j === 0 ? 'font-semibold' : ''}`}>
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
