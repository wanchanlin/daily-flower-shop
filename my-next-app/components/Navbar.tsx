import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { href: "/", label: "Home", icon: "🏡" },
  { href: "/flowers", label: "Flowers", icon: "🌷" },
  { href: "/subscribe", label: "Subscribe", icon: "📦" },
  { href: "/account", label: "Account", icon: "👤" },
];

export function Navbar() {
  return (
    <header className="border-b border-emerald-100/70 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-emerald-300 via-rose-300 to-amber-200 text-sm font-semibold text-white shadow-sm">
            🌼
          </span>
          <div className="leading-tight">
            <span className="block text-sm font-semibold tracking-tight">
              Daily Flower Shop
            </span>
            <span className="block text-[0.65rem] uppercase tracking-[0.18em] text-emerald-500 dark:text-emerald-300">
              Fresh blooms, light days
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-700 dark:text-zinc-200 sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.7rem] uppercase tracking-[0.16em] text-zinc-600 transition hover:bg-emerald-50 hover:text-emerald-700 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-emerald-300"
            >
              <span aria-hidden>{link.icon}</span>
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/subscribe"
            className="hidden items-center gap-1.5 rounded-full bg-emerald-500 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-emerald-950 shadow-sm transition hover:bg-emerald-600 dark:bg-emerald-400 dark:text-black dark:hover:bg-emerald-300 sm:inline-flex"
          >
            <span>Start subscription</span>
            <span aria-hidden>✿</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

