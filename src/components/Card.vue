<template>
    <div class="overflow-auto border-2 w-80 h-60 rounded-2xl bg-white border-orange grid grid-cols-5">
        <div class="col-span-2">
            <img :src="image" class="w-28 h-32 object-cover rounded-2xl m-auto mt-4 ml-3" />

            <div class="flex mt-3">
                <img :src="pp" class="w-9 h-9 rounded-lg object-none ml-3 mr-2" />
                <div class="flex flex-col">
                    <p class="font-bold text-black text-xs">
                        {{name}}
                    </p>

                    <div class="flex">
                        <p class="font-bold text-[12px] text-orange">
                            {{followers}} followers
                        </p>
                    </div>
                </div>
            </div>

            <div class="flex ml-3 mt-1 pb-3">
                <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg" :class="{'fill-orange': star1}" preserveAspectRatio="none">
                    <path
                        d="M3.05396 0.93275C3.29636 0.420529 3.9967 0.420528 4.2391 0.932749L4.65801 1.818C4.75427 2.0214 4.94033 2.16238 5.15556 2.195L6.09228 2.33696C6.63428 2.4191 6.8507 3.11376 6.45851 3.51247L5.78069 4.20154C5.62494 4.35986 5.55388 4.58798 5.59064 4.81154L5.75065 5.78452C5.84324 6.34751 5.27664 6.77683 4.79186 6.51103L3.95403 6.05165C3.76152 5.94609 3.53154 5.94609 3.33903 6.05165L2.5012 6.51103C2.01642 6.77683 1.44982 6.34751 1.54241 5.78452L1.70242 4.81154C1.73918 4.58798 1.66812 4.35986 1.51237 4.20154L0.834555 3.51247C0.442357 3.11376 0.658775 2.4191 1.20078 2.33696L2.1375 2.195C2.35273 2.16238 2.53879 2.0214 2.63505 1.818L3.05396 0.93275Z"
                        stroke="#EAB270"
                        stroke-width="0.40585"
                        stroke-linejoin="round"
                    ></path>
                </svg>

                <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg" :class="{'fill-orange': star2}" preserveAspectRatio="none">
                    <path
                        d="M3.05396 0.93275C3.29636 0.420529 3.9967 0.420528 4.2391 0.932749L4.65801 1.818C4.75427 2.0214 4.94033 2.16238 5.15556 2.195L6.09228 2.33696C6.63428 2.4191 6.8507 3.11376 6.45851 3.51247L5.78069 4.20154C5.62494 4.35986 5.55388 4.58798 5.59064 4.81154L5.75065 5.78452C5.84324 6.34751 5.27664 6.77683 4.79186 6.51103L3.95403 6.05165C3.76152 5.94609 3.53154 5.94609 3.33903 6.05165L2.5012 6.51103C2.01642 6.77683 1.44982 6.34751 1.54241 5.78452L1.70242 4.81154C1.73918 4.58798 1.66812 4.35986 1.51237 4.20154L0.834555 3.51247C0.442357 3.11376 0.658775 2.4191 1.20078 2.33696L2.1375 2.195C2.35273 2.16238 2.53879 2.0214 2.63505 1.818L3.05396 0.93275Z"
                        stroke="#EAB270"
                        stroke-width="0.40585"
                        stroke-linejoin="round"
                    ></path>
                </svg>

                <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg" :class="{'fill-orange': star3}" preserveAspectRatio="none">
                    <path
                        d="M3.05396 0.93275C3.29636 0.420529 3.9967 0.420528 4.2391 0.932749L4.65801 1.818C4.75427 2.0214 4.94033 2.16238 5.15556 2.195L6.09228 2.33696C6.63428 2.4191 6.8507 3.11376 6.45851 3.51247L5.78069 4.20154C5.62494 4.35986 5.55388 4.58798 5.59064 4.81154L5.75065 5.78452C5.84324 6.34751 5.27664 6.77683 4.79186 6.51103L3.95403 6.05165C3.76152 5.94609 3.53154 5.94609 3.33903 6.05165L2.5012 6.51103C2.01642 6.77683 1.44982 6.34751 1.54241 5.78452L1.70242 4.81154C1.73918 4.58798 1.66812 4.35986 1.51237 4.20154L0.834555 3.51247C0.442357 3.11376 0.658775 2.4191 1.20078 2.33696L2.1375 2.195C2.35273 2.16238 2.53879 2.0214 2.63505 1.818L3.05396 0.93275Z"
                        stroke="#EAB270"
                        stroke-width="0.40585"
                        stroke-linejoin="round"
                    ></path>
                </svg>

                <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg" :class="{'fill-orange': star4}" preserveAspectRatio="none">
                    <path
                        d="M3.05396 0.93275C3.29636 0.420529 3.9967 0.420528 4.2391 0.932749L4.65801 1.818C4.75427 2.0214 4.94033 2.16238 5.15556 2.195L6.09228 2.33696C6.63428 2.4191 6.8507 3.11376 6.45851 3.51247L5.78069 4.20154C5.62494 4.35986 5.55388 4.58798 5.59064 4.81154L5.75065 5.78452C5.84324 6.34751 5.27664 6.77683 4.79186 6.51103L3.95403 6.05165C3.76152 5.94609 3.53154 5.94609 3.33903 6.05165L2.5012 6.51103C2.01642 6.77683 1.44982 6.34751 1.54241 5.78452L1.70242 4.81154C1.73918 4.58798 1.66812 4.35986 1.51237 4.20154L0.834555 3.51247C0.442357 3.11376 0.658775 2.4191 1.20078 2.33696L2.1375 2.195C2.35273 2.16238 2.53879 2.0214 2.63505 1.818L3.05396 0.93275Z"
                        stroke="#EAB270"
                        stroke-width="0.40585"
                        stroke-linejoin="round"
                    ></path>
                </svg>

                <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg" :class="{'fill-orange': star5}" preserveAspectRatio="none">
                    <path
                        d="M3.05396 0.93275C3.29636 0.420529 3.9967 0.420528 4.2391 0.932749L4.65801 1.818C4.75427 2.0214 4.94033 2.16238 5.15556 2.195L6.09228 2.33696C6.63428 2.4191 6.8507 3.11376 6.45851 3.51247L5.78069 4.20154C5.62494 4.35986 5.55388 4.58798 5.59064 4.81154L5.75065 5.78452C5.84324 6.34751 5.27664 6.77683 4.79186 6.51103L3.95403 6.05165C3.76152 5.94609 3.53154 5.94609 3.33903 6.05165L2.5012 6.51103C2.01642 6.77683 1.44982 6.34751 1.54241 5.78452L1.70242 4.81154C1.73918 4.58798 1.66812 4.35986 1.51237 4.20154L0.834555 3.51247C0.442357 3.11376 0.658775 2.4191 1.20078 2.33696L2.1375 2.195C2.35273 2.16238 2.53879 2.0214 2.63505 1.818L3.05396 0.93275Z"
                        stroke="#EAB270"
                        stroke-width="0.40585"
                        stroke-linejoin="round"
                    ></path>
                </svg>
            </div>
        </div>

        <div class="col-span-3 ml-3">
            <div class="flex justify-between mt-3">
                <p class="text-lg font-bold text-black">
                    {{title}}
                </p>
                <div class="mr-4">
                    <svg width="27" height="24" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.77945 1.10556L4.47372 1.43402L4.16799 1.10556C3.32375 0.198538 1.95496 0.198538 1.11072 1.10556C0.266479 2.01258 0.266478 3.48315 1.11072 4.39017L3.86227 7.34632C4.19996 7.70912 4.74748 7.70912 5.08517 7.34631L7.83672 4.39017C8.68096 3.48315 8.68096 2.01258 7.83672 1.10556C6.99248 0.198538 5.62369 0.198538 4.77945 1.10556Z"
                    class="stroke-black fill-white"
                    :class="{'fill-red':heart}"/>
                    </svg>
                </div>
            </div>

            <div class="flex justify-start gap-3 items-baseline my-3">
                <p class="flex-grow-0 flex-shrink-0 text-[18.52747917175293px] font-bold text-left text-orange">
                    {{price}}€
                </p>

                <p class="flex-grow-0 flex-shrink-0 text-[11.67735767364502px] text-left text-orange" :class="{'text-white':renovation}">
                    ou rénovation
                </p>
            </div>

            <div class="flex mb-3">
                <p class="text-dark-gray text-xs mr-2">
                    {{state}}
                </p>

                <p class="text-dark-gray text-xs mx-2">
                    {{brand}}
                </p>

                <p class="text-dark-gray text-xs mx-2">
                    {{distance}} km
                </p>
            </div>

            <p class="text-xs text-black pr-4">
                {{description}}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            followers: Number,
            heart: Boolean,
            price: Number,
            image: String,
            title: String,
            pp: String,
            name: String,
            renovation: Boolean,
            state: String,
            brand: String,
            distance: Number,
            description: String,
            star1: Boolean,
            star2: Boolean,
            star3: Boolean,
            star4: Boolean,
            star5: Boolean,
        },
    };
</script>
