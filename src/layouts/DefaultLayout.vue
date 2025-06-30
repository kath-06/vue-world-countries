<template>
    <base-header header-title="Countries of the World" />
    <main>
        <slot />
    </main>
    <footer></footer>
</template>
<script setup lang="ts">
import BaseHeader from '../components/layout/BaseHeader.vue';
</script>