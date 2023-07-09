<template>
    <Layout class="layout">
        <LayoutHeader>
            <Row>
                <Col span="3">
                    <h1 id="title">
                       <RouterLink to="/">TM画板</RouterLink>
                    </h1>
                </Col>
                <Col span="18">
                </Col>
                <Col span="3">
                    <RouterLink to="/editor">新建设计</RouterLink>
                    <Divider type="vertical" style="background-color: #646cff;" />
                    <RouterLink to="/history">我的设计</RouterLink>
                </Col>
            </Row>
        </LayoutHeader>
        <LayoutContent class="content">
            <router-view></router-view>
        </LayoutContent>
    </Layout>
</template>
<script setup lang="ts">
import {Layout,LayoutContent,LayoutHeader,Row,Col,Divider} from "ant-design-vue";
import {RouterLink} from "vue-router";
</script>
<style scoped>
.layout {
    flex: 1;
}
.content {
    flex: 1;
}
</style>
