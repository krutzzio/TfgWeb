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


      showNot1: false,
      showNot2: false,
      showNot3: false,
      showNot4: false,
      showNot5: false,
      showNot6: false,

      notSelect: Math.random()*5,
    };
  },

  
  mounted(){
    setTimeout(()=>{
      if(this.notSelect > 0 && this.notSelect < 4){
        this.showNot1= false;
        this.showNot2= false;
        this.showNot3= false;
        this.showNot4= true;
        this.showNot5= true;
        this.showNot6= true;
      }
    }, 5000)
  },

  methods: {
    showPopupOv(show){
      this[show] = !this[show]
    },
    
    showPopupIt(it1, it2){
      this[it1] = !this[it1];
      this[it2] = !this[it2];
    },

    conSum() {
      this.cont = this.cont + 1;
    },
  },
};