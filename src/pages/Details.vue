<script setup lang="ts">
import { useRoute } from 'vue-router';
import Header from '@/shared/components/Header.vue';
import CatDetail from '@/shared/components/CatDetail.vue';

const route = useRoute();
const id = route.query.id as string;
</script>

<template>
  <main class="w-full h-full sm:h-screen flex lg:items-center flex-col bg-a_secondary">
    <Header />

    <div class="p-4">
      <CatDetail :id="id" />
    </div>


    <!-- <footer class="text-sm text-gray-500 mb-10">
      Developed by
      <strong class="text-gray-800">Aline Gallo</strong>
    </footer> -->
  </main>
</template>
