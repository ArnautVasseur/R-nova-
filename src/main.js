import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

import mitt from 'mitt';

// Import fonction d'initialisation du SDK Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";

// Votre configuration de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyA8espWDR48_uz5Mx4l9CiAEDlO6X2aPsM",
    authDomain: "mmi-firebase-vuejs-3-411ff.firebaseapp.com",
    projectId: "mmi-firebase-vuejs-3-411ff",
    storageBucket: "mmi-firebase-vuejs-3-411ff.appspot.com",
    messagingSenderId: "98596865344",
    appId: "1:98596865344:web:0b1fe917764f802340e6a5"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

const app = createApp(App)

export const emitter = mitt();
app.config.globalProperties.emitter = emitter;

app.use(router)

app.mount('#app')
