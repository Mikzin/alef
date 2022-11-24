<template>
  <div class="main__grid">
    <div class="main__grid-item item-one">
      <img class="grid__item" src="../../images/Group.png" />
      <div class="grid__item-hover">
        <img src="../../images/full-screen.svg" class="fullscreen-icon" />
        <div class="grid__bag">
          <img class="bag-icon" src="../../images/bag2.svg" />
          <span class="grid__item-text">Узнай, что на мне</span>
        </div>
        <div class="grid__item-likes">
          <img class="like-icon" src="../../images/like-fill.svg" />
          <span class="like-text">200</span>
        </div>
      </div>
    </div>
    <div class="main__grid-item">
      <img class="grid__item" src="../../images/Group2.png" />
      <div class="grid__item-hover">
        <img src="../../images/full-screen.svg" class="fullscreen-icon" />
        <div class="grid__bag">
          <img class="bag-icon" src="../../images/bag2.svg" />
          <span class="grid__item-text">Узнай, что на мне</span>
        </div>
        <div class="grid__item-likes">
          <img class="like-icon" src="../../images/like-fill.svg" />
          <span class="like-text">200</span>
        </div>
      </div>
    </div>
    <div class="main__grid-item">
      <img class="grid__item" src="../../images/Group3.png" />
      <div class="grid__item-hover">
        <img src="../../images/full-screen.svg" class="fullscreen-icon" />
        <div class="grid__bag">
          <img class="bag-icon" src="../../images/bag2.svg" />
          <span class="grid__item-text">Узнай, что на мне</span>
        </div>
        <div class="grid__item-likes">
          <img class="like-icon" src="../../images/like-fill.svg" />
          <span class="like-text">200</span>
        </div>
      </div>
    </div>
    <div class="main__grid-item">
      <img class="grid__item" src="../../images/Group5.png" />
      <div class="grid__item-hover">
        <img src="../../images/full-screen.svg" class="fullscreen-icon" />
        <div class="grid__bag">
          <img class="bag-icon" src="../../images/bag2.svg" />
          <span class="grid__item-text">Узнай, что на мне</span>
        </div>
        <div class="grid__item-likes">
          <img class="like-icon" src="../../images/like-fill.svg" />
          <span class="like-text">200</span>
        </div>
      </div>
    </div>
    <div class="main__grid-item">
      <img class="grid__item" src="../../images/Group4.png" />
      <div class="grid__item-hover">
        <img src="../../images/full-screen.svg" class="fullscreen-icon" />
        <div class="grid__bag">
          <img class="bag-icon" src="../../images/bag2.svg" />
          <span class="grid__item-text">Узнай, что на мне</span>
        </div>
        <div class="grid__item-likes">
          <img class="like-icon" src="../../images/like-fill.svg" />
          <span class="like-text">200</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main__grid {
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.item-one {
  grid-row: 1 / span 2;
  grid-column: 1 / span 2;
}

.main__grid-item {
  position: relative;
  cursor: pointer;
}

.main__grid-item:hover .grid__item {
  opacity: 0.3;
}

.main__grid-item:hover .grid__item-hover {
  opacity: 1;
}

.grid__item {
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: 0.5s ease;
  backface-visibility: hidden;
}

.grid__item-hover {
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.fullscreen-icon {
  top: 15px;
  right: 15px;
  width: 36px;
  height: 36px;
  align-self: flex-end;
}

.bag-icon {
  width: 60px;
  height: 60px;
}

.grid__item-text {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.04em;
  color: #ffffff;
}

.grid__item-likes {
  display: flex;
  align-items: center;
  gap: 6px;
  justify-self: end;
  margin: 12px;
}

.like-text {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.04em;
  color: #ffffff;
}

.grid__bag {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
