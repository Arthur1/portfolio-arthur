export default {
  css: [
    'ress',
    'noto-sans-jp/noto_sans_jp_regular/css.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
    '@/assets/template.scss'
  ],
  plugins: [
    '@/plugins/fontawesome'
  ],
  head: {
    htmlAttrs: { lang: 'ja' },
    titleTemplate: '%s | Arthur\'s Portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ]
  }
}