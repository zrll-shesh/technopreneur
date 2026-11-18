import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus, X } from 'lucide-react'
import { Section, ChapterHead, Btn, Margin } from '../components/ui'
import { useLocalStorage } from '../hooks'

const NOTE_COLORS = ['bg-marker', 'bg-[#BFE8D6]', 'bg-[#FFD1D8]', 'bg-[#D4DBFF]', 'bg-white']

export default function Pemanasan() {
  const [notes, setNotes] = useLocalStorage('papan-keresahan', [])
  const [text, setText] = useState('')

  const add = (e) => {
    e.preventDefault()
    const t = text.trim()
    if (!t) return
    setNotes((n) => [
      ...n,
      { id: Date.now(), text: t, color: n.length % NOTE_COLORS.length, rot: Math.random() * 6 - 3 },
    ])
    setText('')
  }

  return (
    <Section id="pemanasan">
      <ChapterHead
        no={0}
        title="Pemanasan: papan keresahan"
        lead="Sebelum bicara teori, kita kumpulkan bahan bakunya dulu. Jawab satu pertanyaan ini dengan jujur. Jawabannya nggak perlu keren, yang penting nyata."
      />

      <div className="rounded-[26px] border-2 border-ink/10 bg-white p-5 sm:p-8">
        <p className="display-md font-bold">
          Apa satu hal di sekolah, asrama, atau rumah yang bikin kamu kesal minggu ini?
        </p>
        <form onSubmit={add} className="mt-6 flex flex-col gap-3 sm:flex-row">
          <label htmlFor="keresahan" className="sr-only">
            Tulis keresahanmu
          </label>
          <input
            id="keresahan"
            value={text}
            onChange={(e) => setText(e.target.value)}
            maxLength={120}
            placeholder="Contoh: antre mesin cuci bisa sejam"
            className="min-h-[52px] flex-1 rounded-full border-2 border-ink/15 bg-paper px-6 text-lg outline-none transition-colors placeholder:text-ink/40 focus:border-cobalt"
          />
          <Btn type="submit" className="min-h-[52px] px-7 text-lg">
            <Plus size={20} aria-hidden="true" /> Tempel
          </Btn>
        </form>

        <div className="mt-8 min-h-[220px] rounded-[18px] bg-[#E9ECF3] p-4 sm:p-6">
          {notes.length === 0 ? (
            <div className="grid h-[200px] place-items-center text-center">
              <p className="hand max-w-sm text-2xl text-ink/45">
                Papan masih kosong. Tempel keresahan pertama, sekecil apa pun.
              </p>
            </div>
          ) : (
            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              <AnimatePresence>
                {notes.map((n) => (
                  <motion.li
                    key={n.id}
                    layout
                    initial={{ opacity: 0, scale: 0.6, y: -40, rotate: n.rot * 3 }}
                    animate={{ opacity: 1, scale: 1, y: 0, rotate: n.rot }}
                    exit={{ opacity: 0, scale: 0.6 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                    className={`group relative min-h-[130px] p-4 shadow-[3px_6px_0_rgba(12,18,54,0.1)] ${NOTE_COLORS[n.color]}`}
                  >
                    <p className="hand break-words text-xl leading-snug">{n.text}</p>
                    <button
                      onClick={() => setNotes((all) => all.filter((x) => x.id !== n.id))}
                      className="absolute right-1.5 top-1.5 grid h-8 w-8 place-items-center rounded-full text-ink/40 opacity-100 transition-opacity hover:bg-ink/10 hover:text-ink sm:opacity-0 sm:group-hover:opacity-100"
                      aria-label={`Hapus catatan: ${n.text}`}
                    >
                      <X size={16} />
                    </button>
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>
          )}
        </div>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
          <p className="text-ink/60">
            {notes.length} keresahan terkumpul. Papan ini tersimpan otomatis di perangkat ini.
          </p>
          {notes.length > 0 && (
            <Btn variant="ghost" onClick={() => setNotes([])}>
              Bersihkan papan
            </Btn>
          )}
        </div>
      </div>

      <Margin className="mt-12">
        Keep this board. By the end of today, one of these annoyances might become your first startup idea.
      </Margin>
    </Section>
  )
}
