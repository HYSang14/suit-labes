<template>
    <Header/>
    <div class="create-content">
        <div class="content">
            <div class="title">Your allowlists</div>
            <div class="create" @click="toCreate">
                <span>+ Create</span>
            </div>
        </div>

    </div>
</template>

<script setup>
import Header from '@/components/header.vue'
import { useRouter } from 'vue-router';
const router = useRouter();
const toCreate = () => {
    router.push({path: '/details'})
}
</script>

<style lang="scss" scoped>
.create-content {
    height: calc(#{$height-100} - #{$header-h});
    background: #F5F5F7;
    .content {
        position: relative;
        top: 100px;
        left: 160px;
        display: inline-block;
        .title{
            font-size: 30px;
        }
        .create {
            width: 230px;
            height: 230px;
            line-height: 228px;
            text-align: center;
            margin-top: 50px;
            font-size: 20px;
            cursor: pointer;
            background: #fff;
            border-radius:6px;
            border: 1px solid #CFD1D7;
        }
    }
}
</style>