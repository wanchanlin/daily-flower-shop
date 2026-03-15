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
          ? "border-emerald-300/80 ring-2 ring-emerald-200 dark:border-emerald-500/80 dark:ring-emerald-500/40"
          : "border-emerald-50/80 dark:border-zinc-800"
      }`}
    >
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50 text-sm">
            {plan.id === "daily" && "🌞"}
            {plan.id === "weekly" && "📅"}
            {plan.id === "monthly" && "🌙"}
          </span>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-500 dark:text-emerald-300">
            {plan.name}
          </p>
        </div>
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
          className={`inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition ${
            plan.highlight
              ? "bg-emerald-500 text-emerald-950 shadow-sm hover:bg-emerald-600 dark:bg-emerald-400 dark:text-black dark:hover:bg-emerald-300"
              : "border border-emerald-100 bg-white/80 text-zinc-800 hover:bg-emerald-50 dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-100 dark:hover:bg-zinc-900"
          }`}
        >
          <span>Choose {plan.name.toLowerCase()}</span>
          <span aria-hidden>➜</span>
        </Link>
      </div>
    </div>
  );
}

