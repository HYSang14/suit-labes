<template>
    <div class="header">
        <div class="left">
            <img src="../assets/img/pic-hd.png" alt="">
            <div class="left-content">
                <div>TwitterMint</div>
                <div>
                    <span>Built by </span>
                    <a href="#">@SuitLabs</a>
                </div>
            </div>
        </div>
        <div class="right" v-if="!props.signIn">
            <img src="../assets/img/tbc.png" alt="">
            <a href="javascript:void(0);" @click="toSignIn" v-if="!isLogin && props.isHome">connect with twitter</a>
            <a href="javascript:void(0);" @click="toSignOut" v-if="isLogin">Sign out</a>
            <a href="javascript:void(0);" @click="toSignIn" v-if="!isLogin && !props.isHome">Sign in</a>
        </div>
    </div>
</template>

<script setup>
import { useStore } from '@/store/index';
import { storeToRefs } from 'pinia'
import {defineProps}from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const store = useStore();
const { isLogin } = storeToRefs(store);
const props = defineProps({
    isHome: {
        type: Boolean,
        default: false
    },
    signIn: {
        type: Boolean,
        default: false
    }
})
const toSignIn = () => {
    router.push({path: '/signIn'})
}
const toSignOut = () => {
    store.loginChange(false)
}
</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    height: 60px;
    padding: 9px 0;
    box-sizing: border-box;
    .left {
        margin-left: 30px;
        display: inline-block;
        img {
            width: 36px;
            height: 36px;
        }
        .left-content {
            margin-left: 10px;
            display: inline-block;
        }
    }
    .right{
        float:right;
        margin-right: 30px;
        display: flex;
        align-items: center;
        margin-top: 2px;
        img {
            width: 36px;
            height: 36px;
            margin-right: 10px;
        }
    }
    a {
        text-decoration: none;
        color: #2371E3;
    }
}
</style>