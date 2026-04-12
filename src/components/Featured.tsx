export default function Featured() {
  const program = [
    "Диагностика и трансформация энергий",
    "Понимание законов энергий и их влияния на жизнь",
    "Преодоление внутренних конфликтов",
    "Развитие тонких тел и формирование эфирного плана",
    "Раскрытие женской силы",
    "Глубинное расслабление — практика Шавасана",
    "Сакральные танцы для наполнения энергией",
    "Создание семейной Мандалы",
    "Преобразование энергий от разрушения к созиданию",
  ];

  return (
    <div id="program" className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-16 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/202f64b7-f2b6-44c8-becf-e298ec3e73f0/files/6714ec6c-10f0-4a9c-a925-8b7ffb17bbcd.jpg"
          alt="Практика йоги на природе"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-500">Программа ритрита</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight font-bold">
          3 дня глубинной<br />трансформации
        </p>
        <ul className="space-y-3 mb-10">
          {program.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-neutral-700 text-sm md:text-base">
              <span className="text-neutral-400 mt-0.5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-xs uppercase tracking-wide text-neutral-400 mb-2">Ведущий</p>
        <p className="text-neutral-900 font-semibold text-base md:text-lg">Вадим Леонидович Ветчанин</p>
        <p className="text-neutral-500 text-sm mt-1">Психолог · Мастер йоги · 40 лет практики · Основатель кафедры духовной навигации МИЙ</p>
      </div>
    </div>
  );
}