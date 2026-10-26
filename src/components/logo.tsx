import { Link } from '@tanstack/react-router'
import { cn } from '#/lib/utils'

function CakeEGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 -2 10.5 16.5"
      fill="currentColor"
      aria-hidden="true"
      className={cn(
        'inline-block h-[0.98em] w-auto shrink-0 align-baseline mx-[0.06em]',
        className,
      )}
    >
      {/* Cherry stem curving up and slightly to the right */}
      <path
        d="M4.6 1.0C4.7 -0.3 5.8 -1.2 7.3 -1.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeLinecap="round"
      />

      {/* Glossy Cherry fruit on top of the cake tiers */}
      <circle cx="4.6" cy="2.3" r="1.35" className="fill-pink" />

      {/* 3 Tiered Cake / E Bars */}
      <rect
        x="0"
        y="3.5"
        width="9.2"
        height="2.3"
        rx="0.7"
        fill="currentColor"
      />
      <rect
        x="0"
        y="7.8"
        width="9.2"
        height="2.3"
        rx="0.7"
        fill="currentColor"
      />
      <rect
        x="0"
        y="12.1"
        width="9.2"
        height="2.3"
        rx="0.7"
        fill="currentColor"
      />
    </svg>
  )
}

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      to="/"
      aria-label="Meenah Cakes — home"
      className={cn(
        'inline-flex items-baseline font-logo text-xl sm:text-2xl font-bold tracking-[0.08em] text-cocoa transition-opacity hover:opacity-85 focus-visible:outline-none',
        className,
      )}
    >
      <span aria-hidden="true" className="inline-flex items-baseline">
        <span>MEENAHCAK</span>
        <CakeEGlyph />
        <span>S</span>
      </span>
      <span className="sr-only">MEENAHCAKES</span>
    </Link>
  )
}
