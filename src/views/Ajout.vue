<template>
    <div class="mx-8">
        <h1 class="text-center font-bold text-2xl my-10">Vend un article</h1>
        <AddArticle class="mb-10"/>

        <div class="mx-5 mb-10">
            <h2 class="mb-2">Titre</h2>
            <input type="text" 
            class="bg-dark_gray w-full rounded-lg p-3"
            placeholder="ex: Vélo bleu">
        </div>

        <div class="mx-5 mb-10">
            <h2 class="mb-2">Marque</h2>
            <input type="text" 
            class="bg-dark_gray w-full rounded-lg p-3"
            placeholder="ex: SuperVelo">
        </div>

        <div class="mb-10 mx-5">
            <h2 class="mb-2">Desciption</h2>
            <textarea name="desciption" 
            class="bg-dark_gray w-full p-3 rounded-lg" rows="8"
            placeholder="ex : Vélo en bon été, déjà utilisé..."></textarea>
        </div>

        <div class="mx-5 mb-10">
            <h2 class="mb-2">Prix</h2>
            <input type="text" 
            class="bg-dark_gray w-full rounded-lg p-3"
            placeholder="ex: 30€">
        </div>

        <hr class="bg-orange mb-10 h-[2px] border-none mx-10"/>

        <div class="flex justify-around items-start">
            <h3 class="font-bold mb-10 text-sm">Souhaites-tu rénover ton article ?</h3>
            <input type="checkbox" id="renovation" name="renovation" class="scale-150 mt-2 accent-orange bg-white" @click="renover = !renover">
        </div>
        <div v-if="renover" class="mb-10">
            <h2 class="font-bold mb-3">Description de la rénovation</h2>
            <textarea name="renovation"
            class="bg-dark_gray w-full p-3 rounded-lg" rows="8"
            placeholder="ex : J'aimerai repeindre mon vélo en rouge..."></textarea>
        </div>
            <PostingArticle class="block m-auto mb-24"/>
        </div>
</template>

<script>
import AddArticle from "../components/AddArticle.vue";
import PostingArticle from "../components/PostingArticle.vue";

export default {
        name: "",
        data(){
            return{
                renover:false
            }
        },
        components: {
            AddArticle, PostingArticle
        },
        created() {
        document.body.style.backgroundColor = "#FFFFFF";
    },
    };
</script>