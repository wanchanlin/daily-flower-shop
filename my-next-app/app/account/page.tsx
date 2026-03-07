export default function AccountPage() {
  // This is a placeholder for when authentication is wired up.
  // You can connect this to your auth provider and PostgreSQL tables later.
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rose-500 dark:text-rose-300">
          Your account
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl">
          Manage your flower ritual.
        </h1>
        <p className="max-w-xl text-sm text-zinc-600 dark:text-zinc-400">
          Once authentication and billing are connected, you&apos;ll be able to
          view and update your subscription, change delivery details, and see
          past deliveries here.
        </p>
      </header>

      <section className="grid gap-5 md:grid-cols-3">
        <div className="rounded-3xl border border-zinc-200 bg-white/90 p-5 text-sm shadow-sm dark:border-zinc-800 dark:bg-zinc-950/80">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            Active subscription
          </h2>
          <p className="mt-2 text-zinc-700 dark:text-zinc-300">
            Connect this card to your <code>Subscriptions</code> table to show
            the customer&apos;s current plan, status, and next delivery date.
          </p>
        </div>
        <div className="rounded-3xl border border-zinc-200 bg-white/90 p-5 text-sm shadow-sm dark:border-zinc-800 dark:bg-zinc-950/80">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            Delivery details
          </h2>
          <p className="mt-2 text-zinc-700 dark:text-zinc-300">
            Pull delivery address and preferred time window from your{" "}
            <code>Orders</code> or <code>Users</code> profile table for quick
            edits.
          </p>
        </div>
        <div className="rounded-3xl border border-zinc-200 bg-white/90 p-5 text-sm shadow-sm dark:border-zinc-800 dark:bg-zinc-950/80">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            Delivery history
          </h2>
          <p className="mt-2 text-zinc-700 dark:text-zinc-300">
            Once your <code>Orders</code> table is live, render a list of past
            deliveries including arrangement name, delivery date, and status.
          </p>
        </div>
      </section>
    </div>
  );
}

