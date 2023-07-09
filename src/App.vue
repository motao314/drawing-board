<template>
    <Layout>
        <LayoutHeader>Header</LayoutHeader>
        <LayoutContent>
            <router-view></router-view>
        </LayoutContent>
    </Layout>
</template>
<script setup lang="ts">
import {Layout,LayoutContent,LayoutHeader} from "ant-design-vue"
</script>
<style scoped>
</style>
