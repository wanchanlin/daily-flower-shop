export function Footer() {
  return (
    <footer className="border-t border-rose-100/70 bg-white/80 text-xs text-zinc-500 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/70 dark:text-zinc-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-4 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-center sm:text-left">
          © {new Date().getFullYear()} Daily Flower Shop. Fresh arrangements
          delivered with care.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <span>Crafted with Next.js · Tailwind CSS</span>
          <span className="hidden text-zinc-400 sm:inline">·</span>
          <span className="text-zinc-400">
            Subscriptions powered by{" "}
            <span className="font-medium text-zinc-600 dark:text-zinc-200">
              Stripe
            </span>
          </span>
        </div>
      </div>
    </footer>
  );
}

