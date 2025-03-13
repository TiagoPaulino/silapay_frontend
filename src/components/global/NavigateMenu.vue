<script setup lang="ts">
import Button from './Button.vue'

</script>
<template>
    <div class="bg-white flex flex-row justify-around p-2 fixed bottom-0 w-full md:top-0 md:bottom-auto md:justify-end gap-2 border-b-2 border-blue-500">
            <Button type="secondary" @click="$router.push('/')">
                Home
            </Button>
            <Button type="secondary" @click="$router.push('/product/create')">
                Criar produto
            </Button>
    </div>
</template>
<style scoped>
</style>