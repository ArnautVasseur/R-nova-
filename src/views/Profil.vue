<template>
    <div>
        <Profil class="mt-8 mb-3"
        Name="Fantasio974"
        ancienneté=" 3 ans"
        location="Compiègne"
        :star1="true"
        :star2="true"
        :star3="true"
        :star4="true"
        :star5="true"
        :note="5"
        description="Lorem ipsum dolor sit amet, consectetur 
adipiscing elit, sed do eiusmod tempor 
incididunt ut labore et dolore magna aliqua."
        :followers="5900549"
        image="src\assets\images\Fantasio.jpg"/>

        <BadgesProfil
        icones1="src\components\icons\badgeicon.svg"
        icones2="src\components\icons\orangeheart.svg"
        texte1="Créateur de communauté"
        texte2="Vendeur apprécié"/>

        <Evaluations class="mb-3"
        imageprofil1="src\assets\images\albert-dera-ILip77SbmOE-unsplash 2.jpg"
        imageprofil2="src\assets\images\ulysse-pointcheval-frI3NV2Qgmo-unsplash 2.jpg"
        description1="Lorem ipsum dolor sit amet, consectetur 
adipiscing elit, sed do eiusmod tempor 
incididunt ut labore et dolore magna aliqua."
        description2="Lorem ipsum dolor sit amet, consectetur 
adipiscing elit, sed do eiusmod tempor 
incididunt ut labore et dolore magna aliqua."
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
            </div>
            
            <div class="w-full h-full rounded-3xl bg-[#f3f3f3]/70 m-auto p-3 mb-5"
                style="box-shadow: 0px 4px 4px 0 rgba(0,0,0,0.25);">
                <div class="flex justify-around mb-2 items-center">
                    <img
                    src="../../public/images/velo-wall-white.png"
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
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
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
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
        </div>
        <OrangeButton class="mb-24 block m-auto w-64">
            <slot>Enregistrer les modifications</slot>
        </OrangeButton>
    </div>
</template>

<script>
import Profil from "../components/Profil.vue";
import BadgesProfil from "../components/BadgesProfil.vue";
import Evaluations from "../components/Evaluations.vue";
import OrangeButton from "../components/OrangeButton.vue";

export default {
    name: "",
    components: {
        BadgesProfil, Evaluations, OrangeButton, Profil
    },
    created() {
        document.body.style.backgroundColor = "#FFFFFF";
    },
    };
</script>

<style>

</style>