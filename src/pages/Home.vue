<template>
    <div class="page__container">
        <div class="page__title">Country Lists</div>
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useCountryStore } from '../stores/useCountryStore';

const countryStore = useCountryStore();

let countries = ref<any[]>([]);

onMounted(async () => {
    countries.value = await countryStore.getCountries();
});

watch(
  countries,
  (newVal) => {
    countries.value = newVal.sort((a: any, b: any) => a.name.common.localeCompare(b.name.common));
  },
  { immediate: true }
);
</script>