export default{
props: ['VariableSecreta, Secret'],

data (){
    return{

    }

},
methods: {
    goToRoom(){
        this.$router.push({ name: 'info', params: {NumeroSecret: this.NumeroSecret, 
            Secret:this.Secret}})
    }
    
}
}