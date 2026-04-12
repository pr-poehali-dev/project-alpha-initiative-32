export default function Footer() {
  return (
    <div
      id="price"
      className="relative h-[820px] sm:h-[650px] lg:h-[850px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+820px)] sm:h-[calc(100vh+650px)] lg:h-[calc(100vh+850px)] -top-[100vh]">
        <div className="h-[820px] sm:h-[650px] lg:h-[850px] sticky top-[calc(100vh-820px)] sm:top-[calc(100vh-650px)] lg:top-[calc(100vh-850px)]">
          <div className="bg-neutral-900 py-6 sm:py-8 lg:py-10 px-4 sm:px-6 h-full w-full flex flex-col justify-between">
            <div className="flex flex-wrap shrink-0 gap-6 sm:gap-12 lg:gap-20">
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-2 uppercase text-neutral-400 text-xs sm:text-sm">Участие</h3>
                <p className="text-white text-sm sm:text-base">Стоимость и даты — <span className="text-amber-400 font-semibold">по мере набора группы</span></p>
                <p className="text-neutral-400 text-xs sm:text-sm mt-2">Для уточнения деталей свяжитесь с организатором</p>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-2 uppercase text-neutral-400 text-xs sm:text-sm">Запись</h3>
                <p className="text-white text-sm sm:text-base">Организатор — Наталья</p>
                <a
                  href="tel:+79226135972"
                  className="text-amber-400 text-sm sm:text-base hover:text-amber-300 transition-colors"
                >
                  8-922-613-5972
                </a>
                <p className="text-neutral-400 text-xs sm:text-sm mt-1">MAX / WhatsApp</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2 sm:gap-0">
              <h1 className="text-[12vw] sm:text-[11vw] lg:text-[9vw] leading-[0.85] mt-2 sm:mt-6 lg:mt-8 text-white font-bold tracking-tight">
                РИТРИТ
              </h1>
              <div className="flex flex-col items-start sm:items-end gap-1">
                <a
                  href="https://quantum-connectivity-enhancer--preview.poehali.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 text-xs uppercase tracking-widest hover:text-amber-400 transition-colors duration-300 border-b border-white/20 hover:border-amber-400 pb-0.5"
                >
                  Сайт Вадима Ветчанина →
                </a>
                <p className="text-neutral-500 text-xs">{new Date().getFullYear()} · Вадим Ветчанин</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}