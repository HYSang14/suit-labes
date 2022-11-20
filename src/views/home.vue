<template>
    <Header :isHome="true"/>
    <div class="home-content">
        <img src="@/assets/img/cover.png" alt="">
        <div class="home-left">
            <div class="left-content">
                <span style="color: #1D1D20">TwitterMint. </span>
                <span style="color:#6E6E73">The best way to get collectors.</span>
            </div>
            <div class="left-button" @click="handleClick">Create an allowlist</div>
        </div>
    </div>
</template>

<script setup>
import Header from '@/components/header.vue'
import { useRouter } from 'vue-router';
const router = useRouter();
const handleClick = () => {
    router.push({ path: './createPage' })
}
</script>

<style lang="scss" scoped>
.home-content {
    background: #EFE8D7;
    height: calc(100% - 60px);
    position: relative;
    .home-left {
        padding-left: 130px;
        padding-top: 200px;
        width: 750px;
        .left-content {
            font-size: 60px;
        }
        .left-button {
            display: inline-block;
            height: 60px;
            line-height: 60px;
            text-align: center;
            font-size: 30px;
            padding: 0 20px;
            border-radius: 30px;
            background: #2371E3;
            cursor: pointer;
            color: #fff;
            margin-top: 60px;
        }
    }
    img {
        height: 100%;
        position: absolute;
        top:0;
        right: 0;
    }
}
</style>