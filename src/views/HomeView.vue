<template>
  <div class="menuContainer">
    <router-link
      class="btn btn-primary d-flex align-items-center btn-lg btnHome"
      :to="{ name: 'intro', params: { index: index, fomo: fomo } }"
      >Començar</router-link
    >
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      fomo: 75,
      index: 0,
    };
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

.btnHome {
  justify-content: center;
  width: 30%;
  height: 10%;
  outline: solid 2px rgb(6, 18, 73);
  font-size: 200%;
}
</style>
  