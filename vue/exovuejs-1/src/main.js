import './assets/main.css'


// import { createApp} from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app') 

import main from '/src/main.js'

const { createApp, ref} = Vue 

createApp({
    setup() {
        const message = ref('Au bout........')
        return {
            message
        }
    }
}). mount('#app')