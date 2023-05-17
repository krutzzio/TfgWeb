<template>
  <div class="introContainer">
    <div v-if="index < 3">
      <h1>{{ intro[index] }}</h1>
      <router-link
        v-if="showNext"
        :to="{ name: 'room', params: { index: index, fomo: fomo } }"
        class="btn btn-primary d-flex align-items-center btn-lg btnIntro"
        >Ves a l'habitació</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showNext: false,
      index: this.$route.params.index,
      fomo: this.$route.params.fomo,
      intro: [
        "Ets l'Alex, i has estat seleccionat per fer un experiment, per obtenir informació del gustos dels adolescents. Durant les següents setmanes un grup de cientifics analitzarà el que facis al arribar a casa després del institut. A part et demanen que quan acabi el dia mostris com et sents amb un dibuix.",
        "Ha passat ja una setmana despres de començar el estudi. Et sents una mica extrany que vegin el que estas fent, pero ja quda",
        "Ja has arribat a la última setmana del experiment. Notes que ja per fi s'acabarà i podràs estar més tranquil",
      ],
    };
  },

  mounted() {
    setTimeout(() => {
      this.showNext = true;
    }, 1000);
  },
};
</script>

<style scoped>
.introContainer {
  background-color: rgb(245, 245, 220);
  position: absolute;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  outline: solid 1px black;
  height: 800px;
  width: 1200px;
  top: 10%;
  left: 10%;
  border-radius: 15px;
}

.btnIntro {
  position: absolute;
  justify-content: center;
  left: 87%;
  top: 88%;
  width: 12%;
  height: 10%;
  outline: solid 1px black;
}
</style>
