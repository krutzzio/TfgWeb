

export default {
  
  setup() {
    return {};
  },

  data() {
    return {
      cont: 600,

      showPopUp: false,
      
      spBed: false,
      spPlant: false,
      spDoor: false,
      spTable: false,
      spSofa: false,
      spSkate: false,
      spMeditate: false,

      NumeroSecret: 11,
      Secret: 6,


      showNot1: false,
      showNot2: false,
      showNot3: false,
      showNot4: false,
      showNot5: false,
      showNot6: false,

      clNot1:false,

      actions: 0,

      notSelect: Math.random()*6,
    };
  },

  watch:{
    actions(value){
      if(value>=5){
        this.$router.push({ name: 'info', params: {NumeroSecret: this.NumeroSecret, 
          Secret:this.Secret}})
      } 
    },
  },
  
  mounted(){
    setTimeout(()=>{
      if(this.notSelect >= 0 && this.notSelect < 3){
        this.showNot1= false;
        this.showNot2= false;
        this.showNot3= false;
        this.showNot4= true;
        this.showNot5= true;
        this.showNot6= true;
      }
    }, 5000)
    setTimeout(()=>{
      if(this.notSelect >= 3 && this.notSelect < 6){
        this.showNot1= true;
        this.showNot2= true;
        this.showNot3= true;
        this.showNot4= false;
        this.showNot5= false;
        this.showNot6= false;
      }
    }, 1000)
  },

  methods: {
    showPopupOv(show){
      this[show] = !this[show];
    },
    
    showPopupIt(it1, it2){
      this[it1] = !this[it1];
      this[it2] = !this[it2];
    },

    Action() {
      this.actions = this.actions + 1;
    },
  },
};