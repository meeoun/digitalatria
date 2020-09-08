
export default {

  publicRuntimeConfig: {
    baseURL: 'http://localhost'
  },

  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel: 'stylesheet', href: '/css/bootstrap.min.css'},
      {rel: 'stylesheet', href: '/css/jquery.bxslider.css'},
      {rel: 'stylesheet', href: '/css/font-awesome.css'},
      {rel: 'stylesheet', href: '/css/magnific-popup.css'},
      {rel: 'stylesheet', href: '/css/owl.carousel.css'},
      {rel: 'stylesheet', href: '/css/owl.theme.css'},
      {rel: 'stylesheet', href: '/css/ticker-style.css'},
      {rel: 'stylesheet', href: '/css/style.css'},
      {rel: 'stylesheet', href: '/css/tocbot.css'}

    ],
    script: [
      {src: '/js/jquery.min.js',body: true},
      {src: '/js/jquery.migrate.js',body: true},
      {src: '/js/jquery.bxslider.min.js', body: true},
      {src: '/js/jquery.magnific-popup.min.js', body: true},
      {src: '/js/bootstrap.min.js', body: true},
      {src: '/js/jquery.ticker.js', body: true},
      {src: '/js/jquery.imagesloaded.min.js', body: true},
      {src: '/js/jquery.isotope.min.js', body: true},
      {src: '/js/owl.carousel.min.js', body: true},
      {src: '/js/retina-1.1.0.min.js', body: true},
      {src: '/js/tocbot.min.js', body: true}

    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '~assets/styles/main.css'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },
  pageTransition:{
    name: 'fade',
    mode: 'out-in'
  },
  router: {
    linkExactActiveClass: 'active'
  }

}




