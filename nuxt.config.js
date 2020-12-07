import localeJa from './assets/locales/ja.json'
import localeEn from './assets/locales/en.json'

const environment = process.env.NODE_ENV
const env = require(`./env.${environment}.js`)

export default {
  css: [
    'ress',
    'noto-sans-jp/noto_sans_jp_regular/css.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
    '@/assets/scss/template.scss',
  ],
  plugins: [
    '@/plugins/fontawesome',
  ],
  modules: [
    'nuxt-i18n',
    '@nuxtjs/sitemap',
  ],
  buildModules: [
    '@aceforth/nuxt-optimized-images',
  ],
  optimizedImages: {
    optimizeImages: true,
  },
  head: {
    htmlAttrs: { lang: 'ja' },
    titleTemplate: '%s | Arthur\'s Portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ]
  },
  router: {
    trailingSlash: true,
  },
  components: true,
  i18n: {
    locales: [
      {
        code: 'ja',
        iso: 'ja-JP',
      },
      {
        code: 'en',
        iso: 'en-US',
      },
    ],
    defaultLocale: 'ja',
    vueI18n: {
      fallbackLocale: 'ja',
      messages: {
        ja: localeJa,
        en: localeEn,
      },
    },
    detectBrowserLanguage: {
      alwaysRedirect: false,
      fallbackLocale: 'en',
      onlyOnRoot: true,
      useCookie: true,
      cookieKey: 'i18n_redirected',
    },
    seo: true,
    baseUrl: env.BASE_URL,
  },
  sitemap: {
    hostname: env.BASE_URL,
  },
}
