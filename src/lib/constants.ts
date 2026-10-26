export const WHATSAPP_NUMBER = '2348000000000'

export const INSTAGRAM_URL =
  'https://www.instagram.com/meenah_delightsome_cakes/'

export function whatsappLink(
  message = "Hi Meenah, I'd like to place an order.",
) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const BRAND = {
  name: 'MEENAHCAKES',
  tagline: 'Delight in Every Bite',
  city: 'Ikorodu, Lagos',
  whatsappNumber: WHATSAPP_NUMBER,
  instagramUrl: INSTAGRAM_URL,
} as const

export const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
] as const

export type CakeCategorySlug = 'birthday' | 'wedding' | 'cupcakes' | 'custom'

export interface CakeCategory {
  slug: CakeCategorySlug
  title: string
  description: string
  image: string
  imageAlt: string
}

export const CAKE_CATEGORIES: Array<CakeCategory> = [
  {
    slug: 'birthday',
    title: 'Birthday',
    description:
      'Joyful, flavorful cakes baked to make every birthday extra sweet.',
    image: '/images/hero-cake-strawberry.jpg',
    imageAlt: 'Fresh strawberry and cream birthday cake by Meenah Cakes',
  },
  {
    slug: 'wedding',
    title: 'Wedding',
    description:
      'Timeless multi-tier creations crafted for your most memorable day.',
    image: '/images/luxury-wedding-cake.jpg',
    imageAlt: 'Elegant tiered floral wedding cake on a pedestal stand',
  },
  {
    slug: 'cupcakes',
    title: 'Cupcakes',
    description:
      'Soft, handcrafted cupcakes crowned with silky buttercream swirls.',
    image: '/images/category-cupcakes.jpg',
    imageAlt:
      'Artisanal cupcakes topped with pink buttercream and fresh raspberries',
  },
  {
    slug: 'custom',
    title: 'Custom Celebration',
    description:
      'Bespoke designs tailored to milestones, showers, and special events.',
    image: '/images/hero-cake-fresh.jpg',
    imageAlt:
      'Custom layered celebration cake decorated with edible flowers and berries',
  },
]

export interface FeaturedCake {
  id: string
  name: string
  flavor: string
  price: number
  priceFormatted: string
  image: string
  imageAlt: string
}

export const FEATURED_CAKES: Array<FeaturedCake> = [
  {
    id: 'berry-macaron-cake',
    name: 'Berry Macaron Celebration',
    flavor: 'Vanilla bean sponge, raspberry compote & French macarons.',
    price: 35000,
    priceFormatted: '₦35,000',
    image: '/images/hero-cake.jpg',
    imageAlt: 'Berry Macaron Celebration Cake on a ceramic stand',
  },
  {
    id: 'strawberry-blossom-cake',
    name: 'Strawberry Blossom Cake',
    flavor: 'Three layers of soft sponge, whipped cream & fresh strawberries.',
    price: 28000,
    priceFormatted: '₦28,000',
    image: '/images/hero-cake-fresh.jpg',
    imageAlt: 'Three-layer strawberry blossom cake with edible flowers',
  },
  {
    id: 'raspberry-rose-cupcakes',
    name: 'Raspberry Rose Cupcakes',
    flavor: 'Box of 6 handcrafted cupcakes with berry & vanilla bean frosting.',
    price: 12500,
    priceFormatted: '₦12,500',
    image: '/images/category-cupcakes.jpg',
    imageAlt: 'Box of artisanal raspberry and vanilla bean cupcakes',
  },
  {
    id: 'blush-peony-tiered-cake',
    name: 'Blush Peony Tiered Cake',
    flavor: 'Smooth ivory buttercream finished with delicate blush florals.',
    price: 85000,
    priceFormatted: '₦85,000',
    image: '/images/luxury-wedding-cake.jpg',
    imageAlt: 'Blush Peony multi-tier wedding and celebration cake',
  },
]

export interface Testimonial {
  id: string
  name: string
  initials: string
  occasion: string
  quote: string
}

export const TESTIMONIALS: Array<Testimonial> = [
  {
    id: 'amina-b',
    name: 'Amina Bello',
    initials: 'AB',
    occasion: 'Birthday Celebration',
    quote:
      'The strawberry blossom cake was the highlight of my daughter’s birthday. Every single guest asked where we got it—so moist, fresh, and not overly sweet.',
  },
  {
    id: 'chidinma-o',
    name: 'Chidinma & Tolu',
    initials: 'CT',
    occasion: 'Wedding Reception',
    quote:
      'Meenah brought our wedding cake vision to life effortlessly. It looked like a work of art in our photos and tasted even better when we cut into it.',
  },
  {
    id: 'zainab-k',
    name: 'Zainab Kareem',
    initials: 'ZK',
    occasion: 'Custom Anniversary Cake',
    quote:
      'Ordering was so smooth and our cake arrived right on time, packaged with care. The vanilla bean and raspberry filling is easily the best we have ever had.',
  },
]

export interface GalleryTile {
  id: string
  image: string
  alt: string
  label: string
  gridClass: string
}

export const GALLERY_TILES: Array<GalleryTile> = [
  {
    id: 'wedding-tiered',
    image: '/images/luxury-wedding-cake.jpg',
    alt: 'Multi-tier ivory wedding cake adorned with blush peonies',
    label: 'Bespoke Wedding Tiers',
    gridClass: 'col-span-1 row-span-2 lg:col-span-3 lg:row-span-2',
  },
  {
    id: 'berry-macaron',
    image: '/images/hero-cake.jpg',
    alt: 'Berry and French macaron celebration cake on a ceramic stand',
    label: 'Signature Celebration',
    gridClass: 'col-span-1 row-span-1 lg:col-span-4 lg:row-span-1',
  },
  {
    id: 'artisanal-cupcakes',
    image: '/images/category-cupcakes.jpg',
    alt: 'Handcrafted raspberry and vanilla bean buttercream cupcakes',
    label: 'Artisanal Cupcakes',
    gridClass: 'col-span-1 row-span-1 lg:col-span-2 lg:row-span-1',
  },
  {
    id: 'cake-slice-detail',
    image: '/images/hero-cake-detail.jpg',
    alt: 'Close-up slice of layered raspberry buttercream cake',
    label: 'Soft Layered Crumb',
    gridClass:
      'col-span-1 row-span-1 lg:col-start-4 lg:col-span-2 lg:row-start-2 lg:row-span-1',
  },
  {
    id: 'strawberry-birthday',
    image: '/images/hero-cake-strawberry.jpg',
    alt: 'Fresh strawberry and cream birthday cake',
    label: 'Fresh Berry Specials',
    gridClass:
      'col-span-1 row-span-1 lg:col-start-6 lg:col-span-4 lg:row-start-2 lg:row-span-1',
  },
  {
    id: 'botanical-layered',
    image: '/images/hero-cake-fresh.jpg',
    alt: 'Three-tier strawberry blossom cake decorated with edible flowers',
    label: 'Botanical Layer Cakes',
    gridClass:
      'col-span-1 row-span-2 col-start-2 row-start-3 lg:col-start-10 lg:col-span-3 lg:row-start-1 lg:row-span-2',
  },
]
