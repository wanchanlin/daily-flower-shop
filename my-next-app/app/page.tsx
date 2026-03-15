import Link from "next/link";
import { getFeaturedFlower } from "../lib/flowers";
import { subscriptionPlans } from "../lib/subscriptions";
import { FlowerCard } from "../components/FlowerCard";
import { SubscriptionCard } from "../components/SubscriptionCard";
import { ThemeToggle } from "../components/ThemeToggle";


export default function Home() {
  const featured = getFeaturedFlower();

  return (
    <div className="space-y-12 ">
      <section className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-center">
        <div className="space-y-5">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-500 ">
            <span className="flex h-6 w-6 items-center justify-center rounded-full  text-base">
              🌱
            </span>
            Daily Flower Shop
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl lg:text-5xl">
            Spring-bright arrangements, on your rhythm.
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
            Subscribe once, and we handle the rest. Airy, seasonal stems that
            keep your home, studio, or lobby feeling fresh, bright, and alive.
          </p>

          <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-600 dark:text-zinc-400">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 shadow-sm ring-1 ring-emerald-100/80">
              <span aria-hidden>⏰</span>
              <span>Daily & weekly plans</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 shadow-sm ring-1 ring-emerald-100/80 dark:bg-zinc-950/80 dark:ring-zinc-800">
              <span aria-hidden>🌸</span>
              <span>Seasonal stems only</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 shadow-sm ring-1 ring-emerald-100/80 dark:bg-zinc-950/80 dark:ring-zinc-800">
              <span aria-hidden>🕊️</span>
              <span>Pause or skip anytime</span>
            </span>
          </div>

          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <Link
              href="/subscribe"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-950 shadow-sm transition hover:bg-emerald-600 dark:bg-emerald-400 dark:text-black dark:hover:bg-emerald-300"
            >
              <span>Start subscription</span>
              <span aria-hidden>➚</span>
            </Link>
            <Link
              href="/flowers"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-100 bg-white/90 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-800 transition hover:bg-emerald-50 dark:border-zinc-700 dark:bg-zinc-950/80 dark:text-zinc-50 dark:hover:bg-zinc-900"
            >
              <span>Browse flowers</span>
              <span aria-hidden>🌼</span>
            </Link>
          </div>
        </div>

        {featured && (
          <div className="max-w-md justify-self-end">
            <p className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-50 text-[0.7rem]">
                ✨
              </span>
              <span>Today&apos;s featured arrangement</span>
            </p>
            <FlowerCard
              id={featured.id}
              name={featured.name}
              slug={featured.slug}
              price={featured.price}
              image={featured.images[0]}
              season={featured.season}
              color={featured.color}
              description={featured.description}
            />
          </div>
        )}
      </section>

      <section className="space-y-4">
        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
              Choose a subscription that matches your pace
            </h2>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              All plans include flexible delivery windows, email reminders, and
              compost-friendly packaging.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {subscriptionPlans.map((plan) => (
            <SubscriptionCard key={plan.id} plan={plan} />
          ))}
        </div>
      </section>
    </div>
  );
}
