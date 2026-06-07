import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const experiments = [
  {
    title: "Собаки Павлова",
    year: "1890-е",
    scientist: "Иван Павлов",
    description:
      "Павлов кормил собак и одновременно звонил в колокольчик. Вскоре звук колокола вызывал слюноотделение без еды. Так был открыт условный рефлекс — базовый механизм обучения через ассоциации.",
  },
  {
    title: "Маленький Альберт",
    year: "1920",
    scientist: "Джон Уотсон",
    description:
      "9-месячному ребёнку показывали белую крысу и одновременно издавали резкий громкий звук. Альберт начал бояться не только крысы, но и всего пушистого — кролика, шубы, маски Санта-Клауса. Страхи — продукт обучения.",
  },
  {
    title: "Ящик Скиннера",
    year: "1938",
    scientist: "Б. Ф. Скиннер",
    description:
      "Крыса в ящике случайно нажимала рычаг и получала еду. Очень быстро она начала нажимать его намеренно. Скиннер показал: поведение, за которым следует награда, повторяется. Этот принцип — основа систем геймификации и мотивации.",
  },
  {
    title: "Кукла Бобо",
    year: "1961",
    scientist: "Альберт Бандура",
    description:
      "Дети наблюдали, как взрослые агрессивно бьют надувную куклу. После — дети повторяли то же самое. Бандура доказал: поведение усваивается через наблюдение, а не только через личный опыт. Это перевернуло бихевиоризм.",
  },
];

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <>
      <div
        ref={container}
        className="relative flex items-center justify-center h-screen overflow-hidden"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
          <motion.div style={{ y }} className="relative w-full h-full">
            <img
              src="https://cdn.poehali.dev/projects/697a7d32-7c5c-4409-a552-112351e5603d/files/301d5b49-2040-4e64-a0b5-ba9f1d38f2e3.jpg"
              alt="Психологическая лаборатория"
              className="w-full h-full object-cover brightness-40"
            />
          </motion.div>
        </div>

        <h3 className="absolute top-12 right-6 text-white uppercase z-10 text-sm md:text-base tracking-widest opacity-60">
          Ключевые эксперименты
        </h3>

        <p className="absolute bottom-12 right-6 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-3xl z-10 leading-tight font-light">
          Каждый эксперимент — шаг к пониманию того, как рождается поведение человека и животного.
        </p>
      </div>

      <div id="experiments" className="bg-neutral-950 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase text-xs tracking-[0.4em] text-neutral-500 mb-4">Наука в действии</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-16">
            Эксперименты,<br />которые изменили всё
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-800">
            {experiments.map((exp, i) => (
              <div key={i} className="bg-neutral-950 p-8 hover:bg-neutral-900 transition-colors duration-300">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs uppercase tracking-widest text-neutral-500">{exp.scientist}</span>
                  <span className="text-xs text-neutral-600 font-mono">{exp.year}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{exp.title}</h3>
                <p className="text-neutral-400 leading-relaxed text-sm">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
