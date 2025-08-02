export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss', 'nuxt-charts'],
  css: ['~/assets/css/tailwind.css' , '/style.css'],

  imports: {
    autoImport: true,
    dirs: ['types']
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'tr'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'SelçukSports - Canlı Maç İzle HD | Selçuksportshd',
      meta: [
        {
          name: 'description',
          content: 'SelçukSports ile futbol, basketbol ve tüm spor karşılaşmalarını HD kalitede canlı izleyin. Selçuksportshd üzerinden kesintisiz maç yayınları ve Selçuk Sports TV deneyimi.'
        },
        {
          name: 'keywords',
          content: 'selcuksports, selcuksportshd, selcuk sports, canlı maç izle, hd yayın, futbol izle, basketbol izle, selcuksports tv, selcuksportshd xyz'
        },
        {
          name: 'author',
          content: 'SelçukSports'
        },
        {
          name: 'robots',
          content: 'index, follow'
        },
        {
          name: 'theme-color',
          content: '#0f1923'
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:site_name',
          content: 'SelçukSports'
        },
        {
          property: 'og:title',
          content: 'SelçukSports - Canlı Maç İzle HD | Selçuksportshd'
        },
        {
          property: 'og:description',
          content: 'SelçukSports ile futbol, basketbol ve tüm spor karşılaşmalarını HD kalitede canlı izleyin. Kesintisiz maç yayınları için doğru adres.'
        },
        {
          property: 'og:image',
          content: 'https://selcuksports2.com/og-image.jpg'
        },
        {
          property: 'og:url',
          content: 'https://selcuksports2.com'
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          name: 'twitter:title',
          content: 'SelçukSports - Canlı Maç İzle HD'
        },
        {
          name: 'twitter:description',
          content: 'SelçukSports ile futbol, basketbol ve tüm spor karşılaşmalarını HD kalitede canlı izleyin.'
        },
        {
          name: 'twitter:image',
          content: 'https://selcuksports2.com/og-image.jpg'
        },
        {
          name: 'google-site-verification',
          content: 'YVb2Kev6bW4awuLxtSBP3SkrdnIAjnri19aSPgHlUu0'
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://selcuksports2.com'
        },
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png'
        }
      ],
    }
  },

  experimental: {
    payloadExtraction: false
  },

  nitro: {
    prerender: {
      routes: ['/', '/player', '/selcuksports', '/sitemap.xml']
    }
  }
})
