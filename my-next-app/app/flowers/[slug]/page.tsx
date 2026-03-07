import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllFlowers, getFlowerBySlug } from "../../../lib/flowers";

type FlowerPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  const flowers = getAllFlowers();
  return flowers.map((flower) => ({ slug: flower.slug }));
}

export default function FlowerDetailPage({ params }: FlowerPageProps) {
  const { slug } = params;
  const flower = getFlowerBySlug(slug);

  if (!flower) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <header className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rose-500 dark:text-rose-300">
            Arrangement Detail
          </p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl">
            {flower.name}
          </h1>
          <p className="mt-2 max-w-xl text-sm text-zinc-600 dark:text-zinc-400">
            {flower.description}
          </p>
        </div>
        <div className="flex flex-col items-start gap-2 text-sm sm:items-end">
          <span className="text-xs uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
            From
          </span>
          <span className="text-2xl font-semibold text-rose-600 dark:text-rose-300">
            ${flower.price.toFixed(0)}
          </span>
          <div className="flex gap-2">
            <Link
              href={`/subscribe?featured=${flower.slug}`}
              className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-50 shadow-sm transition hover:bg-zinc-700 dark:bg-rose-400 dark:text-black dark:hover:bg-rose-300"
            >
              Subscribe with this style
            </Link>
            <Link
              href="/flowers"
              className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-800 transition hover:bg-rose-50 dark:border-zinc-700 dark:bg-zinc-950/80 dark:text-zinc-50 dark:hover:bg-zinc-900"
            >
              Back to catalog
            </Link>
          </div>
        </div>
      </header>

      <section className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <div className="overflow-hidden rounded-3xl border border-rose-100/80 bg-rose-50 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          {/* In a real app, this would be a responsive image gallery */}
          <div
            className="aspect-[4/3] w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${flower.images[0]})` }}
          />
        </div>

        <aside className="space-y-5 rounded-3xl border border-zinc-200 bg-white/90 p-5 text-sm shadow-sm dark:border-zinc-800 dark:bg-zinc-950/80">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              Care Tips
            </h2>
            <p className="mt-2 text-zinc-700 dark:text-zinc-300">
              {flower.careTips}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 text-xs text-zinc-600 dark:text-zinc-400">
            <div>
              <h3 className="font-semibold uppercase tracking-[0.18em]">
                Season
              </h3>
              <p className="mt-1">{flower.season}</p>
            </div>
            <div>
              <h3 className="font-semibold uppercase tracking-[0.18em]">
                Palette
              </h3>
              <p className="mt-1">{flower.color}</p>
            </div>
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-500">
            Each arrangement is made to order using seasonal stems; the exact
            flowers may vary slightly but will keep this overall mood and
            palette.
          </p>
        </aside>
      </section>
    </div>
  );
}

