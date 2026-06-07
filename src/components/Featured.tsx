import { useState } from "react";

const founders = [
  {
    name: "Иван Павлов",
    years: "1849 – 1936",
    role: "Физиолог, Нобелевский лауреат",
    image: "https://cdn.poehali.dev/projects/697a7d32-7c5c-4409-a552-112351e5603d/files/8e97ccf0-d2d9-4e55-a05e-158bcdfd573b.jpg",
    description:
      "Русский физиолог, создавший концепцию условных рефлексов. Его эксперименты с собаками доказали: поведение можно формировать через повторяющиеся стимулы. Павлов заложил фундамент, на котором бихевиоризм вырос в полноценную науку.",
    contribution: "Классическое обусловливание",
  },
  {
    name: "Джон Уотсон",
    years: "1878 – 1958",
    role: "Основатель бихевиоризма",
    image: "https://cdn.poehali.dev/projects/697a7d32-7c5c-4409-a552-112351e5603d/files/a3452c01-e16f-4b31-bbc9-9e943a41c208.jpg",
    description:
      "Американский психолог, который в 1913 году опубликовал «Манифест бихевиоризма» и провозгласил: психология должна изучать только поведение, а не сознание. Его скандальный эксперимент «Маленький Альберт» показал, что страхи можно прививать.",
    contribution: "Манифест бихевиоризма, 1913",
  },
  {
    name: "Б. Ф. Скиннер",
    years: "1904 – 1990",
    role: "Радикальный бихевиорист",
    image: "https://cdn.poehali.dev/projects/697a7d32-7c5c-4409-a552-112351e5603d/files/337c8e80-aa97-48cc-ade1-dd7442122c1a.jpg",
    description:
      "Скиннер пошёл дальше всех: он изобрёл «ящик Скиннера» и разработал теорию оперантного обусловливания. Поведение закрепляется наградой и гасится наказанием — этот принцип лежит в основе современной педагогики, маркетинга и UX-дизайна.",
    contribution: "Оперантное обусловливание",
  },
];

export default function Featured() {
  const [active, setActive] = useState(0);
  const founder = founders[active];

  return (
    <div id="founders" className="bg-neutral-950 text-white min-h-screen px-6 py-20 lg:py-0 flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full">
        <p className="uppercase text-xs tracking-[0.4em] text-neutral-500 mb-4">Основоположники</p>
        <h2 className="text-3xl lg:text-5xl font-bold mb-16 text-white leading-tight">
          Люди, изменившие<br />взгляд на психологию
        </h2>

        <div className="flex gap-3 mb-12">
          {founders.map((f, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-4 py-2 text-sm uppercase tracking-wide border transition-all duration-300 cursor-pointer ${
                active === i
                  ? "bg-white text-black border-white"
                  : "bg-transparent text-neutral-400 border-neutral-700 hover:border-neutral-400 hover:text-white"
              }`}
            >
              {f.name}
            </button>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="w-full lg:w-80 flex-shrink-0">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={founder.image}
                alt={founder.name}
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center py-4">
            <span className="text-xs uppercase tracking-widest text-neutral-500 mb-2">{founder.years}</span>
            <h3 className="text-4xl lg:text-6xl font-bold mb-2">{founder.name}</h3>
            <p className="text-neutral-400 text-sm uppercase tracking-wide mb-8">{founder.role}</p>
            <p className="text-neutral-300 text-lg leading-relaxed mb-8 max-w-xl">
              {founder.description}
            </p>
            <div className="border-l-2 border-white pl-4">
              <p className="text-xs uppercase tracking-widest text-neutral-500 mb-1">Главный вклад</p>
              <p className="text-white font-semibold">{founder.contribution}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
