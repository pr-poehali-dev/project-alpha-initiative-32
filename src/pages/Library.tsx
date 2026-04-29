import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const books = [
  { id: 1, authors: "Ар Сантэм, Ари Ымата", title: "Теоретические аспекты психологии целительства", publisher: "М.: ИЙГАС", year: 2003, pages: 60 },
  { id: 2, authors: "Ар Сантэм, Ари Асаанда", title: "Ритуалы для работы по карте целителя 3 ранга", publisher: "М.: ИЙГАС", year: 2001, pages: 29 },
  { id: 3, authors: "Ар Сантэм, лаборатория атрибутов, лаборатория ритуалов", title: "Атрибуты целителей 2 ранга", publisher: "М.: ИЙГАС", year: 2001, pages: 14 },
  { id: 4, authors: "Ар Сантэм, Ари Анче", title: "Целительный этикет. Учебное пособие", publisher: "М.: ИЙГАС", year: 2001, pages: 14 },
  { id: 5, authors: "Ар Сантэм", title: "Предсказания на Новый 2002 год", publisher: "М.: ИЙГАС", year: 2001, pages: 26 },
  { id: 6, authors: "Ар Сантэм", title: "Предсказания на Новый 2003 год", publisher: "М.: ИЙГАС", year: 2002, pages: 35 },
  { id: 7, authors: "Ар Сантэм", title: "Предсказания на Новый 2000 год", publisher: "М.: ИЙГАС", year: 1999, pages: 12 },
  { id: 8, authors: "Ар Сантэм", title: "Пособие для самостоятельной практической работы", publisher: "Екатеринбург", year: 2001, pages: 24 },
  { id: 9, authors: "Ар Сантэм, Ари Зисаэ, Ари Рыззи, Ари Вэста, Ари Дзибад", title: "Царство минералов. Учебное пособие", publisher: "М.: ИЙГАС", year: 2001, pages: 35 },
  { id: 10, authors: "Ар Сантэм, Ари Мэрэм", title: "Гувенер – это не просто. Ч.2. Как учат малышей. Учебно-методическое пособие", publisher: "М.: ИЙГАС", year: 2000, pages: 76 },
  { id: 11, authors: "", title: "Филдви. №6 февраль 2001 года", publisher: "", year: 2001, pages: null },
  { id: 12, authors: "Ар Сантэм, лаборатория атрибутов, лаборатория ритуалов", title: "Атрибуты целителей 2 ранга", publisher: "М.: ИЙГАС", year: 2001, pages: 14 },
  { id: 13, authors: "Ар Сантэм", title: "Движение по пути", publisher: "М.: ИЙГАС", year: 2003, pages: 52 },
  { id: 14, authors: "Ар Сантэм, Ари Вэста, Ари Рыззи", title: "Введение в народную медицину и в аюрведические методы лечения", publisher: "М.: ИЙГАС", year: 2001, pages: 70 },
  { id: 15, authors: "Ар Сантэм, Ари Асаанда", title: "Введение в целительство", publisher: "М.: ИЙГАС", year: 2000, pages: 48 },
  { id: 16, authors: "Ар Сантэм, Ар Азамет, Ар Крастор, Ар Устап", title: "Основы безопасности жизни", publisher: "М.: ИЙГАС", year: 2001, pages: 80 },
  { id: 17, authors: "Ар Сантэм, Ари Рюкли", title: "Варны и сословия. Учебное пособие", publisher: "М.: ИЙГАС", year: 2001, pages: 90 },
  { id: 18, authors: "Ар Сантэм", title: "Ритуалы встречи Нового года", publisher: "М.: ИЙГАС", year: 2002, pages: 16 },
  { id: 19, authors: "Сатпрем", title: "Шри Ауробиндо, или путешествие сознания", publisher: "Бишкек", year: 1992, pages: 271 },
  { id: 20, authors: "", title: "Агни Йога. Психическая энергия. Накопление и расточение", publisher: "Екатеринбург: МГП «Велес»", year: 1991, pages: 61 },
  { id: 21, authors: "Кларр Ар", title: "Очистительные методики и терапии. Ч.1", publisher: "Харьков", year: 1996, pages: 53 },
  { id: 22, authors: "", title: "Методическое пособие школы йоги №1", publisher: "Харьков", year: 1993, pages: 64 },
  { id: 23, authors: "Шивая Субраманьясвами", title: "Космический танец Шивы. Индуистский катехезис", publisher: "СПб", year: 1993, pages: 239 },
  { id: 24, authors: "Ар Сантэм", title: "Справочник Мессии. Часть 1", publisher: "", year: null, pages: null },
  { id: 25, authors: "", title: "Йога и здоровье", publisher: "Издательство «БИД»", year: 1991, pages: 37 },
  { id: 26, authors: "Гринева Н.В.", title: "Гармония мужчины и женщины или как стать счастливыми и не только в браке", publisher: "Харьков: ООО «Либра»", year: 1997, pages: 56 },
  { id: 27, authors: "Твердохлебова Ю.", title: "Школа сексуальной культуры. Цикл 2", publisher: "Харьков", year: 1998, pages: 36 },
  { id: 28, authors: "Ар Сантэм", title: "Ритуалы для преподавателя", publisher: "", year: null, pages: 14 },
  { id: 29, authors: "Читтапад", title: "Осознание в йоге. Целительство на основе природных законов", publisher: "М.", year: 2002, pages: 24 },
  { id: 30, authors: "Читтапад", title: "Осознание в йоге. Психологическая неуязвимость", publisher: "Харьков", year: 1998, pages: 28 },
  { id: 31, authors: "Читтапад", title: "Осознание в йоге. Знаки сил", publisher: "М.", year: 2005, pages: 20 },
  { id: 32, authors: "Читтапад", title: "Осознание в йоге. Безличностное восприятие мира", publisher: "Харьков", year: 1999, pages: 20 },
  { id: 33, authors: "Читтапад", title: "Осознание в йоге. Апариграха", publisher: "М.", year: 2006, pages: 20 },
  { id: 34, authors: "Читтапад", title: "Энергетическая целостность", publisher: "М.: ВЕЛИГОР", year: 2000, pages: 176 },
  { id: 35, authors: "Читтапад", title: "Методическое пособие по целительству, основанное на природных законах", publisher: "Харьков", year: 2000, pages: 40 },
  { id: 36, authors: "", title: "Шива Самхита", publisher: "", year: null, pages: 56 },
  { id: 37, authors: "", title: "48 посланий. Замечательные притчи и сказки о жизни", publisher: "Мурманск", year: 2015, pages: 76 },
  { id: 38, authors: "Ар Сантэм", title: "Йога. Методическое пособие для спецкурса", publisher: "М.: «ГУМУС»", year: 1997, pages: 94 },
  { id: 39, authors: "Колотилин М.Ю.", title: "Философия любви. Ч.1: Мудры", publisher: "Харьков", year: 1998, pages: 29 },
  { id: 40, authors: "Свами Матхара", title: "Справочник мессии 2. Система высшего образования в йоге. Курс 1. Ключи к некоторым асанам и пранаямам", publisher: "Харьков", year: 1996, pages: 21 },
  { id: 41, authors: "Антарио ар Матэ, Аурэлия", title: "Природные стихии и жизнедеятельность человека. Часть 2", publisher: "Харьков", year: 1997, pages: 60 },
  { id: 42, authors: "Сафронов А.Г., Ар Санэм, Харьковская академия йоги", title: "Основы целительства. Часть 1", publisher: "", year: null, pages: 40 },
  { id: 43, authors: "Сафронов А.Г., Ар Санэм, Харьковская академия йоги", title: "Основы целительства. Часть 2", publisher: "", year: null, pages: 32 },
  { id: 44, authors: "Сафронов А.Г., Ар Санэм, Харьковская академия йоги", title: "Основы целительства. Часть 1", publisher: "", year: null, pages: 40 },
  { id: 45, authors: "Сафронов А.Г., Ар Санэм, Харьковская академия йоги", title: "Основы целительства. Часть 2", publisher: "", year: null, pages: 32 },
  { id: 46, authors: "Сафронов А.Г., Ар Санэм, Харьковская академия йоги", title: "Чакральная психодиагностика. Часть 1", publisher: "", year: null, pages: 40 },
  { id: 47, authors: "Сафронов А.Г., Ар Санэм, Харьковская академия йоги", title: "Основы целительства. Часть 2", publisher: "", year: null, pages: 33 },
  { id: 48, authors: "Сафронов А.Г., Ар Санэм, Харьковская академия йоги", title: "Чакральная психодиагностика. Часть 1", publisher: "", year: null, pages: 40 },
  { id: 49, authors: "Сафронов А.Г., Ар Санэм, Харьковская академия йоги", title: "Открытие чакральной системы: природа чакр, характеристика чакр, методы развития чакр", publisher: "", year: null, pages: 42 },
  { id: 50, authors: "Сафронов А.Г., Ар Санэм, Харьковская академия йоги", title: "Открытие чакральной системы: природа чакр, характеристика чакр, методы развития чакр", publisher: "", year: null, pages: 42 },
  { id: 51, authors: "Читтапад", title: "Осознание в йоге. Законы колеса Сансары", publisher: "М.", year: 2009, pages: 20 },
  { id: 52, authors: "Сафронов А.Г., Ар Санэм, Харьковская академия йоги", title: "Психология духовного развития. Практическое пособие по медитациям", publisher: "Харьков", year: 1996, pages: 86 },
  { id: 53, authors: "Сафронов А.Г., Ар Санэм, Харьковская академия йоги", title: "Религиоведение. Часть 1: Религия и её атрибуты, первобытная культура", publisher: "Харьков", year: 1997, pages: 38 },
  { id: 54, authors: "Читтапад", title: "Осознание в йоге. Энергия сердечных чувств", publisher: "Харьков", year: null, pages: 27 },
  { id: 55, authors: "Читтапад", title: "Осознание в йоге. Эзотерический артистизм", publisher: "Харьков", year: 2000, pages: 20 },
  { id: 56, authors: "Читтапад", title: "Осознание в йоге. Искусство сознательного общения", publisher: "Харьков", year: 1998, pages: 28 },
  { id: 57, authors: "Читтапад", title: "Осознание в йоге. Воспитание детей в йоговских семьях. Часть 1", publisher: "Харьков", year: 1998, pages: 20 },
  { id: 58, authors: "Читтапад", title: "Осознание в йоге. Общение Брахманов", publisher: "Харьков", year: 1998, pages: 28 },
  { id: 59, authors: "Читтапад", title: "Осознание в йоге. Изменить себя (под редакцией Гуру Ар Сантэма)", publisher: "Москва", year: 2003, pages: 20 },
  { id: 60, authors: "Читтапад", title: "Осознание в йоге. Передача эзотерической информации людям. Конфликты со своими", publisher: "Харьков", year: 1998, pages: 28 },
  { id: 61, authors: "Читтапад", title: "Осознание в йоге. Искусство сознательного общения", publisher: "Харьков", year: 1998, pages: 28 },
  { id: 62, authors: "Читтапад, Ар Сантэм", title: "Методическое пособие по законоведению. Часть 3: Взаимоотношения мужчин и женщин", publisher: "Харьков", year: 1997, pages: 32 },
  { id: 63, authors: "Читтапад", title: "Осознание в йоге. Как ставить вопросы силам", publisher: "Москва", year: 2005, pages: 20 },
  { id: 64, authors: "Ар Сантэм, Ар Шэньги", title: "Язык иносказаний", publisher: "М.: ИЙГАС", year: 2001, pages: 106 },
  { id: 65, authors: "Свами Матхара", title: "Справочник мессии 2. Система высшего образования в йоге. Курс первый. Ключи к некоторым асанам и пранаямам", publisher: "Харьков", year: 1996, pages: 21 },
  { id: 66, authors: "Герберт Ньютон Кэссон", title: "Как делать и сохранять деньги (12 правил Герберта Н. Кэссона)", publisher: "СПб.: Алтейя, комплект", year: 1992, pages: 32 },
  { id: 67, authors: "Ар Сантэм, Ари Асаанда, Ари Рюкли", title: "Экстрасенсорика. Учебное пособие", publisher: "М.: ИЙГАС", year: 1999, pages: 35 },
  { id: 68, authors: "Ар Сантэм, Ар Рисоле", title: "Специальные способы коррекции веса. Учебное пособие", publisher: "М.: ИЙГАС", year: 1998, pages: 32 },
  { id: 69, authors: "Ар Сантэм, Ари Инея Лян", title: "Лекция о весе. Причины нарушения. Способы нормализации. Учебное пособие", publisher: "М.: ИЙГАС", year: 1997, pages: 44 },
  { id: 70, authors: "Ар Сантэм, Ари Руса", title: "Эта необыкновенная вода. Учебное пособие", publisher: "М.: ИЙГАС", year: 1998, pages: 30 },
  { id: 71, authors: "Ар Сантэм, Свами Матхара", title: "Справочник мессии. Часть 1: методическое пособие для внутреннего пользования", publisher: "", year: null, pages: 50 },
  { id: 72, authors: "Ар Сантэм, Ар Клоз, Ар Мирстуф", title: "Санскрит. Методическое пособие. Часть 1", publisher: "М.: ИЙГАС", year: 1998, pages: 61 },
  { id: 73, authors: "Ар Сантэм, Ар Клоз, Ар Мирстуф", title: "Санскрит. Методическое пособие. Часть 2", publisher: "М.: ИЙГАС", year: 1998, pages: 67 },
  { id: 74, authors: "Ар Сантэм, Ар Сян, Ар Мооминта, Ари Мэрэм", title: "Упражнения и комплексы Филдви. Учебное пособие", publisher: "М.: ИЙГАС", year: 1998, pages: 37 },
  { id: 75, authors: "Плыкин В.Д.", title: "«В начале было слово…» или След на воде", publisher: "Ижевск: Изд-во Удмуртского университета", year: 1997, pages: 54 },
  { id: 76, authors: "Пак Чжэ Ву", title: "Руководство по Су Джок терапии. Начальный курс терапии", publisher: "Корея: О-Хаенг", year: null, pages: 64 },
  { id: 77, authors: "Ар Сантэм, Ар Таркутаб", title: "Иммунный комплекс", publisher: "М.: ИЙГАС", year: 2001, pages: 22 },
  { id: 78, authors: "Ар Сантэм", title: "…Глазами учеников… Выпуск 3", publisher: "Екатеринбург", year: 1999, pages: 16 },
  { id: 79, authors: "Ар Сантэм, Ари Рыккита, Ари Юсама", title: "Мужское и женское начала в питании. Путь к здоровью через их гармонию. Учебное пособие", publisher: "М.: ИЙГАС", year: 1998, pages: 59 },
  { id: 80, authors: "Ар Сантэм, Свами Матхара", title: "Справочник Мессии. Часть 1. Методическое пособие для внутреннего пользования", publisher: "Межрегиональный университет восточной культуры", year: null, pages: 50 },
  { id: 81, authors: "", title: "Японские народные пословицы и поговорки", publisher: "М.: Изд-во иностранной литературы", year: 1959, pages: 95 },
  { id: 82, authors: "Чинмой Шри", title: "Медитация: совершенство в Боге", publisher: "М.: Центр Шри Чинмоя", year: 1992, pages: 256 },
  { id: 83, authors: "Ар Сантэм, Карзенкова Е.П.", title: "Индийские Боги, кто они? Учебный словарь-справочник", publisher: "Пермь", year: 1999, pages: 76 },
  { id: 84, authors: "Свами Вишнудевананда Гири", title: "Ведические Боги и их символы. Лекции и комментарии к наставлениям Шри Ауробиндо. 4-е изд.", publisher: "М.: Амрита-Русь", year: 2023, pages: 144 },
  { id: 85, authors: "Беленицкий Л.М. и Ученики с участием Светланы и Виктора СОБРАН", title: "Космическая медитация. Часть 1: Слияние со стихиями. День первый. День второй. День третий", publisher: "", year: null, pages: 39 },
  { id: 86, authors: "Aquarius", title: "Практика защиты-без-защиты на «тонком плане». Тематический цикл «Эзотерическая картина мира»", publisher: "Харьков", year: 1997, pages: 36 },
  { id: 87, authors: "Ар Сантэм", title: "Йога. Философия видения мира. Учебное пособие", publisher: "М.: ИЙГАС", year: 1999, pages: 48 },
  { id: 88, authors: "Читтапад", title: "Методическое пособие по целительству, основанное на природных законах", publisher: "Харьков", year: 1996, pages: 39 },
  { id: 89, authors: "", title: "Точки летального исхода. Точки реанимации", publisher: "", year: null, pages: 20 },
  { id: 90, authors: "Ар Сантэм, Ар Зупан", title: "Требования к магу 1 ранга", publisher: "М.: ИЙГАС", year: 2005, pages: 10 },
  { id: 91, authors: "Ар Сантэм", title: "Комплексы мудр. Атласы мудр. Учебное пособие", publisher: "М.: ИЙГАС", year: 1999, pages: 40 },
  { id: 92, authors: "Харьковская академия йоги. Кафедра медицины", title: "Справочное пособие по медицине. Основные биохимические константы человека в норме и при патологии. Краткий толковый словарь медицинских терминов", publisher: "Харьков", year: 1997, pages: 46 },
  { id: 93, authors: "Ар Сантэм, Ар Сян, Ари Мэрэм", title: "Миникомплексы. Часть 1. Учебное пособие", publisher: "М.: ИЙГАС", year: 1997, pages: 26 },
  { id: 94, authors: "Читтапад", title: "Осознание в йоге. Ответственность мужчины за женщину. Часть 2", publisher: "Москва", year: 2005, pages: 20 },
  { id: 95, authors: "Ар Сантэм, Ари Инче", title: "Физиогномика", publisher: "Москва: ИЙГАС", year: 2001, pages: 30 },
  { id: 96, authors: "Ар Йовис", title: "Сборник комплексов первого курса школы йоги", publisher: "Харьков", year: 1996, pages: 43 },
  { id: 97, authors: "Ар Сантэм, Ар Таркутаб", title: "Иммунный комплекс", publisher: "М.: ИЙГАС", year: 2001, pages: 22 },
  { id: 98, authors: "Ар Йовис", title: "Сборник комплексов первого курса школы йоги", publisher: "Харьков", year: 1996, pages: 43 },
  { id: 99, authors: "Ар Сантэм, Ар Зорсан", title: "Философия йоги и античная философия", publisher: "Харьков", year: 1996, pages: 64 },
  { id: 100, authors: "Ар Сантэм, Ари Вэста, Ари Умберия, Ари Уффарим, Ари Хъюза, Ари Рыззи", title: "Зодиакальные созвездия. Вводный курс. Учебное пособие", publisher: "Москва", year: 2000, pages: 79 },
  { id: 101, authors: "Ар Сантэм, Галян Т.Ф.", title: "От первого желания до первого дыхания или как родить и воспитать здорового ребенка. Учебное пособие", publisher: "Харьков", year: 1997, pages: 89 },
  { id: 102, authors: "Читтапад", title: "Осознание в йоге. Хозяева йоги", publisher: "Москва", year: 2202, pages: 20 },
  { id: 103, authors: "Ар Сантэм", title: "Гадания", publisher: "Москва", year: 2003, pages: 12 },
  { id: 104, authors: "Ар Сантэм, Ар Зупан", title: "Составление индивидуального имени", publisher: "Москва: ИЙГАС", year: 2001, pages: 33 },
  { id: 105, authors: "Читтапад", title: "Осознание в йоге. Динамическая медитация. Часть 1", publisher: "Москва", year: 2002, pages: 24 },
  { id: 106, authors: "Читтапад", title: "Осознание в йоге. Воспитание детей в йоговских семьях. Часть 1", publisher: "Харьков", year: 1999, pages: 19 },
  { id: 107, authors: "Читтапад", title: "Осознание в йоге. Воспитание детей в йоговских семьях. Часть 2", publisher: "Харьков", year: 1999, pages: 20 },
  { id: 108, authors: "Читтапад", title: "Осознание в йоге. Йога в семье и женская йога", publisher: "Харьков", year: 1999, pages: 20 },
  { id: 109, authors: "Ар Сантэм, Ари Воядема", title: "Ритуальная гимнастика «СУРЬЯ-НАМАСКАР» на 42 созвездия (Утреннее приветствие Солнцу)", publisher: "Москва: ИЙГАС", year: 2001, pages: 32 },
  { id: 110, authors: "Патанджали Махариши", title: "Йога-сутра. Три варианта перевода текста", publisher: "", year: null, pages: 15 },
  { id: 111, authors: "Ар Сантэм, Ари Вэста, Ари Рыззи", title: "Введение в научную медицину и в аюрведические методы лечения", publisher: "М.: ИЙГАС", year: 2001, pages: 70 },
  { id: 112, authors: "Ар Сантэм, Ари Рыккита", title: "Еда – это ритуал, зачем нужен стол. Психологическое воздействие способа приёма пищи", publisher: "М.: ИЙГАС", year: 1997, pages: 25 },
  { id: 113, authors: "Ар Сантэм, Ари Джао", title: "Осознанная практическая деятельность – путь духовного развития человека", publisher: "М.: ИЙГАС", year: 1999, pages: 23 },
  { id: 114, authors: "Ар Сантэм, Ари Вэста, Ари Умберия, Ари Уффарим, Ари Хъюза, Ари Рыззи", title: "Зодиакальные созвездия. Вводный курс. Учебное пособие", publisher: "М.: ИЙГАС", year: 2000, pages: 80 },
  { id: 115, authors: "", title: "Генератор хроносной энергии идеального мира в мире физическом. Задающий эталонный генератор резонансной частоты человека", publisher: "Харьков", year: 2004, pages: 23 },
  { id: 116, authors: "Ар Сантэм, Ари Рока, Ар Зонго, Ар Крастор, Ар Пбюк, Ар Рисвас", title: "Космогония. Вводный курс. Часть 2", publisher: "Москва: ИЙГАС", year: 1998, pages: 72 },
  { id: 117, authors: "", title: "Шива Самхита", publisher: "", year: null, pages: 56 },
  { id: 118, authors: "Читтапад", title: "Осознание в йоге. Психологическая и энергетическая база для омоложения организма", publisher: "Харьков", year: 2000, pages: 20 },
  { id: 119, authors: "Ар Сантэм, Ари Рока, Ар Крастор, Ар Рисвас", title: "Космогония. Часть 3. Учебное пособие для студентов педагогического курса заочного отделения", publisher: "Москва: ИЙГАС", year: 2002, pages: 57 },
  { id: 120, authors: "Сафронов А.Г.", title: "Краткий очерк истории эзотерических учений", publisher: "Харьков", year: 2001, pages: 52 },
  { id: 121, authors: "Ар Сантэм, Ар Сэкти", title: "Социология растительного мира", publisher: "М.: ИЙГАС", year: 2003, pages: 35 },
  { id: 122, authors: "Ар Сантэм, Ари Джао", title: "Осознанная практическая деятельность – путь духовного развития человека. Методическое пособие", publisher: "М.: ИЙГАС", year: 1999, pages: 23 },
  { id: 123, authors: "Махариши Патанджали", title: "Йога-сутра. Три варианта перевода текста", publisher: "", year: null, pages: 15 },
  { id: 124, authors: "Ар Сантэм, Читтапад", title: "Методическое пособие по видению мира. Часть 2", publisher: "Харьков", year: 1997, pages: 40 },
  { id: 125, authors: "Ар Сантэм", title: "Формуляр библиотечного инструктора", publisher: "Екатеринбург", year: 1999, pages: null },
  { id: 126, authors: "Болотов Б.В.", title: "Бессмертие – это реально", publisher: "Москва", year: 2000, pages: 58 },
  { id: 127, authors: "Ар Сантэм", title: "Филдви для детей и взрослых. Часть 3. Как стать преподавателем Филдви", publisher: "Москва", year: 2001, pages: 74 },
  { id: 128, authors: "Читтапад", title: "Основы управления сексуальной энергией", publisher: "Харьков", year: 1997, pages: 28 },
  { id: 129, authors: "Ар Сантэм", title: "Предсказания на Новый год. Встреча Нового года", publisher: "Москва", year: 2003, pages: 21 },
  { id: 130, authors: "Ар Сантэм", title: "Движение по пути. Методические указания для вставших на путь гармоничного духовного развития", publisher: "Москва: ИЙГАС", year: 2003, pages: 52 },
  { id: 131, authors: "Ар Сантэм, Ари Рыккита, Ари Ховсанта", title: "Сочетаемость продуктов. Учебное пособие", publisher: "Москва: ИЙГАС", year: 2001, pages: 25 },
  { id: 132, authors: "Читтапад", title: "Осознание в йоге. Хозяева йоги", publisher: "Москва", year: 2002, pages: 20 },
  { id: 133, authors: "Читтапад", title: "Осознание в йоге. Смыслы", publisher: "Москва", year: 2008, pages: 20 },
  { id: 134, authors: "Ар Сантэм", title: "Квалификационные требования для сдачи экзаменов на звание «Инструктор-методист 1 ранга». Сборник документов", publisher: "М.: ИЙГАС", year: 2001, pages: 55 },
  { id: 135, authors: "Ар Сантэм, Ар Рисоле", title: "Введение в психиатрию. Учебное пособие", publisher: "М.: ИЙГАС", year: 1998, pages: 52 },
  { id: 136, authors: "Читтапад", title: "Осознание в йоге. Психологическая подготовка инструктора йоги", publisher: "Харьков", year: 1999, pages: 20 },
  { id: 137, authors: "Ар Сантэм", title: "Йога …Глазами учеников… Выпуск 3", publisher: "Екатеринбург", year: 1999, pages: 16 },
  { id: 138, authors: "Ар Сантэм", title: "Йога …Глазами учеников… Выпуск 3", publisher: "Екатеринбург", year: 1999, pages: 24 },
  { id: 139, authors: "Читтапад", title: "Осознание в йоге. Безличностное восприятие мира", publisher: "Харьков", year: 1999, pages: 20 },
  { id: 140, authors: "Ар Сантэм", title: "Осевые религии. Учебное пособие", publisher: "Харьков", year: 1998, pages: 23 },
  { id: 141, authors: "Ар Сантэм, Ари Урта", title: "Становление дирижёра. Чакрам культуры", publisher: "Москва: ИЙГАС", year: 1999, pages: 30 },
  { id: 142, authors: "Ар Сантэм, Ар Хрэнид", title: "О винах. Учебное пособие", publisher: "М.: ИЙГАС", year: 1998, pages: 56 },
  { id: 143, authors: "Ар Сантэм, Ар Шеньги", title: "Выдержки из конструкций разных стран мира. Права и свободы человека. Учебное пособие", publisher: "М.: ИЙГАС", year: 1998, pages: 93 },
  { id: 144, authors: "", title: "Лаосские притчи", publisher: "", year: null, pages: 66 },
];

export default function Library() {
  const [search, setSearch] = useState("");

  const filtered = books.filter((b) => {
    const q = search.toLowerCase();
    return (
      b.title.toLowerCase().includes(q) ||
      b.authors.toLowerCase().includes(q) ||
      String(b.year ?? "").includes(q)
    );
  });

  return (
    <main className="min-h-screen bg-neutral-50">
      <div className="sticky top-0 z-10 bg-white border-b border-neutral-200 px-6 py-4 flex items-center gap-4">
        <Link
          to="/"
          className="text-neutral-500 hover:text-neutral-900 transition-colors text-sm uppercase tracking-wide shrink-0"
        >
          ← Школа
        </Link>
        <div className="flex-1 max-w-xl">
          <div className="relative">
            <Icon name="Search" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              placeholder="Поиск по названию, автору..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-neutral-200 text-sm focus:outline-none focus:border-neutral-400 bg-neutral-50"
            />
          </div>
        </div>
        <span className="text-neutral-400 text-xs shrink-0">{filtered.length} из {books.length}</span>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-400 mb-2">Духовная навигация</p>
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight">
            Учебная литература
          </h1>
          <p className="text-neutral-500 mt-3 text-sm md:text-base">
            Библиотека школы йоги и психологии — {books.length} изданий
          </p>
        </div>

        <div className="divide-y divide-neutral-100">
          {filtered.map((book) => (
            <div key={book.id} className="py-4 flex gap-4 group hover:bg-white -mx-4 px-4 transition-colors">
              <span className="text-neutral-300 text-xs font-mono w-8 shrink-0 pt-0.5 text-right">
                {String(book.id).padStart(3, "0")}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-neutral-900 text-sm md:text-base leading-snug font-medium">
                  {book.title}
                </p>
                {book.authors && (
                  <p className="text-neutral-500 text-xs md:text-sm mt-0.5">{book.authors}</p>
                )}
                <p className="text-neutral-400 text-xs mt-1">
                  {[book.publisher, book.year, book.pages ? `${book.pages} с.` : null]
                    .filter(Boolean)
                    .join(" · ")}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-neutral-400">
            <Icon name="BookOpen" size={32} className="mx-auto mb-3 opacity-40" />
            <p>Ничего не найдено</p>
          </div>
        )}
      </div>
    </main>
  );
}
