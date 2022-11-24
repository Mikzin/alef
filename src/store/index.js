import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      counterValue: 0,
    };
  },
  mutations: {
    increment(state) {
      state.counterValue += 1;
    },

    decrement(state) {
      if (state.counterValue > 0) {
        state.counterValue -= 1;
      } else return;
    },
  },

  actions: {
    increment(context) {
      context.commit('increment');
    },
    decrement(context) {
      context.commit('decrement');
    },
  },
});

export default store;
