// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    app:{
      pageTransition:{
        name:'page', mode:'out-in'
      },
      head:{
        charset: 'utf-16',      
        viewport: 'initial-scale=1',      
        title: 'RizkyFs Portfolio',      
        meta: [
          { hid:'description', 
            name: 'Rizky Febiginta Saputra Portfolio Website', 
            content: 'Portfolio Website' }      
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
      }
    },
    modules:[
        '@nuxt/image-edge','@nuxt/content','nuxt-icon','@vueuse/nuxt'
    ],
    css: ['~/assets/css/main.css'],
    postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
