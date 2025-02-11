<script setup lang="ts">
import BreedsList from '@/shared/components/BreedsList.vue';
</script>

<template>
  <main class="w-full h-screen flex items-center justify-center flex-col bg-gradient-to-tr from-purple-400 to-blue-400">
    <p class="text-2xl">Encontre seu gatinho!</p>
    <div class="p-5">
      <BreedsList />
    </div>


    <footer class="text-sm text-gray-500 mb-10">
      Developed by
      <strong class="text-gray-800">Aline Gallo</strong>
    </footer>
  </main>
</template>
