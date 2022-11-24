<template>
  <div class="counter__container">
    <base-button class="counter__button" @click="increment">+</base-button>
    <span class="counter__value">{{ $store.state.counterValue }}</span>
    <base-button class="counter__button" @click="decrement">-</base-button>
  </div>
</template>

<script>
import BaseButton from './BaseButton.vue';

export default {
  components: { BaseButton },
  methods: {
    increment() {
      this.$store.dispatch('increment');
    },
    decrement() {
      this.$store.dispatch('decrement');
    },
  },
};
</script>

<style scoped>
.counter__container {
  max-height: 44px;
  display: flex;
  align-items: center;
  margin: 2px;
}

.counter__button {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.04em;
  color: #333333;
  background-color: #f2f2f2;
  border: none;
  padding: 12px;
  margin: 0;
}

.counter__value {
  padding: 11px;
  background-color: #f2f2f2;
}
</style>
