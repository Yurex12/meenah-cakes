import { Link } from '@tanstack/react-router'
import { ArrowUpRight } from 'lucide-react'
import { Logo } from './logo'
import {
  CAKE_CATEGORIES,
  INSTAGRAM_URL,
  NAV_LINKS,
  whatsappLink,
} from '#/lib/constants'

const BRAND_LETTERS = 'MEENAHCAKES'.split('')

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-border/80 bg-gradient-to-b from-[#FAF7F2] via-[#FAF7F2] to-pink-soft/30 text-cocoa">
      <div className="mx-auto w-full max-w-360 px-4 pt-14 sm:px-6 sm:pt-20 lg:px-8 lg:pt-24">
        {/* Top Footer Columns */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:grid-cols-12 lg:gap-10">
          {/* Brand Column */}
          <div className="col-span-2 sm:col-span-4 lg:col-span-4">
            <Logo />

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cocoa-soft">
              Handcrafted celebration cakes and artisanal cupcakes baked fresh
              from scratch in Ikorodu, Lagos.
            </p>
          </div>

          {/* Categories Column */}
          <div className="col-span-1 lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-cocoa">
              Our Cakes
            </h3>
            <ul className="mt-4 space-y-3">
              {CAKE_CATEGORIES.map((category) => (
                <li key={category.slug}>
                  <Link
                    to="/shop"
                    search={{ category: category.slug }}
                    className="text-sm text-cocoa-soft transition-colors hover:text-pink"
                  >
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Column */}
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-cocoa">
              Explore
            </h3>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-cocoa-soft transition-colors hover:text-pink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect / Order Column */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-cocoa">
              Get in Touch
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={whatsappLink(
                    "Hi Meenah, I'd like to inquire about ordering a cake.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 text-sm text-cocoa-soft transition-colors hover:text-pink"
                >
                  <span>Order on WhatsApp</span>
                  <ArrowUpRight className="size-3.5 text-pink transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 text-sm text-cocoa-soft transition-colors hover:text-pink"
                >
                  <span>Instagram</span>
                  <ArrowUpRight className="size-3.5 text-pink transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
              <li className="text-sm text-cocoa-soft">Ikorodu, Lagos</li>
            </ul>
          </div>
        </div>

        {/* Subtle Divider & Single Copyright Line */}
        <div className="mt-12 border-t border-border/80 pt-6 text-center text-xs text-cocoa-soft sm:mt-16 sm:text-left">
          <p>&copy; {currentYear} MeenahCakes. All rights reserved.</p>
        </div>

        {/* Giant Full-Width Tonal Brand Wordmark */}
        <div
          aria-hidden="true"
          className="pointer-events-none mt-8 flex w-full select-none items-center justify-between pb-10 sm:mt-12 sm:pb-14 lg:pb-16"
        >
          {BRAND_LETTERS.map((letter, idx) => (
            <span
              key={idx}
              className="font-editorial bg-gradient-to-b from-pink/45 via-pink/25 to-pink/5 bg-clip-text py-1 text-[clamp(1.85rem,7.8vw,7.5rem)] leading-none font-bold tracking-tight text-transparent"
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
    </footer>
  )
}
