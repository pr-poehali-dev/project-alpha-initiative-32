import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function SeminarHero() {
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
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        <img
          src="/images/mountain-landscape.jpg"
          alt="Горный пейзаж"
          className="w-full h-full object-cover"
          style={{ filter: "hue-rotate(200deg) saturate(0.7) brightness(0.85)" }}
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/50 z-[1]" />
      <div className="relative z-10 text-center text-white px-6">
        <p className="text-xs md:text-sm uppercase tracking-[0.3em] mb-4 opacity-80">Екатеринбург · Набор в группу</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight max-w-4xl mx-auto">
          Управление<br />ресурсами человека
        </h1>
        <p className="text-base md:text-xl max-w-2xl mx-auto opacity-90 mb-10 leading-relaxed">
          Семинар по контролю процессов здоровья<br />
          через практики Хатха и Раджа-йоги с Вадимом Ветчаниным
        </p>
        <a
          href="tel:+79226135972"
          className="inline-block bg-white text-neutral-900 px-8 py-3 uppercase tracking-wide text-sm font-semibold hover:bg-neutral-200 transition-colors duration-300"
        >
          Записаться на семинар
        </a>
      </div>
    </div>
  );
}