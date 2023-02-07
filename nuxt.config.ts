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
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },{rel:'canonical', href:'oiki.my.id'}]
      }
    },
    modules:[
        '@nuxt/image-edge','@nuxt/content','nuxt-icon','@vueuse/nuxt',
        ['@nuxtjs/robots',{
          UserAgent:'Googlebot',
          Disallow:'',
          Host:'oiki.my.id',
          Sitemap:''
        }],
    ],
    css: ['~/assets/css/main.css'],
    postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  
})
