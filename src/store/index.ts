// store/index.ts
import { createStore } from 'vuex';
import productsModule from './modules/products.ts';


export const store = createStore({
  modules: {
    products: productsModule,
  },
});

// Tipo do estado global da Store
export type RootState = ReturnType<typeof store.getState>;
