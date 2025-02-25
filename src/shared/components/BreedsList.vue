<script setup lang="ts">
import { useCatStore } from '@stores/cat.store';
import { ref, onBeforeMount } from 'vue';
import { FilterMatchMode } from '@primevue/core/api';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InputText from 'primevue/inputtext';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';

const catStore = useCatStore()

const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS }
});

const loading = ref(false);

const breeds = ref();

onBeforeMount(async () => {
  await catStore.fetchBreeds()
  breeds.value = catStore.breeds;
  console.log(breeds.value)
});

</script>
<template>
  <div class="w-full bg-white h-full rounded-lg">

    <div class="card p-2">
      <DataTable v-model:filters="filters" :value="breeds" scrollable scrollHeight="400px" :loading="loading" paginator
        :rows="10" dataKey="id">
        <template #header>
          <div class="flex justify-end">
            <IconField>
              <InputIcon>
                <i class="pi pi-search" />
              </InputIcon>
              <InputText v-model="filters['global'].value" placeholder="Keyword Search" />
            </IconField>
          </div>
        </template>
        <template #empty> Gatinhos não encontrados. </template>
        <template #loading> Carregando. Por favor, aguarde. </template>
        <Column field="name" header="Name">
          <template #body="{ data }">
            {{ data.name }}
          </template>
        </Column>
        <Column field="origin" header="Origin">
          <template #body="{ data }">
            {{ data.origin }}
          </template>
        </Column>
        <Column field="life_span" header="Life">
          <template #body="{ data }">
            {{ data.life_span }}
          </template>
        </Column>
        <Column header="Details">
          <template #body>
            <button @click="$router.push({ name: 'detalhes' })">
              <font-awesome-icon :icon="['fas', 'magnifying-glass']"
                class="text-gray-500 cursor-pointer hover:text-blue-500" />
            </button>
          </template>
        </Column>
      </DataTable>
    </div>

  </div>
</template>
