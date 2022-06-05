<template>
    <div class="mx-7">
        <div class="flex my-10 items-center ml-3">
            <h1 class="text-center font-bold text-2xl mr-3">Favoris</h1>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM13 7C13 7.55228 12.5523 8 12 8C11.4477 8 11 7.55228 11 7C11 6.44772 11.4477 6 12 6C12.5523 6 13 6.44772 13 7ZM11 9.25C10.5858 9.25 10.25 9.58579 10.25 10C10.25 10.4142 10.5858 10.75 11 10.75H11.25V17C11.25 17.4142 11.5858 17.75 12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V10C12.75 9.58579 12.4142 9.25 12 9.25H11Z" fill="#EAB270"/>
            </svg>
        </div>
        <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(320px,320px))] justify-between mb-5">
            <a href="achat">
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
            </a>
            <a href="achat">
            <CardDon class="mb-5"
            image="src\assets\images\skateorange.png"
            :distance="3"
            state="Neuf"
            brand="Santa cruz"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            :price="5"
            title="Skate"
            pp="src\assets\images\women-painting.jpg"
            :followers="61"
            :star1="true"
            :star2="false"
            :star3="false"
            :star4="false"
            :star5="false"
            :heart="true"
            name="Marie484"/>
            </a>

            <a href="achat">
            <Card class="mb-5"
            image="src\assets\images\chair-table.png"
            :distance="15"
            state="Usé"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            :price="55"
            :renovation="false"
            title="Table de décoration"
            pp="src\assets\images\women-paint.jpg"
            :followers="142"
            :star1="true"
            :star2="true"
            :star3="false"
            :star4="false"
            :star5="false"
            :heart="true"
            name="Gertrude"
            />
            </a>

            <a href="achat">
            <Card class="mb-24"
            image="src\assets\images\plant.png"
            :distance="13"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            :price="10"
            :renovation="true"
            title="Plante verte"
            pp="src\assets\images\laptop.jpg"
            :followers="26"
            :star1="true"
            :star2="true"
            :star3="true"
            :star4="true"
            :star5="true"
            :heart="true"
            name="BanJafi"
            />
            </a>
        </div>
    </div>
</template>

<script>
import Card from '../components/Card.vue';
import CardDon from '../components/CardDon.vue';

export default {
    name: "",
    components: {
        Card, CardDon
    },
    created() {
        document.body.style.backgroundColor = "#FFFFFF";
    },
    };
</script>

<style>

</style>