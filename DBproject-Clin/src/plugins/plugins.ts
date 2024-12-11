import axios from 'axios';
import router from '@/router';
import primeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import type { App } from 'vue';
import VueAxios from 'vue-axios';

export function usePlugins(app : App)   {
  app
  .use(router)
  .use(VueAxios,axios)
  .use(primeVue,{
    theme:{
      preset:Aura,
       options:{
      darkModeSelector:'.my-app-dark',
      cssLayer: false
  }
  }
  })
  
}
