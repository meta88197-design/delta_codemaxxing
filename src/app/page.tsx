"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const designDirections = [
  {
    title: "Театры и дворцы культуры",
    description: "Проектирование сценических, световых, звуковых и мультимедийных систем для учреждений культуры."
  },
  {
    title: "Школы",
    description: "Технологические решения для актовых залов, образовательных пространств и систем оповещения."
  },
  {
    title: "Спортивные объекты",
    description: "Оснащение арен и комплексов с учетом регламентов соревнований и эксплуатационных сценариев."
  }
];

const lifecycleSteps = [
  { id: 1, title: "Сбор данных по объекту", icon: "collect", x: 20, y: 20 },
  { id: 2, title: "Расчет стоимости и заключение договора", icon: "contract", x: 73, y: 26 },
  { id: 3, title: "Проектирование", icon: "design", x: 34, y: 42 },
  { id: 4, title: "Сопровождение экспертизы", icon: "expertise", x: 74, y: 56 },
  { id: 5, title: "Выдача проектно-сметной документации", icon: "docs", x: 22, y: 72 },
  { id: 6, title: "Сопровождение проекта (авторский надзор)", icon: "supervise", x: 59, y: 84 }
] as const;

const processDots = [
  { id: 1, x: 46, y: 20 },
  { id: 2, x: 52, y: 38 },
  { id: 3, x: 46, y: 52 },
  { id: 4, x: 52, y: 67 },
  { id: 5, x: 43, y: 82 }
];

const benefits = [
  { title: "Опыт по всей России", icon: "map" },
  { title: "Сильная инженерная команда", icon: "like" },
  { title: "Подтвержденное качество", icon: "award" }
] as const;

const easeCurve: [number, number, number, number] = [0.22, 1, 0.36, 1];

const rise: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, delay, ease: easeCurve }
  })
};

const roadmapPath: Variants = {
  hidden: { pathLength: 0, opacity: 0.2 },
  show: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.2, delay: 0.15, ease: [0.37, 0, 0.63, 1] }
  }
};

const roadmapDot: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  show: (order: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.36, delay: 0.45 + order * 0.26, ease: easeCurve }
  })
};

const roadmapStage: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.96 },
  show: (order: number = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.46, delay: 0.6 + order * 0.26, ease: easeCurve }
  })
};

const containerClass = "mx-auto w-full max-w-[1120px] px-5 md:px-8";

function ProcessIcon({
  kind
}: {
  kind: "collect" | "contract" | "design" | "expertise" | "docs" | "supervise";
}) {
  switch (kind) {
    case "collect":
      return (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.7">
          <path d="M3 7.5h18v12H3z" />
          <path d="M8 7.5V3h8v4.5" />
          <path d="M8 12h8M8 16h5" />
        </svg>
      );
    case "contract":
      return (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.7">
          <path d="M6 3h8l4 4v14H6z" />
          <path d="M14 3v4h4M9 12h6M9 16h4" />
          <path d="m14.5 14.5 4-4 1.5 1.5-4 4-2 .5z" />
        </svg>
      );
    case "design":
      return (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.7">
          <path d="M4 19h16M6 16l8-8 4 4-8 8H6z" />
          <path d="M9 8 7 6M16 5v4M19 8h-4" />
        </svg>
      );
    case "expertise":
      return (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.7">
          <path d="M6 3h10l2 2v16H6z" />
          <path d="M9 10h6M9 14h6" />
          <circle cx="9" cy="18" r="2.2" />
          <path d="m10.7 19.7 2.8 2.3" />
        </svg>
      );
    case "docs":
      return (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.7">
          <path d="M7 5h10v14H7z" />
          <path d="M4 8h10v13H4z" />
          <path d="M10 9h4M10 12h4M10 15h3" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.7">
          <circle cx="12" cy="7" r="3" />
          <path d="M12 10v8M6 21l4-6h4l4 6M4 21h16" />
        </svg>
      );
  }
}

function BenefitIcon({ kind }: { kind: "map" | "like" | "award" }) {
  switch (kind) {
    case "map":
      return (
        <svg viewBox="0 0 24 24" className="h-11 w-11" fill="none" stroke="currentColor" strokeWidth="1.7">
          <path d="M12 21s6-6.3 6-10a6 6 0 1 0-12 0c0 3.7 6 10 6 10z" />
          <circle cx="12" cy="11" r="2.2" />
        </svg>
      );
    case "like":
      return (
        <svg viewBox="0 0 24 24" className="h-11 w-11" fill="none" stroke="currentColor" strokeWidth="1.7">
          <path d="M10 11V5.8A2.8 2.8 0 0 1 12.8 3c.9 0 1.6.7 1.6 1.6v2.7l3.2.1a1.9 1.9 0 0 1 1.9 2.3l-1 5.1a2.5 2.5 0 0 1-2.5 2H10" />
          <path d="M4 10h4v8H4z" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className="h-11 w-11" fill="none" stroke="currentColor" strokeWidth="1.7">
          <path d="m12 3 2.3 4.6L19 8.3l-3.5 3.4.8 4.8-4.3-2.2-4.3 2.2.8-4.8L5 8.3l4.7-.7z" />
          <path d="M6 21h12" />
        </svg>
      );
  }
}

export default function Home() {
  return (
    <main className="bg-delta-paper text-delta-ink">
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[rgba(241,241,241,0.9)] backdrop-blur">
        <div className={`${containerClass} flex h-16 items-center justify-between`}>
          <p className="font-[var(--font-raleway)] text-lg font-semibold tracking-[0.08em]">ЦП ДЕЛЬТА</p>
          <nav className="hidden items-center gap-6 text-sm font-medium text-black/70 md:flex">
            <a href="#about" className="transition hover:text-black">
              О компании
            </a>
            <a href="#projects" className="transition hover:text-black">
              Мы проектируем
            </a>
            <a href="#partners" className="transition hover:text-black">
              Партнеры
            </a>
          </nav>
        </div>
      </header>

      <section id="about" className="border-b border-black/10">
        <div className={`${containerClass} py-20 md:py-24`}>
          <motion.div
            className="grid gap-12 md:grid-cols-[1fr_1.35fr] md:gap-16"
            variants={rise}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            custom={0.08}
          >
            <div>
              <h2 className="font-[var(--font-raleway)] text-[46px] font-semibold leading-[0.98] tracking-[-0.02em] md:text-[64px]">
                О компании
              </h2>
              <p className="mt-10 text-[15px] font-medium leading-tight text-black/[0.45] md:text-[22px]">Ключевые слова о компании</p>
            </div>
            <div className="max-w-[620px] space-y-6 text-[18px] leading-[1.44] text-black/[0.82] md:text-[29px]">
              <p>Краткая история и важные моменты, связанные с ЦП Дельта.</p>
              <p>
                Мы создаем проектную, рабочую и сметную документацию для театров, спортивных комплексов, учебных
                пространств и культурных объектов.
              </p>
              <p>Соблюдаем точность в расчетах, соблюдаем сроки и сопровождаем объект до запуска.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="projects" className="relative border-b border-black/10">
        <div className="absolute inset-0 blueprint-grid" />
        <div className="absolute inset-0 bg-white/70" />
        <div className={`${containerClass} relative py-20 md:py-24`}>
          <motion.h2
            className="text-center font-[var(--font-raleway)] text-4xl font-semibold tracking-[-0.01em] md:text-[58px]"
            variants={rise}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            Мы проектируем
          </motion.h2>

          <div className="mt-12 space-y-5 md:mt-16 md:space-y-8">
            {designDirections.map((item, idx) => (
              <motion.article
                key={item.title}
                variants={rise}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                custom={0.12 + idx * 0.08}
                className="grid items-center gap-4 rounded-2xl border border-black/10 bg-white/[0.65] px-5 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.06)] md:grid-cols-[1fr_auto] md:px-8 md:py-5"
              >
                <div>
                  <p className="text-[17px] font-semibold text-black md:text-[31px]">{item.title}</p>
                  <p className="mt-2 max-w-[800px] text-[14px] leading-relaxed text-black/[0.62] md:text-[22px]">{item.description}</p>
                </div>
                <button
                  type="button"
                  className="h-12 w-32 rounded-full bg-delta-accent px-5 text-[13px] font-semibold text-black transition hover:brightness-95 md:h-16 md:w-40 md:text-[19px]"
                >
                  подробнее
                </button>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-delta-cta">
        <div className={`${containerClass} py-24 md:py-28`}>
          <motion.div
            className="mx-auto max-w-4xl text-center"
            variants={rise}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            custom={0.08}
          >
            <h2 className="font-[var(--font-raleway)] text-4xl font-semibold leading-tight tracking-[-0.01em] text-white md:text-[58px]">
              Проектируем системы, которые работают годами
            </h2>
            <p className="mx-auto mt-7 max-w-3xl text-[17px] leading-relaxed text-white/80 md:text-[28px]">
              От сбора исходных данных до авторского надзора мы ведем объект по полному циклу и отвечаем за
              результат на каждом этапе.
            </p>
            <div className="mt-12 flex items-center justify-center gap-6 md:gap-10">
              <span className="select-none text-6xl leading-none text-white/85 md:text-7xl">↘</span>
              <button
                type="button"
                className="min-h-[66px] min-w-[240px] rounded-lg border border-black/5 bg-white px-8 text-[16px] font-semibold text-delta-soft-orange transition hover:brightness-95 md:min-h-[76px] md:min-w-[320px] md:text-[25px]"
              >
                Обсудить проект
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-delta-paper">
        <div className={`${containerClass} py-20 md:py-24`}>
          <h2 className="text-center font-[var(--font-raleway)] text-4xl font-semibold tracking-[-0.01em] md:text-[58px]">
            Жизненный цикл проекта
          </h2>

          <div className="mt-10 space-y-4 md:hidden">
            {lifecycleSteps.map((step, idx) => (
              <motion.article
                key={step.id}
                variants={rise}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                custom={0.1 + idx * 0.06}
                className="rounded-2xl border border-black/10 bg-white p-4"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
                    {step.id}
                  </span>
                  <span className="text-black/80">
                    <ProcessIcon kind={step.icon} />
                  </span>
                  <p className="text-[17px] font-semibold leading-tight text-black">{step.title}</p>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            className="relative mt-12 hidden h-[760px] overflow-hidden rounded-[30px] border border-black/10 bg-[#f7f7f7] md:block"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
          >
            <svg viewBox="0 0 1100 760" className="absolute inset-0 h-full w-full">
              <motion.path
                variants={roadmapPath}
                d="M180 150 C 320 50, 430 230, 600 170 C 760 120, 820 260, 700 300 C 560 350, 490 380, 560 460 C 640 550, 680 620, 560 650 C 430 680, 360 670, 250 620"
                fill="none"
                stroke="rgba(0,0,0,0.82)"
                strokeWidth="4"
                strokeDasharray="15 17"
                strokeLinecap="round"
              />
            </svg>

            {processDots.map((dot, idx) => (
              <motion.div
                key={dot.id}
                variants={roadmapDot}
                custom={idx}
                className="absolute z-30 -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${dot.x}%`, top: `${dot.y}%` }}
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-black text-base font-black text-white ring-2 ring-white/85">
                  {dot.id}
                </span>
              </motion.div>
            ))}

            {lifecycleSteps.map((step, idx) => (
              <motion.article
                key={step.id}
                variants={roadmapStage}
                custom={idx}
                className="absolute z-20 w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-black/10 bg-white px-5 py-4 shadow-[0_12px_34px_rgba(0,0,0,0.08)]"
                style={{ left: `${step.x}%`, top: `${step.y}%` }}
              >
                <div className="mb-2 text-black">
                  <ProcessIcon kind={step.icon} />
                </div>
                <p className="text-[16px] font-semibold leading-[1.22] text-black">{step.title}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="border-b border-black/10">
        <div className={`${containerClass} py-20 md:py-24`}>
          <h2 className="text-center font-[var(--font-raleway)] text-4xl font-semibold tracking-[-0.01em] md:text-[58px]">
            Преимущества компании
          </h2>
          <div className="mt-14 grid gap-8 md:mt-16 md:grid-cols-3">
            {benefits.map((benefit, idx) => (
              <motion.article
                key={benefit.title}
                variants={rise}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.35 }}
                custom={0.1 + idx * 0.08}
                className="rounded-2xl bg-white/[0.55] px-4 py-8 text-center"
              >
                <div className="mx-auto inline-flex h-[112px] w-[112px] items-center justify-center rounded-full border-[3px] border-delta-soft-orange text-delta-soft-orange">
                  <BenefitIcon kind={benefit.icon} />
                </div>
                <p className="mt-7 text-[16px] font-medium text-black/[0.88] md:text-[28px]">{benefit.title}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="partners">
        <div className={`${containerClass} py-20 md:py-24`}>
          <h2 className="text-center font-[var(--font-raleway)] text-4xl font-semibold tracking-[-0.01em] md:text-[58px]">
            Наши партнеры по проектированию:
          </h2>
          <motion.div
            variants={rise}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.12}
            className="mt-12 overflow-hidden rounded-[28px] border border-black/10 bg-white p-3 shadow-[0_16px_36px_rgba(0,0,0,0.08)] md:p-5"
          >
            <Image
              src="/assets/partners-wall.png"
              alt="Логотипы партнеров компании"
              width={1600}
              height={900}
              className="h-auto w-full rounded-2xl"
            />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
