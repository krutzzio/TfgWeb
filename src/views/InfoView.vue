<template>
    <div>
        <img src="../assets/cara_ejemplo2.jpg" v-if="this.$route.params.NumeroSecret>10">
        <h1>Aquest es secret {{ this.$route.params.Secret }}</h1>
    
        <router-link to= "/room" class="linkBtn">Room</router-link>
    </div>
    
</template>

<script src="..\components\infoComponents\infoComponent.js"></script>

<style src="..\components\infoComponents\infoComponent.css"></style>
