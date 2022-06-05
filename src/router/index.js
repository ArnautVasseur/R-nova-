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
import Admin from '../views/AdminPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/homepage',         name: 'home',  component: Homepage },
    { path: '/favoris',  name: 'favoris',  component: Favoris },
    { path: '/user',  name: 'user',  component: User },
    { path: '/profil',  name: 'profil',  component: Profil },
    { path: '/messagerie',  name: 'messagerie',  component: Messagerie },
    { path: '/conversation',  name: 'conversation',  component: Conversation },
    { path: '/achat',  name: 'achat',  component: Achat },
    { path: '/ajout',  name: 'ajout',  component: Ajout },
    { path: '/',  name: 'inscription',  component: Inscription },
    { path: '/connexion',  name: 'connexion',  component: Connexion },
    { path: "/:catchAll(.*)", redirect: '/404',},
    { path: '/404', name: 'PageNotExist', component: () => import('../views/Page404.vue'),
    },
    { path: '/adminpage',  name: 'adminpage',  component: Admin, beforeEnter:guard }
  ]
})

export default router

function guard(to, from, next){
  getAuth().onAuthStateChanged(function(user){
    if(user){
      console.log('router OK -> user ', user);
      const firestore = getFirestore();
      const dbUsers = collection(firestore, "users");
      const q = query(dbUsers, where("iud", "==", user.iud));
      onSnapshot(q, (snapshot) => {
        let userInfo = snapshot.docs.map(doc =>({id:doc.id, ...doc.data()}));
        let isAdmin=userInfo[0].admin;
        if(isAdmin){
          next(to.params.name);
          return;
        }else{
          alert("Vous n'avez pas l'autorisation pour cette fonction");
          next({name:"homepage"});
          return;
        }
      })
    }else {
      console.log('router NOK => user ', user);
      next({name:"homapage"});
    }
  });
}

