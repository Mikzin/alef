<template>
  <header>
    <a href="#"
      ><img src="../../images/LOGO.svg" class="header__logo" alt="logo"
    /></a>
    <nav class="header__nav">
      <ul class="header__list">
        <li class="header__item">
          <a href="#" class="header__item-link">
            <img
              src="../../images/person.svg"
              class="nav-icon"
              alt="preson icon"
            />
          </a>
        </li>
        <li class="header__item">
          <a href="#" class="header__item-link">
            <img
              src="../../images/favorite.svg"
              class="nav-icon"
              alt="preson icon"
            />
          </a>
        </li>
        <li class="header__item">
          <a href="#" class="header__item-link">
            <img
              src="../../images/bag.svg"
              class="nav-icon"
              alt="preson icon"
            />
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  align-items: center;
  padding: 0 30px;
}

.header__list {
  display: flex;
  list-style: none;
  gap: 24px;
}

.header__item-link:hover {
  opacity: 0.8;
}
</style>
