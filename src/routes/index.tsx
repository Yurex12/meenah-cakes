import { createFileRoute } from '@tanstack/react-router'
import { AboutSection } from '#/components/about-section'
import { Categories } from '#/components/categories'
import { CtaBanner } from '#/components/cta-banner'
import { FeaturedCakes } from '#/components/featured-cakes'
import { Hero } from '#/components/hero'
import { InstagramGallery } from '#/components/instagram-gallery'
import { Testimonials } from '#/components/testimonials'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedCakes />
      <AboutSection />
      <Testimonials />
      <InstagramGallery />
      <CtaBanner />
    </>
  )
}
