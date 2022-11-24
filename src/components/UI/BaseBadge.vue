<template>
  <span class="badge">
    <slot></slot>
  </span>
</template>

<style scoped>
.badge {
  border: 1px solid #333333;
  padding: 4px 8px;
  display: inline-block;
  margin: 2px;
  margin-bottom: 32px;

  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
}
</style>
