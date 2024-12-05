import Primevue from "primevue/config";
import Aura from "@primevue/themes/aura";
import 'primeicons/primeicons.css'

export  function setPlugins(app) {
  app.use(Primevue,
    {theme:{preset:Aura, options:{darkModeSelector:'.my-app-dark',cssLayer:false}}})
  app.use(Aura);

}
