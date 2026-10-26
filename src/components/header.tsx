import { useEffect, useState } from 'react'

import { CartIcon } from './cart-icon'
import { DesktopNav } from './desktop-nav'
import { Logo } from './logo'
import { MobileNav } from './mobile-nav'
import { OrderButton } from './order-button'
import { useCart } from '#/lib/cart'
import { cn } from '#/lib/utils'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const { count } = useCart()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full border-b bg-white transition-[border-color,box-shadow] duration-200',
        scrolled
          ? 'border-border shadow-[0_1px_8px_rgba(58,31,29,0.04)]'
          : 'border-border/60',
      )}
    >
      <div className="mx-auto flex h-16 sm:h-18 max-w-360 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Logo */}
        <Logo />

        {/* Center: Desktop Nav Links */}
        <div className="hidden md:flex">
          <DesktopNav />
        </div>

        {/* Right: Desktop Cart Icon & Order Button */}
        <div className="hidden items-center gap-3.5 md:flex">
          <CartIcon count={count} />
          <OrderButton
            label="Order Now"
            message="Hi Meenah, I'd like to place an order."
            className="h-10 rounded-full bg-pink px-6 text-sm font-medium text-white transition-colors duration-200 hover:bg-pink-deep"
          />
        </div>

        {/* Mobile Right: Cart Icon + Menu */}
        <div className="flex items-center gap-2 md:hidden">
          <CartIcon count={count} />
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
