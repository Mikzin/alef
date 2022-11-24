<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<style scoped>
.button {
  border: 1px solid #333333;
  background-color: #333333;
  color: #fff;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  padding: 12px 28px;
  max-height: 44px;
  cursor: pointer;
  margin: 2px;
}

.button:hover {
  opacity: 0.8;
}
</style>
