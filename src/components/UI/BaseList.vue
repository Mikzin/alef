<template>
  <ul class="product__list">
    <li class="product__item">
      <a class="product__link">
        <img src="../../images/cloths.svg" />
        Описание товара
      </a>
    </li>
    <li class="product__item">
      <a class="product__link">
        <img src="../../images/clock.svg" />
        Доставка и возврат
      </a>
    </li>
    <li class="product__item">
      <a class="product__link">
        <img src="../../images/pay.svg" />
        Способы оплаты
      </a>
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style scoped>
.product__list {
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border-top: 1px solid grey;
  padding-top: 30px;
}

.product__link {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.04em;
  text-decoration: underline;
  cursor: pointer;
}

.product__link:hover {
  opacity: 0.8;
}

.product__link {
  display: flex;
  align-items: center;
}
</style>
