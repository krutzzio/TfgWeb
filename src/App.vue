<template>
  <nav>
    <router-link to="/" v-if="$route.path == '/'">Home</router-link> |
    <router-link to="/room">Room</router-link> |
    <button @click="conSum"></button>
    <p>Contador proves: {{ b }}</p>
  </nav>
  <router-view/>
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
