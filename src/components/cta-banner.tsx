import { ArrowRight } from 'lucide-react'
import { OrderButton } from './order-button'

function BakeryDoodles() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 select-none overflow-hidden opacity-[0.10]"
    >
      {/* Top Left: Spatula (Offset Frosting Spatula) */}
      <svg
        className="absolute top-6 left-6 size-20 -rotate-12 text-white sm:top-10 sm:left-14 sm:size-28"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Blade */}
        <path d="M42 22 C48 16, 75 14, 82 22 C88 28, 86 54, 80 62 C74 70, 52 50, 48 44 Z" />
        {/* Neck */}
        <line x1="44" y1="46" x2="32" y2="58" strokeWidth="4" />
        {/* Handle */}
        <path
          d="M34 56 L16 74 C13 77, 10 82, 13 85 C16 88, 21 85, 24 82 L42 64 Z"
          fill="currentColor"
          fillOpacity="0.25"
        />
      </svg>

      {/* Top Right: Whisk */}
      <svg
        className="absolute top-6 right-6 size-20 rotate-15 text-white sm:top-10 sm:right-16 sm:size-28"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="50" y1="12" x2="50" y2="40" strokeWidth="4.5" />
        <path d="M50 40 C30 48, 32 86, 50 88 C68 86, 70 48, 50 40 Z" />
        <path d="M50 40 C38 52, 40 82, 50 88 C60 82, 62 52, 50 40 Z" />
        <line x1="50" y1="40" x2="50" y2="88" />
      </svg>

      {/* Mid Left: Rolling Pin */}
      <svg
        className="absolute top-36 -left-3 size-24 -rotate-15 text-white sm:top-40 sm:left-8 sm:size-32"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="25" y="44" width="50" height="12" rx="3" />
        <path d="M12 48 L25 48 M12 52 L25 52 M12 47 C9 47, 8 49, 8 50 C8 51, 9 53, 12 53 Z" />
        <path d="M75 48 L88 48 M75 52 L88 52 M88 47 C91 47, 92 49, 92 50 C92 51, 91 53, 88 53 Z" />
      </svg>

      {/* Mid Right: Pastry Piping Bag */}
      <svg
        className="absolute top-36 -right-3 size-22 -rotate-20 text-white sm:top-40 sm:right-10 sm:size-28"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M30 18 C50 14, 75 22, 82 38 L48 76 L40 74 Z" />
        <path
          d="M40 74 L32 86 L44 80 Z"
          fill="currentColor"
          fillOpacity="0.3"
        />
        <path d="M30 18 Q55 28 82 38" strokeDasharray="3 3" />
        <circle cx="28" cy="90" r="2.5" fill="currentColor" />
      </svg>

      {/* Upper Center-Right: Celebration Cake */}
      <svg
        className="absolute top-8 right-1/3 size-16 text-white sm:top-12 sm:size-22"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 75 L78 75 C82 75, 84 72, 84 68 L84 56 C84 52, 82 50, 78 50 L22 50 C18 50, 16 52, 16 56 L16 68 C16 72, 18 75, 22 75 Z" />
        <path d="M30 50 L70 50 C73 50, 75 48, 75 45 L75 34 C75 31, 73 29, 70 29 L30 29 C27 29, 25 31, 25 34 L25 45 C25 48, 27 50, 30 50 Z" />
        <line x1="50" y1="29" x2="50" y2="20" />
        <path
          d="M50 20 C48 17, 48 14, 50 11 C52 14, 52 17, 50 20 Z"
          fill="currentColor"
        />
        <path d="M22 56 Q26 62, 30 56 Q34 62, 38 56 Q42 62, 46 56 Q50 62, 54 56 Q58 62, 62 56 Q66 62, 70 56 Q74 62, 78 56" />
      </svg>

      {/* Floating Sparkles & Baking Sprinkles */}
      <svg
        className="absolute inset-0 size-full text-white"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <circle cx="15" cy="28" r="1.1" fill="currentColor" />
        <circle cx="85" cy="22" r="1.3" fill="currentColor" />
        <circle cx="26" cy="65" r="0.9" fill="currentColor" />
        <circle cx="74" cy="60" r="1.0" fill="currentColor" />
        <circle cx="48" cy="18" r="1.1" fill="currentColor" />
        <circle cx="34" cy="40" r="0.8" fill="currentColor" />
        <circle cx="65" cy="30" r="1.2" fill="currentColor" />
        {/* 4-point sparkle star left */}
        <path
          d="M20 48 Q20 51 23 51 Q20 51 20 54 Q20 51 17 51 Q20 51 20 48 Z"
          fill="currentColor"
        />
        {/* 4-point sparkle star right */}
        <path
          d="M80 44 Q80 47 83 47 Q80 47 80 50 Q80 47 77 47 Q80 47 80 44 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  )
}

export function CtaBanner() {
  return (
    <section
      aria-labelledby="cta-banner-heading"
      className="relative isolate w-full overflow-hidden bg-gradient-to-b from-[#E71D57] via-[#D81B50] to-[#A80E38] pt-16 pb-28 text-center text-white sm:pt-20 sm:pb-36 md:pt-24 md:pb-44 lg:pt-28 lg:pb-52"
    >
      {/* Subtle top spotlight highlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-36 inset-x-0 -z-10 h-80 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/25 via-transparent to-transparent blur-3xl"
      />

      {/* Tone-on-tone patisserie sketches & doodles */}
      <BakeryDoodles />

      {/* Central content matching reference hierarchy: Headline -> Subtext -> Single Button */}
      <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center px-4 sm:px-6">
        <h2
          id="cta-banner-heading"
          className="font-editorial text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.14]"
        >
          Ready For Delicious Cakes?
        </h2>

        <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/95 sm:mt-5 sm:text-base md:text-lg sm:leading-relaxed">
          Treat yourself today! Browse our menu and order freshly baked custom
          cakes &amp; sweet treats straight to your celebration.
        </p>

        {/* Single clean butter-yellow pill button */}
        <div className="mt-7 sm:mt-9">
          <OrderButton
            label="Order Now"
            message="Hi Meenah, I'd like to place an order for delicious cakes!"
            className="group inline-flex h-12 sm:h-13 items-center justify-center gap-2 rounded-full border-none bg-[#FFF3A8] px-9 sm:px-11 text-sm sm:text-base font-bold text-[#3A141C] shadow-[0_6px_25px_rgba(0,0,0,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_10px_35px_rgba(0,0,0,0.3)] active:translate-y-0"
          >
            <span>Order Now</span>
            <ArrowRight className="size-4.5 transition-transform duration-200 group-hover:translate-x-1" />
          </OrderButton>
        </div>
      </div>

      {/* Continuous row of real photographic studio cupcakes spanning the full width */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 select-none overflow-hidden h-24 sm:h-32 md:h-40 lg:h-48"
      >
        <img
          src="/images/cta-cupcakes-row.png"
          alt=""
          loading="lazy"
          className="h-full w-full object-cover object-top drop-shadow-[0_-6px_22px_rgba(0,0,0,0.25)]"
        />
      </div>
    </section>
  )
}
