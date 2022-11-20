<template>
    <Header :signIn="true"/>
    <div class="sigin-content">
        <div class="border">
            <img class="avator" src="@/assets/img/pic-hd.png" alt="">
            <div class="title">TwitterMint</div>
            <div class="button" @click="toSign">
                <img src="@/assets/img/twitter.png" alt="" style="width: 26px;height: 26px;margin-right: 5px;">
                <span>Signin with twitter</span>
            </div>
            <div class="desc">
                By connecting, you agree to the Terms of Use and Privacy Policy
            </div>
        </div>
    </div>
</template>

<script setup>
import Header from '@/components/header.vue';
import { useStore } from '@/store/index';
import { useRouter } from 'vue-router';
const router = useRouter();
const store = useStore();
const toSign = () => {
    store.loginChange(true)
    router.push({ path: './createPage' })
}
</script>

<style lang="scss" scoped>
.sigin-content {
    .border {
        height: 500px;
        margin: 0 auto;
        margin-top: 100px;
        width: 400px;
        border: 1px solid #D5D7DC;
        border-radius: 6px;
        text-align: center;
        padding: 60px 30px 0 30px;
        .avator{
            width: 138px;
            height: 138px;
        }
        .title {
            margin-top: 12px;
            margin-bottom: 30px;
            font-family: Bingo Dilan-Regular;
            font-size: 24px;
            font-weight: 600;
        }
        .button{
            border: 1px solid #DADCE0;
            padding: 10px 0;
            border-radius: 20px;
            font-size: 20px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .desc {
            color: #999999;
            margin-top: 20px;
            font-size: 15px;
        }

    }
}
</style>
