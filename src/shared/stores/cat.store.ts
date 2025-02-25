import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getBreeds, getCat, getImages } from '@services/cat';

export const useCatStore = defineStore('cat', () => {
  const breeds = ref([] as Breed[]);
  const breed = ref({} as Breed);
  const images = ref({} as string[]);

  async function fetchBreeds() {
    try {
      const data = await getBreeds();
      breeds.value = data;
      return;
    } catch {
      console.log("Erro ao recuperar infos de cat API")
    }
  }

  async function fetchCat(id: string) {
    try {
      const data = await getCat(id);
      breed.value = data;
      return;
    } catch {
      console.log("Erro ao recuperar infos de cat API")
    }
  }

  async function fetchImages(id: string) {
    try {
      const data = await getImages(id);
      images.value = data.map((item: { url: string }) => item.url);
      return;
    } catch {
      console.log("Erro ao recuperar infos de cat API")
    }
  }

  return {
    fetchBreeds, breeds, fetchCat, breed, fetchImages, images
  }
})
