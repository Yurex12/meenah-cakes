import { Link } from '@tanstack/react-router'
import { ArrowRight, Clock, Heart, Sparkles, Wheat } from 'lucide-react'
import { Button } from '#/components/ui/button'

const QUALITY_HIGHLIGHTS = [
  {
    icon: Wheat,
    title: 'Finest Ingredients',
    description:
      'Real butter, farm-fresh eggs, pure vanilla, and rich couverture chocolate.',
  },
  {
    icon: Heart,
    title: 'Baked From Scratch',
    description:
      'Every sponge and filling is freshly prepared in small batches for your order.',
  },
  {
    icon: Sparkles,
    title: 'Bespoke Artistry',
    description:
      'Custom designs tailored to match your celebration theme, colors, and taste.',
  },
  {
    icon: Clock,
    title: 'Always On Time',
    description:
      'Carefully packaged and ready right on schedule so your day stays stress-free.',
  },
] as const

export function AboutSection() {
  return (
    <section
      aria-labelledby="about-heading"
      className="border-t border-border/60 bg-white py-14 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-360 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Close-up Craft Photography */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 rotate-2 rounded-3xl border border-pink/15 bg-pink-soft/55"
              />

              <div className="overflow-hidden rounded-3xl border border-border/80 bg-[#FAF7F2] p-2.5 sm:p-3.5 shadow-[0_20px_50px_-15px_rgba(58,31,29,0.08)]">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src="/images/hero-cake-detail.jpg"
                    alt="Close-up slice of layered raspberry buttercream cake by Meenah Cakes"
                    width={800}
                    height={900}
                    loading="lazy"
                    className="aspect-[4/4.3] w-full object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Baker Intro & Why Choose Us */}
          <div className="flex flex-col items-center text-center lg:col-span-7 lg:items-start lg:text-left">
            <h2
              id="about-heading"
              className="font-editorial text-2xl font-normal tracking-tight text-cocoa sm:text-4xl lg:text-[2.5rem] lg:leading-[1.18]"
            >
              Baked with Love, Crafted to{' '}
              <span className="font-editorial italic text-pink">
                Perfection
              </span>
            </h2>

            <p className="mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-cocoa-soft">
              At MeenahCakes, every creation begins from scratch in our kitchen.
              We believe a celebration cake should taste even better than it
              looks—pairing soft, moist sponge layers with silky, balanced
              frostings made just for your special moment.
            </p>

            {/* Quality Highlights (Why Choose Us) */}
            <div className="mt-7 sm:mt-8 grid w-full grid-cols-1 gap-4 text-left sm:grid-cols-2 sm:gap-5">
              {QUALITY_HIGHLIGHTS.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-3.5 rounded-2xl border border-border/70 bg-[#FAF7F2]/65 p-4 transition-colors duration-200 hover:border-pink/25 hover:bg-[#FAF7F2]"
                  >
                    <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-pink-soft/80 text-pink">
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-cocoa sm:text-base">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-cocoa-soft sm:text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Subtle Action Link */}
            <div className="mt-7 sm:mt-8">
              <Button
                asChild
                variant="outline"
                className="group h-11 rounded-full border border-pink/35 bg-white px-7 text-sm font-medium text-cocoa shadow-none transition-all duration-200 hover:border-pink hover:bg-pink-soft/30 hover:text-pink"
              >
                <Link to="/about">
                  <span>More About Our Story</span>
                  <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
