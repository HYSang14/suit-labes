import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
    state: () => {
        return {
            isLogin: false      
        }
    },
    getters: {

    },
    actions: {
        loginChange(item) {
            this.isLogin = item;
        }
    }
})