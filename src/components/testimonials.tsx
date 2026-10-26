import { useEffect, useState } from 'react'
import { Quote } from 'lucide-react'
import type { CarouselApi } from '#/components/ui/carousel'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '#/components/ui/carousel'
import { cn } from '#/lib/utils'
import { TESTIMONIALS } from '#/lib/constants'
import type { Testimonial } from '#/lib/constants'

export { TESTIMONIALS }
export type { Testimonial }

export function Testimonials() {
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
      aria-labelledby="testimonials-heading"
      className="border-t border-border/60 bg-[#FAF7F2] py-14 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-360 px-4 sm:px-6 lg:px-8">
        {/* Clean, Simple Section Header */}
        <div className="mx-auto max-w-xl text-center">
          <h2
            id="testimonials-heading"
            className="font-editorial text-2xl font-normal tracking-tight text-cocoa sm:text-4xl"
          >
            Sweet Words from{' '}
            <span className="font-editorial italic text-pink">
              Happy Clients
            </span>
          </h2>
          <p className="mt-2 text-sm text-cocoa-soft sm:text-base">
            Celebrations and milestones we’ve had the joy of baking for.
          </p>
        </div>

        {/* shadcn Carousel on Mobile/Tablet, 3-Column Row on Desktop */}
        <div className="mt-8 sm:mt-12">
          <Carousel
            setApi={setApi}
            opts={{
              align: 'start',
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 py-2 sm:-ml-5">
              {TESTIMONIALS.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="basis-[88%] pl-4 sm:basis-1/2 sm:pl-5 lg:basis-1/3"
                >
                  <article className="flex h-full flex-col justify-between rounded-3xl border border-border/80 bg-white p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-pink/30 hover:shadow-[0_18px_40px_-15px_rgba(58,31,29,0.08)]">
                    <div>
                      <div className="flex items-center justify-between gap-3">
                        <span className="inline-block rounded-full bg-pink-soft/65 px-3 py-1 text-[11px] font-medium text-pink">
                          {item.occasion}
                        </span>
                        <Quote
                          aria-hidden="true"
                          className="size-5 text-pink/30"
                        />
                      </div>

                      <blockquote className="mt-4 text-sm sm:text-base leading-relaxed text-cocoa">
                        &ldquo;{item.quote}&rdquo;
                      </blockquote>
                    </div>

                    <div className="mt-6 flex items-center gap-3 border-t border-border/60 pt-4">
                      <span
                        aria-hidden="true"
                        className="font-editorial inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-pink-soft/80 text-sm font-semibold text-pink"
                      >
                        {item.initials}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-cocoa">
                          {item.name}
                        </p>
                        <p className="text-xs text-cocoa-soft">
                          Verified Client
                        </p>
                      </div>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Subtle Carousel Indicators on Mobile/Tablet */}
          <div
            aria-hidden="true"
            className="mt-5 flex items-center justify-center gap-2 lg:hidden"
          >
            {TESTIMONIALS.map((item, index) => (
              <button
                key={item.id}
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
