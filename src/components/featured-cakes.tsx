import { useEffect, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Check, ShoppingBag } from 'lucide-react'
import { OrderButton } from './order-button'
import { Button } from '#/components/ui/button'
import type { CarouselApi } from '#/components/ui/carousel'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '#/components/ui/carousel'
import { addToCart } from '#/lib/cart'
import { cn } from '#/lib/utils'
import { FEATURED_CAKES } from '#/lib/constants'
import type { FeaturedCake } from '#/lib/constants'

export { FEATURED_CAKES }
export type { FeaturedCake }

export function FeaturedCakes() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [addedId, setAddedId] = useState<string | null>(null)

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

  const handleAddToCart = (cake: FeaturedCake) => {
    addToCart({
      id: cake.id,
      name: cake.name,
      price: cake.price,
      image: cake.image,
    })
    setAddedId(cake.id)
    window.setTimeout(() => {
      setAddedId((prev) => (prev === cake.id ? null : prev))
    }, 1400)
  }

  return (
    <section
      aria-labelledby="featured-cakes-heading"
      className="border-t border-border/60 bg-[#FAF7F2] py-14 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-360 px-4 sm:px-6 lg:px-8">
        {/* Clean, Simple Section Header */}
        <div className="mx-auto max-w-xl text-center">
          <h2
            id="featured-cakes-heading"
            className="font-editorial text-2xl font-normal tracking-tight text-cocoa sm:text-4xl"
          >
            Signature{' '}
            <span className="font-editorial italic text-pink">
              Best Sellers
            </span>
          </h2>
          <p className="mt-2 text-sm text-cocoa-soft sm:text-base">
            Our most-loved handcrafted cakes, baked fresh to order.
          </p>
        </div>

        {/* shadcn Carousel on Mobile/Tablet, 4-Column Row on Desktop */}
        <div className="mt-8 sm:mt-12">
          <Carousel
            setApi={setApi}
            opts={{
              align: 'start',
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 py-2 sm:-ml-5">
              {FEATURED_CAKES.map((cake) => {
                const isAdded = addedId === cake.id
                return (
                  <CarouselItem
                    key={cake.id}
                    className="basis-[86%] pl-4 sm:basis-1/2 sm:pl-5 lg:basis-1/4"
                  >
                    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border/80 bg-white p-2.5 transition-all duration-300 hover:-translate-y-1 hover:border-pink/30 hover:shadow-[0_18px_40px_-15px_rgba(58,31,29,0.1)]">
                      {/* Cake Image */}
                      <div className="relative aspect-[4/3.6] w-full overflow-hidden rounded-2xl bg-pink-soft/25">
                        <img
                          src={cake.image}
                          alt={cake.imageAlt}
                          width={600}
                          height={540}
                          loading="lazy"
                          className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                      </div>

                      {/* Cake Details */}
                      <div className="flex flex-1 flex-col justify-between px-2.5 pt-4 pb-2">
                        <div>
                          <h3 className="font-editorial text-lg sm:text-xl leading-snug font-normal text-cocoa">
                            {cake.name}
                          </h3>
                          <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-cocoa-soft">
                            {cake.flavor}
                          </p>
                        </div>

                        {/* Price + Quick Add to Cart & Order Actions */}
                        <div className="mt-5 flex items-center justify-between gap-2 border-t border-border/60 pt-3.5">
                          <span className="text-base sm:text-lg font-semibold text-cocoa">
                            {cake.priceFormatted}
                          </span>

                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => handleAddToCart(cake)}
                              aria-label={`Add ${cake.name} to cart`}
                              className={cn(
                                'inline-flex size-9 items-center justify-center rounded-full border transition-all duration-200 cursor-pointer',
                                isAdded
                                  ? 'border-pink bg-pink text-white'
                                  : 'border-pink/25 bg-pink-soft/50 text-pink hover:border-pink hover:bg-pink hover:text-white',
                              )}
                            >
                              {isAdded ? (
                                <Check className="size-4" />
                              ) : (
                                <ShoppingBag className="size-4" />
                              )}
                            </button>

                            <OrderButton
                              label="Order"
                              message={`Hi Meenah, I'd like to order the ${cake.name} (${cake.priceFormatted}).`}
                              className="h-9 rounded-full bg-pink px-4 text-xs font-medium text-white transition-colors duration-200 hover:bg-pink-deep"
                            />
                          </div>
                        </div>
                      </div>
                    </article>
                  </CarouselItem>
                )
              })}
            </CarouselContent>
          </Carousel>

          {/* Subtle Carousel Indicators on Mobile/Tablet */}
          <div
            aria-hidden="true"
            className="mt-5 flex items-center justify-center gap-2 lg:hidden"
          >
            {FEATURED_CAKES.map((cake, index) => (
              <button
                key={cake.id}
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

        {/* Bottom CTA to Shop */}
        <div className="mt-10 flex justify-center sm:mt-12">
          <Button
            asChild
            variant="outline"
            className="h-11 rounded-full border border-pink/35 bg-white px-7 text-sm font-medium text-cocoa shadow-none transition-all duration-200 hover:border-pink hover:bg-pink-soft/30 hover:text-pink"
          >
            <Link to="/shop">View All Cakes</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
