<template>
    <h1 class="text-center text-xl my-5 font-bold">Chat</h1>
    <div class="mx-5 bg-gray p-5 rounded-xl mb-24">
        <div v-if="user == null">
            <h6 class="bg-beige text-center p-3" role="alert">
                Vous devez être connecté pour utiliser le Chat !!
            </h6>
        </div>
        <div v-else>
            <div class="mb-3">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="font-semibold">Sélectionner un utilisateur</h2>
                    <select class="border-2 border-orange bg-orange text-white shadow-xl p-2 rounded-xl" v-model="userSelected" @change="selectUser">
                    <option selected disabled value="">_</option>
                    <option
                        v-for="util in listeUsers" :key="util.uid"
                        :value="util"
                    >{{util.login}}</option>
                </select>
                </div>

                <hr>
                
            </div>
            <div v-if="userSelected != null"> 
                <form class="mb-4" @submit.prevent="createDisc()">
                        <h2 class="mb-3 font-semibold">Nouveau fil avec {{userSelected.login}}</h2>
                        <div class="flex justify-around items-center">
                        <input type="text" class="p-2 border-[1px] rounded-lg" v-model="libelle" required />
                        <button class="border-2 border-orange bg-orange text-white shadow-xl p-2 rounded-xl" type="submit" title="Création">
                            Create
                        </button>
                        </div>
                </form>

                <hr>

                <h5 class="my-3 font-semibold">Vos fils de discussion avec : {{userSelected.login}}</h5>
                <div v-if="chat.length > 0"> 
                    <div v-for="disc in chat" :key="disc.uid" class="border-2 p-2 rounded-lg text-center">
                        {{disc.libelle}} - créer par 
                        <span v-if="disc.fil[0] == user.uid">vous</span>
                        <span v-else>{{userSelected.login}}</span>
                        le  {{dateFr(disc.creation)}}
                        <div class="flex justify-center my-4">
                            <button class="mr-3 border-2 border-orange bg-orange text-white shadow-xl p-2 rounded-xl" type="button" @click="viewFil(disc)" title="Voir ce fil">
                                Voir
                            </button>
                            <button class="border-2 border-orange bg-orange text-white shadow-xl p-2 rounded-xl" type="button" @click="deleteFil(disc)" title="Supprimer ce fil">
                                Supprimer
                            </button>
                        </div>
                    </div>

                </div>
                <div v-else>
                    Aucun fil de discussion
                </div>

                <div v-if="discussion != null"> 
                    <h5 class="my-5">Discussion : {{discussion.libelle}}</h5>
                    <hr/>
                    <div class="my-3 flex flex-col justify-between items-end">
                        <textarea class="p-2 w-full mb-2 border-[1px] rounded-lg" rows="2"
                            placeholder="Message" 
                            v-model="message"
                        ></textarea>
                        <button class="border-2 border-orange bg-orange text-white shadow-xl p-2 rounded-xl" @click="sendMsg()">
                            Envoyer
                        </button>
                    </div>
                    <div v-for="disc in chat" :key="disc.id">
                        <div v-if="disc.id == discussion.id"> 
                            <div class="border-2 my-3 rounded-lg text-white" v-for="msg in sortMsgByDate(disc.msg)" :key="msg.date">
                                
                                <div class="bg-green p-3 rounded-lg" v-if="msg.by == user.uid">
                                        <div class="flex justify-start item-center">
                                            <img class="avatar w-10 h-10 rounded-full mr-3" :src="userInfo[0].avatar" />
                                            {{userInfo[0].login}}  - {{dateFr(msg.date)}}
                                        </div>
                                    <div class="mx-5 mt-3 border-[1px] p-2 rounded-lg">                     
                                        <p>{{msg.contenu}}</p>         
                                    </div>
                                </div>

                                <div class="bg-orange p-3 rounded-lg" v-if="msg.by == userSelected.uid">
                                    <div class="">
                                        <div class="flex justify-start item-center">
                                            <img  class="w-10 h-10 rounded-full mr-3" :src="userSelected.avatar"/>
                                            {{userSelected.login}} - {{dateFr(msg.date)}}
                                        </div>        
                                        <div class="mx-5 mt-3 border-[1px] p-2 rounded-lg">                     
                                            <p>{{msg.contenu}}</p>           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// Bibliothèque Firestore : import des fonctions
import { 
    getFirestore,   // Obtenir le Firestore
    collection,     // Utiliser une collection de documents
    doc,            // Obtenir un document par son id
    getDoc,        // Obtenir un document d'une collection
    addDoc,         // Ajouter un document à une collection
    updateDoc,      // Mettre à jour un document dans une collection
    deleteDoc,      // Supprimer un document d'une collection
    onSnapshot,     // Demander une liste de documents d'une collection, en les synchronisant
    query,          // Permet d'effectuer des requêtes sur Firestore
    orderBy,        // Permet de demander le tri d'une requête query
    where           // Permet de demander un filtrage pour une query
    } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'

    // Cloud Storage : import des fonctions
    import { 
        getStorage,             // Obtenir le Cloud Storage
        ref,                    // Pour créer une référence à un fichier à uploader
        getDownloadURL         // Permet de récupérer l'adress complète d'un fichier du Storage
    } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js'

// Fonction authentification
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js'

export default {
    name:'ChatView',
    data() { // Les données
        return {
            user:null,                  // User connecté
            listeUsers:[],              // Liste des utilisateurs (Firestore)
            userInfo:null,              // Informations complémentaires du user connecté
            userSelected:null,          // L'utilisateur de la liste sélectionné
            libelle:null,               // Libelle de la nouvelle discussion à créer

            chatFrom:null,              // Les chats de l'utilisataur connecté vers celui sélectionné
            chatTo:null,                // Les chats des autres utilisateurs vers celui connecté                        
            chat:[],                  // Tous les chats utilisateur connecté et sélectionné

            discussion:null,            // chat/discussion sélectionnée

            message:null                // Message courant du chat/discussion

        }
    },
    mounted(){ // Montage de la vue
        // Appel de la liste des users (Firestore)
        this.getUsers(); 
    },

    methods : { // Les fonctions
        // obtenir les utilisateurs de users
        async getUsers(){
            // Obtenir les inofrmations du user connecté
            await getAuth().onAuthStateChanged(function(user){
                if(user){
                    // Récupération du user connecté
                    this.user = user;
                }
            }.bind(this))

            // Informations des users de Firestore
            const firestore = getFirestore();
            // Collection users de Firestore
            const dbUsers = collection(firestore, "users");
            // Users triés sur leur login
            const q = query(dbUsers, orderBy('login', 'asc'));
            // Liste synchronisée
            await onSnapshot(q, (snapshot) => {
                this.listeUsers = snapshot.docs.map(doc => (
                    {id:doc.id, ...doc.data()}
                ))
                // Récupération de l'url des avatars
                this.listeUsers.forEach(function(user){
                    // Obtenir le Cloud Storage
                    const storage = getStorage();
                    // Récupérer l'image par son nom de fichier
                    const spaceRef = ref(storage, "users/"+user.avatar);
                    // Récupération de l'url
                    getDownloadURL(spaceRef)
                    .then((url)=>{
                        // Remplacer le nom du fichier par l'url
                        user.avatar = url;
                    })
                    .catch((error)=>{
                        console.log('erreur downloadurl',error);
                    })
                })

                // Récupérer les infos complémentaires du user connecté
                this.userInfo = this.listeUsers.filter(user => user.uid == this.user.uid);
//console.log("userInfo", this.userInfo);
                // Suppression du user connecté de la liste
                this.listeUsers = this.listeUsers.filter(user => user.uid != this.user.uid);
//console.log("ListeUsers", this.listeUsers);

            })
        },

        async selectUser(){
            this.message = null;
            // Obtenir Firestore
            const firestore = getFirestore();
            // Base de données concernée
            const dbChat = collection(firestore, "chat");
            // Liste des users emetteur vers recepteur
            let list1 = [this.user.uid, this.userSelected.uid];
            // Requête
            let q1 = query(dbChat, where("fil", "==", list1));
            // Liste synchronisée
            
            await onSnapshot(q1, (snapshot) => {
                this.chatFrom = snapshot.docs.map(doc => (
                    {id: doc.id, ...doc.data()}
                ))
            
                // Liste des users selectionne / connecté
                let list2 = [this.userSelected.uid, this.user.uid ];
                // Requête
                let q2 = query(dbChat, where("fil", "==", list2));
                // Liste synchronisée                
                onSnapshot(q2, (snapshot) => {
                    this.chatTo = snapshot.docs.map(doc => (
                        {id: doc.id, ...doc.data()}
                    ))

                    // Fusion des 2 chats from et to dans le chat
                    this.chat = this.chatFrom.concat(this.chatTo);
//console.log("chat", this.chat);                

                })
            
            
            
            
            
            })

        },

        // Création d'une nouvelle discussion
        createDisc(){
            // Au moins un message pour initialisation de la discussion
            let msg = {
                by: this.user.uid,                      // Créateur du message
                contenu: "Créé le "+this.dateSql(),     // Message + Date du jour
                date : this.dateSql()                   // Date de création
            };

            let discussion = {
                creation: this.dateSql(),                   // Date création de la discussion
                fil:[this.user.uid, this.userSelected.uid], // De qui vers qui : 0 : emetteur - 1: recepteur
                libelle : this.libelle,                     // Libelle de la discussion
                msg:[msg]
            };
            // Mise à jour de la collection chat
            addDoc(collection(getFirestore(), 'chat'), discussion);
        },

        // Mise en forme de la date du jour
        // en format SQL : yyyy-mm-dd HH:mm:ss
        dateSql(){
            let today = new Date();
            // Transformer en format local
            // format : dd/mm/yyyy, HH:mm:ss
            today = today.toLocaleString();
            // Mise en forme en format yyyy-mm-dd HH:mm:ss
            let tab = today.split(',');
            // récupérer seulement la partie date
            let d = tab[0];
            // récupération du jour, mois, année
            let dt = d.split('/');
            let jour = dt[0];
            let mois = dt[1];
            let annee = dt[2];
            console.log('isu', tab[1])
            // date en format bdd
            today = annee+"-"+mois+"-"+jour+" "+tab[1].trim();
            return today;
        },

        // Mise en forme d'un date
        // d'un format : yyyy-mm-dd HH:mm:ss
        // en format : dd/mm/yyyy à HH:mm
        dateFr(date){
            // découpage de la date
            let d = date.split(' ');
            // Récupérer la partie jour, mois, année
            let dt = d[0].split('-');
            let jour = dt[2];
            let mois = dt[1];
            let annee = dt[0];
            // récuperer la partie H:mm:ss
            let ht = d[1].split(':');
            // date en format français
            let dateMsg = jour+"/"+mois+"/"+annee+" à "+ht[0]+":"+ht[1];
            return dateMsg;
        },


        viewFil(disc){
            this.discussion = disc;
        },

        deleteFil(disc){
            deleteDoc(
                doc(getFirestore(), 'chat', disc.id)
            );
        },

        async sendMsg(){
            let msg = {
                by: this.user.uid,                      // Créateur du message
                contenu: this.message,                  // Message rédigé
                date : this.dateSql()                   // Date de création
            };

            // Rechargement de la discussion
            // Pour avoir tous les messages
            // surtout le dernier
            const firestore = getFirestore();
            const docRef = doc(firestore, "chat", this.discussion.id);
            let refDisc = await getDoc(docRef);
            let tabMsg = refDisc.data().msg;
            tabMsg.push(msg);
            // Mise à jour de la discussion
            updateDoc(
                doc(firestore, "chat", this.discussion.id),
                {
                    msg:tabMsg
                }
            );

        },

        //je pense que ça fait plus de sens de mettre les nouveaux messages en dessous de l'un l'autre
        sortMsgByDate(tabMsg){
            return tabMsg.sort(function(a,b){
                if(a.date < b.date) return -1;
                if(a.date > b.date) return 1;
                return 0;
            })
        }


    }
}
</script>