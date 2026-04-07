export default function SeminarFeatured() {
  const program = [
    "Законы мыслей, чувств, действий и трансформации энергий",
    "Самодиагностика и гармонизация физического, эмоционального и ментального планов",
    "Причинно-следственные связи влияния энергий на жизнь",
    "Управление чувствами и эмоциями через работу с психосоматикой",
    "Развитие тонких тел и формирование эфирного плана",
    "Работа с чакральной системой: потребности чакр и основы их проточности",
    "8 ступеней йоги: Яма, Нияма, Асана, Пранаяма, Пратьяхара, Дхарана, Дхьяна, Самадхи",
    "Кармические законы и их влияние на здоровье",
    "Осознанное принятие своих ресурсов для восстановления здоровья",
  ];

  return (
    <div id="program-seminar" className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-16 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/202f64b7-f2b6-44c8-becf-e298ec3e73f0/files/3a4388a2-2f43-4ed4-8dac-bcd3f57d5dd3.jpg"
          alt="Медитация и йога"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-500">Программа семинара</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight font-bold">
          9 глубоких тем<br />для трансформации
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
        <p className="text-neutral-500 text-sm mt-1">Психолог · Мастер йоги · 40 лет практики · Автор кафедры Духовной Навигации МИЙ (2005–2018)</p>
      </div>
    </div>
  );
}