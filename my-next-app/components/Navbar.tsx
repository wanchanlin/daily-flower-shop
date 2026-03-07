import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/flowers", label: "Flowers" },
  { href: "/subscribe", label: "Subscribe" },
  { href: "/account", label: "Account" },
];

export function Navbar() {
  return (
    <header className="border-b border-rose-100/70 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-rose-400 to-amber-300 text-sm font-semibold text-white shadow-sm">
            🌸
          </span>
          <div className="leading-tight">
            <span className="block text-sm font-semibold tracking-tight">
              Daily Flower Shop
            </span>
            <span className="block text-[0.65rem] uppercase tracking-[0.18em] text-rose-500 dark:text-rose-300">
              Fresh blooms, on repeat
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-700 dark:text-zinc-200 sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-1 text-xs uppercase tracking-[0.16em] text-zinc-600 transition hover:bg-rose-50 hover:text-rose-700 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-rose-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/subscribe"
          className="inline-flex items-center rounded-full bg-zinc-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-50 shadow-sm transition hover:bg-zinc-700 dark:bg-rose-400 dark:text-black dark:hover:bg-rose-300"
        >
          Start subscription
        </Link>
      </div>
    </header>
  );
}

