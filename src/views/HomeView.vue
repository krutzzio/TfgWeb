<template>
  <div class="menu">
    <router-link
      :to="{name: 'intro', params: {index: index, fomo: fomo}}"
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
.menu {
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

.brnComençar{
  width: 10%;
  height: 30%;


}

</style>
  