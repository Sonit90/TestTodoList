module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'todo-list',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'test todo-list' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css:[
    '~assets/css/main.scss'
  ],
  /*
  ** Customize the progress bar color
  */
  modules: ['nuxt-material-design-icons'],
  loading: { color: '#3B8070' },
  plugins: [{ src: '~/plugins/localStorage.js', ssr: false }],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

