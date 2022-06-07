<template>
<div>
    <p class="text-xs text-right text-orange mr-9 mb-3" :class="{'opacity-0':recent}"
    >Nouveaux messages</p>
    <div
    class="w-80 h-20 rounded-3xl bg-dark_gray m-auto flex overflow-auto"
    style="box-shadow: 0px 4px 4px 0 rgba(0,0,0,0.25);"
    >

    <img
    :src="image"
    class="w-[52px] h-[52px] rounded-[50.75px] object-none border-2 border-orange mx-5 mt-3"
    />


    <div class="flex-col mt-3">
        <p class="text-sm font-bold text-left text-black ">{{name}}</p>
        <p class="text-sm text-left text-black pr-4">
        {{message}}
        </p>
    </div>
    

    <svg
    width="27"
    height="27"
    viewBox="0 0 27 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
    class="absolute ml-[300px] -mt-1"
    :class="{'opacity-0': notif}"
    >
    <circle cx="13.5" cy="13.5" r="13.5" fill="#EAB270"></circle>
    </svg>
    </div>
    </div>
</template>

<script>
    export default {
        props: {
            notif: Boolean,
            name:String,
            message:String,
            image:String,
            recent:Boolean
        },
    };
</script>