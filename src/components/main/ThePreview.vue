<template>
  <div class="preview">
    <img :src="itemName" class="preview__image" />

    <div class="preview__row">
      <img
        src="../../images/prev1.png"
        class="preview__row-image"
        @click="getName('foto1')"
      />
      <img
        src="../../images/prev2.png"
        class="preview__row-image"
        @click="getName('prev2')"
      />
      <img
        src="../../images/prev3.png"
        class="preview__row-image"
        @click="getName('prev3')"
      />
      <img
        src="../../images/prev4.png"
        class="preview__row-image"
        @click="getName('prev4')"
      />
      <img
        src="../../images/prev5.png"
        class="preview__row-image"
        @click="getName('prev5')"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sel: 'foto1',
    };
  },
  methods: {
    getName(name) {
      this.sel = name;
    },
  },
  computed: {
    itemName() {
      return require(`../../images/${this.sel}.png`);
    },
  },
};
</script>

<style scoped>
.preview {
  position: relative;
}

.preview__image {
  width: 686px;
}

.preview__row {
  position: absolute;
  top: 24px;
  left: 24px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.preview__row-image {
  max-width: 70px;
  cursor: pointer;
}

@media screen and (max-width: 700px) {
  .preview__image {
    width: 100%;
  }

  .preview__row {
    width: 51px;
  }
}
</style>
