import { Link, createFileRoute } from '@tanstack/react-router'
import { CAKE_CATEGORIES } from '#/lib/constants'
import type { CakeCategorySlug } from '#/lib/constants'
import { cn } from '#/lib/utils'

interface ShopSearch {
  category?: CakeCategorySlug
}

const VALID_CATEGORIES: Array<CakeCategorySlug> = [
  'birthday',
  'wedding',
  'cupcakes',
  'custom',
]

export const Route = createFileRoute('/shop')({
  validateSearch: (search: Record<string, unknown>): ShopSearch => {
    const raw =
      typeof search.category === 'string' ? search.category : undefined
    const category = VALID_CATEGORIES.includes(raw as CakeCategorySlug)
      ? (raw as CakeCategorySlug)
      : undefined
    return category ? { category } : {}
  },
  component: Shop,
})

function Shop() {
  const { category } = Route.useSearch()
  const activeCategory = CAKE_CATEGORIES.find((item) => item.slug === category)

  return (
    <section className="mx-auto max-w-360 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="max-w-2xl">
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-pink">
          Our Menu
        </span>
        <h1 className="font-editorial mt-2 text-3xl font-normal text-cocoa sm:text-4xl lg:text-5xl">
          {activeCategory ? activeCategory.title : 'All Cakes & Treats'}
        </h1>
        <p className="mt-3 text-sm sm:text-base text-cocoa-soft">
          {activeCategory
            ? activeCategory.description
            : 'Explore our handcrafted cakes and cupcakes baked fresh to order.'}
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="mt-8 flex flex-wrap items-center gap-2">
        <Link
          to="/shop"
          className={cn(
            'rounded-full border px-4 py-2 text-xs sm:text-sm font-medium transition-colors',
            !category
              ? 'border-pink bg-pink text-white'
              : 'border-border bg-white text-cocoa hover:border-pink/40 hover:text-pink',
          )}
        >
          All
        </Link>
        {CAKE_CATEGORIES.map((item) => {
          const isActive = category === item.slug
          return (
            <Link
              key={item.slug}
              to="/shop"
              search={{ category: item.slug }}
              className={cn(
                'rounded-full border px-4 py-2 text-xs sm:text-sm font-medium transition-colors',
                isActive
                  ? 'border-pink bg-pink text-white'
                  : 'border-border bg-white text-cocoa hover:border-pink/40 hover:text-pink',
              )}
            >
              {item.title}
            </Link>
          )
        })}
      </div>
    </section>
  )
}
