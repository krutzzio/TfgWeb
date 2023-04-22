<template>
  <nav class="start">
    <router-link to="/room" v-if="$route.path != '/room'">Room</router-link>
    <router-view/>
  </nav>

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
    conSum() {
      this.b = this.b + 1;
    },
  }
}
</script>

<style scoped>
  .start {
  position: relative;
  background-color: rgb(65, 17, 3);
  outline: solid 1px black;
  height: 600px;
  width: 800px;
  text-align: center;
  justify-content: center;
 
}
</style>

