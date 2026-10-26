import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { MenuIcon } from 'lucide-react'

import { Logo } from './logo'
import { OrderButton } from './order-button'
import { Button } from '#/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '#/components/ui/sheet'
import { NAV_LINKS } from '#/lib/constants'

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Open menu"
            className="cursor-pointer"
          >
            <MenuIcon className="size-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[260px] gap-0 p-0">
          <SheetHeader className="border-b px-5 py-4">
            <SheetTitle asChild>
              <div onClick={() => setOpen(false)}>
                <Logo className="text-lg" />
              </div>
            </SheetTitle>
            <SheetDescription className="sr-only">
              Site navigation
            </SheetDescription>
          </SheetHeader>

          <nav aria-label="Mobile" className="flex flex-col gap-1 px-3 py-4">
            {NAV_LINKS.map((link) => (
              <SheetClose asChild key={link.to}>
                <Link
                  to={link.to}
                  activeOptions={{ exact: link.to === '/' }}
                  className="rounded-md px-3.5 py-2.5 text-sm sm:text-base font-medium text-cocoa transition-colors hover:bg-pink-soft/60 hover:text-pink data-[status=active]:bg-pink-soft/70 data-[status=active]:font-semibold data-[status=active]:text-pink"
                >
                  {link.label}
                </Link>
              </SheetClose>
            ))}
          </nav>

          <div className="mt-auto border-t p-4">
            <OrderButton
              label="Order Custom Cake"
              message="Hi Meenah, I'd like to discuss a custom cake design."
              className="h-10 w-full text-sm font-medium"
            />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
