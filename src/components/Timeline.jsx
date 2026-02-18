import { FiDownload, FiExternalLink } from "react-icons/fi";
import AnimatedSection from "./AnimatedSection";
import SectionTitle from "./SectionTitle";

export default function Timeline({ education, careerGoal, certifications }) {
  return (
    <AnimatedSection id="timeline" className="mx-auto w-full max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
      <SectionTitle title="Experience and Certifications" subtitle="Timeline" />
      <div className="rounded-2xl border border-slate-300/70 bg-white/80 p-6 shadow-lg backdrop-blur dark:border-slate-700 dark:bg-slate-900/60">
        <ol className="relative border-s border-slate-300 pl-6 dark:border-slate-700">
          <li className="mb-8">
            <span className="absolute -start-[9px] mt-1 h-4 w-4 rounded-full border-2 border-cyan-500 bg-white dark:bg-slate-950" />
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Education</h3>
            <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">{education}</p>
          </li>

          <li className="mb-8">
            <span className="absolute -start-[9px] mt-1 h-4 w-4 rounded-full border-2 border-cyan-500 bg-white dark:bg-slate-950" />
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Career Goal</h3>
            <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">{careerGoal}</p>
          </li>

          {certifications.map((certification) => (
            <li key={certification.title} className="mb-8 last:mb-0">
              <span className="absolute -start-[9px] mt-1 h-4 w-4 rounded-full border-2 border-cyan-500 bg-white dark:bg-slate-950" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Certification</h3>
              <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">{certification.title}</p>

              {(certification.openLink || certification.downloadLink) && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {certification.openLink ? (
                    <a
                      href={certification.openLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-cyan-500/50 bg-cyan-500/10 px-3 py-2 text-xs font-semibold text-cyan-700 transition hover:bg-cyan-500/20 dark:text-cyan-200"
                    >
                      Open <FiExternalLink />
                    </a>
                  ) : null}
                  {certification.downloadLink ? (
                    <a
                      href={certification.downloadLink}
                      target="_blank"
                      rel="noreferrer"
                      download
                      className="inline-flex items-center gap-2 rounded-lg border border-emerald-500/50 bg-emerald-500/10 px-3 py-2 text-xs font-semibold text-emerald-700 transition hover:bg-emerald-500/20 dark:text-emerald-200"
                    >
                      Download <FiDownload />
                    </a>
                  ) : null}
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </AnimatedSection>
  );
}
