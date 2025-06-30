<template>
    <div class="base-header__container">
        <div class="base-header__title">
            {{ headerTitle }}
        </div>
    </div>
</template>
<script setup lang="ts">
defineProps({
    headerTitle: {
        type: String,
        default: 'Header Title'
    }
});
</script>