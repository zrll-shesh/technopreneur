import { useEffect, useState, useCallback } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { ChevronDown, ChevronUp, Maximize2, Minimize2, Menu, X } from 'lucide-react'
import { SECTIONS } from '../data'

function useActiveSection() {
  const [active, setActive] = useState(SECTIONS[0].id)
  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean)
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])
  return active
}

export default function Nav() {
  const active = useActiveSection()
  const [open, setOpen] = useState(false)
  const [full, setFull] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })
  const idx = SECTIONS.findIndex((s) => s.id === active)

  const go = useCallback((i) => {
    const target = SECTIONS[Math.max(0, Math.min(SECTIONS.length - 1, i))]
    document.getElementById(target.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  const toggleFull = useCallback(() => {
    try {
      if (!document.fullscreenElement) document.documentElement.requestFullscreen()
      else document.exitFullscreen()
    } catch {
      /* fullscreen tidak didukung */
    }
  }, [])

  useEffect(() => {
    const onFs = () => setFull(Boolean(document.fullscreenElement))
    document.addEventListener('fullscreenchange', onFs)
    return () => document.removeEventListener('fullscreenchange', onFs)
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      const tag = (e.target.tagName || '').toLowerCase()
      if (['input', 'textarea', 'select'].includes(tag) || e.target.isContentEditable) return
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault()
        go(idx + 1)
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault()
        go(idx - 1)
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFull()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [idx, go, toggleFull])

  return (
    <>
      <motion.div
        aria-hidden="true"
        style={{ scaleX }}
        className="fixed inset-x-0 top-0 z-50 h-1 origin-left bg-cobalt"
      />

      {/* Rail untuk layar lebar */}
      <nav
        aria-label="Daftar bagian"
        className="fixed left-5 top-1/2 z-40 hidden -translate-y-1/2 2xl:block"
      >
        <ol className="space-y-1.5">
          {SECTIONS.map((s, i) => {
            const on = s.id === active
            return (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="group flex items-center gap-3 py-0.5"
                  aria-current={on ? 'true' : undefined}
                >
                  <span
                    className={`block h-[3px] rounded-full transition-all duration-300 ${on ? 'w-8 bg-cobalt' : 'w-3 bg-ink/25 group-hover:w-5 group-hover:bg-ink/50'}`}
                  />
                  <span
                    className={`text-sm transition-all duration-300 ${on ? 'font-semibold text-cobalt opacity-100' : 'text-ink/50 opacity-0 group-hover:opacity-100'}`}
                  >
                    {s.label}
                  </span>
                </a>
              </li>
            )
          })}
        </ol>
      </nav>

      {/* Tombol kontrol mengambang */}
      <div
        className="fixed bottom-4 right-4 z-40 flex items-center gap-1 rounded-full border-2 border-ink/10 bg-white/90 p-1 shadow-[0_8px_30px_rgba(12,18,54,0.12)] backdrop-blur no-print"
        style={{ marginBottom: 'env(safe-area-inset-bottom, 0px)' }}
      >
        <button
          onClick={() => go(idx - 1)}
          disabled={idx <= 0}
          className="grid h-11 w-11 place-items-center rounded-full hover:bg-mist disabled:opacity-30"
          aria-label="Bagian sebelumnya"
        >
          <ChevronUp size={20} />
        </button>
        <button
          onClick={() => setOpen(true)}
          className="flex h-11 items-center gap-2 rounded-full px-3 text-sm font-semibold hover:bg-mist"
          aria-label="Buka daftar isi"
        >
          <Menu size={18} />
          <span className="tabular-nums">
            {idx + 1}/{SECTIONS.length}
          </span>
        </button>
        <button
          onClick={() => go(idx + 1)}
          disabled={idx >= SECTIONS.length - 1}
          className="grid h-11 w-11 place-items-center rounded-full hover:bg-mist disabled:opacity-30"
          aria-label="Bagian berikutnya"
        >
          <ChevronDown size={20} />
        </button>
        <button
          onClick={toggleFull}
          className="hidden h-11 w-11 place-items-center rounded-full hover:bg-mist sm:grid"
          aria-label={full ? 'Keluar layar penuh' : 'Layar penuh'}
        >
          {full ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] flex justify-end bg-ink/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.aside
              role="dialog"
              aria-label="Daftar isi"
              className="h-full w-full max-w-sm overflow-y-auto bg-paper p-6 sm:p-8"
              style={{ paddingTop: 'max(1.5rem, env(safe-area-inset-top, 0px))' }}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 260, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-6 flex items-center justify-between">
                <p className="hand text-2xl text-cobalt">Daftar isi</p>
                <button
                  onClick={() => setOpen(false)}
                  className="grid h-11 w-11 place-items-center rounded-full hover:bg-mist"
                  aria-label="Tutup daftar isi"
                >
                  <X size={22} />
                </button>
              </div>
              <ol className="space-y-1">
                {SECTIONS.map((s, i) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      onClick={() => setOpen(false)}
                      className={`flex items-baseline gap-4 rounded-xl px-3 py-2.5 text-lg transition-colors ${s.id === active ? 'bg-cobalt text-white' : 'hover:bg-mist'}`}
                    >
                      <span className={`w-6 text-sm tabular-nums ${s.id === active ? 'text-white/70' : 'text-ink/40'}`}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {s.label}
                    </a>
                  </li>
                ))}
              </ol>
              <p className="mt-8 text-sm text-ink/55">
                Tips presentasi: tombol panah kanan dan kiri di keyboard untuk pindah bagian, huruf F untuk layar penuh.
              </p>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
