<template>
  <footer>
    <div class="footer__cust">
      <h3 class="footer__title">Покупателям</h3>
      <ul class="footer__list">
        <li class="footer__item">
          <a href="#" class="footer__link">Каталог</a>
        </li>
        <li class="footer__item">
          <a href="#" class="footer__link">Акции</a>
        </li>
        <li class="footer__item">
          <a href="#" class="footer__link">Бренды</a>
        </li>
      </ul>
    </div>
    <div class="footer__about">
      <h3 class="footer__title">О нас</h3>
      <ul class="footer__list">
        <li class="footer__item">
          <a href="#" class="footer__link">О компании</a>
        </li>
        <li class="footer__item">
          <a href="#" class="footer__link">Новости</a>
        </li>
        <li class="footer__item">
          <a href="#" class="footer__link">Команда</a>
        </li>
      </ul>
    </div>
    <div class="footer__subscribe">
      <form class="footer__form">
        <h3 class="footer__title">Узнайте первыми о новинках и акциях</h3>
        <input
          placeholder="Адрес электронной почты"
          type="email"
          class="footer__form-input"
        />
        <button class="footer__button" type="submit">Подписаться</button>
      </form>
    </div>
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  justify-content: space-between;
  padding: 30px 143px;
}

.footer__title {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin: 0;
}

.footer__list {
  padding-left: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 16px 0 0;
}

.footer__link {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-decoration: none;
  color: #333333;
}

.footer__form {
  display: flex;
  flex-direction: column;
}

.footer__form-input {
  border: 0;
  border-bottom: 1px solid #c4c4c4;
  padding: 12px;
  margin: 34px 0;
  width: 452px;
}

.footer__button {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  padding: 8px 28px;
  background-color: #fff;
  border: 1px solid #333333;
  max-width: 150px;
  align-self: flex-end;
  cursor: pointer;
}

.footer__button:hover {
  opacity: 0.8;
  background-color: #c4c4c4;
}
</style>
