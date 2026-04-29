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
    <main className="min-h-screen flex flex-col">
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
        <div className="absolute inset-0 bg-black/55 z-[1]" />

        <div className="relative z-10 text-center text-white px-6 flex flex-col items-center w-full max-w-2xl mx-auto">
          <a
            href="https://quantum-connectivity-enhancer--preview.poehali.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-[0.3em] mb-2 opacity-50 hover:opacity-90 transition-opacity border-b border-white/20 pb-0.5"
          >
            vetсhanin.ru
          </a>
          <p className="text-sm md:text-base uppercase tracking-[0.25em] mb-6 opacity-70 font-light">
            Вадим Ветчанин
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 leading-tight">
            Школа йоги<br />и психологии
          </h1>
          <p className="text-sm md:text-base max-w-sm mx-auto opacity-60 mb-12 leading-relaxed font-light tracking-wide">
            «Духовная навигация»
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
            <Link
              to="/retreat"
              className="bg-white/10 border border-white/30 text-white px-6 py-5 uppercase tracking-wide text-sm font-semibold hover:bg-white hover:text-neutral-900 transition-all duration-300 text-center backdrop-blur-sm"
            >
              <span className="block text-lg mb-1">🏕</span>
              Ритрит
            </Link>
            <Link
              to="/seminar"
              className="bg-white/10 border border-white/30 text-white px-6 py-5 uppercase tracking-wide text-sm font-semibold hover:bg-white hover:text-neutral-900 transition-all duration-300 text-center backdrop-blur-sm"
            >
              <span className="block text-lg mb-1">📚</span>
              Семинар
              <span className="block text-xs font-normal mt-0.5 opacity-60 normal-case tracking-normal">
                3 или 6 месяцев
              </span>
            </Link>
            <Link
              to="/library"
              className="bg-white/10 border border-white/30 text-white px-6 py-5 uppercase tracking-wide text-sm font-semibold hover:bg-white hover:text-neutral-900 transition-all duration-300 text-center backdrop-blur-sm"
            >
              <span className="block text-lg mb-1">📖</span>
              Литература
              <span className="block text-xs font-normal mt-0.5 opacity-60 normal-case tracking-normal">
                227 изданий
              </span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}