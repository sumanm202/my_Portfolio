export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-8">
      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-500 dark:text-cyan-300">{subtitle}</p>
      <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">{title}</h2>
    </div>
  );
}
