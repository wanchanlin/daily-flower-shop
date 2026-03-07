import { redirect } from "next/navigation";
import { subscriptionPlans, getPlanById } from "../../lib/subscriptions";

type SubscribePageProps = {
  searchParams?: {
    plan?: string;
    featured?: string;
  };
};

export default function SubscribePage({ searchParams }: SubscribePageProps) {
  const params = searchParams ?? {};
  const selectedPlan = getPlanById(params.plan ?? "weekly");

  if (!selectedPlan) {
    redirect("/subscribe?plan=weekly");
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
      <section className="space-y-6">
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rose-500 dark:text-rose-300">
            Subscription checkout
          </p>
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl">
            Tell us where to send your flowers.
          </h1>
          <p className="max-w-xl text-sm text-zinc-600 dark:text-zinc-400">
            We&apos;ll use this information for delivery logistics and to
            tailor reminders around your schedule. Payment is securely handled
            by Stripe on the next step.
          </p>
        </header>

        <SubscribeForm planId={selectedPlan.id} />
      </section>

      <aside className="space-y-5 rounded-3xl border border-zinc-200 bg-white/90 p-5 text-sm shadow-sm dark:border-zinc-800 dark:bg-zinc-950/80">
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            Selected plan
          </h2>
          <p className="mt-2 text-sm font-semibold text-zinc-900 dark:text-zinc-50">
            {selectedPlan.name}
          </p>
          <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
            {selectedPlan.tagline}
          </p>
          <p className="mt-3 text-lg font-semibold text-rose-600 dark:text-rose-300">
            ${selectedPlan.price}
            <span className="ml-1 text-xs font-normal text-zinc-500 dark:text-zinc-400">
              {selectedPlan.priceSuffix}
            </span>
          </p>
        </div>

        <div className="space-y-2 text-xs text-zinc-600 dark:text-zinc-400">
          <p>• Secure payments powered by Stripe</p>
          <p>• Pause, skip, or cancel anytime from your account page</p>
          <p>• We&apos;ll email delivery reminders before each drop-off</p>
        </div>
      </aside>
    </div>
  );
}

function SubscribeForm({ planId }: { planId: string }) {
  return (
    <form
      className="space-y-5 rounded-3xl border border-zinc-200 bg-white/90 p-5 text-sm shadow-sm dark:border-zinc-800 dark:bg-zinc-950/80"
      action="/api/checkout"
      method="POST"
    >
      <input type="hidden" name="planId" value={planId} />

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label
            htmlFor="name"
            className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-600 dark:text-zinc-300"
          >
            Full name
          </label>
          <input
            id="name"
            name="name"
            required
            className="w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm outline-none ring-rose-200/60 placeholder:text-zinc-400 focus:border-rose-300 focus:ring-2 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:placeholder:text-zinc-500"
            placeholder="Alex Chen"
          />
        </div>
        <div className="space-y-1.5">
          <label
            htmlFor="email"
            className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-600 dark:text-zinc-300"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm outline-none ring-rose-200/60 placeholder:text-zinc-400 focus:border-rose-300 focus:ring-2 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:placeholder:text-zinc-500"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label
          htmlFor="address"
          className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-600 dark:text-zinc-300"
        >
          Delivery address
        </label>
        <textarea
          id="address"
          name="address"
          required
          rows={3}
          className="w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm outline-none ring-rose-200/60 placeholder:text-zinc-400 focus:border-rose-300 focus:ring-2 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:placeholder:text-zinc-500"
          placeholder="Street, city, postal code, country"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label
            htmlFor="phone"
            className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-600 dark:text-zinc-300"
          >
            Phone number
          </label>
          <input
            id="phone"
            name="phone"
            required
            className="w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm outline-none ring-rose-200/60 placeholder:text-zinc-400 focus:border-rose-300 focus:ring-2 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:placeholder:text-zinc-500"
            placeholder="+1 555 123 4567"
          />
        </div>
        <div className="space-y-1.5">
          <label
            htmlFor="deliveryTime"
            className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-600 dark:text-zinc-300"
          >
            Delivery window
          </label>
          <select
            id="deliveryTime"
            name="deliveryTime"
            className="w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm outline-none ring-rose-200/60 focus:border-rose-300 focus:ring-2 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50"
            defaultValue="morning"
          >
            <option value="morning">Morning (8–11am)</option>
            <option value="afternoon">Afternoon (12–4pm)</option>
            <option value="evening">Evening (5–8pm)</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-zinc-900 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-50 shadow-sm transition hover:bg-zinc-700 dark:bg-rose-400 dark:text-black dark:hover:bg-rose-300"
      >
        Continue to secure payment
      </button>
    </form>
  );
}

