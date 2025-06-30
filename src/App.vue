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

type LayoutKey = keyof typeof layoutMap;

const layout = computed(() => {
    const layoutKey = route.meta.layout as LayoutKey; 
    return layoutMap[layoutKey] || DefaultLayout;
});
</script>