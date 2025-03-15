// store/modules/products.ts
import axios from 'axios';


export interface Product {
  name:string,
  image:string,
  price:number,
  description:string,
  productId:string
  id:string
}

interface ProductsState {
  products: Product[];
}

const productsModule: any = {
  namespaced: true,
  state: (): ProductsState => ({
    products: [],
  }),
  mutations: {
    SET_PRODUCTS(state: { products: Product[]; }, products: Product[]) {
      state.products = products;
    },
    ADD_PRODUCT(state: { products: Product[]; }, product: Product) {
      state.products.push(product);
    },
    UPDATE_PRODUCT(state: { products: any[]; }, updatedProduct: Product) {
      const index = state.products.findIndex((p: { id: string; }) => p.id === updatedProduct.id);
      if (index !== -1) {
        state.products[index] = updatedProduct;
      }
    },
    DELETE_PRODUCT(state: { products: any[]; }, productId: string) {
      state.products = state.products.filter((p: { id: string; }) => p.id !== productId);
    }
  },
  actions: {
    async fetchProducts({ commit }:any) {
      const response = await axios.get('http://localhost:3000/products');
      commit('SET_PRODUCTS', response.data);
    },
    async createProduct({ commit }:any, product: Product) {
      const response = await axios.post<Product>('http://localhost:3000/products', product);
      commit('ADD_PRODUCT', response.data);
    },
    async updateProduct({ commit }:any, product: Product) {
      const response = await axios.put<Product>(`http://localhost:3000/products/${product.id}`, product);
      commit('UPDATE_PRODUCT', response.data);
    },
    async deleteProduct({ commit }:any, productId: number) {
      await axios.delete(`http://localhost:3000/products/${productId}`);
      commit('DELETE_PRODUCT', productId);
    }
  }
};

export default productsModule;
