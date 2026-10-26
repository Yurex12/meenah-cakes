import { Link } from '@tanstack/react-router'
import { NAV_LINKS } from '#/lib/constants'

export function DesktopNav() {
  return (
    <nav
      aria-label="Main Navigation"
      className="hidden items-center gap-8 md:flex"
    >
      {NAV_LINKS.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          activeOptions={{ exact: link.to === '/' }}
          className="relative py-1 text-sm sm:text-base font-medium text-cocoa-soft transition-colors duration-200 hover:text-cocoa data-[status=active]:text-pink after:absolute after:inset-x-0 after:-bottom-0.5 after:h-[1.5px] after:origin-center after:scale-x-0 after:rounded-full after:bg-pink after:transition-transform after:duration-200 hover:after:scale-x-100 data-[status=active]:after:scale-x-100"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}
