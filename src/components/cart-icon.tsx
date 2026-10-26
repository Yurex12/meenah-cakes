import { ShoppingBag } from 'lucide-react'
import { cn } from '#/lib/utils'

interface CartIconProps {
  count?: number
  className?: string
  onClick?: () => void
}

export function CartIcon({ count = 0, className, onClick }: CartIconProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'relative inline-flex size-9 items-center justify-center rounded-full text-cocoa transition-colors hover:bg-pink-soft/50 hover:text-pink cursor-pointer',
        className,
      )}
      aria-label={`Shopping bag with ${count} items`}
    >
      <ShoppingBag className="size-4.5 stroke-[1.75]" />
      {count > 0 && (
        <span className="absolute -top-0.5 -right-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-pink px-1 text-[10px] font-bold text-white">
          {count}
        </span>
      )}
    </button>
  )
}
