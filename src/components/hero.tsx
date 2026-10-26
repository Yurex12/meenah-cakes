import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'

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

function OrnamentalDivider({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'pointer-events-none flex w-full items-center text-cocoa/70',
        className,
      )}
    >
      {/* Left terminal loop */}
      <svg viewBox="0 0 16 16" fill="none" className="size-3.5 shrink-0">
        <path
          d="M15 8C10.5 4 2 4.5 2 8C2 11.5 10.5 12 15 8Z"
          stroke="currentColor"
          strokeWidth="1.35"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Left stretching line */}
      <div className="h-[1.25px] flex-1 bg-current" />

      {/* Center symmetrical scroll flourish */}
      <svg
        viewBox="0 0 160 28"
        fill="none"
        className="h-6 w-32 shrink-0 sm:h-7 sm:w-36"
      >
        <path
          d="M0 14H6C12 14 14 19 9 20.5C5 21.5 3 17.5 6 15C11 11 22 8 34 13.5C46 19 56 19 66 13C72 9.5 77 9.5 80 14"
          stroke="currentColor"
          strokeWidth="1.35"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28 14C36 9 48 9 58 14.5C66 19 75 18.5 80 14"
          stroke="currentColor"
          strokeWidth="1.15"
          strokeLinecap="round"
        />
        <path
          d="M160 14H154C148 14 146 19 151 20.5C155 21.5 157 17.5 154 15C149 11 138 8 126 13.5C114 19 104 19 94 13C88 9.5 83 9.5 80 14"
          stroke="currentColor"
          strokeWidth="1.35"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M132 14C124 9 112 9 102 14.5C94 19 85 18.5 80 14"
          stroke="currentColor"
          strokeWidth="1.15"
          strokeLinecap="round"
        />
        <circle cx="80" cy="14" r="2" fill="currentColor" />
      </svg>

      {/* Right stretching line */}
      <div className="h-[1.25px] flex-1 bg-current" />

      {/* Right terminal loop */}
      <svg viewBox="0 0 16 16" fill="none" className="size-3.5 shrink-0">
        <path
          d="M1 8C5.5 4 14 4.5 14 8C14 11.5 5.5 12 1 8Z"
          stroke="currentColor"
          strokeWidth="1.35"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-4rem)] items-center overflow-hidden border-b border-border/60 bg-white py-8 sm:min-h-[calc(100svh-4.5rem)] sm:py-12 lg:py-16">
      <div className="mx-auto w-full max-w-360 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Clean Editorial Typography & Actions */}
          <div className="flex flex-col items-center text-center lg:col-span-6 lg:items-start lg:text-left">
            {/* Soft Pill Tagline Badge */}
            <div className="inline-flex items-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-pink/20 bg-pink-soft/65 px-3.5 py-1 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-pink">
                <SparkleStar className="size-2.5 text-pink" />
                <span>Delight in Every Bite</span>
              </span>
            </div>

            {/* Heading + Full-Width Matching Ornamental Line Wrapper */}
            <div className="mt-4 sm:mt-5 inline-flex flex-col items-stretch">
              <h1 className="font-editorial text-[2.35rem] font-normal leading-[1.08] tracking-tight text-cocoa sm:text-6xl lg:text-[4.5rem] xl:text-[5rem]">
                Cakes for{' '}
                <span className="relative inline-block font-editorial italic text-pink">
                  Every
                  <svg
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-1 sm:-bottom-1.5 left-0 w-full text-pink"
                    viewBox="0 0 200 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 7C55 2.5 145 2.5 197 6.5"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <br />
                Sweet Moment
              </h1>

              {/* Ornamental Filigree Line Spanning the Exact Width of the Heading */}
              <OrnamentalDivider className="mt-4 sm:mt-5" />
            </div>

            {/* Subheading: scaled up to 18-19px and slightly darker */}
            <p className="mt-4 sm:mt-5 max-w-lg text-sm sm:text-lg lg:text-[19px] leading-relaxed text-cocoa/80">
              From intimate birthdays to grand weddings, enjoy freshly baked,
              premium cakes crafted to make your celebration unforgettable.
            </p>

            {/* Clean Pill Action Buttons */}
            <div className="mt-6 sm:mt-8 flex w-full max-w-xs flex-col items-stretch gap-3 sm:max-w-none sm:w-auto sm:flex-row sm:items-center sm:gap-4">
              <OrderButton
                label="Order Now"
                message="Hi Meenah, I'd like to order a cake."
                className="group h-12 sm:h-13.5 rounded-full bg-pink px-8 sm:px-9 text-sm sm:text-base font-medium text-white shadow-[0_8px_20px_-4px_rgba(216,27,80,0.35)] transition-all duration-200 hover:bg-pink-deep hover:-translate-y-0.5 active:translate-y-0"
              >
                <span className="inline-flex items-center justify-center gap-2">
                  <span>Order Now</span>
                  <ArrowRight className="size-4.5 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </OrderButton>

              <Button
                asChild
                variant="outline"
                className="h-12 sm:h-13.5 rounded-full border border-pink/35 bg-white/90 px-8 sm:px-9 text-sm sm:text-base font-medium text-cocoa shadow-none transition-all duration-200 hover:border-pink hover:bg-pink-soft/30 hover:text-pink hover:-translate-y-0.5 active:translate-y-0"
              >
                <Link to="/shop">Browse Our Cakes</Link>
              </Button>
            </div>
          </div>

          {/* Right Column: Wedding Cake with Creative Botanical Halo & Soft Radial Aura */}
          <div className="flex items-center justify-center lg:col-span-6">
            <div className="relative mx-auto flex w-full max-w-xs items-center justify-center sm:max-w-md lg:max-w-lg">
              {/* Soft Feathered Radial Blush Aura */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -m-6 rounded-full bg-[radial-gradient(circle_at_50%_48%,rgba(253,231,238,0.95)_0%,rgba(244,143,177,0.22)_42%,transparent_72%)] sm:-m-10"
              />

              {/* Intentional Patisserie Sparkles Clustered Around the Cake */}
              <SparkleStar className="pointer-events-none absolute -top-3 right-6 z-20 size-4.5 text-pink drop-shadow-[0_2px_8px_rgba(216,27,80,0.35)] sm:-top-5 sm:right-10 sm:size-5.5" />
              <SparkleStar className="pointer-events-none absolute top-[36%] -left-2 z-20 size-3.5 text-pink/90 drop-shadow-[0_2px_6px_rgba(216,27,80,0.3)] sm:-left-4 sm:size-4.5" />
              <SparkleStar className="pointer-events-none absolute bottom-14 right-2 z-20 size-3.5 text-pink/85 drop-shadow-[0_2px_6px_rgba(216,27,80,0.3)] sm:bottom-20 sm:right-6 sm:size-4" />
              <SparkleStar className="pointer-events-none absolute top-12 left-6 z-20 size-2.5 text-pink/75 sm:top-16 sm:left-8 sm:size-3" />

              {/* Creative Fine-Line Botanical Crest & Celestial Halo SVG Behind the Cake */}
              <svg
                aria-hidden="true"
                viewBox="0 0 520 560"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="pointer-events-none absolute inset-0 -m-2 h-[calc(100%+1rem)] w-[calc(100%+1rem)] text-pink/45 sm:-m-4 sm:h-[calc(100%+2rem)] sm:w-[calc(100%+2rem)]"
              >
                {/* Outer Incomplete Editorial Arch Line */}
                <path
                  d="M 68 370 A 205 205 0 1 1 452 370"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />

                {/* Inner Dashed Celestial Orbit */}
                <circle
                  cx="260"
                  cy="275"
                  r="184"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeDasharray="4 7"
                  className="text-cocoa/25"
                />

                {/* Offset Warm Tonal Crescent Arc */}
                <path
                  d="M 92 195 A 192 192 0 0 1 428 195"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  className="text-pink/30"
                />

                {/* Left Curving Botanical Vine & Leaves Peeking Out Behind Cake */}
                <g className="text-cocoa/35">
                  <path
                    d="M 78 345 C 52 290 54 220 88 165"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                  />
                  {/* Left leaves along the vine */}
                  <path
                    d="M 66 310 C 40 302 28 282 34 266 C 50 274 62 292 66 310 Z"
                    stroke="currentColor"
                    strokeWidth="1.15"
                    strokeLinejoin="round"
                    fill="rgba(253,231,238,0.6)"
                  />
                  <path
                    d="M 60 262 C 34 248 26 226 36 210 C 52 222 60 242 60 262 Z"
                    stroke="currentColor"
                    strokeWidth="1.15"
                    strokeLinejoin="round"
                    fill="rgba(253,231,238,0.6)"
                  />
                  <path
                    d="M 68 214 C 46 196 44 174 56 160 C 68 174 72 194 68 214 Z"
                    stroke="currentColor"
                    strokeWidth="1.15"
                    strokeLinejoin="round"
                    fill="rgba(253,231,238,0.6)"
                  />
                  <path
                    d="M 88 165 C 76 144 82 124 96 114 C 102 130 98 150 88 165 Z"
                    stroke="currentColor"
                    strokeWidth="1.15"
                    strokeLinejoin="round"
                    fill="rgba(253,231,238,0.6)"
                  />
                </g>

                {/* Right Curving Botanical Vine & Leaves Peeking Out Behind Cake */}
                <g className="text-cocoa/35">
                  <path
                    d="M 442 345 C 468 290 466 220 432 165"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 454 310 C 480 302 492 282 486 266 C 470 274 458 292 454 310 Z"
                    stroke="currentColor"
                    strokeWidth="1.15"
                    strokeLinejoin="round"
                    fill="rgba(253,231,238,0.6)"
                  />
                  <path
                    d="M 460 262 C 486 248 494 226 484 210 C 468 222 460 242 460 262 Z"
                    stroke="currentColor"
                    strokeWidth="1.15"
                    strokeLinejoin="round"
                    fill="rgba(253,231,238,0.6)"
                  />
                  <path
                    d="M 452 214 C 474 196 476 174 464 160 C 452 174 448 194 452 214 Z"
                    stroke="currentColor"
                    strokeWidth="1.15"
                    strokeLinejoin="round"
                    fill="rgba(253,231,238,0.6)"
                  />
                  <path
                    d="M 432 165 C 444 144 438 124 424 114 C 418 130 422 150 432 165 Z"
                    stroke="currentColor"
                    strokeWidth="1.15"
                    strokeLinejoin="round"
                    fill="rgba(253,231,238,0.6)"
                  />
                </g>

                {/* Top Crown Flourish Diamond & Sparkles on the Arch */}
                <path
                  d="M 260 54 C 260 63 253 70 244 70 C 253 70 260 77 260 86 C 260 77 267 70 276 70 C 267 70 260 63 260 54 Z"
                  fill="currentColor"
                  className="text-pink/70"
                />
                <circle cx="226" cy="72" r="2.5" fill="currentColor" />
                <circle cx="294" cy="72" r="2.5" fill="currentColor" />
                <circle cx="68" cy="370" r="3" fill="currentColor" />
                <circle cx="452" cy="370" r="3" fill="currentColor" />
              </svg>

              <img
                src="/images/hero-wedding-cake-white.png"
                alt="Three-tier white wedding cake adorned with pink roses and delicate lace piping on a porcelain pedestal stand"
                width={1383}
                height={1715}
                className="relative z-10 h-auto max-h-[400px] w-full object-contain transition-transform duration-500 ease-out hover:scale-[1.02] sm:max-h-[480px] lg:max-h-[560px]"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
