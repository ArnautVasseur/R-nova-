<template>
    <div class="mx-8">
        <img src="/images/Logo.png" alt="Logo" class="w-36 h-32 mt-5 m-auto">
        <h1 class="text-center font-bold text-3xl my-10">Renova</h1>
        <div class="mx-5 mb-10">
            <input type="text" 
            class="bg-darker_gray w-full rounded-lg p-3 border-2 border-light_orange focus:border-2 hover:bg-gray"
            placeholder="Identifiant">
        </div>

        <div class="mx-5 mb-10">
            <input type="password" 
            class="bg-darker_gray w-full rounded-lg p-3 border-2 border-light_orange focus:border-2 hover:bg-gray"
            placeholder="Mot de passe"
            id="password"
            name="password">
        </div>
        <a href="/homepage">
            <OrangeButton class="m-auto block mb-10 hover:bg-dark_orange">
                <slot>Connexion</slot>
            </OrangeButton>
        </a>
        <p class="text-center underline mb-5 text-lg">J'ai oublié mon mot de passe</p>
        <p class="text-center text-lg">Pas encore inscrit ? <a href="/"><span class="font-semibold underline">Inscrit-toi ici</span></a></p>
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
form i {
    margin-left: -30px;
    cursor: pointer;
}
</style>