import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiArrowDownRight, FiDownload, FiMapPin } from "react-icons/fi";

const roles = ["Android Developer", "Flutter Developer", "Frontend Developer"];

export default function Hero({ data }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [imageError, setImageError] = useState(false);

  const MotionSection = motion.section;
  const MotionDiv = motion.div;
  const MotionParagraph = motion.p;

  const initials = data.name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <MotionSection
      id="home"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative mx-auto w-full max-w-6xl px-4 pb-14 pt-12 sm:px-6 lg:px-8 lg:pt-16"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] overflow-hidden">
        <div className="absolute -left-24 top-8 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-[-30px] top-24 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="text-center lg:text-left">
          <p className="mx-auto mb-4 inline-flex rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-200 lg:mx-0">
            Open to Android / Mobile App Developer roles
          </p>

          <h1 className="text-balance text-4xl font-black leading-[1.05] text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
            {data.name}
          </h1>

          <div className="mt-4 h-9 overflow-hidden">
            <AnimatePresence mode="wait">
              <MotionParagraph
                key={roles[roleIndex]}
                initial={{ y: 18, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -18, opacity: 0 }}
                transition={{ duration: 0.32, ease: "easeOut" }}
                className="inline-block bg-gradient-to-r from-cyan-600 via-sky-500 to-indigo-500 bg-clip-text text-xl font-semibold text-transparent dark:from-cyan-300 dark:via-sky-300 dark:to-indigo-300"
              >
                {roles[roleIndex]}
              </MotionParagraph>
            </AnimatePresence>
          </div>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-300 lg:mx-0">
            Building scalable Android and Flutter products with clean architecture, polished UI, and performance-first
            engineering.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a
              href="https://drive.usercontent.google.com/u/0/uc?id=1GhQinAYv6aFzoWptQtprNf0wqdtt1Xoh&export=download"
              download
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/35"
            >
              <FiDownload /> Download Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-400/60 bg-white/50 px-5 py-3 text-sm font-semibold text-slate-800 transition duration-200 hover:-translate-y-0.5 hover:border-cyan-500/60 hover:text-cyan-700 dark:border-slate-500 dark:bg-slate-900/35 dark:text-slate-100 dark:hover:text-cyan-200"
            >
              View Projects <FiArrowDownRight />
            </a>
          </div>
        </div>

        <MotionDiv
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.12, duration: 0.55, ease: "easeOut" }}
          className="mx-auto w-full max-w-md"
        >
          <div className="relative mx-auto mb-6 flex w-fit items-center justify-center">
            <div className="absolute h-[190px] w-[190px] rounded-full bg-cyan-500/30 blur-2xl dark:bg-cyan-400/25" />
            <div className="relative rounded-full bg-gradient-to-br from-cyan-500 via-sky-500 to-indigo-500 p-[3px] shadow-2xl shadow-cyan-500/30">
              <div className="h-40 w-40 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-900 sm:h-44 sm:w-44">
                {!imageError && data.profileImage ? (
                  <img
                    src={data.profileImage}
                    alt={`${data.name} profile`}
                    className="h-full w-full object-cover"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-4xl font-bold text-slate-900 dark:text-white">
                    {initials}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/30 bg-white/60 p-6 shadow-xl backdrop-blur-lg dark:border-slate-700/80 dark:bg-slate-900/50">
            <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              <FiMapPin className="text-cyan-500 dark:text-cyan-300" />
              Quick Info
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Location</p>
                <p className="mt-1 text-base font-semibold text-slate-900 dark:text-white">{data.location}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Education</p>
                <p className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-200">{data.education}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Career Goal</p>
                <p className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-200">{data.careerGoal}</p>
              </div>
            </div>
          </div>
        </MotionDiv>
      </div>
    </MotionSection>
  );
}
