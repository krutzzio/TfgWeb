<template>
  <div class="menu">
    <router-link to="/room"  v-if="$route.path != '/room'" >Començar</router-link>
  </div>
  
</template>
  
<script>
 
</script>

<style>
  .menu{
    display: flex;
    align-items: center;
    justify-content: center;
    top: 50%;
    left: 50%;
    outline: solid 1px black;
    height: 600px;
    width: 800px;
  }
</style>
  