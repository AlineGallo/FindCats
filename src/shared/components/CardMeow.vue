<script setup lang="ts">

</script>
<template>
  <div class="bg-a_ligth flex sm:w-1/2 w-4/5 border-2 rounded-md">
    <div class="hidden sm:block sm:w-2/5">
      <img class="h-full w-full border rounded-s" src="../../assets/img/gatodesenho.jpeg">
    </div>
    <div class="flex flex-col w-full sm:w-3/5 justify-center items-center">
      <p class="p-2 text-2xl text-center text-black">
        Welcome to Meow
      </p>
      <p class="p-2 text-center text-black">Project developed for you to check kittens using The Cat API</p>
      <p class="p-2 text-center text-black">Go to the next page to find the right kitten for you.</p>
      <button @click="$router.push({ name: 'listagem' })"
        class="h-10 bg-a_secondary w-1/2 border-2 rounded-md text-white m-5 shadow-lg hover:bg-a_primary">
        Search
      </button>
    </div>
  </div>
</template>
