<script setup lang="ts">
import { RouterView } from 'vue-router'
import  NavigateMenu  from './components/global/NavigateMenu.vue'
</script>

<template >
  <div class="flex flex-col min-w-screen min-h-screen">
    <NavigateMenu/>
    <div>
      <RouterView/>
    </div>
  </div>
</template>

<style scoped>
</style>
