/** @type {import('next').NextConfig} */
const nextConfig = {
  // Compress responses
  compress: true,

  // 301 redirects for cannibalised pages
  async redirects() {
    return [
      {
        source: '/mba-salary',
        destination: '/average-mba-salary',
        permanent: true,
      },
    ]
  },

  // Security & SEO headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
      {
        // Long-lived cache for static assets
        source: '/(.*)\\.(svg|ico|png|jpg|jpeg|webp|avif|woff|woff2)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        // No-index the test page via header
        source: '/test',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, nofollow' },
        ],
      },
    ]
  },

  // Image optimisation — allow self-hosted images
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 86400,
  },

  // Trailing slash normalisation (canonical consistency)
  trailingSlash: false,

  // Power-by header removal (minor security/performance hygiene)
  poweredByHeader: false,
}

module.exports = nextConfig
