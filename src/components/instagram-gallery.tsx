import { ArrowUpRight } from 'lucide-react'
import { GALLERY_TILES, INSTAGRAM_URL } from '#/lib/constants'
import { cn } from '#/lib/utils'

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

export function InstagramGallery() {
  return (
    <section
      aria-labelledby="instagram-heading"
      className="border-t border-border/60 bg-white py-14 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-360 px-4 sm:px-6 lg:px-8">
        {/* Clean Section Header */}
        <div className="mx-auto max-w-xl text-center">
          <h2
            id="instagram-heading"
            className="font-editorial text-2xl font-normal tracking-tight text-cocoa sm:text-4xl"
          >
            Follow Our{' '}
            <span className="font-editorial italic text-pink">
              Sweet Journey
            </span>
          </h2>
          <p className="mt-2 text-sm text-cocoa-soft sm:text-base">
            A glimpse into our recent bakes and celebrations.
          </p>
        </div>

        {/* Interlocking 6-Tile Bento Mosaic Grid */}
        <div className="mt-8 grid grid-cols-2 auto-rows-[150px] gap-2.5 sm:mt-12 sm:auto-rows-[210px] sm:gap-4 lg:h-[520px] lg:grid-cols-12 lg:grid-rows-2 lg:auto-rows-fr">
          {GALLERY_TILES.map((tile) => (
            <a
              key={tile.id}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${tile.label} — View on Instagram`}
              className={cn(
                'group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-[#FAF7F2] ring-1 ring-border/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink',
                tile.gridClass,
              )}
            >
              <img
                src={tile.image}
                alt={tile.alt}
                loading="lazy"
                className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Subtle Gradient Vignette on Hover */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cocoa/50 via-cocoa/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Top-Right Instagram Badge on Hover */}
              <span className="pointer-events-none absolute top-3 right-3 inline-flex size-8 items-center justify-center rounded-full bg-white/90 text-pink opacity-0 shadow-xs backdrop-blur-xs transition-all duration-300 group-hover:opacity-100">
                <InstagramIcon className="size-4" />
              </span>

              {/* Bottom-Left Label Pill on Hover */}
              <span className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-cocoa opacity-0 shadow-xs backdrop-blur-xs transition-all duration-300 group-hover:opacity-100">
                {tile.label}
              </span>
            </a>
          ))}
        </div>

        {/* Clean Instagram Handle Pill Below */}
        <div className="mt-8 flex justify-center sm:mt-10">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-pink/30 bg-[#FAF7F2] px-6 py-2.5 text-xs sm:text-sm font-medium text-cocoa transition-all duration-200 hover:border-pink hover:bg-pink-soft/35 hover:text-pink"
          >
            <InstagramIcon className="size-4 text-pink" />
            <span>@meenah_delightsome_cakes</span>
            <ArrowUpRight className="size-4 text-pink transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  )
}
