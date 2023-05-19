<template>
  <div class="menuContainer">
    <button
      class="btn btn-primary d-flex align-items-center btn-lg btnHome"
      @click="showRouter()"
    >
      Començar
    </button>
  <div class="backgroundForm" v-if="sRouter">
    <div class="formContainer" v-if="sRouter">
      <h2 style="margin: 5%;">Si us plau, abans de començar ompliu el següent <a
        href="https://forms.gle/GrEQz3siwvi3LzLS7"
        target="_blank"
        @click="showForm()"
      >
        formulari</a
      ></h2>

      <router-link
      v-if="sForm"
      class="btn btn-primary d-flex align-items-center mt-4 p-3 btn-lg btnHome"
      :to="{ name: 'intro', params: { index: index, fomo: fomo } }"
      >Començar Joc</router-link
    >
    </div>
</div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      fomo: 75,
      index: 0,
      sRouter: false,
      sForm: false,
    };
  },

  methods: {
    showRouter() {
      this.sRouter = true;
    },
    showForm() {
      this.sForm = true;
    },
  },
};
</script>


<style scoped>
.menuContainer {
  position: absolute;
  background-color: rgb(245, 245, 220);
  display: flex;
  align-items: center;
  justify-content: center;
  outline: solid 1px black;
  height: 800px;
  width: 1200px;
  top: 10%;
  left: 10%;
  border-radius: 15px;
}


.backgroundForm {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
  border-radius: 2%;
  background: rgba(0, 0, 0, 0.7);
}

.formContainer {
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  text-align: center;
  top: 50%;
  left: 50%;
  z-index: 100;
  transform: translate(-50%, -50%);
  padding: 20px;
  outline: solid 1px black;
  background: rgb(255, 255, 255);
  margin-right: 0%;
  border-radius: 2%;
}
.btnHome {
  justify-content: center;
  width: 30%;
  height: 10%;
  outline: solid 2px rgb(6, 18, 73);
  font-size: 200%;
}
</style>
  