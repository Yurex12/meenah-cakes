import { useEffect, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { ArrowUpRight } from 'lucide-react'
import type { CarouselApi } from '#/components/ui/carousel'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '#/components/ui/carousel'
import { cn } from '#/lib/utils'
import { CAKE_CATEGORIES } from '#/lib/constants'
import type { CakeCategory, CakeCategorySlug } from '#/lib/constants'

export { CAKE_CATEGORIES }
export type { CakeCategory, CakeCategorySlug }

export function Categories() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return

    setCurrent(api.selectedScrollSnap())
    const onSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }

    api.on('select', onSelect)
    api.on('reInit', onSelect)

    return () => {
      api.off('select', onSelect)
    }
  }, [api])

  return (
    <section
      aria-labelledby="categories-heading"
      className="bg-white py-14 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-360 px-4 sm:px-6 lg:px-8">
        {/* Simple, Uncluttered Section Header */}
        <div className="mx-auto max-w-xl text-center">
          <h2
            id="categories-heading"
            className="font-editorial text-2xl font-normal tracking-tight text-cocoa sm:text-4xl"
          >
            Browse by{' '}
            <span className="font-editorial italic text-pink">Category</span>
          </h2>
          <p className="mt-2 text-sm text-cocoa-soft sm:text-base">
            Handcrafted cakes and treats for every occasion.
          </p>
        </div>

        {/* shadcn Carousel — respects container side padding */}
        <div className="mt-8 sm:mt-12">
          <Carousel
            setApi={setApi}
            opts={{
              align: 'start',
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 py-2 sm:-ml-5">
              {CAKE_CATEGORIES.map((category) => (
                <CarouselItem
                  key={category.slug}
                  className="basis-[86%] pl-4 sm:basis-1/2 sm:pl-5 lg:basis-1/4"
                >
                  <Link
                    to="/shop"
                    search={{ category: category.slug }}
                    className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border/80 bg-[#FAF7F2]/60 p-2.5 transition-all duration-300 hover:-translate-y-1 hover:border-pink/30 hover:bg-white hover:shadow-[0_18px_40px_-15px_rgba(58,31,29,0.1)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink"
                  >
                    {/* Image Container */}
                    <div className="relative aspect-[4/3.8] sm:aspect-[4/4.1] w-full overflow-hidden rounded-2xl bg-pink-soft/30">
                      <img
                        src={category.image}
                        alt={category.imageAlt}
                        width={600}
                        height={650}
                        loading="lazy"
                        className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>

                    {/* Card Content */}
                    <div className="flex flex-1 flex-col justify-between px-2.5 pt-4 pb-2">
                      <div>
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="font-editorial text-xl leading-snug font-normal text-cocoa transition-colors duration-200 group-hover:text-pink">
                            {category.title}
                          </h3>
                          <span
                            aria-hidden="true"
                            className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-pink-soft/75 text-pink transition-all duration-200 group-hover:bg-pink group-hover:text-white"
                          >
                            <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </span>
                        </div>

                        <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-cocoa-soft">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Subtle Carousel Indicators on Mobile/Tablet */}
          <div
            aria-hidden="true"
            className="mt-5 flex items-center justify-center gap-2 lg:hidden"
          >
            {CAKE_CATEGORIES.map((category, index) => (
              <button
                key={category.slug}
                type="button"
                tabIndex={-1}
                onClick={() => api?.scrollTo(index)}
                className={cn(
                  'h-1.5 rounded-full transition-all duration-300',
                  current === index
                    ? 'w-6 bg-pink'
                    : 'w-1.5 bg-pink/25 hover:bg-pink/40',
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
