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
    };
  },

  
  mounted(){
    setTimeout(()=>{
      this.showNot1 = true
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