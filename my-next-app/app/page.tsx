import Link from "next/link";
import { getFeaturedFlower } from "../lib/flowers";
import { subscriptionPlans } from "../lib/subscriptions";
import { FlowerCard } from "../components/FlowerCard";
import { SubscriptionCard } from "../components/SubscriptionCard";

export default function Home() {
  const featured = getFeaturedFlower();

  return (
    <div className="space-y-12">
      <section className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-center">
        <div className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rose-500 dark:text-rose-300">
            Daily Flower Shop
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl lg:text-5xl">
            Fresh arrangements, delivered on your rhythm.
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
            Subscribe once, and we handle the rest. Thoughtful daily and weekly
            deliveries so your home, studio, or lobby always has something
            living and lovely in view.
          </p>

          <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-600 dark:text-zinc-400">
            <span className="rounded-full bg-white/80 px-3 py-1 shadow-sm ring-1 ring-rose-100/80 dark:bg-zinc-950/80 dark:ring-zinc-800">
              Daily & weekly plans
            </span>
            <span className="rounded-full bg-white/80 px-3 py-1 shadow-sm ring-1 ring-rose-100/80 dark:bg-zinc-950/80 dark:ring-zinc-800">
              Seasonal stems only
            </span>
            <span className="rounded-full bg-white/80 px-3 py-1 shadow-sm ring-1 ring-rose-100/80 dark:bg-zinc-950/80 dark:ring-zinc-800">
              Pause or skip anytime
            </span>
          </div>

          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <Link
              href="/subscribe"
              className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-50 shadow-sm transition hover:bg-zinc-700 dark:bg-rose-400 dark:text-black dark:hover:bg-rose-300"
            >
              Start subscription
            </Link>
            <Link
              href="/flowers"
              className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white/80 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-800 transition hover:bg-rose-50 dark:border-zinc-700 dark:bg-zinc-950/80 dark:text-zinc-50 dark:hover:bg-zinc-900"
            >
              Browse flowers
            </Link>
          </div>
        </div>

        {featured && (
          <div className="max-w-md justify-self-end">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              Today&apos;s featured arrangement
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
