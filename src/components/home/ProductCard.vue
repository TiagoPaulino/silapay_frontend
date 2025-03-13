<script setup lang="ts">
import Button from '../global/Button.vue';

defineProps({
    title:String,
    imageUrl:String,
    price:Number,
    description:String,
    productId:String
})
</script>
<template>
    <div class="w-44 h-64 p-2.5 rounded-lg bg-gray-100 flex flex-col gap-1.5">
        <div class="w-full h-36 rounded-sm bg-gray-200 overflow-hidden  flex items-center justify-center">
            <img class="object-cover object-center" :src="imageUrl" :alt="title">
        </div>
        <div>
            <h3 class="font-bold text-nowrap overflow-hidden text-ellipsis">{{title}}</h3>
            <p class="text-sm">R${{price}}</p>
        </div>
        <Button @click="$router.push(`/product/${productId}`)">
            Ver Produto
        </Button>
    </div>
</template>