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

        <div className="relative z-10 text-center text-white px-6 flex flex-col items-center">
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] mb-6 opacity-60">
            Вадим Ветчанин
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 leading-tight max-w-3xl mx-auto">
            Школа йоги<br />и психологии
          </h1>
          <p className="text-base md:text-lg max-w-xl mx-auto opacity-75 mb-14 leading-relaxed">
            Практики гармонии тела, ума и энергий.<br />
            Выберите формат участия:
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
            <Link
              to="/retreat"
              className="flex-1 bg-white text-neutral-900 px-8 py-4 uppercase tracking-wide text-sm font-semibold hover:bg-amber-400 transition-colors duration-300 text-center"
            >
              Ритрит
            </Link>
            <Link
              to="/seminar"
              className="flex-1 border border-white/60 text-white px-8 py-4 uppercase tracking-wide text-sm font-semibold hover:bg-white hover:text-neutral-900 transition-colors duration-300 text-center"
            >
              Семинар
              <span className="block text-xs font-normal mt-0.5 opacity-60 normal-case tracking-normal">
                3 или 6 месяцев
              </span>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-6 left-0 right-0 z-10 text-center">
          <a
            href="https://quantum-connectivity-enhancer--preview.poehali.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 text-xs uppercase tracking-widest hover:text-white/70 transition-colors"
          >
            vetсhanin.ru →
          </a>
        </div>
      </div>
    </main>
  );
}