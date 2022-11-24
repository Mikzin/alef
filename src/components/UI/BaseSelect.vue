<template>
  <div>
    <select name="select" class="selector">
      <!--Supplement an id here instead of using 'name'-->
      <option value="" selected>Выбрать размер</option>
      <option value="S">S</option>
      <option value="M">M</option>
      <option value="L">L</option>
    </select>
  </div>
</template>

<style scoped>
.selector {
  padding: 12px 10px 12px 16px;
  width: 315px;
  border: 1px solid #333333;
  margin: 2px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.04em;
  color: #333333;
}
</style>
