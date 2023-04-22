<template>
  <nav>
    <router-link to="/room" v-if="$route.path != '/room'">Room</router-link>
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


