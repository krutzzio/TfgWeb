export default {

  setup() {
    return {};
  },

  data() {
    return {
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
      showNot7: false,
      showNot8: false,
      showNot9: false,
      showNot10: false,

      clNot1: false,

      actions: 0,
      fomoLv: 0,
      index: this.$route.params.index,
      fomo: parseInt(this.$route.params.fomo),

      notSelect: Math.random() * 6,

      popUpText: [
        {
          bed: "Prefereixes estirar-te al llit durant una estona per descansar. Mentrestant disfrutes de una estona sense preocupar-te de res",
          plant: "Recordes que tens una planta nova i la prepares per posar-la a la teva habitació.",
          table: "Mires l'agenda i veus que els examens s'apropen. Aquesta vegada vols estar més preparat que l'última vegada.",
          skate: "Et tornen a venir ganes d'anar al skate Park per fer alguns trucs amb la teva vella taula",
          

        }

      ]
    };
  },

  watch: {
    actions(value) {
      if (value >= 5) {
        console.log("HEo")
        this.$router.push({
          name: 'info', params: {
            index: this.index,
            fomoLv: this.finalFomo, 
          }
        })
      }
    },
  },

  computed: {

    finalFomo() {      
      return (this.fomoLv + this.fomo);
    },

  },
  mounted() {
    setTimeout(() => {
      if (this.notSelect >= 3 && this.notSelect < 6) {
        this.showNot1 = true;
        this.showNot2 = true;
        this.showNot3 = true;
        this.showNot4 = false;
        this.showNot5 = false;
        this.showNot6 = false;
      }
    }, 1000)
    setTimeout(() => {
      if (this.notSelect >= 0 && this.notSelect < 3) {
        this.showNot1 = false;
        this.showNot2 = false;
        this.showNot3 = false;
        this.showNot4 = true;
        this.showNot5 = true;
        this.showNot6 = true;
      }
    }, 5000)

  },

  methods: {
    showPopupOv(show) {
      this[show] = !this[show];
    },

    fomoUp(){
      this.fomoLv = this.fomoLv + 5
    },

    fomoDown(){
      this.fomoLv = this.fomoLv - 5
    },

    

    showPopupIt(it1, it2) {
      this[it1] = !this[it1];
      this[it2] = !this[it2];
    },

    Action() {
      this.actions = this.actions + 1;
    },
  },
};