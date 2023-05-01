<template>
  <div class="start">
    <router-view/>    
  </div>
  <router-link to= "/">Home</router-link>|
  <router-link to= "room">Room</router-link>|
  <router-link to= "info">Info</router-link>
</template>

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

