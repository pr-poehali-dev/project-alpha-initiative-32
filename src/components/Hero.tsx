import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/202f64b7-f2b6-44c8-becf-e298ec3e73f0/files/b3308b1d-9ce3-47cd-8b69-2fde62925ff5.jpg"
          alt="Йога и символ Ом"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/40 z-[1]" />
      <div className="relative z-10 text-center text-white px-6">
        <p className="text-xs md:text-sm uppercase tracking-[0.3em] mb-4 opacity-80">Томск · 24–26 апреля 2026</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight max-w-4xl mx-auto">
          Магия женских<br />и мужских энергий
        </h1>
        <p className="text-base md:text-xl max-w-2xl mx-auto opacity-90 mb-10 leading-relaxed">
          Ключ к здоровью тела и души.<br />
          Ритрит по гармонизации внутренних энергий с Вадимом Ветчаниным
        </p>
        <a
          href="tel:+79226135972"
          className="inline-block bg-white text-neutral-900 px-8 py-3 uppercase tracking-wide text-sm font-semibold hover:bg-neutral-200 transition-colors duration-300"
        >
          Забронировать место
        </a>
      </div>
    </div>
  );
}