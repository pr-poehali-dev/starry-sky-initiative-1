const slides = [
  { num: "01", title: "Русские", desc: "Основное население империи. Крестьянский уклад, православная вера, общинное земледелие." },
  { num: "02", title: "Татары", desc: "Наследники Золотой Орды. Торговые пути, исламская культура, городская жизнь Казани." },
  { num: "03", title: "Украинцы", desc: "Малороссия и Слобожанщина. Казацкие традиции, богатая певческая культура." },
  { num: "04", title: "Башкиры", desc: "Степные кочевники Урала. Скотоводство, эпос «Урал-батыр», борьба за вольности." },
  { num: "05", title: "Чуваши", desc: "Земледельцы Поволжья. Уникальная вышивка, синкретическая вера, мирный нрав." },
  { num: "06", title: "Якуты", desc: "Хозяева Сибири. Оленеводство, эпос олонхо, шаманизм, суровый северный быт." },
  { num: "07", title: "Калмыки", desc: "Буддисты в степи. Откочевали с Джунгарии, принесли письменность «тодо бичиг»." },
  { num: "08", title: "Народы Кавказа", desc: "Грузины, армяне, кабардинцы — горская честь, древние традиции, присоединение к империи." },
];

export default function Featured() {
  return (
    <div id="chapters" className="bg-stone-50 px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <h3 className="uppercase mb-3 text-sm tracking-widest text-stone-500">8 глав · 8 народов</h3>
            <h2 className="text-4xl lg:text-6xl font-bold text-stone-900 leading-tight">
              Великое<br />многообразие
            </h2>
          </div>
          <p className="text-lg text-stone-600 max-w-md lg:text-right leading-relaxed">
            Каждый народ — отдельная вселенная. Листайте главы и открывайте уникальные судьбы, культуры и традиции.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-200">
          {slides.map((slide) => (
            <div
              key={slide.num}
              className="bg-stone-50 p-8 flex flex-col gap-4 hover:bg-amber-50 transition-colors duration-300 group cursor-pointer"
            >
              <span className="text-3xl font-bold text-stone-200 group-hover:text-amber-200 transition-colors duration-300">
                {slide.num}
              </span>
              <h4 className="text-xl font-bold text-stone-900">{slide.title}</h4>
              <p className="text-stone-500 text-sm leading-relaxed">{slide.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
