import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import AnimatedSection from "./AnimatedSection";
import SectionTitle from "./SectionTitle";

export default function Projects({ projects }) {
  const MotionArticle = motion.article;

  return (
    <AnimatedSection id="projects" className="mx-auto w-full max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
      <SectionTitle title="Projects" subtitle="Work" />
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, idx) => (
          <MotionArticle
            key={project.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: idx * 0.07 }}
            whileHover={{ y: -6 }}
            className="rounded-2xl border border-slate-300/70 bg-white/80 p-6 shadow-lg backdrop-blur transition dark:border-slate-700 dark:bg-slate-900/60"
          >
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
            </div>
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-cyan-400/35 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-700 dark:text-cyan-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.openLink ? (
              <div className="mt-5">
                <a
                  href={project.openLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-cyan-500/50 bg-cyan-500/10 px-3 py-2 text-xs font-semibold text-cyan-700 transition hover:bg-cyan-500/20 dark:text-cyan-200"
                >
                  Open Project <FiExternalLink />
                </a>
              </div>
            ) : null}
          </MotionArticle>
        ))}
      </div>
    </AnimatedSection>
  );
}
