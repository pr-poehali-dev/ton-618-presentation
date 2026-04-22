import { useState, useEffect, useCallback } from "react";
import Icon from "@/components/ui/icon";

type LucideIconName = Parameters<typeof Icon>[0]["name"];

const TON618_IMAGE = "https://cdn.poehali.dev/projects/9b0c6b99-8f22-41fb-8ebc-18f80c97ab99/files/d929e699-ecb1-4d39-a918-5e4335d9626f.jpg";

interface Slide {
  id: number;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  color: "cyan" | "purple" | "pink" | "orange";
  icon: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "TON 618",
    subtitle: "Самая массивная чёрная дыра во Вселенной",
    color: "cyan",
    icon: "Circle",
    content: (
      <div className="flex flex-col items-center gap-6 text-center">
        <div className="relative animate-float">
          <img
            src={TON618_IMAGE}
            alt="TON 618"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover"
            style={{ boxShadow: "0 0 60px rgba(0,255,255,0.4), 0 0 120px rgba(191,0,255,0.2)" }}
          />
          <div className="absolute inset-0 rounded-full" style={{ background: "radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.3) 100%)" }} />
        </div>
        <div className="neon-border-cyan rounded-2xl px-6 py-4 bg-black/40 max-w-md">
          <p className="text-white/80 text-sm leading-relaxed">Реферат по астрономии</p>
          <div className="accent-line my-2" />
          <p className="neon-text-cyan orbitron text-xs tracking-widest uppercase">Ученик 9Б класса</p>
          <p className="text-white font-medium text-sm mt-1">Николаенко Илья</p>
          <p className="text-white/60 text-xs mt-1">Апрель 2026 г.</p>
        </div>
        <div className="flex gap-4 text-xs text-white/40">
          <span>📍 Созвездие Гончих Псов</span>
          <span>•</span>
          <span>🌌 10,4 млрд св. лет от Земли</span>
        </div>
        <p className="student-note">* слайды делал сам, честно, почти всё ночью</p>
      </div>
    ),
  },
  {
    id: 2,
    title: "История открытия",
    subtitle: "Как человечество нашло этого монстра",
    color: "purple",
    icon: "BookOpen",
    content: (
      <div className="grid gap-4 w-full max-w-2xl">
        {[
          { year: "1970", icon: "Telescope", text: "Обнаружен в обзоре Торонтского университета как квазар. Название происходит от слова «Торонто» и порядкового номера 618 в каталоге." },
          { year: "2004", icon: "Search", text: "Учёные впервые начали серьёзно измерять его параметры с помощью спектроскопических наблюдений." },
          { year: "2021", icon: "Star", text: "Исследователи подтвердили: TON 618 — крупнейший из известных квазаров. Масса официально установлена — 66 миллиардов солнечных масс." },
        ].map(({ year, icon, text }) => (
          <div key={year} className="neon-border-purple rounded-xl p-4 bg-black/40 stat-card flex gap-4">
            <div className="flex-shrink-0 flex flex-col items-center gap-1">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "rgba(191,0,255,0.2)", border: "1px solid rgba(191,0,255,0.5)" }}>
                <Icon name={icon as LucideIconName} size={18} className="neon-text-purple" />
              </div>
              <span className="orbitron text-xs neon-text-purple">{year}</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">{text}</p>
          </div>
        ))}
        <p className="student-note text-right">* изучал по Википедии и научным статьям</p>
      </div>
    ),
  },
  {
    id: 3,
    title: "Физические параметры",
    subtitle: "Цифры, которые сложно представить",
    color: "cyan",
    icon: "BarChart2",
    content: (
      <div className="grid grid-cols-2 gap-4 w-full max-w-2xl">
        {[
          { label: "Масса", value: "66 млрд ☀️", sub: "солнечных масс", color: "cyan" },
          { label: "Диаметр", value: "~40 световых лет", sub: "горизонт событий", color: "purple" },
          { label: "Расстояние", value: "10,4 млрд", sub: "световых лет от Земли", color: "pink" },
          { label: "Тип", value: "Квазар", sub: "сверхмассивная ЧД + аккреционный диск", color: "orange" },
          { label: "Светимость", value: "4×10⁴⁰ Вт", sub: "в 140 трлн раз ярче Солнца", color: "cyan" },
          { label: "Возраст", value: "~10,4 млрд лет", sub: "образовалась вскоре после Большого взрыва", color: "purple" },
        ].map(({ label, value, sub, color }) => (
          <div key={label} className={`neon-border-${color} rounded-xl p-4 bg-black/40 stat-card`}>
            <p className="text-white/50 text-xs uppercase tracking-wider mb-1">{label}</p>
            <p className={`orbitron neon-text-${color} font-bold text-sm md:text-base`}>{value}</p>
            <p className="text-white/50 text-xs mt-1">{sub}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 4,
    title: "Масса: рекорд Вселенной",
    subtitle: "Почему это поражает учёных",
    color: "orange",
    icon: "Zap",
    content: (
      <div className="flex flex-col gap-5 w-full max-w-2xl">
        <div className="neon-border-orange rounded-2xl p-5 bg-black/40 text-center">
          <p className="orbitron neon-text-orange text-4xl md:text-5xl font-black">66 000 000 000</p>
          <p className="text-white/60 text-sm mt-1">солнечных масс в одной чёрной дыре</p>
        </div>
        <div className="grid grid-cols-1 gap-3">
          {[
            { emoji: "🌍", text: "Если бы TON 618 была на месте Солнца — горизонт событий поглотил бы всю нашу Солнечную систему" },
            { emoji: "🌀", text: "Чёрная дыра Млечного Пути (Sgr A*) весит 4 млн масс Солнца — TON 618 в 16 500 раз тяжелее!" },
            { emoji: "💡", text: "Аккреционный диск TON 618 светится ярче, чем 140 триллионов Солнц — это видно с расстояния миллиардов световых лет" },
          ].map(({ emoji, text }) => (
            <div key={text} className="neon-border-orange rounded-xl p-3 bg-black/40 flex gap-3 stat-card">
              <span className="text-2xl flex-shrink-0">{emoji}</span>
              <p className="text-white/80 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
        <p className="student-note text-right">* эти числа я долго перепроверял, они правильные</p>
      </div>
    ),
  },
  {
    id: 5,
    title: "Строение чёрной дыры",
    subtitle: "Что скрывается внутри TON 618",
    color: "purple",
    icon: "Layers",
    content: (
      <div className="flex flex-col gap-4 w-full max-w-2xl">
        <div className="relative flex items-center justify-center mb-2">
          <div className="relative">
            <div className="w-24 h-24 rounded-full flex items-center justify-center"
              style={{ background: "radial-gradient(circle, #000 60%, rgba(191,0,255,0.8) 100%)", boxShadow: "0 0 40px rgba(191,0,255,0.6)" }}>
              <span className="text-xs text-white/60 orbitron text-center leading-tight">сингу-<br />лярность</span>
            </div>
            <div className="absolute inset-0 -m-4 rounded-full border border-purple-400/30 animate-spin-slow" style={{ borderStyle: "dashed" }} />
            <div className="absolute inset-0 -m-8 rounded-full border border-cyan-400/20 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "30s" }} />
          </div>
        </div>
        {[
          { title: "Сингулярность", desc: "Точка бесконечной плотности в центре — все законы физики здесь перестают работать", color: "purple" },
          { title: "Горизонт событий", desc: "Граница, за которой даже свет не может вырваться. Радиус — около 20 световых лет", color: "cyan" },
          { title: "Аккреционный диск", desc: "Раскалённая материя, падающая в ЧД по спирали. Температура миллионы градусов, именно он светится", color: "orange" },
          { title: "Релятивистские джеты", desc: "Плазменные выбросы перпендикулярно диску со скоростью, близкой к световой. Длина — тысячи световых лет", color: "pink" },
        ].map(({ title, desc, color }) => (
          <div key={title} className={`neon-border-${color} rounded-xl p-3 bg-black/40 stat-card flex gap-3`}>
            <div className="w-2 rounded-full flex-shrink-0" style={{ background: `var(--neon-${color})`, boxShadow: `0 0 8px var(--neon-${color})` }} />
            <div>
              <p className={`orbitron neon-text-${color} text-xs font-bold mb-1`}>{title}</p>
              <p className="text-white/70 text-xs leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 6,
    title: "Квазар: двигатель TON 618",
    subtitle: "Что такое квазар и почему это важно",
    color: "cyan",
    icon: "Radio",
    content: (
      <div className="flex flex-col gap-5 w-full max-w-2xl">
        <div className="neon-border-cyan rounded-2xl p-4 bg-black/40 text-center">
          <p className="orbitron neon-text-cyan text-lg font-bold">КВАЗАР = Чёрная дыра + Аккреционный диск</p>
          <div className="accent-line my-3" />
          <p className="text-white/70 text-sm">Quasi-Stellar Radio Source — «квазизвёздный радиоисточник»</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: "Flame", label: "Энергия", text: "Квазары — самые мощные источники энергии во Вселенной" },
            { icon: "Clock", label: "Эпоха", text: "Большинство квазаров существовали в ранней Вселенной (3–10 млрд лет назад)" },
            { icon: "Wifi", label: "Излучение", text: "Испускает радиоволны, рентген, видимый свет и ультрафиолет одновременно" },
            { icon: "TrendingDown", label: "Угасание", text: "TON 618 сейчас «тихий» — активное питание прекратилось миллиарды лет назад" },
          ].map(({ icon, label, text }) => (
            <div key={label} className="neon-border-cyan rounded-xl p-3 bg-black/40 stat-card">
              <div className="flex items-center gap-2 mb-1">
                <Icon name={icon as LucideIconName} size={14} className="neon-text-cyan" />
                <span className="orbitron neon-text-cyan text-xs">{label}</span>
              </div>
              <p className="text-white/70 text-xs leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
        <p className="student-note">* квазары — это не звёзды, несмотря на название</p>
      </div>
    ),
  },
  {
    id: 7,
    title: "Методы наблюдения",
    subtitle: "Как учёные изучают объект за 10 млрд световых лет",
    color: "pink",
    icon: "Eye",
    content: (
      <div className="flex flex-col gap-4 w-full max-w-2xl">
        {[
          {
            method: "Спектроскопия",
            icon: "ScanLine",
            desc: "Анализ спектра излучения позволяет определить состав, температуру и скорость движения вещества вокруг ЧД",
            result: "→ Измерена масса 66 млрд M☀",
          },
          {
            method: "Радиотелескопы",
            icon: "Radio",
            desc: "Глобальная сеть VLBI фиксирует радиоизлучение джетов с субмиллисекундным угловым разрешением",
            result: "→ Изучена структура джетов",
          },
          {
            method: "Рентгеновские обсерватории",
            icon: "Zap",
            desc: "Спутники Chandra и XMM-Newton видят горячую корону вокруг аккреционного диска в рентгеновском диапазоне",
            result: "→ Температура короны ~10⁹ К",
          },
          {
            method: "Оптические телескопы",
            icon: "Telescope",
            desc: "Хаббл и наземные телескопы изучают квазарное излучение в видимом диапазоне",
            result: "→ Красное смещение z = 2,219",
          },
        ].map(({ method, icon, desc, result }) => (
          <div key={method} className="neon-border-pink rounded-xl p-4 bg-black/40 stat-card flex gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(255,0,255,0.15)", border: "1px solid rgba(255,0,255,0.4)" }}>
              <Icon name={icon as LucideIconName} size={16} className="neon-text-pink" />
            </div>
            <div>
              <p className="orbitron neon-text-pink text-xs font-bold mb-1">{method}</p>
              <p className="text-white/70 text-xs leading-relaxed mb-1">{desc}</p>
              <p className="text-white/40 text-xs italic">{result}</p>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 8,
    title: "Красное смещение",
    subtitle: "Окно в прошлое Вселенной",
    color: "orange",
    icon: "MoveRight",
    content: (
      <div className="flex flex-col gap-5 w-full max-w-2xl">
        <div className="neon-border-orange rounded-2xl p-5 bg-black/40">
          <div className="flex items-center justify-between mb-3">
            <span className="text-white/50 text-xs">Фиолетовый (близко)</span>
            <span className="text-white/50 text-xs">Красный (далеко)</span>
          </div>
          <div className="h-6 rounded-full" style={{ background: "linear-gradient(90deg, #8800ff, #0000ff, #00ffff, #00ff00, #ffff00, #ff6600, #ff0000)" }} />
          <div className="flex justify-end mt-2">
            <div className="w-4 h-4 rounded-full" style={{ background: "#ff4400", boxShadow: "0 0 10px #ff4400" }} />
          </div>
          <p className="text-white/60 text-xs mt-2 text-right">z = 2,219 — свет вышел 10,4 млрд лет назад</p>
        </div>
        <div className="grid gap-3">
          {[
            { emoji: "⏳", text: "Мы наблюдаем TON 618 такой, какой она была 10,4 миллиарда лет назад — до появления Солнца" },
            { emoji: "🔭", text: "Красное смещение z=2.219 означает: длина волны света увеличилась в 3.219 раза за время путешествия" },
            { emoji: "🚀", text: "Реальное расстояние сейчас с учётом расширения Вселенной — около 32 миллиардов световых лет" },
          ].map(({ emoji, text }) => (
            <div key={text} className="neon-border-orange rounded-xl p-3 bg-black/40 flex gap-3 stat-card">
              <span className="text-xl">{emoji}</span>
              <p className="text-white/80 text-sm">{text}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 9,
    title: "Научное значение",
    subtitle: "Почему TON 618 важен для науки",
    color: "purple",
    icon: "Award",
    content: (
      <div className="flex flex-col gap-4 w-full max-w-2xl">
        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: "Globe", title: "Космология", text: "TON 618 помогает понять, как формировались галактики и ЧД в ранней Вселенной", color: "purple" },
            { icon: "Atom", title: "Физика", text: "Предельные условия — идеальная лаборатория для проверки ОТО Эйнштейна в экстремальных случаях", color: "cyan" },
            { icon: "TrendingUp", title: "Рост ЧД", text: "Загадка: как ЧД выросла до 66 млрд масс за столь короткое время после Большого взрыва?", color: "orange" },
            { icon: "Layers", title: "Галактики", text: "Квазары влияли на формирование галактик через обратную связь — энергия разгоняла газ", color: "pink" },
          ].map(({ icon, title, text, color }) => (
            <div key={title} className={`neon-border-${color} rounded-xl p-4 bg-black/40 stat-card`}>
              <div className="flex items-center gap-2 mb-2">
                <Icon name={icon as LucideIconName} size={14} className={`neon-text-${color}`} />
                <span className={`orbitron neon-text-${color} text-xs font-bold`}>{title}</span>
              </div>
              <p className="text-white/70 text-xs leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
        <div className="neon-border-purple rounded-xl p-4 bg-black/40">
          <p className="text-white/80 text-sm leading-relaxed text-center">
            <span className="neon-text-purple font-bold">TON 618 — рекордсмен:</span> это самая массивная из всех известных чёрных дыр во Вселенной, что делает её уникальным объектом для изучения пределов возможного в природе
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 10,
    title: "Рекорды TON 618",
    subtitle: "Абсолютные чемпионы Вселенной",
    color: "cyan",
    icon: "Trophy",
    content: (
      <div className="flex flex-col gap-4 w-full max-w-2xl">
        {[
          { rank: "🥇 #1", title: "Самая массивная ЧД", value: "66 млрд M☀", note: "Превосходит ближайшего конкурента Holm 15A*", color: "cyan" },
          { rank: "🌟 ТОП", title: "Один из ярчайших квазаров", value: "140 трлн L☀", note: "Светимость в 140 триллионов раз больше солнечной", color: "orange" },
          { rank: "📏 МАКС", title: "Крупнейший горизонт событий", value: "≈ 40 св. лет", note: "Диаметр сравним с расстоянием до ближайших звёзд", color: "purple" },
          { rank: "🕰️ ДРЕВ", title: "Одна из старейших изученных ЧД", value: "~13 млрд лет", note: "Образовалась через ~700 млн лет после Большого взрыва", color: "pink" },
        ].map(({ rank, title, value, note, color }) => (
          <div key={title} className={`neon-border-${color} rounded-xl p-4 bg-black/40 stat-card flex gap-4 items-center`}>
            <div className="text-2xl flex-shrink-0">{rank}</div>
            <div className="flex-1">
              <p className={`orbitron neon-text-${color} text-xs font-bold`}>{title}</p>
              <p className={`orbitron text-lg font-black neon-text-${color} mt-1`}>{value}</p>
              <p className="text-white/50 text-xs mt-1">{note}</p>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 11,
    title: "Интересные факты",
    subtitle: "То, что удивит даже взрослых",
    color: "pink",
    icon: "Lightbulb",
    content: (
      <div className="grid grid-cols-2 gap-3 w-full max-w-2xl">
        {[
          { emoji: "🌌", text: "Если бы вы падали в TON 618, приливные силы разорвали бы вас раньше, чем вы пересекли горизонт событий" },
          { emoji: "⚡", text: "Аккреционный диск TON 618 вращается так быстро, что материя разгоняется до 10% скорости света" },
          { emoji: "🎵", text: "Чёрные дыры «поют» — излучают звуковые волны в газ вокруг себя, но с частотой в 57 октав ниже до" },
          { emoji: "📡", text: "Сигнал от TON 618 шёл к нам 10,4 млрд лет — в это время не существовало ни Солнца, ни Земли" },
          { emoji: "🧊", text: "Несмотря на огромную массу, средняя плотность TON 618 меньше плотности воды — она такая огромная!" },
          { emoji: "🔮", text: "Внутри горизонта событий время и пространство меняются местами — будущее неизбежно направлено к сингулярности" },
        ].map(({ emoji, text }) => (
          <div key={text} className="neon-border-pink rounded-xl p-3 bg-black/40 stat-card flex gap-2">
            <span className="text-lg flex-shrink-0">{emoji}</span>
            <p className="text-white/75 text-xs leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 12,
    title: "Будущие исследования",
    subtitle: "Что нас ещё ждёт впереди",
    color: "orange",
    icon: "Rocket",
    content: (
      <div className="flex flex-col gap-4 w-full max-w-2xl">
        <div className="neon-border-orange rounded-2xl p-4 bg-black/40">
          <p className="text-white/70 text-sm text-center leading-relaxed">
            Телескоп Джеймса Уэбба (запущен 2021) открывает новую эру изучения TON 618 — он видит инфракрасное излучение, недоступное предшественникам
          </p>
        </div>
        <div className="flex flex-col gap-3">
          {[
            { year: "2026–2030", icon: "Aperture", title: "EHT Next Gen", text: "Расширенная версия телескопа горизонта событий попробует «сфотографировать» TON 618 напрямую", color: "orange" },
            { year: "2030+", icon: "Satellite", title: "Космические интерферометры", text: "Орбитальные радиотелескопы увеличат базу до тысяч километров — сверхвысокое разрешение", color: "cyan" },
            { year: "Будущее", icon: "Waves", title: "Гравитационные волны", text: "LISA (2035) попытается поймать гравитационные волны от столкновений сверхмассивных ЧД", color: "purple" },
          ].map(({ year, icon, title, text, color }) => (
            <div key={title} className={`neon-border-${color} rounded-xl p-4 bg-black/40 stat-card flex gap-3`}>
              <div className="flex-shrink-0 text-center">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-1" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <Icon name={icon as LucideIconName} size={16} className={`neon-text-${color}`} />
                </div>
                <span className={`orbitron neon-text-${color} text-xs`}>{year}</span>
              </div>
              <div>
                <p className={`orbitron neon-text-${color} text-xs font-bold mb-1`}>{title}</p>
                <p className="text-white/70 text-xs leading-relaxed">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 13,
    title: "Выводы",
    subtitle: "Что я узнал, пока делал этот реферат",
    color: "cyan",
    icon: "CheckCircle",
    content: (
      <div className="flex flex-col gap-5 w-full max-w-2xl">
        <div className="grid gap-3">
          {[
            { num: "01", text: "TON 618 — абсолютный рекордсмен среди чёрных дыр. Её масса в 66 миллиардов солнечных масс превосходит воображение" },
            { num: "02", text: "Несмотря на огромное расстояние, наука нашла способы изучить объект с точностью до миллиардов лет его жизни" },
            { num: "03", text: "TON 618 — ключ к пониманию ранней Вселенной и того, как формировались первые галактики" },
            { num: "04", text: "Квазары — не просто «яркие точки»: это самые мощные источники энергии, известные человечеству" },
          ].map(({ num, text }) => (
            <div key={num} className="neon-border-cyan rounded-xl p-3 bg-black/40 stat-card flex gap-3">
              <span className="orbitron neon-text-cyan text-2xl font-black flex-shrink-0">{num}</span>
              <p className="text-white/80 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
        <div className="neon-border-purple rounded-2xl p-4 bg-black/40 text-center">
          <p className="neon-text-purple orbitron font-bold text-sm mb-2">Список источников</p>
          <div className="accent-line mb-2" />
          <p className="text-white/60 text-xs leading-relaxed">
            Astronomia.ru • NASA.gov • Wikipedia • ESA Science Hub •<br />
            «Чёрные дыры» — С. Хокинг • National Geographic
          </p>
        </div>
        <div className="text-center">
          <p className="neon-text-cyan orbitron text-xs tracking-widest">РАБОТУ ВЫПОЛНИЛ УЧЕНИК 9Б КЛАССА</p>
          <p className="student-note mt-1">* если будут вопросы — я читал, честно, просто немного нервничаю 😅</p>
        </div>
      </div>
    ),
  },
];

const colorMap = {
  cyan: { text: "neon-text-cyan", border: "neon-border-cyan", glow: "rgba(0,255,255,0.3)" },
  purple: { text: "neon-text-purple", border: "neon-border-purple", glow: "rgba(191,0,255,0.3)" },
  pink: { text: "neon-text-pink", border: "neon-border-pink", glow: "rgba(255,0,255,0.3)" },
  orange: { text: "neon-text-orange", border: "neon-border-orange", glow: "rgba(255,102,0,0.3)" },
};

export default function Index() {
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  const goTo = useCallback((idx: number) => {
    if (idx < 0 || idx >= slides.length) return;
    setCurrent(idx);
    setAnimKey((k) => k + 1);
  }, []);

  const goNext = useCallback(() => goTo(current + 1), [current, goTo]);
  const goPrev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") goNext();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") goPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goNext, goPrev]);

  const slide = slides[current];
  const colors = colorMap[slide.color];
  const progress = ((current + 1) / slides.length) * 100;

  return (
    <div className="min-h-screen stars-bg flex flex-col" style={{ minHeight: "100dvh" }}>
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-white/5">
        <div
          className="progress-bar h-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Header */}
      <div className="fixed top-2 left-0 right-0 z-40 flex items-center justify-between px-4 md:px-8 pt-2">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full animate-pulse-neon" style={{ background: `var(--neon-${slide.color})`, boxShadow: `0 0 8px var(--neon-${slide.color})` }} />
          <span className="orbitron text-xs text-white/40 hidden sm:block">TON 618</span>
        </div>
        <div className="orbitron text-xs text-white/40">
          <span className={colors.text}>{String(current + 1).padStart(2, "0")}</span>
          <span className="text-white/20"> / {String(slides.length).padStart(2, "0")}</span>
        </div>
        <div className="flex gap-1">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="transition-all duration-300"
              style={{
                width: i === current ? "20px" : "6px",
                height: "6px",
                borderRadius: "3px",
                background: i === current ? `var(--neon-${slide.color})` : "rgba(255,255,255,0.2)",
                boxShadow: i === current ? `0 0 6px var(--neon-${slide.color})` : "none",
              }}
            />
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 pt-16 pb-20 relative z-10">
        <div key={animKey} className="slide w-full max-w-3xl flex flex-col items-center gap-6">
          {/* Slide header */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `rgba(0,0,0,0.4)`, border: `1px solid var(--neon-${slide.color})`, boxShadow: `0 0 12px var(--neon-${slide.color})` }}>
                <Icon name={slide.icon as LucideIconName} size={16} className={colors.text} />
              </div>
              <h1 className={`orbitron font-black text-xl md:text-3xl ${colors.text}`}>
                {slide.title}
              </h1>
            </div>
            {slide.subtitle && (
              <p className="text-white/50 text-sm md:text-base">{slide.subtitle}</p>
            )}
            <div className="accent-line mt-3" />
          </div>

          {/* Slide content */}
          <div className="w-full flex justify-center">
            {slide.content}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between px-4 md:px-8 pb-4 pt-2" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)" }}>
        <button
          onClick={goPrev}
          disabled={current === 0}
          className="flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed"
          style={{ border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.05)" }}
        >
          <Icon name="ChevronLeft" size={16} className="text-white/70" />
          <span className="text-white/70 text-sm hidden sm:block">Назад</span>
        </button>

        <p className="text-white/30 text-xs orbitron">← → для навигации</p>

        <button
          onClick={goNext}
          disabled={current === slides.length - 1}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed ${colors.border}`}
          style={{ background: "rgba(0,0,0,0.4)" }}
        >
          <span className={`${colors.text} text-sm hidden sm:block`}>Далее</span>
          <Icon name="ChevronRight" size={16} className={colors.text} />
        </button>
      </div>
    </div>
  );
}