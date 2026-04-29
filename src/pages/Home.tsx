import { Link } from "react-router-dom";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "30vh"]);

  return (
    <main className="min-h-screen flex flex-col bg-neutral-950">

      {/* Hero */}
      <div
        ref={container}
        className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden"
      >
        <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
          <img
            src="https://cdn.poehali.dev/projects/202f64b7-f2b6-44c8-becf-e298ec3e73f0/files/b3308b1d-9ce3-47cd-8b69-2fde62925ff5.jpg"
            alt="Йога"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-neutral-950 z-[1]" />

        <div className="relative z-10 text-center text-white px-6 flex flex-col items-center w-full max-w-2xl mx-auto">
          <a
            href="https://quantum-connectivity-enhancer--preview.poehali.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-[0.3em] mb-3 opacity-50 hover:opacity-90 transition-opacity border-b border-white/20 pb-0.5"
          >
            vetсhanin.ru
          </a>
          <p className="text-sm md:text-base uppercase tracking-[0.25em] mb-5 opacity-70 font-light">
            Вадим Ветчанин
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 leading-tight">
            Духовная<br />навигация
          </h1>
          <p className="text-sm md:text-base opacity-50 mb-14 font-light tracking-widest uppercase">
            Школа йоги и психологии
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
            <Link
              to="/retreat"
              className="bg-white/10 border border-white/25 text-white px-6 py-5 uppercase tracking-wide text-sm font-semibold hover:bg-white hover:text-neutral-900 transition-all duration-300 text-center backdrop-blur-sm"
            >
              <span className="block text-xl mb-2">🏕</span>
              Ритрит
            </Link>
            <Link
              to="/seminar"
              className="bg-white/10 border border-white/25 text-white px-6 py-5 uppercase tracking-wide text-sm font-semibold hover:bg-white hover:text-neutral-900 transition-all duration-300 text-center backdrop-blur-sm"
            >
              <span className="block text-xl mb-2">📚</span>
              Семинар
              <span className="block text-xs font-normal mt-0.5 opacity-50 normal-case tracking-normal">
                3 или 6 месяцев
              </span>
            </Link>
            <Link
              to="/library"
              className="bg-white/10 border border-white/25 text-white px-6 py-5 uppercase tracking-wide text-sm font-semibold hover:bg-white hover:text-neutral-900 transition-all duration-300 text-center backdrop-blur-sm"
            >
              <span className="block text-xl mb-2">📖</span>
              Литература
              <span className="block text-xs font-normal mt-0.5 opacity-50 normal-case tracking-normal">
                227 изданий
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* About section */}
      <section className="bg-neutral-950 text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-amber-400/70 mb-6">О школе</p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-8">
              Путь внутреннего<br />раскрытия
            </h2>
            <div className="space-y-5 text-white/60 text-sm md:text-base leading-relaxed font-light">
              <p>
                Школа йоги и психологии «Духовная навигация» — это пространство, где древние знания встречаются с современным пониманием природы человека.
              </p>
              <p>
                Здесь не ищут быстрых результатов. Здесь учатся слушать себя, двигаться в согласии с внутренними законами и постепенно обретать устойчивость — ту, что не зависит от внешних обстоятельств.
              </p>
              <p>
                Практики школы охватывают работу с телом, энергией и сознанием. Это живая традиция, передающаяся от учителя к ученику через личный опыт и осознанную практику.
              </p>
            </div>
            <div className="mt-10 pt-8 border-t border-white/10 flex gap-10">
              <div>
                <p className="text-2xl font-bold text-white">227</p>
                <p className="text-xs text-white/40 mt-1 uppercase tracking-wide">изданий в библиотеке</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">2</p>
                <p className="text-xs text-white/40 mt-1 uppercase tracking-wide">формата обучения</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://cdn.poehali.dev/projects/202f64b7-f2b6-44c8-becf-e298ec3e73f0/files/ecb4e6c2-6630-4f14-a194-29873f9f0b0a.jpg"
              alt="Медитация"
              className="w-full aspect-[4/3] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent" />
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-neutral-900 text-white py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-2xl md:text-3xl font-light leading-relaxed text-white/80 italic">
            «Истинное знание — это не то, что хранится в книгах, а то, что живёт в каждом осознанном движении и каждом выборе.»
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-950 border-t border-white/5 py-10 px-6 text-center">
        <p className="text-white/30 text-xs uppercase tracking-widest mb-3">Вадим Ветчанин</p>
        <a
          href="https://quantum-connectivity-enhancer--preview.poehali.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/40 text-sm hover:text-white/80 transition-colors tracking-wide"
        >
          vetсhanin.ru →
        </a>
      </footer>

    </main>
  );
}
