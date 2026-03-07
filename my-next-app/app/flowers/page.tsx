import { FlowerCard } from "../../components/FlowerCard";
import { getAllFlowers } from "../../lib/flowers";

export default function FlowersPage() {
  const flowers = getAllFlowers();

  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rose-500 dark:text-rose-300">
          Flower Catalog
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl">
          Arrangements for every corner of home.
        </h1>
        <p className="max-w-xl text-sm text-zinc-600 dark:text-zinc-400">
          Browse our current lineup of arrangements. Filters by type, color, or
          season can be layered on here as the catalog grows.
        </p>
      </header>

      <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {flowers.map((flower) => (
          <FlowerCard
            key={flower.id}
            id={flower.id}
            name={flower.name}
            slug={flower.slug}
            price={flower.price}
            image={flower.images[0]}
            season={flower.season}
            color={flower.color}
            description={flower.description}
          />
        ))}
      </section>
    </div>
  );
}

