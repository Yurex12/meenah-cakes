import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({ component: Contact })

function Contact() {
  return (
    <main className="mx-auto max-w-360 px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold">Contact Us</h1>
      <p className="mt-4 text-cocoa-soft">Coming soon...</p>
    </main>
  )
}
