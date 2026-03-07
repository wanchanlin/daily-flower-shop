import Image from "next/image";
import Link from "next/link";

export type FlowerCardProps = {
  id: number;
  name: string;
  slug: string;
  price: number;
  image: string;
  season?: string;
  color?: string;
  description?: string;
};

export function FlowerCard({
  id,
  name,
  slug,
  price,
  image,
  season,
  color,
  description,
}: FlowerCardProps) {
  return (
    <Link
      href={`/flowers/${slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-rose-100/70 bg-white/90 shadow-sm transition hover:-translate-y-1 hover:border-rose-200 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950/80 dark:hover:border-rose-900"
    >
      <div className="relative h-56 w-full overflow-hidden bg-rose-50 dark:bg-zinc-900">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(min-width: 1024px) 20vw, 50vw"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        {season && (
          <span className="absolute left-3 top-3 rounded-full bg-black/55 px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-zinc-50 backdrop-blur">
            {season}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 px-4 py-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-semibold tracking-tight text-zinc-900 group-hover:text-rose-700 dark:text-zinc-50 dark:group-hover:text-rose-300">
            {name}
          </h3>
          <span className="text-sm font-semibold text-rose-600 dark:text-rose-300">
            ${price.toFixed(0)}
          </span>
        </div>

        {description && (
          <p className="line-clamp-2 text-xs text-zinc-600 dark:text-zinc-400">
            {description}
          </p>
        )}

        <div className="mt-2 flex items-center justify-between text-[0.7rem] text-zinc-500 dark:text-zinc-400">
          <span className="flex items-center gap-1">
            {color && (
              <>
                <span className="inline-block h-2 w-2 rounded-full bg-rose-300" />
                <span className="uppercase tracking-[0.16em]">{color}</span>
              </>
            )}
          </span>
          <span className="uppercase tracking-[0.16em]">
            View details
            <span aria-hidden className="ml-1">
              ↗
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}

