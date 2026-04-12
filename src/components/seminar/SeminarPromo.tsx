import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function SeminarPromo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="https://cdn.poehali.dev/projects/202f64b7-f2b6-44c8-becf-e298ec3e73f0/files/f4462321-b0e0-4397-863a-0eb357395f14.jpg"
            alt="Практика йоги на природе"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-black/40 z-[1]" />
      <h3 className="absolute top-12 right-6 text-white uppercase z-10 text-sm md:text-base lg:text-lg tracking-widest">
        Екатеринбург · По набору группы
      </h3>

      <div className="absolute bottom-12 right-6 z-10 text-right">
        <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-3xl mb-6 leading-tight">
          3 или 6 месяцев практики — выберите свой путь к здоровью и гармонии
        </p>
        <p className="text-white/80 text-sm uppercase tracking-widest">12 групповых + 6 индивидуальных занятий · 70 учебных часов</p>
      </div>
    </div>
  );
}