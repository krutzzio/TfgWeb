<template>
  <nav class="start">

    <router-view/>    
  </nav>
  <router-link to="/">Home</router-link>|
    <router-link to="/room"  v-if="$route.path != '/room'" >Room</router-link>|
    <router-link to="/info">Info</router-link>
</template>

<script>

export default {
  setup() {
    return{};    
  },

  data(){
    return{
      b: 0,
    }
  },
  watch:{
    b(value){
      if(value==5){
        this.$router.push("/room")
      } 
    },
  },
  methods: {

  }
}
</script>

<style scoped>
  .start {
  position: relative;
  background-color: rgb(253, 253, 253);
  outline: solid 1px black;
  height: 600px;
  width: 800px;
  text-align: center;
  justify-content: center;
 
}
</style>

