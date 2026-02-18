import { motion } from "framer-motion";
import { FaAndroid, FaCode, FaDatabase, FaFigma, FaGitAlt, FaReact } from "react-icons/fa";
import { SiFlutter, SiTensorflow } from "react-icons/si";
import AnimatedSection from "./AnimatedSection";
import SectionTitle from "./SectionTitle";

const groupIcons = {
  Frontend: <FaReact className="text-cyan-500" />,
  Mobile: <FaAndroid className="text-lime-500" />,
  "Backend & Cloud": <FaDatabase className="text-violet-500" />,
  "AI / ML": <SiTensorflow className="text-orange-500" />,
  Tools: <FaFigma className="text-pink-500" />
};

export default function Skills({ skills, progress }) {
  const MotionBar = motion.div;

  const groups = [
    { title: "Frontend", items: skills.frontend },
    { title: "Mobile", items: skills.mobile },
    { title: "Backend & Cloud", items: skills.backendCloud },
    { title: "AI / ML", items: skills.aiMl },
    { title: "Tools", items: skills.tools }
  ];

  const safeProgress = (progress ?? []).map((item) => ({
    label: item.label,
    value: Math.max(0, Math.min(100, Number(item.value) || 0))
  }));

  return (
    <AnimatedSection id="skills" className="mx-auto w-full max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
      <SectionTitle title="Technical Skills" subtitle="Stack" />
      <div className="grid gap-5 lg:grid-cols-2">
        <div className="grid gap-4">
          {groups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-slate-300/70 bg-white/75 p-5 shadow-lg backdrop-blur dark:border-slate-700 dark:bg-slate-900/60"
            >
              <div className="mb-3 flex items-center gap-2 text-lg font-semibold text-slate-900 dark:text-white">
                <span>{groupIcons[group.title]}</span>
                <span>{group.title}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-slate-300/70 bg-white/75 p-5 shadow-lg backdrop-blur dark:border-slate-700 dark:bg-slate-900/60">
          <h3 className="mb-5 flex items-center gap-2 text-xl font-semibold text-slate-900 dark:text-white">
            <FaCode className="text-cyan-500" /> Skill Progress
          </h3>

          <div className="space-y-5">
            {safeProgress.map((item, index) => (
              <div key={item.label}>
                <div className="mb-1 flex justify-between text-sm font-medium text-slate-700 dark:text-slate-200">
                  <span>{item.label}</span>
                  <span>{item.value}%</span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                  <MotionBar
                    className="h-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.value}%` }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.9, delay: index * 0.08, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
            <FaGitAlt className="text-orange-500" />
            <SiFlutter className="text-cyan-500" />
            <span>Hands-on with Android Studio, VS Code, Git and GitHub workflows.</span>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
