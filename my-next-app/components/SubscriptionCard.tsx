import Link from "next/link";

export type PlanType = "daily" | "weekly" | "monthly";

export type SubscriptionPlan = {
  id: PlanType;
  name: string;
  tagline: string;
  price: number;
  priceSuffix: string;
  description: string;
  highlight?: boolean;
};

type SubscriptionCardProps = {
  plan: SubscriptionPlan;
  href?: string;
};

export function SubscriptionCard({ plan, href = "/subscribe" }: SubscriptionCardProps) {
  return (
    <div
      className={`flex flex-col justify-between rounded-3xl border bg-white/90 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-md dark:bg-zinc-950/80 ${
        plan.highlight
          ? "border-rose-300/80 ring-2 ring-rose-200 dark:border-rose-500/80 dark:ring-rose-500/40"
          : "border-rose-100/70 dark:border-zinc-800"
      }`}
    >
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-500 dark:text-rose-300">
          {plan.name}
        </p>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">{plan.tagline}</p>
        <div className="mt-2 flex items-baseline gap-1">
          <span className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
            ${plan.price}
          </span>
          <span className="text-xs text-zinc-500 dark:text-zinc-400">
            {plan.priceSuffix}
          </span>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-3">
        <p className="text-xs text-zinc-600 dark:text-zinc-400">
          {plan.description}
        </p>
        <Link
          href={`${href}?plan=${plan.id}`}
          className={`inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition ${
            plan.highlight
              ? "bg-zinc-900 text-zinc-50 shadow-sm hover:bg-zinc-700 dark:bg-rose-400 dark:text-black dark:hover:bg-rose-300"
              : "border border-zinc-200 bg-white/80 text-zinc-800 hover:bg-rose-50 dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-100 dark:hover:bg-zinc-900"
          }`}
        >
          Choose {plan.name.toLowerCase()}
        </Link>
      </div>
    </div>
  );
}

