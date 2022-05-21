<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div class="mx-7">
        <h1 class="font-bold text-lg mt-10 mb-5">Recherche d'articles</h1>
        <SearchBar class="mb-5"/>
        <div class="mb-2 flex justify-between">
            <h2 class="font-bold text-lg">Pour toi</h2>
            <p class="text-orange">Voir d'autres objets</p>
        </div>
        <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(384px,384px))] justify-between mb-5">
            <Card class="mb-5"
            image="src\assets\images\velo-wall-white.png"
            :distance="27"
            state="Neuf"
            brand="SuperVelo"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            :price="30"
            :renovation="false"
            title="Velo bleu"
            pp="src\assets\images\balland.png"
            :followers="419"
            :star1="true"
            :star2="true"
            :star3="true"
            :star4="true"
            :star5="false"
            :heart="true"
            name="Russel766"
            />
            <Card
            image="src\assets\images\velo-wall-blue.png"
            :distance="15"
            state="Rouillé"
            brand="Bikes"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            :price="22"
            :renovation="true"
            title="Velo marron"
            pp="src\assets\images\balland.png"
            :followers="142"
            :star1="true"
            :star2="true"
            :star3="false"
            :star4="false"
            :star5="false"
            :heart="false"
            name="Gertude"/>
        </div>
        <h2 class="w-2/3 font-bold text-lg mb-3">Profils qui pourrait vous intéresser</h2>
        <div class="mb-10 border-2 rounded-xl border-orange p-5 flex">
            <div class="flex flex-col mr-4">
                <img src="../assets/images/balland.png" alt="Russel" class="w-16">
                <div class="flex ml-3 mt-1 pb-3 -mb-1">
                <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path
                        d="M3.05396 0.93275C3.29636 0.420529 3.9967 0.420528 4.2391 0.932749L4.65801 1.818C4.75427 2.0214 4.94033 2.16238 5.15556 2.195L6.09228 2.33696C6.63428 2.4191 6.8507 3.11376 6.45851 3.51247L5.78069 4.20154C5.62494 4.35986 5.55388 4.58798 5.59064 4.81154L5.75065 5.78452C5.84324 6.34751 5.27664 6.77683 4.79186 6.51103L3.95403 6.05165C3.76152 5.94609 3.53154 5.94609 3.33903 6.05165L2.5012 6.51103C2.01642 6.77683 1.44982 6.34751 1.54241 5.78452L1.70242 4.81154C1.73918 4.58798 1.66812 4.35986 1.51237 4.20154L0.834555 3.51247C0.442357 3.11376 0.658775 2.4191 1.20078 2.33696L2.1375 2.195C2.35273 2.16238 2.53879 2.0214 2.63505 1.818L3.05396 0.93275Z"
                        stroke="#EAB270"
                        stroke-width="0.40585"
                        stroke-linejoin="round"
                        class="fill-orange"
                    ></path>
                </svg>

                <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path
                        d="M3.05396 0.93275C3.29636 0.420529 3.9967 0.420528 4.2391 0.932749L4.65801 1.818C4.75427 2.0214 4.94033 2.16238 5.15556 2.195L6.09228 2.33696C6.63428 2.4191 6.8507 3.11376 6.45851 3.51247L5.78069 4.20154C5.62494 4.35986 5.55388 4.58798 5.59064 4.81154L5.75065 5.78452C5.84324 6.34751 5.27664 6.77683 4.79186 6.51103L3.95403 6.05165C3.76152 5.94609 3.53154 5.94609 3.33903 6.05165L2.5012 6.51103C2.01642 6.77683 1.44982 6.34751 1.54241 5.78452L1.70242 4.81154C1.73918 4.58798 1.66812 4.35986 1.51237 4.20154L0.834555 3.51247C0.442357 3.11376 0.658775 2.4191 1.20078 2.33696L2.1375 2.195C2.35273 2.16238 2.53879 2.0214 2.63505 1.818L3.05396 0.93275Z"
                        stroke="#EAB270"
                        stroke-width="0.40585"
                        stroke-linejoin="round"
                        class="fill-orange"
                    ></path>
                </svg>

                <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path
                        d="M3.05396 0.93275C3.29636 0.420529 3.9967 0.420528 4.2391 0.932749L4.65801 1.818C4.75427 2.0214 4.94033 2.16238 5.15556 2.195L6.09228 2.33696C6.63428 2.4191 6.8507 3.11376 6.45851 3.51247L5.78069 4.20154C5.62494 4.35986 5.55388 4.58798 5.59064 4.81154L5.75065 5.78452C5.84324 6.34751 5.27664 6.77683 4.79186 6.51103L3.95403 6.05165C3.76152 5.94609 3.53154 5.94609 3.33903 6.05165L2.5012 6.51103C2.01642 6.77683 1.44982 6.34751 1.54241 5.78452L1.70242 4.81154C1.73918 4.58798 1.66812 4.35986 1.51237 4.20154L0.834555 3.51247C0.442357 3.11376 0.658775 2.4191 1.20078 2.33696L2.1375 2.195C2.35273 2.16238 2.53879 2.0214 2.63505 1.818L3.05396 0.93275Z"
                        stroke="#EAB270"
                        stroke-width="0.40585"
                        stroke-linejoin="round"
                        class="fill-orange"
                    ></path>
                </svg>

                <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path
                        d="M3.05396 0.93275C3.29636 0.420529 3.9967 0.420528 4.2391 0.932749L4.65801 1.818C4.75427 2.0214 4.94033 2.16238 5.15556 2.195L6.09228 2.33696C6.63428 2.4191 6.8507 3.11376 6.45851 3.51247L5.78069 4.20154C5.62494 4.35986 5.55388 4.58798 5.59064 4.81154L5.75065 5.78452C5.84324 6.34751 5.27664 6.77683 4.79186 6.51103L3.95403 6.05165C3.76152 5.94609 3.53154 5.94609 3.33903 6.05165L2.5012 6.51103C2.01642 6.77683 1.44982 6.34751 1.54241 5.78452L1.70242 4.81154C1.73918 4.58798 1.66812 4.35986 1.51237 4.20154L0.834555 3.51247C0.442357 3.11376 0.658775 2.4191 1.20078 2.33696L2.1375 2.195C2.35273 2.16238 2.53879 2.0214 2.63505 1.818L3.05396 0.93275Z"
                        stroke="#EAB270"
                        stroke-width="0.40585"
                        stroke-linejoin="round"
                        class="fill-orange"
                    ></path>
                </svg>

                <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path
                        d="M3.05396 0.93275C3.29636 0.420529 3.9967 0.420528 4.2391 0.932749L4.65801 1.818C4.75427 2.0214 4.94033 2.16238 5.15556 2.195L6.09228 2.33696C6.63428 2.4191 6.8507 3.11376 6.45851 3.51247L5.78069 4.20154C5.62494 4.35986 5.55388 4.58798 5.59064 4.81154L5.75065 5.78452C5.84324 6.34751 5.27664 6.77683 4.79186 6.51103L3.95403 6.05165C3.76152 5.94609 3.53154 5.94609 3.33903 6.05165L2.5012 6.51103C2.01642 6.77683 1.44982 6.34751 1.54241 5.78452L1.70242 4.81154C1.73918 4.58798 1.66812 4.35986 1.51237 4.20154L0.834555 3.51247C0.442357 3.11376 0.658775 2.4191 1.20078 2.33696L2.1375 2.195C2.35273 2.16238 2.53879 2.0214 2.63505 1.818L3.05396 0.93275Z"
                        stroke="#EAB270"
                        stroke-width="0.40585"
                        stroke-linejoin="round"
                    ></path>
                </svg>
                </div>
                <p class="text-xs font-bold">Russel766</p>
                <p class="text-xs text-orange">419 followers</p>
            </div>
            <p class="text-sm flex items-center">Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua.</p>
        </div>

        <h2 class="w-2/3 font-bold text-lg mb-2">Articles dans la catégorie "Skate"</h2>
        <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(384px,384px))] justify-between mb-10">
            <Card class="mb-5"
            image="src\assets\images\skate-yellow.png"
            :distance="27"
            state="Usé"
            brand="Supreme"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            :price="40"
            title="Skate peint"
            pp="src\assets\images\small-painting.jpg"
            :followers="698"
            :star1="true"
            :star2="true"
            :star3="true"
            :star4="true"
            :star5="true"
            :heart="false"
            name="Fabienni"
            :renovation="false"
            />
            <CardDon
            image="src\assets\images\skateorange.png"
            :distance="3"
            state="Neuf"
            brand="Santa cruz"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            :price="5"
            title="Skate"
            pp="src\assets\images\balland.png"
            :followers="61"
            :star1="true"
            :star2="false"
            :star3="false"
            :star4="false"
            :star5="false"
            :heart="true"
            name="Marie484"/>
        </div>

        <h2 class="w-2/3 font-bold text-lg">Don populaires du jour</h2>
        <h3 class="text-sm font-thin mb-3 text-black">En fonction des articles les plus likés</h3>
        <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(384px,384px))] justify-between mb-24">
            <Card class="mb-5"
            image="src\assets\images\skate-yellow.png"
            :distance="27"
            state="Usé"
            brand="Supreme"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            :price="40"
            title="Skate peint"
            pp="src\assets\images\small-painting.jpg"
            :followers="698"
            :star1="true"
            :star2="true"
            :star3="true"
            :star4="true"
            :star5="true"
            :heart="false"
            name="Fabienni"
            :renovation="false"
            />
            <CardDon
            image="src\assets\images\skateorange.png"
            :distance="3"
            state="Neuf"
            brand="Santa cruz"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            :price="5"
            title="Skate"
            pp="src\assets\images\balland.png"
            :followers="61"
            :star1="true"
            :star2="false"
            :star3="false"
            :star4="false"
            :star5="false"
            :heart="true"
            name="Marie484"/>
        </div>
    </div>
</template>

<script>
import Card from '../components/Card.vue';
import CardDon from '../components/CardDon.vue';
import SearchBar from "../components/SearchBar.vue"

export default {
    name: "",
    components: {
        Card, CardDon, SearchBar
    },
    created() {
        document.body.style.backgroundColor = "#FFFFFF";
    },
    };
</script>