import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../views/Homepage.vue'
import Favoris from '../views/Favoris.vue'
import User from '../views/User.vue'
import Profil from '../views/Profil.vue'
import Messagerie from '../views/Messagerie.vue'
import Conversation from '../views/Conversation.vue'
import Achat from '../views/Achat.vue'
import Ajout from '../views/Ajout.vue'
import Connexion from '../views/Connexion.vue'
import Inscription from '../views/Inscription.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',         name: 'home',  component: Homepage },
    { path: '/favoris',  name: 'favoris',  component: Favoris },
    { path: '/user',  name: 'user',  component: User },
    { path: '/profil',  name: 'profil',  component: Profil },
    { path: '/messagerie',  name: 'messagerie',  component: Messagerie },
    { path: '/conversation',  name: 'conversation',  component: Conversation },
    { path: '/achat',  name: 'achat',  component: Achat },
    { path: '/ajout',  name: 'ajout',  component: Ajout },
    { path: '/inscription',  name: 'inscription',  component: Inscription },
    { path: '/connexion',  name: 'connexion',  component: Connexion }
  ]
})

export default router
