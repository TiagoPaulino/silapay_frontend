import axios from 'axios';

export default {
  namespaced: true,
  state: {
    categories: [],
  },
  mutations: {
    SET_CATEGORIES(state, categories) {
      state.categories = categories;
    },
    ADD_CATEGORY(state, category) {
      state.categories.push(category);
    },
    UPDATE_CATEGORY(state, updatedCategory) {
      const index = state.categories.findIndex(p => p.id === updatedCategory.id);
      if (index !== -1) {
        state.categories[index] = updatedCategory;
      }
    },
    DELETE_CATEGORY(state, categoryId) {
      state.categories = state.categories.filter(p => p.id !== categoryId);
    }
  },
  actions: {
    async fetchCategories({ commit }) {
      const response = await axios.get('http://localhost:3000/categories');
      commit('SET_CATEGORIES', response.data);
    },
    async createCategory({ commit }, category) {
      const response = await axios.post('http://localhost:3000/categories', category);
      commit('ADD_CATEGORY', response.data);
    },
    async updateCategory({ commit }, category) {
      const response = await axios.put(`http://localhost:3000/categories/${category.id}`, category);
      commit('UPDATE_CATEGORY', response.data);
    },
    async deleteCategory({ commit }, categoryId) {
      await axios.delete(`http://localhost:3000/categories/${categoryId}`);
      commit('DELETE_CATEGORY', categoryId);
    }
  }
};
