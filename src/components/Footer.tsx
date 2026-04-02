export default function Footer() {
  return (
    <div
      id="price"
      className="relative h-[500px] sm:h-[650px] lg:h-[850px] max-h-[850px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+500px)] sm:h-[calc(100vh+650px)] lg:h-[calc(100vh+850px)] -top-[100vh]">
        <div className="h-[500px] sm:h-[650px] lg:h-[850px] sticky top-[calc(100vh-500px)] sm:top-[calc(100vh-650px)] lg:top-[calc(100vh-850px)]">
          <div className="bg-neutral-900 py-6 sm:py-8 lg:py-10 px-4 sm:px-6 h-full w-full flex flex-col justify-between">
            <div className="flex flex-wrap shrink-0 gap-8 sm:gap-12 lg:gap-20">
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-2 uppercase text-neutral-400 text-xs sm:text-sm">Стоимость участия</h3>
                <p className="text-white text-sm sm:text-base">Всё включено (проживание + питание): <span className="text-amber-400 font-semibold">23 000 ₽</span></p>
                <p className="text-white text-sm sm:text-base">Без проживания (обед, ужин + участие): <span className="text-amber-400 font-semibold">16 600 ₽</span></p>
                <p className="text-white text-sm sm:text-base">Только участие: <span className="text-amber-400 font-semibold">12 400 ₽</span></p>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-2 uppercase text-neutral-400 text-xs sm:text-sm">Скидки</h3>
                <p className="text-white text-sm sm:text-base">Семейная пара — 40 000 ₽ (вместо 46 000 ₽)</p>
                <p className="text-white text-sm sm:text-base">«Приведи друга» — минус 2 000 ₽</p>
                <p className="text-white text-sm sm:text-base">Студентам — минус 4 000 ₽</p>
                <p className="text-white text-sm sm:text-base">Пенсионерам — индивидуально</p>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-2 uppercase text-neutral-400 text-xs sm:text-sm">Бронирование</h3>
                <p className="text-white text-sm sm:text-base">Депозит: 5 000 ₽ (не возвращается)</p>
                <p className="text-white text-sm sm:text-base">Остаток — до 10 апреля</p>
                <p className="text-neutral-400 text-xs sm:text-sm mt-2">+ Бесплатное онлайн-занятие за 2 недели</p>
                <p className="text-neutral-400 text-xs sm:text-sm">+ Пост-ритритная встреча — 1 000 ₽</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
              <h1 className="text-[12vw] sm:text-[11vw] lg:text-[9vw] leading-[0.85] mt-4 sm:mt-6 lg:mt-8 text-white font-bold tracking-tight">
                РИТРИТ
              </h1>
              <p className="text-neutral-400 text-sm sm:text-base">{new Date().getFullYear()} · Вадим Ветчанин</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
