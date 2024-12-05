import './assets/main.css'
import { setPlugins } from './plugins/prime'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
setPlugins(app)
app.use(router)

app.mount('#app')
