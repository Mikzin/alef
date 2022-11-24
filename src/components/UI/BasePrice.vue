<template>
  <div class="price">
    <span class="price-new">800 ₽</span>
    <span class="price-old">1500 ₽</span>
    <img class="arrow-icon" src="../../images/arrow-right.svg" />
  </div>
</template>

<style scoped>
.price {
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 8px 0;
}

.price-new {
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.price-old {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.04em;
  text-decoration: line-through;
  color: #828282;
}
</style>
