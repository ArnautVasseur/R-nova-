<script setup>
import { RouterLink, RouterView } from 'vue-router'


</script>

<template>
  <div>
      <div class="flex overflow-hidden fixed bottom-0 w-full justify-around items-center py-4 bg-gray">
        <RouterLink to="/">
          <img src="./assets/Home.svg" alt="Home">
        </RouterLink>
        <RouterLink to="/">
          <img src="./assets/Mail.svg" alt="Mail">
        </RouterLink>
        <RouterLink to="/">
          <img src="./assets/Plus.svg" alt="Plus">
        </RouterLink>
        <RouterLink to="/">
          <img src="./assets/Heart.svg" alt="Heart">
        </RouterLink>
        <RouterLink to="/">
          <img src="./assets/user.svg" alt="User">
        </RouterLink>
      </div>
    <RouterView/>
  </div>
</template>

<script>

export default {
        name: "",
        components: {
            
        },
    };
</script>

<style>

</style>
