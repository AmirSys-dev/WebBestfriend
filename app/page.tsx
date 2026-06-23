'use client';

import confetti from 'canvas-confetti';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: '2 Bulan', href: '#timeline' },
  { label: 'Vault', href: '#vault' },
  { label: 'Surprise', href: '#surprise' },
  { label: 'Finale', href: '#finale' },
];

const compliments = [
  'Aleeya has main-character energy.',
  'Dia bukan sekadar kawan, dia vibe yang susah jumpa.',
  '2 bulan mungkin singkat, tapi kesannya bukan biasa-biasa.',
  'SMK Paduka Tuan ada ramai pelajar, tapi website ni untuk Aleeya seorang.',
];

const vaultItems = [
  { icon: '💬', title: 'Chat kecil', text: 'Kadang benda simple pun boleh jadi memori bila orang tu special.' },
  { icon: '😂', title: 'Gelak random', text: 'Moment yang tak dirancang selalunya paling susah nak lupa.' },
  { icon: '🏫', title: 'School era', text: 'SMK Paduka Tuan jadi latar untuk cerita friendship ni.' },
  { icon: '🌙', title: 'Silent support', text: 'Tak perlu selalu cakap banyak. Kadang hadir pun dah cukup.' },
  { icon: '✨', title: 'Good energy', text: 'Ada orang datang bawa tenang. Aleeya salah seorang.' },
  { icon: '📌', title: 'Saved memory', text: 'Kalau friendship ni satu file, Arsyad dah tekan save.' },
];

const timeline = [
  ['Day 1', 'Mula kenal. Masih biasa-biasa, tapi dari situ cerita bermula.'],
  ['Week 2', 'Mula selesa. Ada topik, ada gelak, ada benda random yang jadi seronok.'],
  ['Month 1', 'Friendship mula ada tempat sendiri. Tak terlalu loud, tapi meaningful.'],
  ['Month 2', 'Website ni jadi bukti kecil yang Arsyad hargai friendship ni.'],
];

export default function Home() {
  const [unlocked, setUnlocked] = useState(false);
  const [letterOpen, setLetterOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const [music, setMusic] = useState(false);
  const [compliment, setCompliment] = useState(0);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.35], [0, -120]);
  const floating = useMemo(() => Array.from({ length: 26 }, (_, i) => i), []);

  useEffect(() => {
    const t = setInterval(() => setCompliment((v) => (v + 1) % compliments.length), 2600);
    return () => clearInterval(t);
  }, []);

  function fireConfetti(power = 140) {
    confetti({ particleCount: power, spread: 90, origin: { y: 0.72 }, colors: ['#0071E3', '#FFFFFF', '#1D1D1F', '#D2D2D7'] });
  }

  function unlock() {
    setUnlocked(true);
    fireConfetti(180);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-white text-appleText">
      <div className="noise" />

      <AnimatePresence>
        {!unlocked && (
          <motion.section
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.04, filter: 'blur(10px)' }}
            transition={{ duration: .8 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black px-6 text-white"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(0,113,227,.35),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(255,255,255,.12),transparent_30%)]" />
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="relative mx-auto max-w-2xl text-center">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[.22em] text-appleBlue">Private friendship website</p>
              <h1 className="text-[clamp(46px,8vw,86px)] font-bold leading-[1.02] tracking-[-.05em]">Untuk Aleeya Balqis sahaja.</h1>
              <p className="mx-auto mt-6 max-w-xl text-xl leading-8 text-white/65">Dibuat oleh Arsyad. Bukan website biasa — ini surprise kecil untuk friendship 2 bulan yang Arsyad hargai.</p>
              <button onClick={unlock} className="mt-10 rounded-full bg-appleBlue px-8 py-4 text-[17px] font-semibold text-white transition hover:bg-appleBlueDark">Unlock surprise ✨</button>
              <p className="mt-5 text-xs text-white/35">Hint: tekan button ni, jangan malu.</p>
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>

      <nav className="fixed top-0 z-40 w-full border-b border-appleBorder/70 bg-white/85 backdrop-blur-2xl">
        <div className="mx-auto flex h-11 max-w-[980px] items-center justify-between px-6">
          <a href="#home" className="text-[17px] font-semibold tracking-[-0.01em]">Aleeya ✦</a>
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => <a key={item.href} href={item.href} className="text-sm text-appleText transition hover:text-appleBlue">{item.label}</a>)}
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => setMusic(!music)} className="hidden rounded-full bg-appleSurface px-4 py-2 text-sm text-appleText md:block">{music ? '♫ Music on' : '♫ Music off'}</button>
            <button onClick={() => setMenu(!menu)} className="flex h-11 w-11 items-center justify-center md:hidden" aria-label="Open menu"><span className="text-xl">☰</span></button>
          </div>
        </div>
        {menu && <div className="border-t border-appleBorder bg-white px-6 py-4 md:hidden">{navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setMenu(false)} className="block py-3 text-appleText">{item.label}</a>)}</div>}
      </nav>

      <section id="home" className="relative flex min-h-screen items-center bg-black px-6 py-32 text-white">
        {floating.map((i) => <motion.span key={i} className="pointer-events-none absolute rounded-full bg-white/10" style={{ width: 5 + (i % 6) * 5, height: 5 + (i % 6) * 5, left: `${(i * 13) % 100}%`, top: `${(i * 29) % 100}%` }} animate={{ y: [0, -35, 0], opacity: [0.12, 0.58, 0.12] }} transition={{ duration: 4 + (i % 5), repeat: Infinity, delay: i * .08 }} />)}
        <motion.div style={{ y: heroY }} className="relative z-10 mx-auto grid w-full max-w-[980px] items-center gap-16 md:grid-cols-[1.1fr_.9fr]">
          <div>
            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="mb-4 text-[17px] font-medium text-appleBlue">Made by Arsyad · 2 months friendship</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .12 }} className="text-[clamp(56px,10vw,112px)] font-bold leading-[.98] tracking-[-.06em]">Aleeya<br />Balqis.</motion.h1>
            <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .24 }} className="mt-7 max-w-xl text-xl leading-8 text-white/70">16 years old. Pelajar SMK Paduka Tuan. Satu website cinematic untuk kawan yang mungkin baru 2 bulan, tapi tetap layak diraikan macam special launch Apple.</motion.p>
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .36 }} className="mt-10 flex flex-wrap gap-4">
              <a href="#surprise" className="rounded-full bg-appleBlue px-6 py-3 text-[17px] font-medium text-white transition hover:bg-appleBlueDark">Buka surat</a>
              <button onClick={() => fireConfetti()} className="rounded-full px-6 py-3 text-[17px] font-medium text-appleBlue">Confetti lagi</button>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, scale: .9, rotate: -2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} className="floaty relative mx-auto aspect-square w-full max-w-[380px] rounded-[48px] bg-white p-3">
            <div className="flex h-full items-center justify-center rounded-[38px] bg-appleSurface">
              <div className="text-center">
                <div className="mx-auto mb-6 flex h-40 w-40 items-center justify-center rounded-full bg-black text-6xl font-bold text-white">AB</div>
                <p className="text-sm font-medium uppercase tracking-[.22em] text-appleMuted">Aleeya Balqis</p>
                <p className="mt-2 text-3xl font-semibold text-appleText">16 · SMKPT</p>
              </div>
            </div>
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-appleBlue px-5 py-2 text-sm font-semibold text-white">bestfriend edition</div>
          </motion.div>
        </motion.div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-[980px] gap-4 md:grid-cols-4">
          {[['2', 'bulan berkawan'], ['16', 'tahun'], ['1', 'website khas'], ['∞', 'memori akan datang']].map(([num, label], i) => <Reveal key={label} delay={i * .06}><div className="rounded-apple bg-appleSurface p-8 text-center"><p className="text-5xl font-bold tracking-[-.04em]">{num}</p><p className="mt-2 text-sm uppercase tracking-[.14em] text-appleMuted">{label}</p></div></Reveal>)}
        </div>
      </section>

      <Section id="timeline" eyebrow="Timeline" title="Cerita 2 bulan, dibuat macam product story.">
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {timeline.map(([title, text], i) => <Reveal key={title} delay={i * .08}><div className="card-glow rounded-appleLg bg-appleSurface p-10"><p className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-appleBlue text-white">{i + 1}</p><h3 className="text-[30px] font-medium tracking-[-.02em]">{title}</h3><p className="mt-4 text-[17px] leading-7 text-appleMuted">{text}</p></div></Reveal>)}
        </div>
      </Section>

      <section id="vault" className="bg-appleSurface px-6 py-24 md:py-32">
        <div className="mx-auto max-w-[980px]">
          <p className="text-center text-sm font-semibold uppercase tracking-[.16em] text-appleBlue">Memory Vault</p>
          <h2 className="mx-auto mt-3 max-w-4xl text-center text-[clamp(42px,7vw,76px)] font-semibold leading-[1.04] tracking-[-.04em]">Bukan semua memori perlu gambar. Ada yang cukup dengan rasa.</h2>
          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {vaultItems.map((item, i) => <Reveal key={item.title} delay={i * .05}><motion.div whileHover={{ y: -8 }} className="h-full rounded-apple bg-white p-8"><p className="text-4xl">{item.icon}</p><h3 className="mt-6 text-2xl font-medium tracking-[-.02em]">{item.title}</h3><p className="mt-3 text-[15px] leading-7 text-appleMuted">{item.text}</p></motion.div></Reveal>)}
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-24 text-white md:py-32">
        <div className="mx-auto max-w-[980px] text-center">
          <p className="text-sm font-semibold uppercase tracking-[.16em] text-appleBlue">AI Compliment Generator</p>
          <h2 className="mt-4 text-[clamp(38px,6vw,70px)] font-bold leading-[1.05] tracking-[-.04em]">Apa yang sistem detect pasal Aleeya?</h2>
          <AnimatePresence mode="wait">
            <motion.p key={compliment} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -18 }} className="mx-auto mt-10 max-w-3xl text-2xl leading-10 text-white/75">“{compliments[compliment]}”</motion.p>
          </AnimatePresence>
        </div>
      </section>

      <section id="surprise" className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-[980px] text-center">
          <p className="text-sm font-semibold uppercase tracking-[.16em] text-appleBlue">Surprise Letter</p>
          <h2 className="mx-auto mt-3 max-w-4xl text-[clamp(44px,7vw,80px)] font-bold leading-[1.04] tracking-[-.04em]">Satu surat kecil. Tapi bukan copy-paste.</h2>
          <button onClick={() => { setLetterOpen(true); fireConfetti(90); }} className="mt-12 rounded-full bg-appleBlue px-8 py-4 text-[17px] font-semibold text-white transition hover:bg-appleBlueDark">Buka surat dari Arsyad 💌</button>
        </div>
      </section>

      <section className="bg-appleSurface px-6 py-24 md:py-32">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-center text-sm font-semibold uppercase tracking-[.16em] text-appleBlue">Gallery Preview</p>
          <h2 className="mx-auto mt-3 max-w-4xl text-center text-[clamp(42px,7vw,76px)] font-semibold leading-[1.04] tracking-[-.04em]">Nanti letak gambar, terus jadi lagi power.</h2>
          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {['Aleeya portrait', 'School memory', 'Random candid', 'Bestfriend vibe', 'Aesthetic shot', 'Future photo'].map((item, i) => <Reveal key={item} delay={i * .05}><motion.div whileHover={{ rotate: i % 2 ? 1.6 : -1.6, y: -8 }} className="rounded-apple bg-white p-3"><div className="flex aspect-[4/3] items-center justify-center rounded-[14px] bg-appleSurface"><div className="text-center text-appleMuted"><p className="text-5xl">📸</p><p className="mt-3 text-sm">{item}</p></div></div><p className="px-3 py-4 text-[15px] text-appleMuted">Replace dengan gambar sebenar Aleeya.</p></motion.div></Reveal>)}
          </div>
        </div>
      </section>

      <section id="finale" className="relative bg-black px-6 py-32 text-center text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(0,113,227,.28),transparent_35%)]" />
        <div className="relative mx-auto max-w-[980px]">
          <p className="text-sm font-semibold uppercase tracking-[.18em] text-appleBlue">Finale</p>
          <h2 className="gradient-text mx-auto mt-5 max-w-5xl text-[clamp(48px,9vw,104px)] font-bold leading-[.98] tracking-[-.06em]">For Aleeya Balqis, from Arsyad.</h2>
          <p className="mx-auto mt-8 max-w-2xl text-xl leading-8 text-white/65">Kalau friendship ni satu app, ini launch screen dia. Kalau friendship ni satu memory, ini tempat Arsyad simpan dia.</p>
          <button onClick={() => fireConfetti(220)} className="mt-12 rounded-full bg-appleBlue px-8 py-4 text-[17px] font-semibold text-white hover:bg-appleBlueDark">Grand finale 🎊</button>
        </div>
      </section>

      <AnimatePresence>
        {letterOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[90] flex items-center justify-center bg-black/60 px-6 backdrop-blur-xl" onClick={() => setLetterOpen(false)}>
            <motion.div initial={{ y: 40, scale: .96, opacity: 0 }} animate={{ y: 0, scale: 1, opacity: 1 }} exit={{ y: 30, scale: .98, opacity: 0 }} onClick={(e) => e.stopPropagation()} className="max-h-[85vh] w-full max-w-2xl overflow-auto rounded-[32px] bg-white p-4 text-appleText">
              <div className="rounded-[24px] bg-appleSurface p-8 md:p-12">
                <p className="text-sm font-semibold uppercase tracking-[.16em] text-appleBlue">Dear Aleeya,</p>
                <p className="mt-6 text-[22px] leading-9 tracking-[-.01em]">Walaupun kita baru lebih kurang 2 bulan berkawan, Arsyad tetap rasa friendship ni special. Terima kasih sebab hadir dengan cara yang simple tapi bermakna. Mungkin Arsyad tak tahu warna kegemaran Aleeya, tak tahu tarikh lahir Aleeya, tapi Arsyad tahu satu benda: Aleeya layak dapat sesuatu yang cantik macam ni.</p>
                <p className="mt-5 text-[22px] leading-9 tracking-[-.01em]">Semoga Aleeya terus kuat, terus happy, terus jadi diri sendiri, dan terus kejar impian. Website ni bukan sempurna, tapi dibuat ikhlas — khas untuk Aleeya Balqis dari SMK Paduka Tuan.</p>
                <p className="mt-8 text-right text-lg font-semibold">— Arsyad 💙</p>
                <button onClick={() => setLetterOpen(false)} className="mt-8 rounded-full bg-appleBlue px-6 py-3 text-white">Tutup surat</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return <section id={id} className="px-6 py-24 md:py-32"><div className="mx-auto max-w-[980px]"><p className="text-center text-sm font-semibold uppercase tracking-[.16em] text-appleBlue">{eyebrow}</p><h2 className="mx-auto mt-3 max-w-4xl text-center text-[clamp(40px,6vw,70px)] font-semibold leading-[1.05] tracking-[-.04em]">{title}</h2><div className="mt-8">{children}</div></div></section>;
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: .55, delay, ease: 'easeOut' }}>{children}</motion.div>;
}
