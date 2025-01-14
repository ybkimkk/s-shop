import {defineNuxtPlugin} from '#app'
import Vant from 'vant'
import 'vant/lib/index.css'
import 'video.js/dist/video-js.css'
import VideoPlayer from 'vue-video-player'


export default defineNuxtPlugin(nuxtApp => {
    // 全局使用 Vant
    nuxtApp.vueApp.use(Vant)
    nuxtApp.vueApp.use(VideoPlayer)
})
