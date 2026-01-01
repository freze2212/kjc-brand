import { MetadataRoute } from 'next'
import { SITE_CONFIG, NAV_ITEMS } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url

  const routes = NAV_ITEMS.map((item) => ({
    url: `${baseUrl}${item.href}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: item.href === '/gioi-thieu' ? 1 : 0.8,
  }))

  return routes
}

