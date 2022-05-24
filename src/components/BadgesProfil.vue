<template>
  <div class="p-5">
    <section class="p-3 w-full h-[111px] border border-[#eab270] border-dashed">
      <!--icones badge-->
      <p class="absolute text-[15px] font-bold text-left text-[#a7a7a7]">
        Badges
      </p>

      <div class="flex my-8 justify-around">
        <div class="flex-col w-1/3">
          <img :src="icones1" class="m-auto mb-1"/>
          <p class="text-center text-sm leading-4">{{ texte1 }}</p>
        </div>
        <div class="flex-col w-1/3">
          <img :src="icones2" class="m-auto mb-1"/>
          <p class="text-center text-sm leading-4">{{ texte2 }}</p>
        </div>
        <div class="flex-col w-1/3">
          <img :src="icones3" class="m-auto mb-1"/>
          <p class="text-center text-sm leading-3">{{ texte3 }}</p>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
export default {
  props: {
    icones1: String,
    texte1: String,
    icones2: String,
    texte2: String,
    icones3: String,
    texte3: String,
  },
};
</script>