<template>
    <div>
        <User class="mt-8 mb-3"
        Name="Russel766"
        ancienneté=" 3 ans"
        location="Compiègne"
        :star1="true"
        :star2="true"
        :star3="true"
        :star4="true"
        :star5="true"
        :note="5"
        description="Jeune artiste souhaitant lancer un skateshop sur Paris, influenceur Instagram."
        :followers="5909"
        image="/images/balland.png"/>

        <Badges
        icones1="/icons/badgeicon.svg"
        icones2="/icons/orangeheart.svg"
        texte1="Créateur de communauté"
        texte2="Vendeur apprécié"/>

        <Evaluations class="mb-3"
        imageprofil1="/images/albert-dera-ILip77SbmOE-unsplash 2.jpg"
        imageprofil2="/images/ulysse-pointcheval-frI3NV2Qgmo-unsplash 2.jpg"
        description1="Très bonne transaction, je remercie russel pour l’efficacité."
        description2="L’achat n’a pas abouti… mais cordial et poli."
        :nombredejour1="2"
        :nombredejour2="5"
        :star1="true"
        :star2="true"
        :star3="true"
        :star4="true"
        :star5="false"
        :altstar1="true"
        :altstar2="true"
        :altstar3="false"
        :altstar4="false"
        :altstar5="false"/>

        <div class="border-[1px] border-orange border-dashed mx-5 mb-5 p-5">
            <div class="flex items-baseline justify-between mb-3">
                <h2 class="font-bold text-[#a7a7a7] text-xl">Articles en ligne</h2>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.4125 6.5C12.4125 6.27218 12.2278 6.0875 12 6.0875C11.7722 6.0875 11.5875 6.27218 11.5875 6.5H12.4125ZM6.5 1.4125C6.72782 1.4125 6.9125 1.22782 6.9125 1C6.9125 0.772183 6.72782 0.5875 6.5 0.5875V1.4125ZM4.93507 8.69426L4.87673 8.28591L4.93507 8.69426ZM4.30574 8.06493L3.89739 8.00659L4.30574 8.06493ZM4.8564 5.78361L4.56472 5.49192L4.8564 5.78361ZM4.54174 6.41294L4.95009 6.47127L4.54174 6.41294ZM7.21639 8.1436L7.50808 8.43528L7.21639 8.1436ZM6.58706 8.45826L6.6454 8.86662L6.58706 8.45826ZM11.6742 2.11251L11.3825 2.40419L11.3825 2.40419L11.6742 2.11251ZM11.6742 3.68584L11.3825 3.39416L11.6742 3.68584ZM10.8875 1.32585L11.1792 1.03417L11.1792 1.03417L10.8875 1.32585ZM9.31416 1.32585L9.60584 1.61753V1.61753L9.31416 1.32585ZM8.94 2.11251C8.94 1.88469 8.75532 1.70001 8.5275 1.70001C8.29968 1.70001 8.115 1.88469 8.115 2.11251L8.94 2.11251ZM10.8875 4.885C11.1153 4.885 11.3 4.70032 11.3 4.4725C11.3 4.24468 11.1153 4.06 10.8875 4.06V4.885ZM11.5875 6.5V9.8H12.4125V6.5H11.5875ZM9.8 11.5875H3.2V12.4125H9.8V11.5875ZM1.4125 9.8V3.2H0.5875V9.8H1.4125ZM3.2 1.4125H6.5V0.5875H3.2V1.4125ZM1.4125 3.2C1.4125 2.21279 2.21279 1.4125 3.2 1.4125V0.5875C1.75716 0.5875 0.5875 1.75716 0.5875 3.2H1.4125ZM3.2 11.5875C2.21279 11.5875 1.4125 10.7872 1.4125 9.8H0.5875C0.5875 11.2428 1.75716 12.4125 3.2 12.4125V11.5875ZM11.5875 9.8C11.5875 10.7872 10.7872 11.5875 9.8 11.5875V12.4125C11.2428 12.4125 12.4125 11.2428 12.4125 9.8H11.5875ZM10.5958 1.61753L11.3825 2.40419L11.9658 1.82083L11.1792 1.03417L10.5958 1.61753ZM11.3825 3.39416L6.92471 7.85192L7.50808 8.43528L11.9658 3.97752L11.3825 3.39416ZM5.14809 6.07529L9.60584 1.61753L9.02248 1.03417L4.56472 5.49192L5.14809 6.07529ZM6.52873 8.04991L4.87673 8.28591L4.99341 9.10262L6.6454 8.86662L6.52873 8.04991ZM4.71409 8.12327L4.95009 6.47127L4.13338 6.3546L3.89739 8.00659L4.71409 8.12327ZM4.87673 8.28591C4.78186 8.29946 4.70054 8.21814 4.71409 8.12327L3.89739 8.00659C3.80605 8.64594 4.35406 9.19395 4.99341 9.10262L4.87673 8.28591ZM4.56472 5.49192C4.3314 5.72525 4.18005 6.02795 4.13338 6.3546L4.95009 6.47127C4.97151 6.32133 5.04099 6.18239 5.14809 6.07529L4.56472 5.49192ZM6.92471 7.85192C6.81761 7.95901 6.67867 8.02849 6.52873 8.04991L6.6454 8.86662C6.97205 8.81995 7.27475 8.6686 7.50808 8.43528L6.92471 7.85192ZM11.3825 2.40419C11.6558 2.67756 11.6558 3.12078 11.3825 3.39416L11.9658 3.97752C12.5614 3.38197 12.5614 2.41638 11.9658 1.82083L11.3825 2.40419ZM11.1792 1.03417C10.5836 0.438612 9.61804 0.438612 9.02248 1.03417L9.60584 1.61753C9.87922 1.34416 10.3224 1.34416 10.5958 1.61753L11.1792 1.03417ZM8.5275 2.11251C8.115 2.11251 8.115 2.11272 8.115 2.11292C8.115 2.113 8.115 2.11321 8.115 2.11335C8.115 2.11365 8.115 2.11395 8.115 2.11427C8.115 2.11491 8.11501 2.1156 8.11501 2.11633C8.11503 2.11781 8.11504 2.11947 8.11507 2.12134C8.11513 2.12507 8.11524 2.12958 8.1154 2.13484C8.11574 2.14536 8.11636 2.15891 8.11745 2.17529C8.11963 2.20803 8.12374 2.25216 8.13144 2.30606C8.14682 2.41377 8.17665 2.56109 8.2345 2.73462C8.35067 3.08312 8.57876 3.5338 9.02248 3.97752L9.60584 3.39416C9.2629 3.05122 9.09766 2.71523 9.01716 2.47373C8.97668 2.35227 8.95734 2.25375 8.94814 2.18938C8.94355 2.15724 8.94151 2.13376 8.94062 2.12041C8.94018 2.11374 8.94002 2.10962 8.93998 2.10824C8.93995 2.10755 8.93996 2.10754 8.93997 2.10825C8.93998 2.1086 8.93998 2.10913 8.93999 2.10984C8.93999 2.11019 8.93999 2.11059 8.94 2.11104C8.94 2.11126 8.94 2.1115 8.94 2.11174C8.94 2.11186 8.94 2.11206 8.94 2.11212C8.94 2.11231 8.94 2.11251 8.5275 2.11251ZM9.02248 3.97752C9.4662 4.42124 9.91688 4.64933 10.2654 4.7655C10.4389 4.82335 10.5862 4.85318 10.6939 4.86856C10.7478 4.87626 10.792 4.88037 10.8247 4.88255C10.8411 4.88364 10.8546 4.88426 10.8652 4.8846C10.8704 4.88477 10.8749 4.88487 10.8787 4.88493C10.8805 4.88496 10.8822 4.88497 10.8837 4.88499C10.8844 4.88499 10.8851 4.885 10.8857 4.885C10.886 4.885 10.8864 4.885 10.8866 4.885C10.8868 4.885 10.887 4.885 10.8871 4.885C10.8873 4.885 10.8875 4.885 10.8875 4.4725C10.8875 4.06 10.8877 4.06 10.8879 4.06C10.8879 4.06 10.8881 4.06 10.8883 4.06C10.8885 4.06 10.8887 4.06 10.889 4.06C10.8894 4.06001 10.8898 4.06001 10.8902 4.06001C10.8909 4.06002 10.8914 4.06002 10.8918 4.06003C10.8925 4.06004 10.8925 4.06005 10.8918 4.06002C10.8904 4.05998 10.8863 4.05982 10.8796 4.05938C10.8662 4.05849 10.8428 4.05645 10.8106 4.05186C10.7463 4.04266 10.6477 4.02333 10.5263 3.98284C10.2848 3.90234 9.94878 3.7371 9.60584 3.39416L9.02248 3.97752Z" fill="#EAB270"/>
                </svg>
            </div>
            
            <div class="w-full h-full rounded-3xl bg-[#f3f3f3]/70 m-auto p-3 mb-5"
                style="box-shadow: 0px 4px 4px 0 rgba(0,0,0,0.25);">
                <div class="flex justify-around mb-2 items-center">
                    <img
                    src="../../public/images/velobleu.jpg"
                    class="w-[54px] h-[53px] rounded-[7.62px] object-cover"/>
                    <p class="text-[15px] font-bold text-left text-black">Vélo bleu</p>
                    <p class="text-[15px] font-bold text-left text-[#eab270]">30€</p>
                    <svg
                        width="13"
                        height="14"
                        viewBox="0 0 13 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        >
                        <path
                            d="M0 12.4419V1.55524C0 0.696306 0.696306 0 1.55524 0H10.8867C11.7456 0 12.4419 0.696306 12.4419 1.55524V12.4419C12.4419 13.7235 10.9788 14.4551 9.95355 13.6861L7.15411 11.5866C6.60114 11.1718 5.8408 11.1718 5.28782 11.5866L2.48839 13.6861C1.46312 14.4551 0 13.7235 0 12.4419Z"
                            fill="#EAB270">
                        </path>
                    </svg>
                </div>
                <p class="text-xs text-left text-black">
                    Vélo bleu neuf acheter il y a quelques mois
                </p>
            </div>

            <div class="w-full h-full rounded-3xl bg-[#f3f3f3]/70 m-auto p-3"
                style="box-shadow: 0px 4px 4px 0 rgba(0,0,0,0.25);">
                <div class="flex justify-around mb-2 items-center">
                    <img
                    src="/images/wall-bricks.png"
                    class="w-[54px] h-[53px] rounded-[7.62px] object-cover"/>
                    <p class="text-[15px] font-bold text-left text-black">Vélo brun</p>
                    <p class="text-[15px] font-bold text-left text-[#eab270]">20€</p>
                    <svg
                        width="13"
                        height="14"
                        viewBox="0 0 13 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        >
                        <path
                            d="M0 12.4419V1.55524C0 0.696306 0.696306 0 1.55524 0H10.8867C11.7456 0 12.4419 0.696306 12.4419 1.55524V12.4419C12.4419 13.7235 10.9788 14.4551 9.95355 13.6861L7.15411 11.5866C6.60114 11.1718 5.8408 11.1718 5.28782 11.5866L2.48839 13.6861C1.46312 14.4551 0 13.7235 0 12.4419Z"
                            fill="#FFFFFF"
                            class="stroke-orange">
                        </path>
                    </svg>
                </div>
                <p class="text-xs text-left text-black">
                    Vieux vélo inutilisable rouillé mais pouvant servir pour une rénovation.
                </p>
            </div>
        </div>
        <OrangeButton class="mb-5 block m-auto w-64">
            <slot>Enregistrer les modifications</slot>
        </OrangeButton>
        <div class="mb-24">
            <h2 class="text-center font-bold mb-5">Liste de souhaits</h2>
                <div class="flex justify-center mb-3">
                    <input type="text" class="border-2 p-1 mx-2 border-orange hover:border-4 rounded-lg" v-model='nom' required/>
                    <button type="button" @click='createSouhait()' title="Création" class="border-2 p-1 border-orange rounded-lg hover:border-4">
                        Créer
                    </button>
                </div>
                <div class="flex justify-center">
                    <input type="text" v-model="filter" class="border-2 p-1 hover:border-4 border-orange rounded-lg" placeholder="rechercher"/>
                    <button type="button" title="Filtrage">
                    </button>
                </div> 
            <form v-for="souhait in filterBySouhait" :key="souhait.id" class="flex justify-center">
                <div>
                    <input type="text" v-model='souhait.nom' required class="mt-2 border-2 hover:border-4 border-orange rounded-lg p-1"/>
                    <button type="button" class="mx-2 border-orange rounded-lg border-2 p-1 hover:border-4" @click="updateSouhait(souhait)" title="Modification">
                    Modifier
                    </button>
                    <button type="button" @click="deleteSouhait(souhait)" title="Suppression" class="border-2 p-1 border-orange rounded-lg hover:border-4">
                    Supprimer
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import User from "../components/User.vue"
import Badges from "../components/Badges.vue";
import Evaluations from "../components/Evaluations.vue";
import OrangeButton from "../components/OrangeButton.vue";

import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js'

import { 
    getFirestore, 
    collection, 
    doc, 
    getDocs, 
    addDoc, 
    updateDoc, 
    deleteDoc, 
    onSnapshot } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'


    export default {   
        data(){
            return{                
                user:{         
                    email:null,
                    password:null
                },
                message:null, 
                nom:null, 
                listeSouhaitSynchro:[],
                filter:''
            }
        },
        name: "",
        components: {
            User, Badges, Evaluations, OrangeButton
        },
        created() {
            document.body.style.backgroundColor = "#FFFFFF";
        },
          computed:{
            orderBySouhait:function(){
            return this.listeSouhaitSynchro.sort(function(a,b){
                if(a.nom < b.nom) return -1;
                if(a.nom > b.nom) return 1;
                return 0;
            });
            },
            filterBySouhait:function(){
            if(this.filter.length > 0){
                let filter = this.filter.toLowerCase();
                return this.orderBySouhait.filter(function(souhait){
                return souhait.nom.toLowerCase().includes(filter);
                })
            }else{
                return this.orderBySouhait;
            }
            },
        },

        mounted(){
            this.getSouhaitSynchro();
        },

        methods:{

            async getSouhaitSynchro(){
                const firestore = getFirestore();
                const dbSouhait= collection(firestore, "souhait");
                const query = await onSnapshot(dbSouhait, (snapshot) =>{
                this.listeSouhaitSynchro = snapshot.docs.map(doc => ({id:doc.id, ...doc.data()}));
                })
            },

            async createSouhait(){
                const firestore = getFirestore();
                const dbSouhait= collection(firestore, "souhait");
                const docRef = await addDoc(dbSouhait,{
                    nom: this.nom
                })
             },

            async updateSouhait(souhait){
                const firestore = getFirestore();
                const docRef = doc(firestore, "souhait", souhait.id);
                await updateDoc(docRef, {
                    nom: souhait.nom
                }) 
             },

            async deleteSouhait(souhait){
                const firestore = getFirestore();
                const docRef = doc(firestore, "souhait", souhait.id);
                await deleteDoc(docRef);
             },
        }
    }
</script>

<style>

</style>