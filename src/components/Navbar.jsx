import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#timeline", label: "Timeline" },
  { href: "#contact", label: "Contact" }
];

export default function Navbar({ name, profileImage }) {
  const [imageError, setImageError] = useState(false);
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-300/60 bg-white/75 backdrop-blur dark:border-slate-700/70 dark:bg-slate-950/70">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2 text-sm font-semibold tracking-[0.14em] text-slate-900 dark:text-slate-100">
          <span className="inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-cyan-500/40 bg-slate-200 text-[10px] font-bold dark:bg-slate-800">
            {!imageError && profileImage ? (
              <img
                src={profileImage}
                alt={`${name} avatar`}
                className="h-full w-full object-cover"
                onError={() => setImageError(true)}
              />
            ) : (
              initials
            )}
          </span>
          <span>{name}</span>
        </a>

        <div className="hidden gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-700 transition hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <ThemeToggle />
      </nav>
    </header>
  );
}
