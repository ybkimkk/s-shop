// stores/title.ts
import { defineStore } from 'pinia'

export const useTitleStore = defineStore('title', {
    state: () => ({
        title: ''
    }),
    actions: {
        setTitle(newTitle: string) {
            this.title = newTitle
        }
    },
    getters: {
        getTitle: (state) => state.title
    }
})
