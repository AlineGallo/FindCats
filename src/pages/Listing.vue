<script setup lang="ts">
import BreedsList from '@/shared/components/BreedsList.vue';
import Header from '@/shared/components/Header.vue';
</script>

<template>
  <main class="w-full h-full sm:h-screen flex lg:items-center flex-col bg-a_secondary">
    <Header />

    <div class="p-4">
      <BreedsList />
    </div>


    <!-- <footer class="text-sm text-gray-500 mb-10">
      Developed by
      <strong class="text-gray-800">Aline Gallo</strong>
    </footer> -->
  </main>
</template>
