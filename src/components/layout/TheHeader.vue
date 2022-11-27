<template>
  <header>
    <div class="header">
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
                alt="person icon"
              />
            </a>
          </li>
          <li class="header__item">
            <a href="#" class="header__item-link">
              <img
                src="../../images/favorite.svg"
                class="nav-icon"
                alt="favorite icon"
              />
            </a>
          </li>
          <li class="header__item">
            <a href="#" class="header__item-link">
              <img src="../../images/bag.svg" class="nav-icon" alt="bag icon" />
            </a>
          </li>
          <li class="header__item dropdown" v-if="smallWidth">
            <a href="#" class="header__item-link">
              <img
                src="../../images/menu.svg"
                class="nav-icon dropbtn"
                alt="menu icon"
                @click="onClick"
              />
            </a>
            <div class="dropdown-content" v-if="menuOpened">
              <a href="#" class="menu__link menu-close"
                ><img src="../../images/menu-close.svg" @click="onClick"
              /></a>
              <a href="#" class="menu__link">Постельное белье</a>
              <a href="#" class="menu__link">Одежда для дома</a>
              <a href="#" class="menu__link">Одежда для улицы</a>
              <a href="#" class="menu__link">Выход</a>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      smallWidth: false,
      menuOpened: false,
    };
  },
  methods: {
    onResize() {
      const width = window.innerWidth;
      if (width < 700) {
        this.smallWidth = true;
      } else {
        this.smallWidth = false;
      }
    },
    onClick() {
      this.menuOpened = !this.menuOpened;
    },
  },
  created() {
    this.onResize();
    window.addEventListener('resize', this.onResize);
  },
  unmounted() {
    window.removeEventListener('resize', this.onResize);
  },
};
</script>

<style scoped>
.header {
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

.menu__link {
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #333333;
  margin-bottom: 30px;
}

.menu-close {
  align-self: end;
}

.dropdown {
  display: inline-block;
}

.dropdown-content {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #fff;
  width: 100%;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 10;
}

.dropdown-content a {
  color: black;
  padding: 12px 30px;
  text-decoration: none;
  display: block;
}
</style>
