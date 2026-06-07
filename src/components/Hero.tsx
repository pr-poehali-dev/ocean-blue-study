import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="/images/mountain-landscape.jpg"
          alt="Психологическая лаборатория"
          className="w-full h-full object-cover brightness-50"
        />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <p className="text-xs uppercase tracking-[0.4em] mb-6 opacity-60">Наука о поведении</p>
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight mb-8 leading-none">
          БИХЕВИОРИЗМ
        </h1>
        <p className="text-base md:text-xl max-w-2xl mx-auto opacity-80 leading-relaxed font-light">
          Направление в психологии, утверждающее что всё поведение — это реакция на стимулы. 
          Ни сознание, ни эмоции — только наблюдаемые факты.
        </p>
        <div className="mt-10 w-px h-16 bg-white opacity-40 mx-auto"></div>
      </div>
    </div>
  );
}
