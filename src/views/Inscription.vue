<template>
    <div class="mx-8">
        <h1 class="text-center mt-40 font-bold text-3xl mb-10">Renovae</h1>
        <div class="mx-5 mb-10">
            <input type="text" 
            class="bg-darker_gray w-full rounded-lg p-3 border-2 border-light_orange focus:border-2 hover:bg-gray"
            placeholder="Identifiant">
        </div>

        <div class="mx-5 mb-10">
            <input type="password" 
            class="bg-darker_gray w-full rounded-lg p-3 border-2 border-light_orange focus:border-2 hover:bg-gray"
            placeholder="Mot de passe">
        </div>
        <OrangeButton class="m-auto block mb-10 hover:bg-dark_orange">
            <slot>Inscription</slot>
        </OrangeButton>
        <p class="text-center mb-32 text-lg">Déjà inscrit ? <span class="font-bold underline">Connecte toi ici</span></p>

        <p class="text-sm text-center">
  <span
    >En t’inscrivant sur Rénovae, tu acceptes le </span
  ><span class="font-bold underline">Contrat d’utilisation</span
  ><span> de </span><span
    >Rénovae ainsi que sa </span
  ><span class="font-bold underline">Politique privée</span>
</p>
    </div>
</template>

<script>
import OrangeButton from '../components/OrangeButton.vue';

export default {
    name: "",
    created() {
        document.body.style.backgroundColor = "#F3DABC";
    },
    components: OrangeButton,
    components: { OrangeButton }
};
</script>

<style>

</style>