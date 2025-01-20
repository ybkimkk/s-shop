// https://nuxt.com/docs/api/configuration/nuxt-config
// 动态加载环境变量文件
import { config } from 'dotenv';
import { resolve } from 'path';
const envFile = process.env.ENV_FILE || '.env';
config({ path: resolve(process.cwd(), envFile) });

console.log('Loaded API_BASE_URL:', process.env.API_BASE_URL);

export default defineNuxtConfig({
    ssr: true,  // 确保 SSR 开启
    pages: true,
    typescript: {
        strict: true // 确保严格模式开启
    },
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},
    css: [
        '~/assets/css/index.css',
        // 引入 video.js 的默认样式

    ],
    modules: [
        '@unocss/nuxt',
        '@pinia/nuxt'
    ],
    plugins: [
        // 加载 Vant 插件
        '~/plugins/index.ts'
    ],
    app: {
        head: {
            script: [
                {src: '/js/gt4.js', type: 'text/javascript', defer: true},
            ]
        }
    },
    runtimeConfig: {
        // 默认环境变量（仅在服务器端可用）
        apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:3000/api',
        // 可公开的环境变量（通过 public 对象暴露到客户端）
        public: {
            apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:3000/api',
        },
    }
})
