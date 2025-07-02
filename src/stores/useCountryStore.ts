import { ref } from "vue";
import { defineStore } from "pinia";
import { fetchCountryApi } from "../composables/countryApi";

export const useCountryStore = defineStore('country', () => {
    const countries = ref<any[]>([]);
    const isLoading = ref(false);
    const error = ref<string | null>(null);

    async function getCountries(): Promise<any[]> {
        isLoading.value = true;
        error.value = null;

        try {
            const data = await fetchCountryApi();
            countries.value = data;
            return data;
        } catch (err) {
            error.value = "Failed to fetch countries";
            console.error(err);
            return [];
        } finally {
            isLoading.value = false;
        }
    }

    return {
        countries,
        isLoading,
        error,
        getCountries
    }
});