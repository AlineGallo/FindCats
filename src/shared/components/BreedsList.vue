<script setup lang="ts">
import { useCatStore } from '@stores/cat.store';
import { ref, onBeforeMount } from 'vue';
import { FilterMatchMode } from '@primevue/core/api';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InputText from 'primevue/inputtext';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';



// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
const catStore = useCatStore()

const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  'country.name': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  representative: { value: null, matchMode: FilterMatchMode.IN },
  status: { value: null, matchMode: FilterMatchMode.EQUALS },
  verified: { value: null, matchMode: FilterMatchMode.EQUALS }
});


const loading = ref(false);

const breeds = ref();

onBeforeMount(async () => {
  await catStore.fetchBreeds()
  breeds.value = catStore.breeds;
});

</script>
<template>

  <div class="w-full bg-white h-full rounded-2xl">
    <p class="text-center p-2">Listagem de raças</p>

    <div class="card">
      <DataTable v-model:filters="filters" :value="breeds" paginator :rows="10" dataKey="id" filterDisplay="row"
        :loading="loading" :globalFilterFields="['name', 'country.name']">
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
        <template #empty> No customers found. </template>
        <template #loading> Loading customers data. Please wait. </template>
        <Column field="name" header="Name" style="min-width: 12rem">
          <template >
             Teste
          </template>
          <template #filter="{ filterModel, filterCallback }">
            <InputText v-model="filterModel.value" type="text" @input="filterCallback()" placeholder="Search by name" />
          </template>
        </Column>

      </DataTable>
    </div>



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


  </div>


</template>
