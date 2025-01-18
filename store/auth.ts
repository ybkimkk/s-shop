// stores/auth.ts
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwicGhvbmUiOiIxNzY0MzM5OTAyMiIsIm5hbWUiOiIyIiwiaW52aXRhdGlvbkNvZGUiOiIzIiwicGFzc3dvcmQiOiI1IiwiZW1haWwiOiJxcTM1MzAwNzgxMUBnbWFpbC5jb20ifQ.Vtw92SeA6gDFLk7msTIODwHAX4Ncwt2oQXbFkggHNXE' as string,  // 用户的认证 token
        user: null as object | null,  // 存储用户信息
    }),

    actions: {
        // 设置 token
        setToken(token: string) {
            this.token = token
        },

        // 清除 token 和用户信息（登出操作）
        logout() {
            this.token = ''
            this.user = null
            // 可以在这里添加清理本地存储的逻辑，如 localStorage/sessionStorage
            localStorage.removeItem('auth_token')  // 如果你存储了 token
        },

        // 设置用户信息
        setUser(user: object) {
            this.user = user
        },

        // 从本地存储加载 token（如果存在的话）
        loadTokenFromLocalStorage() {
            const storedToken = localStorage.getItem('auth_token')
            if (storedToken) {
                this.setToken(storedToken)
            }
        },

        // 保存 token 到本地存储
        saveTokenToLocalStorage() {
            if (this.token) {
                localStorage.setItem('auth_token', this.token)
            }
        },
    },

    getters: {
        // 获取当前认证 token
        isAuthenticated: (state) => !!state.token,
    }
})
