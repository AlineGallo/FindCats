<script setup lang="ts">
import { useCatStore } from '@stores/cat.store';
import { onBeforeMount } from 'vue';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
const catStore = useCatStore()

onBeforeMount(async () => {
  await catStore.fetchBreeds()
});
</script>
<template>

  <div class="w-full bg-white h-full rounded-2xl">
    <p class="text-center p-2">Listagem de raças</p>

    <!-- <v-table height="500px">
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Origin
          </th>
          <th class="text-left">
            Intelligence
          </th>
          <th class="text-left">
            Details
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="cat in catStore.breeds" :key="cat.id">
          <td>{{ cat.name }}</td>
          <td>{{ cat.origin }}</td>
          <td>{{ cat.intelligence }}</td>
          <font-awesome-icon icon="user" />
          <td> <font-awesome-icon :icon="['fas', 'magnifying-glass']" /> </td>
        </tr>
      </tbody>
    </v-table> -->


    <div class="border border-red-600 ">

    </div>

  </div>


</template>
