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

      spMobile:false,

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

      timeNot1: 5,
      timeNot2: 9,
      timeNot3: 20,
      timeNot4: 26,
      timeNot5: 15,

      spNot1: false,
      spNot2: false,
      spNot3: false,
      spNot4: false,
      spNot5: false,
      spNot6: false,
      spNot7: false,
      spNot8: false,
      spNot9: false,
      spNot10: false,


      actions: 0,
      fomoLv: 0,
      index: this.$route.params.index,
      fomo: parseInt(this.$route.params.fomo),

      notSelect: Math.random() * 6,

      popUpText: [
        {
          bed: "Prefereixes estirar-te al llit durant una estona per descansar. Mentrestant disfrutes de una estona sense preocupar-te de res.",
          plant: "Recordes que tens una planta nova i la prepares per posar-la a la teva habitació.",
          table: "Mires l'agenda i veus que els examens s'apropen. Aquesta vegada vols estar més preparat que l'última vegada.",
          skate: "Et tornen a venir ganes d'anar al skatepark per fer alguns trucs amb la teva vella taula.",
          door: "Escoltes un soroll a la porta. Es el Dobby, i et demana que el treguis a passejar. Com s'ha portat tant bé, prepares les coses i aneu a una piscina per a gossos.",
          meditate: "Fa temps que vas decidir fer més exercici, així que agafes l'estoreta i comences amb la teva rutina.",
          sofa: "Agafes el teu llibre preferit i et seus al sofà per passar una bona tarda.",
        }

      ],

      popUpNot:[
        {
          mobile: "Agafes el mobil i et passes una estona mirant les xarxes socials, al cap d'una estona et sorpren que hagi passat més d'una hora.",
          notMusic: "Escoltes les noves cançons mentres busques opinions del nou ranking musical per les xarxes.",
          notPhoto: "Comences a mirar les fotos que han pujat a PhotoGram els teus amics, els hi comentes a tots perque vegin que l'has vist.",
          notQue: "Entres al chat d'amics i discutiu sobre el que ha passat al institut.", 
          notPiuPiu: "Entres a PiuPiu sabent que trobaràs molta gent criticant tot el que passa, tu també ho fas.",
          notNow: "Al sortir la notificació corres a buscar un bon lloc a l'habitació per fer la foto diària.",
        }
        

      ]
    };
  },

  watch: {
    actions(value) {
      if (value >= 5) {
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
      if (this.index == 0 || this.index == 2) {
        this.showNot1 = true;
      } else {
        this.showNot6 = true;
      }
    }, (this.timeNot1 * 1000))

    setTimeout(() => {
      if (this.index == 0 || this.index == 2) {
        this.showNot2 = true;
      } else {
        this.showNot7 = true;
      }
    }, (this.timeNot2 * 1000))

    setTimeout(() => {
      if (this.index == 0 || this.index == 2) {
        this.showNot3 = true;
      } else {
        this.showNot8 = true;
      }
    }, (this.timeNot3 * 1000))

    setTimeout(() => {
      if (this.index == 0 || this.index == 2) {
        this.showNot4 = true;
      } else {
        this.showNot9 = true;
      }
    }, (this.timeNot4 * 1000))

    setTimeout(() => {
      if (this.index == 0 || this.index == 2) {
        this.showNot5 = true;
      } else {
        this.showNot10 = true;
      }
    }, (this.timeNot5 * 1000))

  },

  methods: {

    fomoUp() {
      this.fomoLv = this.fomoLv + 5
    },

    fomoDown() {
      this.fomoLv = this.fomoLv - 5
    },

    changebool(show) {
      this[show] = !this[show];
    },

    change2bool(it1, it2) {
      this[it1] = !this[it1];
      this[it2] = !this[it2];
    },

    change3bool(it1, it2, it3) {
      this[it1] = !this[it1];
      this[it2] = !this[it2];
      this[it3] = !this[it3];
    },

    Action() {
      this.actions = this.actions + 1;
    },
  },
};