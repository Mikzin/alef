<template>
  <div class="feedback">
    <p class="feedback__title">Отзывы</p>
    <div class="feedback__rating">
      <img
        class="rating-icon"
        alt="rating"
        src="../../images/icon_star_fill.svg"
      />
      <img
        class="rating-icon"
        alt="rating"
        src="../../images/icon_star_fill.svg"
      />
      <img
        class="rating-icon"
        alt="rating"
        src="../../images/icon_star_fill.svg"
      />
      <img
        class="rating-icon"
        alt="rating"
        src="../../images/icon_star_fill.svg"
      />
      <img class="rating-icon" alt="rating" src="../../images/icon_star.svg" />
    </div>
    <p class="feedback__title">14 отзывов</p>
    <img class="feedback-icon" src="../../images/arrow-right.svg" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.feedback {
  display: flex;
  gap: 6px;
  padding: 8px 0;
  margin-bottom: 48px;
}
.feedback__title {
  margin: 0;
}
</style>
