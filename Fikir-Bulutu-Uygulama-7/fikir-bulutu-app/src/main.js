import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//önce firebase config'i bekliyor sonra uygulamayı alıyor.
import {authRef} from './firebase/config';

let app;

//Auth'un view uygulamasını beklemesi için bir kod
authRef.onAuthStateChanged(()=>{

    if(!app){
        app=createApp(App).use(store).use(router).mount('#app')
    }
})

createApp(App).use(store).use(router).mount('#app')
