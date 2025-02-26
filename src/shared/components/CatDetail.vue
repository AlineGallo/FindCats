<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import { useCatStore } from '../stores/cat.store';
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const modules = [Pagination, Navigation];

const props = defineProps<{ id: string }>();

const catStore = useCatStore()
const breed = ref({} as Breed);
const images = ref();

onBeforeMount(async () => {
  await catStore.fetchImages(props.id)
  images.value = catStore.images;

  await catStore.fetchCat(props.id)
  breed.value = catStore.breed;
});
</script>
<template>
  <div class="w-full bg-a_ligth h-full rounded-lg flex flex-col justify-center items-center">

    <div class="flex flex-col sm:flex-row p-4">
      <div class="sm:w-1/2">
        <div class="w-full flex justify-center">
          <swiper ref="swiper" :pagination="true" :navigation="true" :modules="modules"
            class="sm:w-[600px] sm:h-[400px] h-64 w-80 rounded-lg">
            <swiper-slide v-for="(image, index) in images" :key="index">
              <div class="flex justify-center items-center">
                <img :src="image" alt="" class="rounded-lg sm:w-[600px] sm:h-[400px] h-64 w-80" />
              </div>
              <br>
            </swiper-slide>
          </swiper>
        </div>

        <div class="w-full flex flex-col justify-center p-2">
          <p class="text-center text-2xl">Description</p>
          <p>{{ breed.description }}</p>
        </div>
      </div>

      <div class="sm:w-1/2 p-2 flex flex-wrap justify-center sm:h-40">
        <div class="flex items-center p-1 border border-a_secondary rounded-lg m-2 text-a_secondary h-11">
          <p class="text-lg p-1">Adaptability:</p>
          <p class="flex flex-wrap">{{ breed.adaptability }}</p>
        </div>

        <div class="flex items-center p-1 border border-a_secondary rounded-lg m-2 text-a_secondary h-11">
          <p class="text-lg pr-1">Affection Level:</p>
          <p>{{ breed.affection_level }}</p>
        </div>

        <div class="flex items-center p-1 border border-a_secondary rounded-lg m-2 text-a_secondary h-11">
          <p class="text-lg pr-1">Child Friendly:</p>
          <p>{{ breed.child_friendly }}</p>
        </div>

        <div class="flex items-center p-1 border border-a_secondary rounded-lg m-2 text-a_secondary h-11">
          <p class="text-lg pr-1">Dog Friendly:</p>
          <p>{{ breed.dog_friendly }}</p>
        </div>

        <div class="flex items-center p-1 border border-a_secondary rounded-lg m-2 text-a_secondary h-11">
          <p class="text-lg pr-1">Energy Level:</p>
          <p>{{ breed.energy_level }}</p>
        </div>

        <div class="flex items-center p-1 border border-a_secondary rounded-lg m-2 text-a_secondary h-11">
          <p class="text-lg pr-1">Hairless:</p>
          <p>{{ breed.hairless }}</p>
        </div>

        <div class="flex items-center p-1 border border-a_secondary rounded-lg m-2 text-a_secondary h-11">
          <p class="text-lg pr-1">Health Issues:</p>
          <p>{{ breed.health_issues }}</p>
        </div>

        <div class="flex items-center p-1 border border-a_secondary rounded-lg m-2 text-a_secondary">
          <p class="text-lg pr-1">Temperament:</p>
          <p class="flex flex-wrap">{{ breed.temperament }}</p>
        </div>

        <div class="flex items-center p-1 border border-a_secondary rounded-lg m-2 text-a_secondary h-11">
          <p class="text-lg pr-1">Intelligence:</p>
          <p>{{ breed.intelligence }}</p>
        </div>

        <div class="flex items-center p-1 border border-a_secondary rounded-lg m-2 text-a_secondary h-11">
          <p class="text-lg pr-1">Life Span:</p>
          <p>{{ breed.life_span }}</p>
        </div>

        <div class="flex items-center p-1 border border-a_secondary rounded-lg m-2 text-a_secondary h-11">
          <p class="text-lg pr-1">Rare:</p>
          <p>{{ breed.rare }}</p>
        </div>

        <div class="flex items-center p-1 border border-a_secondary rounded-lg m-2 text-a_secondary h-11">
          <p class="text-lg pr-1">Origin:</p>
          <p>{{ breed.origin }}</p>
        </div>

        <div class="flex items-center p-1 border border-a_secondary rounded-lg m-2 text-a_secondary h-11">
          <p class="text-lg pr-1">Shedding Level:</p>
          <p>{{ breed.shedding_level }}</p>
        </div>

        <div class="flex items-center p-1 border border-a_secondary rounded-lg m-2 text-a_secondary h-11">
          <p class="text-lg pr-1">Short Legs:</p>
          <p>{{ breed.short_legs }}</p>
        </div>

        <div class="flex items-center p-1 border border-a_secondary rounded-lg m-2 text-a_secondary h-11">
          <p class="text-lg pr-1">Vocalisation:</p>
          <p>{{ breed.vocalisation }}</p>
        </div>

      </div>
    </div>

    <div class="w-full flex justify-center mt-auto p-4">
      <button @click="$router.push('/listagem')"
        class="bg-a_secondary text-white px-6 py-3 rounded-lg shadow-lg hover:bg-a_primary">
        Voltar
      </button>
    </div>
  </div>
</template>

<style>
.swiper-button-prev:after,
.swiper-rtl .swiper-button-next:after {
  color: #FFFAF5
}

.swiper-button-next,
.swiper-rtl .swiper-button-prev {
  color: #FFFAF5
}

.swiper-pagination-bullets .swiper-pagination-bullet,
.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {
  background-color: #FFFAF5
}
</style>
