export default ({
  state: {
    products: [],
    loading: false,
  },

  mutations: {
    SET_PRODUCTS(state, data) {
      state.products = data;
    },

    SET_LOADING_STATUS(state, status) {
      state.loading = status;
    },
  },

  actions: {
    fetchJSON({ commit }) {
      commit('SET_LOADING_STATUS', true);
      return fetch('http://localhost:8000/api/products')
        .then((result) => result.json())
        .catch((error) => {
          console.log(error);
        }).then((data) => {
          commit('SET_PRODUCTS', data);
          commit('SET_LOADING_STATUS', false);
        });
    },
  },
  getters: {
    products(state) {
      return state.products;
    },

    loadingState({ loading }) {
      return loading;
    },
  },
});
