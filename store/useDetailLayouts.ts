// stores/title.ts
import { defineStore } from 'pinia'

export const useTitleStore = defineStore('title', {
    state: () => ({
        title: '',
        initBack:true
    }),
    actions: {
        setTitle(newTitle: string) {
            this.title = newTitle
        },
        setInitBack(Back: boolean) {
            this.initBack = Back
        }
    },
    getters: {
        getTitle: (state) => state.title,
        getInitBack: (state) => state.initBack
    }
})
