import { Link } from '@tanstack/react-router'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { OrderButton } from './order-button'
import { Button } from '#/components/ui/button'
import { cn } from '#/lib/utils'

function SparkleStar({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={cn('pointer-events-none fill-current', className)}
    >
      <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
    </svg>
  )
}

export function CtaBanner() {
  return (
    <section
      aria-labelledby="cta-banner-heading"
      className="border-t border-border/60 bg-white pb-14 pt-6 sm:pb-20 sm:pt-8 lg:pb-24"
    >
      <div className="mx-auto w-full max-w-360 px-4 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden rounded-3xl border border-pink/20 bg-[#FAF7F2] px-6 py-12 text-center sm:rounded-[2.25rem] sm:px-12 sm:py-16 lg:px-16 lg:py-20">
          {/* Soft ambient blush radial glows */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -left-24 -z-10 h-64 w-64 rounded-full bg-pink-soft/50 blur-3xl sm:h-80 sm:w-80"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -bottom-24 -z-10 h-64 w-64 rounded-full bg-pink-soft/50 blur-3xl sm:h-80 sm:w-80"
          />

          {/* Subtle 4-point sparkles echoing the Hero */}
          <SparkleStar className="absolute top-6 left-6 size-3.5 text-pink/55 sm:top-10 sm:left-12 sm:size-4" />
          <SparkleStar className="absolute top-8 right-7 size-3 text-pink/45 sm:top-12 sm:right-14 sm:size-3.5" />
          <SparkleStar className="absolute bottom-7 left-10 hidden size-3 text-pink/45 sm:block" />
          <SparkleStar className="absolute right-10 bottom-6 size-3.5 text-pink/55 sm:right-14 sm:bottom-10 sm:size-4" />

          <div className="mx-auto flex max-w-2xl flex-col items-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-pink/20 bg-pink-soft/65 px-3.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-pink sm:text-[11px]">
              <SparkleStar className="size-2.5 text-pink" />
              <span>Custom &amp; Express Orders</span>
            </span>

            <h2
              id="cta-banner-heading"
              className="font-editorial mt-4 text-2xl font-normal tracking-tight text-cocoa sm:mt-5 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]"
            >
              Have a{' '}
              <span className="font-editorial italic text-pink">
                Dream Cake
              </span>{' '}
              in Mind?
            </h2>

            <p className="mt-3 max-w-lg text-sm leading-relaxed text-cocoa-soft sm:mt-4 sm:text-base">
              Chat directly with us on WhatsApp to share your reference design,
              choose your favorite flavors, or place an order for your upcoming
              celebration.
            </p>

            <div className="mt-6 flex w-full max-w-xs flex-col items-stretch gap-3 sm:mt-8 sm:w-auto sm:max-w-none sm:flex-row sm:items-center sm:gap-3.5">
              <OrderButton
                label="Order on WhatsApp"
                message="Hi Meenah, I'd like to discuss a cake order for my upcoming celebration."
                className="group h-11 rounded-full bg-pink px-7 text-sm font-medium text-white shadow-[0_8px_20px_-4px_rgba(216,27,80,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-pink-deep active:translate-y-0 sm:h-12 sm:px-8"
              >
                <span className="inline-flex items-center justify-center gap-2">
                  <MessageCircle className="size-4" />
                  <span>Chat on WhatsApp</span>
                  <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </OrderButton>

              <Button
                asChild
                variant="outline"
                className="h-11 rounded-full border border-pink/35 bg-white/90 px-7 text-sm font-medium text-cocoa shadow-none transition-all duration-200 hover:-translate-y-0.5 hover:border-pink hover:bg-pink-soft/30 hover:text-pink active:translate-y-0 sm:h-12 sm:px-8"
              >
                <Link to="/shop">Browse Menu</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
