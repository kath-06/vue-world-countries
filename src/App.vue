<template>
    <component :is="layout">
        <router-view />
    </component>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import DefaultLayout from './layouts/DefaultLayout.vue';

const route = useRoute();
const layoutMap: Record<string, any> = {
    DefaultLayout
};

const layout = computed(() => {
    return layoutMap[route.meta.layout] || DefaultLayout;
});
</script>