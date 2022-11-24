<template>
  <a href="#" class="main__link">
    <slot></slot>
  </a>
</template>

<style scoped>
.main__link {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.04em;
  text-decoration-line: underline;
  color: #333333;
}

.main__link:hover {
  opacity: 0.8;
}
</style>
