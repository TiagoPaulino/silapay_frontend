import axios from 'axios';

export default {
  namespaced: true,
  state: {
    products: [],
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    ADD_PRODUCT(state, product) {
      state.products.push(product);
    },
    UPDATE_PRODUCT(state, updatedProduct) {
      const index = state.products.findIndex(p => p.id === updatedProduct.id);
      if (index !== -1) {
        state.products[index] = updatedProduct;
      }
    },
    DELETE_PRODUCT(state, productId) {
      state.products = state.products.filter(p => p.id !== productId);
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      const response = await axios.get('http://localhost:3000/products');
      commit('SET_PRODUCTS', response.data);
    },
    async createProduct({ commit }, product) {
      const response = await axios.post('http://localhost:3000/products', product);
      commit('ADD_PRODUCT', response.data);
    },
    async updateProduct({ commit }, product) {
      const response = await axios.put(`http://localhost:3000/products/${product.id}`, product);
      commit('UPDATE_PRODUCT', response.data);
    },
    async deleteProduct({ commit }, productId) {
      await axios.delete(`http://localhost:3000/products/${productId}`);
      commit('DELETE_PRODUCT', productId);
    }
  }
};
