import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getBreeds } from '@services/cat';

export const useCatStore = defineStore('cat', () => {
  const breeds = ref([] as Breed[]);

  async function fetchBreeds() {
    try {
      const data = await getBreeds();
      breeds.value = data;
      return;
    } catch {
      console.log("Erro ao recuperar infos de cat API")
    }
  }

  return {
    fetchBreeds, breeds
  }
})
