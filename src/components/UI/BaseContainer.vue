<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  margin-top: 20px;
}

@media screen and (max-width: 1040px) {
  .container {
    margin-top: 0;
  }
}
</style>
