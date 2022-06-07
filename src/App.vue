<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
      <div class="flex overflow-hidden fixed bottom-0 w-full justify-around items-center py-4 bg-gray"
      v-if="!['inscription', 'connexion'].includes($route.name)">
        <RouterLink to="/homepage">
          <img src="/icons/Home.svg" alt="Home">
        </RouterLink>
        <RouterLink to="/messagerie">
          <img src="/icons/Mail.svg" alt="Messagerie">
        </RouterLink>
        <RouterLink to="/ajout">
          <img src="/icons/Plus.svg" alt="Plus">
        </RouterLink>
        <RouterLink to="/favoris">
          <img src="/icons/Heart.svg" alt="Heart">
        </RouterLink>
        <RouterLink to="/user">
          <img src="/icons/User.svg" alt="User">
        </RouterLink>
      </div>
    <RouterView/>
  </div>
</template>

<script>
// Fonctions Firestore
import { 
    getFirestore, 
    collection, 
    onSnapshot, 
    query,
    where
} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'


// Fonctions Storage
import { 
    getStorage, 
    ref, 
    getDownloadURL, 
} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js'

// Fonction authentification
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js'

// Import emetteur de main.js
import { emitter } from './main.js'

export default {
  data() {
    return {
      user:{              // User connecté
        email:null,
        password:null
      },
      userInfo:null,      // Informations complémentaires user connecté
      name:"",       // Titre de l'application ou nom du user
      avatar:null,        // Avatar / image du user connecté
      isAdmin:true       // Si l'utilisateur est ou non administrateur
    }
  },
  mounted(){

    // Ecoute de l'évènement de connexion
    emitter.on('connectUser', e => {
      // Récupération du user
      this.user = e.user;
      console.log('App => Reception user connecté', this.user); 
    })        
    
    // Ecoute de l'évènement de deconnexion
    emitter.on('deConnectUser', e => {
      // Récupération user 
      this.user = e.user;
      console.log('App => Reception user deconnecté', this.user);
      // Réinitialisation infos complémentaires user
      this.userInfo   = null;
      this.name       = 'Vidéo';
      this.avatar     = null;
      this.isAdmin    = false;
    })
  }
}
</script>

<style>

</style>
