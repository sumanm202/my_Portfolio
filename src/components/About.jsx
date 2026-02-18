import AnimatedSection from "./AnimatedSection";
import SectionTitle from "./SectionTitle";

export default function About({ data }) {
  return (
    <AnimatedSection id="about" className="mx-auto w-full max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
      <SectionTitle title="About Me" subtitle="Profile" />
      <div className="rounded-2xl border border-slate-300/70 bg-white/75 p-6 shadow-lg backdrop-blur dark:border-slate-700 dark:bg-slate-900/60">
        <p className="leading-relaxed text-slate-700 dark:text-slate-300">{data.about}</p>
      </div>
    </AnimatedSection>
  );
}
