<template>
  <div class="intro">
    <h1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore cupiditate
      voluptate iusto, itaque ad aliquam quos, debitis rem vitae earum, magnam
      voluptatibus. Quasi amet dolorem quos quibusdam soluta nobis accusamus.
    </h1>
    <router-link
      v-if="showNext"
      :to="{ name: 'room', params: { index: index, fomo: fomo } }"
      class="btn btn-primary"
      style="left: 85%; top: 90%"
      >Ves a l'habitació</router-link
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      showNext: false,
      index: this.$route.params.index,
      fomo: this.$route.params.fomo,
      intro: [{}],
    };
  },

  mounted() {
    setTimeout(() => {
      this.showNext = true;
    }, 4000);
  },
};
</script>

<style scoped>
.intro {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: solid 1px black;
  height: 800px;
  width: 1200px;
  top: 10%;
  left: 10%;
  border-radius: 2%;
}
</style>
