import { useState } from 'react'
import { AnimatePresence, motion, useMotionValue, useTransform } from 'framer-motion'
import { RotateCcw } from 'lucide-react'
import { Section, ChapterHead, Margin, Btn } from '../components/ui'
import { PK_CARDS } from '../data'

function SwipeCard({ card, onAnswer, disabled }) {
  const x = useMotionValue(0)
  const rotate = useTransform(x, [-220, 220], [-14, 14])
  const leftHint = useTransform(x, [-140, -20], [1, 0])
  const rightHint = useTransform(x, [20, 140], [0, 1])

  return (
    <motion.div
      drag={disabled ? false : 'x'}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.9}
      style={{ x, rotate }}
      onDragEnd={(_, info) => {
        if (info.offset.x > 110) onAnswer('painkiller')
        else if (info.offset.x < -110) onAnswer('vitamin')
      }}
      initial={{ scale: 0.9, opacity: 0, y: 30 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
      className="relative flex min-h-[260px] cursor-grab touch-pan-y select-none flex-col justify-center rounded-[26px] bg-paper p-8 text-ink active:cursor-grabbing"
    >
      <motion.span
        style={{ opacity: leftHint }}
        className="absolute left-5 top-5 rounded-full border-[3px] border-pine px-3 py-1 font-bold text-pine"
      >
        Vitamin
      </motion.span>
      <motion.span
        style={{ opacity: rightHint }}
        className="absolute right-5 top-5 rounded-full border-[3px] border-rose px-3 py-1 font-bold text-rose"
      >
        Painkiller
      </motion.span>
      <p className="hand mb-3 text-lg text-ink/50">ide ini termasuk apa?</p>
      <p className="text-2xl font-bold leading-snug sm:text-3xl">{card.idea}</p>
    </motion.div>
  )
}

export default function Painkiller() {
  const [i, setI] = useState(0)
  const [picked, setPicked] = useState(null)
  const [score, setScore] = useState(0)
  const done = i >= PK_CARDS.length
  const card = PK_CARDS[i]

  const answer = (a) => {
    if (picked || done) return
    setPicked(a)
    if (a === card.answer) setScore((s) => s + 1)
  }
  const next = () => {
    setPicked(null)
    setI((v) => v + 1)
  }
  const reset = () => {
    setI(0)
    setPicked(null)
    setScore(0)
  }

  return (
    <Section id="painkiller" dark>
      <ChapterHead
        dark
        no={3}
        title="Painkiller atau vitamin?"
        lead="Vitamin itu enak kalau ada. Painkiller itu harus ada. Ide yang punya nilai bisnis hampir selalu berbentuk painkiller, karena orang rela membayar untuk menghilangkan rasa sakit."
      />

      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="mb-4 flex items-center justify-between text-paper/70">
            <span>
              Kartu {Math.min(i + 1, PK_CARDS.length)} dari {PK_CARDS.length}
            </span>
            <span className="tabular-nums">Skor {score}</span>
          </div>
          <div className="relative">
            <AnimatePresence mode="wait">
              {!done ? (
                <SwipeCard key={i} card={card} onAnswer={answer} disabled={Boolean(picked)} />
              ) : (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex min-h-[260px] flex-col items-start justify-center rounded-[26px] bg-marker p-8 text-ink"
                >
                  <p className="hand text-xl">selesai</p>
                  <p className="mt-2 text-4xl font-extrabold">
                    {score} dari {PK_CARDS.length} benar
                  </p>
                  <p className="mt-3 text-lg">
                    {score >= 7
                      ? 'Peka banget. Kamu sudah bisa membedakan rasa sakit yang nyata.'
                      : score >= 5
                        ? 'Lumayan. Ingat pertanyaan kuncinya: kalau ini hilang besok, siapa yang benar-benar repot?'
                        : 'Nggak apa-apa. Justru ini gunanya latihan. Coba ulangi sambil bertanya: siapa yang rugi kalau ini nggak ada?'}
                  </p>
                  <Btn variant="ink" className="mt-6" onClick={reset}>
                    <RotateCcw size={18} aria-hidden="true" /> Main lagi
                  </Btn>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {!done && (
            <>
              <p className="mt-4 text-center text-sm text-paper/55">
                Geser kartu ke kiri untuk vitamin, ke kanan untuk painkiller. Atau pakai tombol di bawah.
              </p>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <button
                  onClick={() => answer('vitamin')}
                  disabled={Boolean(picked)}
                  className="min-h-[56px] rounded-2xl border-[3px] border-pine text-xl font-bold text-[#7FE0BA] transition-colors hover:bg-pine hover:text-white disabled:opacity-40"
                >
                  Vitamin
                </button>
                <button
                  onClick={() => answer('painkiller')}
                  disabled={Boolean(picked)}
                  className="min-h-[56px] rounded-2xl border-[3px] border-rose text-xl font-bold text-rose transition-colors hover:bg-rose hover:text-white disabled:opacity-40"
                >
                  Painkiller
                </button>
              </div>
            </>
          )}
          <AnimatePresence>
            {picked && !done && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className={`mt-5 rounded-2xl p-5 ${picked === card.answer ? 'bg-pine' : 'bg-rose'} text-white`}
                role="status"
              >
                <p className="text-xl font-bold">
                  {picked === card.answer ? 'Tepat.' : `Kurang tepat, ini ${card.answer}.`}
                </p>
                <p className="mt-1 text-lg text-white/90">{card.why}</p>
                <button onClick={next} className="mt-4 min-h-[44px] rounded-full bg-white px-5 font-bold text-ink">
                  {i === PK_CARDS.length - 1 ? 'Lihat hasil' : 'Kartu berikutnya'}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="space-y-6">
          <div className="rounded-[22px] border-2 border-white/10 p-6">
            <p className="text-2xl font-bold text-rose">Painkiller</p>
            <p className="mt-2 text-lg text-paper/80">
              Sakitnya terasa sekarang, sering terjadi, dan ada ruginya. Orang sudah mencoba mengatasinya walau
              dengan cara seadanya.
            </p>
          </div>
          <div className="rounded-[22px] border-2 border-white/10 p-6">
            <p className="text-2xl font-bold text-[#7FE0BA]">Vitamin</p>
            <p className="mt-2 text-lg text-paper/80">
              Menyenangkan dan bikin hidup sedikit lebih baik, tapi kalau nggak ada pun orang tetap baik-baik saja.
            </p>
          </div>
          <p className="text-lg text-paper/70">
            Vitamin bukan berarti jelek. Banyak produk hiburan sukses dengan cara itu. Tapi kalau kalian ingin orang
            rela membayar, pastikan sakitnya benar-benar terasa.
          </p>
        </div>
      </div>

      <Margin dark className="mt-14">
        People pay for painkillers. They only think about buying vitamins.
      </Margin>
    </Section>
  )
}
