const { metaTags } = require('./app/utils/generators')
const meta = [
  { charset: 'utf-8' },
  { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  {
    name: 'google-site-verification',
    content: process.env.APP_GOOGLE_SITE_VERIFICATION_KEY
  }
]

if (process.env.META_TAGS_ENABLED === 'true') {
  meta.push(...metaTags().appMetaTags())
}

module.exports = {
  titleTemplate: process.env.APP_NAME,
  meta,
  htmlAttrs: {
    class: 'bg-gray-1000'
  },
  bodyAttrs: {
    class: 'overflow-fix'
  },
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon.png' },
    { rel: 'shortcut icon', type: 'image/png', href: '/favicon.png' },
    { rel: 'apple-touch-icon', type: 'image/png', href: '/favicon.png' }
  ]
}
