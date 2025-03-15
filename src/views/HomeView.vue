<script setup lang="ts">
import ProductCard from "@/components/home/ProductCard.vue";
import ProductGrid from "@/components/home/ProductGrid.vue";
// @ts-ignore
import { useStore } from "vuex";
import { onBeforeMount, ref, type Ref } from "vue";
import type { Product } from "@/store/modules/products";

const store = useStore();
const productList: Ref<Product[]> = ref([]);

onBeforeMount(async () => {
  try {
    await store.dispatch('products/fetchProducts'); 
    productList.value = store.state.products.products;
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
  }
});

</script>

<template>
  <div class="w-full flex flex-col justify-center items-center">
    <ProductGrid>
      <div v-for="product in productList" :key="product.id">
        <ProductCard 
          :title="product.name"
          :description="product.description"
          :price="Number(product.price)"
          :productId="product.id"
          :image="product.image"
        />
      </div>
    </ProductGrid>
  </div>
</template>
