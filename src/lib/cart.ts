import { useSyncExternalStore } from 'react'

export interface CartItem {
  id: string
  name: string
  price: number
  image: string
  quantity: number
}

let cartItems: Array<CartItem> = []
const listeners = new Set<() => void>()

function emitChange() {
  for (const listener of listeners) {
    listener()
  }
}

export function addToCart(item: Omit<CartItem, 'quantity'>) {
  const existing = cartItems.find((i) => i.id === item.id)
  if (existing) {
    cartItems = cartItems.map((i) =>
      i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i,
    )
  } else {
    cartItems = [...cartItems, { ...item, quantity: 1 }]
  }
  emitChange()
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

function getSnapshot() {
  return cartItems
}

export function useCart() {
  const items = useSyncExternalStore(subscribe, getSnapshot, getSnapshot)
  const count = items.reduce((sum, item) => sum + item.quantity, 0)
  return { items, count, addToCart }
}
