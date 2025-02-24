import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/style.css'
import App from './App.vue'
import router from './router'

// PrimeVue
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faCat } from '@fortawesome/free-solid-svg-icons';

// Adicionando ícones à biblioteca
library.add(faMagnifyingGlass)
library.add(faCat);

const app = createApp(App)

app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
});
app.use(createPinia())
app.use(router)
app.use(PrimeVue);

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
