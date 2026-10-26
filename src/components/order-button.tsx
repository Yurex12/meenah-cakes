import type { ComponentProps } from 'react'
import { Button } from '#/components/ui/button'
import { whatsappLink } from '#/lib/constants'
import { cn } from '#/lib/utils'

interface OrderButtonProps extends ComponentProps<typeof Button> {
  message?: string
  label?: string
}

export function OrderButton({
  message,
  label = 'Order Now',
  className,
  children,
  ...props
}: OrderButtonProps) {
  return (
    <Button asChild className={cn('rounded-full', className)} {...props}>
      <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer">
        {children ?? label}
      </a>
    </Button>
  )
}
