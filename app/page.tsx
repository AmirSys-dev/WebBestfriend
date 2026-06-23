'use client';

import confetti from 'canvas-confetti';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';

const navItems = [
  { label: 'Tentang', href: '#tentang' },
  { label: '2 Bulan', href: '#timeline' },
  { label: 'Surprise', href: '#surprise' },
  { label: 'Galeri', href: '#galeri' },
];

const reasons = [
  'Dia buat hari biasa rasa lebih ceria.',
  'Walaupun baru 2 bulan, friendship ni rasa bermakna.',
  'Dia ada vibe yang baik dan senang buat orang selesa.',
  'Dia pelajar SMK Paduka Tuan yang penuh impian.',
];

const gallery = ['Kenangan sekolah', 'Random moment', 'Bestfriend energy', 'Smile archive', 'Future memory', 'Aleeya core'];

export default function Home() {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.35], [0, -90]);

  useEffect(() => {
    const timer = setTimeout(() => {
      confetti({ particleCount: 120, spread: 80, origin: { y: 0.7 }, colors: ['#0071E3', '#FFFFFF', '#1D1D1F'] });
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  const floating = useMemo(() => Array.from({ length: 18 }, (_, i) => i), []);

  return (
    <main className="min-h-screen overflow-hidden bg-white text-appleText">
      <div className="noise" />

      <nav className="fixed top-0 z-40 w-full border-b border-appleBorder/70 bg-white/85 backdrop-blur-2xl">
        <div className="mx-auto flex h-11 max-w-[980px] items-center justify-between px-6">
          <a href="#home" className="text-[17px] font-semibold tracking-[-0.01em]">Aleeya ✦</a>
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => <a key={item.href} href={item.href} className="text-sm text-appleText transition hover:text-appleBlue">{item.label}</a>)}
          </div>
          <button onClick={() => setMenu(!menu)} className="flex h-11 w-11 items-center justify-center md:hidden" aria-label="Open menu">
            <span className="text-xl">☰</span>
          </button>
        </div>
        {menu && (
          <div className="border-t border-appleBorder bg-white px-6 py-4 md:hidden">
            {navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setMenu(false)} className="block py-3 text-appleText">{item.label}</a>)}
          </div>
        )}
      </nav>

      <section id="home" className="relative flex min-h-screen items-center bg-black px-6 py-32 text-white">
        {floating.map((i) => (
          <motion.span
            key={i}
            className="pointer-events-none absolute rounded-full bg-white/10"
            style={{ width: 6 + (i % 5) * 5, height: 6 + (i % 5) * 5, left: `${(i * 17) % 100}%`, top: `${(i * 23) % 100}%` }}
            animate={{ y: [0, -28, 0], opacity: [0.15, 0.5, 0.15] }}
            transition={{ duration: 4 + (i % 4), repeat: Infinity, delay: i * 0.12 }}
          />
        ))}

        <motion.div style={{ y: heroY }} className="relative z-10 mx-auto grid w-full max-w-[980px] items-center gap-16 md:grid-cols-[1.1fr_.9fr]">
          <div>
            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="mb-4 text-[17px] font-medium text-appleBlue">Website surprise dari Arsyad</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .12 }} className="text-[clamp(52px,9vw,96px)] font-bold leading-[1.02] tracking-[-0.04em]">
              Aleeya<br />Balqis.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .24 }} className="mt-6 max-w-xl text-xl leading-8 text-white/70">
              16 years old. Pelajar SMK Paduka Tuan. Website ni dibuat khas untuk kawan yang baru 2 bulan hadir, tapi dah jadi satu memori yang special.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .36 }} className="mt-10 flex flex-wrap gap-4">
              <a href="#surprise" className="rounded-full bg-appleBlue px-6 py-3 text-[17px] font-medium text-white transition hover:bg-appleBlueDark">Buka Surprise</a>
              <a href="#timeline" className="rounded-full px-6 py-3 text-[17px] font-medium text-appleBlue">Cerita 2 Bulan</a>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .25 }} className="floaty relative mx-auto aspect-square w-full max-w-[360px] rounded-[44px] bg-white p-3">
            <div className="flex h-full items-center justify-center rounded-[34px] bg-[#F5F5F7]">
              <div className="text-center">
                <div className="mx-auto mb-6 flex h-36 w-36 items-center justify-center rounded-full bg-black text-5xl font-bold text-white">AB</div>
                <p className="text-sm font-medium uppercase tracking-[.2em] text-appleMuted">Aleeya Balqis</p>
                <p className="mt-2 text-2xl font-semibold text-appleText">16 ✦ SMKPT</p>
              </div>
            </div>
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-appleBlue px-5 py-2 text-sm font-semibold text-white">bestfriend mode</div>
          </motion.div>
        </motion.div>
      </section>

      <Section id="tentang" eyebrow="Tentang Aleeya" title="Bukan sekadar kawan biasa.">
        <p className="mx-auto max-w-2xl text-center text-[19px] leading-8 text-appleMuted">
          Aleeya Balqis, 16 tahun, pelajar SMK Paduka Tuan. Website ni bukan dibuat sebab nak nampak fancy saja — tapi sebab friendship yang simple pun layak diraikan dengan cara yang cantik.
        </p>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <Reveal key={reason} delay={index * .08}>
              <div className="card-glow h-full rounded-apple bg-appleSurface p-10 shadow-softInner">
                <p className="mb-5 text-4xl">{['✨','💙','🌙','🏫'][index]}</p>
                <h3 className="mb-3 text-[22px] font-semibold tracking-[-.01em]">Reason {index + 1}</h3>
                <p className="text-[15px] leading-7 text-appleMuted">{reason}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <section id="timeline" className="bg-appleSurface px-6 py-24 md:py-32">
        <div className="mx-auto max-w-[980px]">
          <p className="text-center text-sm font-semibold uppercase tracking-[.16em] text-appleBlue">2 Bulan Berkawan</p>
          <h2 className="mx-auto mt-3 max-w-3xl text-center text-[clamp(40px,6vw,64px)] font-semibold leading-[1.06] tracking-[-.03em]">Kadang-kadang yang baru pun boleh rasa bermakna.</h2>
          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {[
              ['Mula kenal', 'Dari biasa-biasa, perlahan-lahan jadi selesa.'],
              ['Mula rapat', 'Ada cerita, ada gelak, ada moment kecil yang jadi memori.'],
              ['Hari ni', 'Website ni jadi tanda: friendship ni Arsyad hargai.'],
            ].map(([title, text], i) => (
              <Reveal key={title} delay={i * .1}>
                <div className="rounded-appleLg bg-white p-10">
                  <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-appleBlue text-white">{i + 1}</div>
                  <h3 className="text-[28px] font-medium leading-tight">{title}</h3>
                  <p className="mt-4 text-[17px] leading-7 text-appleMuted">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="surprise" className="bg-black px-6 py-24 text-white md:py-32">
        <div className="mx-auto max-w-[980px] text-center">
          <p className="text-sm font-semibold uppercase tracking-[.16em] text-appleBlue">Surprise</p>
          <h2 className="mx-auto mt-3 max-w-4xl text-[clamp(44px,7vw,80px)] font-bold leading-[1.04] tracking-[-.04em]">Satu surat kecil untuk Aleeya.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl leading-8 text-white/65">Tekan kad ni. Ada mesej special dari Arsyad.</p>

          <motion.button
            onClick={() => {
              setOpen(!open);
              confetti({ particleCount: 90, spread: 70, origin: { y: 0.75 }, colors: ['#0071E3', '#FFFFFF'] });
            }}
            whileTap={{ scale: .98 }}
            className="mx-auto mt-14 block w-full max-w-2xl rounded-[32px] bg-white p-3 text-left text-appleText"
          >
            <div className="rounded-[24px] bg-appleSurface p-8 md:p-12">
              {!open ? (
                <div className="text-center">
                  <p className="text-6xl">💌</p>
                  <h3 className="mt-6 text-[32px] font-semibold tracking-[-.02em]">Tap untuk buka surat</h3>
                  <p className="mt-3 text-appleMuted">Ada benda Arsyad nak cakap...</p>
                </div>
              ) : (
                <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
                  <p className="text-sm font-semibold uppercase tracking-[.16em] text-appleBlue">Dear Aleeya,</p>
                  <p className="mt-5 text-[22px] leading-9 tracking-[-.01em]">
                    Walaupun baru lebih kurang 2 bulan kita berkawan, Arsyad tetap rasa friendship ni special. Terima kasih sebab jadi kawan yang hadir dengan cara sendiri. Semoga Aleeya terus happy, terus kuat, dan terus jadi diri sendiri. Website ni simple, tapi ni cara Arsyad nak cakap: friendship ni dihargai. 💙
                  </p>
                  <p className="mt-8 text-right text-lg font-semibold">— Arsyad</p>
                </motion.div>
              )}
            </div>
          </motion.button>
        </div>
      </section>

      <Section id="galeri" eyebrow="Galeri" title="Letak gambar Aleeya dekat sini nanti.">
        <div className="grid gap-5 md:grid-cols-3">
          {gallery.map((item, i) => (
            <Reveal key={item} delay={i * .05}>
              <motion.div whileHover={{ y: -8, rotate: i % 2 ? 1.5 : -1.5 }} className="rounded-apple bg-appleSurface p-3">
                <div className="flex aspect-[4/3] items-center justify-center rounded-[14px] bg-white text-center text-appleMuted">
                  <div>
                    <p className="text-4xl">📸</p>
                    <p className="mt-3 text-sm">{item}</p>
                  </div>
                </div>
                <p className="px-3 py-4 text-[15px] text-appleMuted">Ganti placeholder ini dengan foto sebenar.</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </Section>

      <section className="bg-appleSurface px-6 py-24 text-center">
        <h2 className="gradient-text mx-auto max-w-4xl text-[clamp(42px,7vw,78px)] font-bold leading-[1.05] tracking-[-.04em]">For Aleeya Balqis, from Arsyad.</h2>
        <p className="mx-auto mt-6 max-w-xl text-[19px] leading-8 text-appleMuted">Website ni dibuat dengan Apple-inspired design, tapi isi dia datang dari friendship yang real.</p>
        <a href="#home" className="mt-10 inline-block rounded-full bg-appleBlue px-6 py-3 text-[17px] font-medium text-white transition hover:bg-appleBlueDark">Naik semula</a>
      </section>
    </main>
  );
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-[980px]">
        <p className="text-center text-sm font-semibold uppercase tracking-[.16em] text-appleBlue">{eyebrow}</p>
        <h2 className="mx-auto mt-3 max-w-4xl text-center text-[clamp(40px,6vw,64px)] font-semibold leading-[1.06] tracking-[-.03em]">{title}</h2>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: .55, delay, ease: 'easeOut' }}>
      {children}
    </motion.div>
  );
}
