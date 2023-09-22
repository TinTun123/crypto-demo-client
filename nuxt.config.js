// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['/assets/css/main.css'],
  modules : ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@pinia/nuxt'],
  colorMode : {
    classSuffix : ''
  },
  // ssr : false,
  // tailwindcss : {
  //   cssPath: '~/assets/css/main.css',
  //   configPath : 'tainwind.config.js',
  //   exposeConfig : false,
  //   config : {},
  //   injectPosition : 0,
  //   viewer : true
  // }

})
