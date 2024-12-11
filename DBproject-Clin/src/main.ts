import './assets/main.css'
import axios from 'axios' 
import { createApp } from 'vue'
import App from './App.vue'
import  'primeicons/primeicons.css'
import { usePlugins } from './plugins/plugins'

axios.defaults.baseURL = 'http://localhost:3000/'


const app = createApp(App)
usePlugins(app)

app.mount('#app')
