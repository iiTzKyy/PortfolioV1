import VueGtag from 'vue-gtag'

export default defineNuxtPlugin((useNuxtApp) => {
    useNuxtApp.vueApp.use(VueGtag,{
        config:{
            id: 'G-RL9SL8HPS1'
        }
    })
})