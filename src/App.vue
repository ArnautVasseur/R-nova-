<script setup>
import { RouterLink, RouterView } from 'vue-router'


</script>

<template>
  <div>
      <div class="flex overflow-hidden fixed bottom-0 w-full justify-around items-center py-4 bg-gray">
        <RouterLink to="/">
          <img src="./components/icons/Home.svg" alt="Home">
        </RouterLink>
        <RouterLink to="/messagerie">
          <img src="./components/icons/Mail.svg" alt="Messagerie">
        </RouterLink>
        <RouterLink to="/ajout">
          <img src="./components/icons/Plus.svg" alt="Plus">
        </RouterLink>
        <RouterLink to="/favoris">
          <img src="./components/icons/Heart.svg" alt="Heart">
        </RouterLink>
        <RouterLink to="/user">
          <img src="./components/icons/user.svg" alt="User">
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
