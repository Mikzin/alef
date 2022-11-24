<template>
  <the-header></the-header>
  <base-container class="main__container">
    <the-preview></the-preview>
    <base-container>
      <h3 class="title">{{ title }}</h3>
      <span class="article">{{ article }}</span>
      <base-feedback></base-feedback>
      <base-price></base-price>
      <base-badge>скидка -36%</base-badge>
      <base-badge>акция -20%</base-badge>
      <base-select></base-select>
      <base-link>Определить размер</base-link>
      <base-container class="main__buttons">
        <base-counter></base-counter>
        <base-button>Добавить в корзину</base-button>
        <base-button class="button-like"
          ><img src="./images/favorite2.svg"
        /></base-button>
      </base-container>
      <base-link>Купить в 1 клик</base-link>
      <base-list></base-list>
    </base-container>
  </base-container>
  <base-container class="main__styles">
    <base-link>Посмотреть все стили</base-link>
  </base-container>
  <base-container>
    <base-grid></base-grid>
  </base-container>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import TheFooter from './components/layout/TheFooter.vue';
import BaseBadge from './components/UI/BaseBadge.vue';
import BaseContainer from './components/UI/BaseContainer.vue';
import ThePreview from './components/main/ThePreview.vue';
import BaseButton from './components/UI/BaseButton.vue';
import BaseCounter from './components/UI/BaseCounter.vue';
import BaseSelect from './components/UI/BaseSelect.vue';
import BaseList from './components/UI/BaseList.vue';
import BaseFeedback from './components/UI/BaseFeedback.vue';
import BasePrice from './components/UI/BasePrice.vue';
import BaseLink from './components/UI/BaseLink.vue';
import BaseGrid from './components/UI/BaseGrid.vue';

export default {
  components: {
    TheHeader,
    TheFooter,
    BaseBadge,
    BaseContainer,
    ThePreview,
    BaseButton,
    BaseCounter,
    BaseSelect,
    BaseList,
    BaseFeedback,
    BasePrice,
    BaseLink,
    BaseGrid,
  },
  data() {
    return {
      title: 'Пижама для девочек',
      article: 'Арт. 02765/46',
    };
  },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 1390px;
  margin: 0 auto;
}

body {
  margin: 0;
  color: #333333;
  font-family: 'Open Sans', sans-serif;
}

.main__container {
  display: flex;
  gap: 36px;
}

.title {
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  margin: 0 0 8px;
}

.article {
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  color: #828282;
}

.main__buttons {
  display: flex;
  gap: 6px;
}

.main__styles {
  display: flex;
  justify-content: center;
}
</style>
