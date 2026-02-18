export default function Footer({ name }) {
  return (
    <footer className="mt-16 border-t border-slate-300/70 py-8 text-center text-sm text-slate-600 dark:border-slate-700 dark:text-slate-400">
      <p>© {new Date().getFullYear()} {name}. Built with React, Tailwind CSS, and Framer Motion.</p>
    </footer>
  );
}
