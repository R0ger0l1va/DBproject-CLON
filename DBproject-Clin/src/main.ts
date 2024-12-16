import './assets/main.css'
import   '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import 'material-icons/iconfont/material-icons.css';
import axios from 'axios'
import { createApp } from 'vue'
import App from './App.vue'
import  'primeicons/primeicons.css'
import { usePlugins } from './plugins/plugins'

axios.defaults.baseURL = 'http://localhost:3000/'


const app = createApp(App)
usePlugins(app)


app.mount('#app')
