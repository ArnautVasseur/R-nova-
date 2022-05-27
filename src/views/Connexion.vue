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
            placeholder="Mot de passe"
            id="password"
            name="password">
        </div>
        <a href="/">
            <OrangeButton class="m-auto block mb-10 hover:bg-dark_orange">
                <slot>Connexion</slot>
            </OrangeButton>
        </a>
        <p class="text-center mb-32 underline">J'ai oublié mon mot de passe</p>
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