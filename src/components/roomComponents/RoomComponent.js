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

      showMobile: true,

      showBed: true,
      showPlant: true,
      showDoor: true,
      showTable: true,
      showSofa: true,
      showSkate: true,
      showMeditate: true,

      spMobile: false,

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
      showNot11: false,
      showNot12: false,
      showNot13: false,
      showNot14: false,
      showNot15: false,

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
      spNot11: false,
      spNot12: false,
      spNot13: false,
      spNot14: false,
      spNot15: false,


      actions: 0,
      fomoLv: 0,
      index: this.$route.params.index,
      fomo: parseInt(this.$route.params.fomo),

      notSelect: Math.random() * 6,

      popUpText: [
        {
          bed: "Prefereixes estirar-te al llit durant una estona per descansar. Mentrestant gaudeixes d'una estona sense preocupar-te de res.",
          plant: "Recordes que tens una planta nova i la prepares per posar-la a la teva habitació.",
          table: "Mires l'agenda i veus que els exàmens s'apropen. Aquesta vegada vols estar més preparat que l'última vegada.",
          skate: "Et tornen a venir ganes d'anar al skatepark per fer alguns trucs amb la teva vella taula.",
          door: "Sents un soroll a la porta. És el Dobby, i et demana que el treguis a passejar. Com s'ha portat tan bé, prepares les coses i aneu a una piscina per a gossos.",
          meditate: "Tens una estona per meditar i fer una mica de Yoga, et va bé per aclarir el cap.",
          sofa: "Agafes el teu llibre preferit i seus al sofà per passar una bona tarda.",
        },
        {
          bed: "Agafes l'antiga guitarra del teu pare, li treus la pols i practiques comences a aprendre alguns acords fàcils.",
          plant: "La teva àvia  et va regalar un petit cactus durant el cap de setmana, i ara li busques un bon lloc a l'habitació.",
          table: "Tens una presentació d'un treball i has convidat als teus amics per acabar de planificar-la.",
          skate: "Has quedat per continuar practicant skate amb un amic que feia temps que no veies i us ho passeu molt bé.",
          door: "Aprofites per quedar amb uns quants amics després de classe per anar a fer una volta, us ho passeu molt bé.",
          meditate: "Fa temps que vas decidir fer més exercici, així que agafes l'estoreta i comences amb la teva rutina.",
          sofa: "Has vist un àlbum de fotos antigues i el tornes a mirar recordant alguns dels viatges que has fet.",
        },
        {
          bed: "Has passat molt mala nit i no aguantes més, t'estires al llit i t'adorms.",
          plant: "Continues cuidant les plantes que tens a l'habitació.",
          table: "Avances feina que tenies endarrerida per posar-te al dia amb algunes assignatures.",
          skate: "Avui ja has intentat fer algun truc més avançat, encara que hagis caigut, ha valgut la pena.",
          door: "És la festa del Cine i a sobre feia unes setmanes que va sortir una pel·li que feia temps que esperaves. Vas al cine sense dubtar-ho.",
          meditate: "L'última vegada que vas fer exercici et vas oblidar d'estirar, i l'endemà no podies quasi ni caminar. Avui no cometràs el mateix error.",
          sofa: "Has pogut comprar-te una guitarra nova per poder practicar més, així ja no li robes la del teu pare.",
        },

      ],

      popUpNot: [
        {
          mobile: "Agafes el mobil i et passes una estona mirant les xarxes socials, al cap d'una estona et sorpren que hagi passat més d'una hora.",
          notMusic: "Escoltes les noves cançons mentres busques opinions del nou ranking musical per les xarxes.",
          notPhoto: "Comences a mirar les fotos que han pujat a PhotoGram els teus amics, els hi comentes a tots perque vegin que l'has vist.",
          notQue: "Entres al chat d'amics i discutiu sobre el que ha passat al institut.",
          notPiuPiu: "Entres a PiuPiu sabent que trobaràs molta gent criticant tot el que passa, tu també ho fas.",
          notNow: "Al sortir la notificació corres a buscar un bon lloc a l'habitació per fer la foto diària.",
        },
        {
          mobile: "Agafes el mòbil i et passes una estona mirant les xarxes socials, al cap d'una estona et sorprèn que hagi passat més d'una hora.",
          notMusic: "Veus que el nou ball ho està petant, i per guanyar alguns seguidors l'intentes fer.",
          notPhoto: "Entres a PhotoGram per mirar un vídeo nou, però sense adonar-te'n passes quasi  tota la tarda.",
          notQue: "Els teus amics et passen alguns mems pel grup que teniu.",
          notPiuPiu: "Has vist que hi ha debat per una polèmica que va passar a la televisió i xafardeges una mica.",
          notNow: "Aquest cop fas la foto Now quan et toca, i continues mirant el que fan els teus amics.",
        },
        {
          mobile: "Agafes el mòbil i et passes una estona mirant les xarxes socials, al cap d'una estona et sorpren que hagi passat més d'una hora.",
          notMusic: "Un altre filtre que s'ha tornat a posar de moda. Aquesta vegada simplement mires els balls que fan.",
          notPhoto: "Veus que si ets qui més comparteix la nova cançó del teu ídol pots guanyar un viatge gratis. Entres a tot arreu per intentar aconseguir-ho.",
          notQue: "Pel grup de família et diuen d'organitzar una trobada i us connecteu per organitzar-ho.",
          notPiuPiu: "Pensaves que la polèmica que hi havia entre dos influences s'havia acabat, però veus que s'han tornat a denunciar...",
          notNow: "L'altre dia no vas poder fer la foto al moment que tocava. Així que en veure la notificació entres d'inmediat.",
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
      if (this.index == 0 ) {
        this.showNot1 = true;
      } else if(this.index == 1){
        this.showNot6 = true;
      }else if(this.index == 2){
        this.showNot11 = true;
      }
    }, (this.timeNot1 * 1000))

    setTimeout(() => {
      if (this.index == 0 ) {
        this.showNot2 = true;
      } else if(this.index == 1){
        this.showNot7 = true;
      }else if(this.index == 2){
        this.showNot12 = true;
      }
    }, (this.timeNot2 * 1000))

    setTimeout(() => {
      if (this.index == 0 ) {
        this.showNot3 = true;
      } else if(this.index == 1){
        this.showNot8 = true;
      }else if(this.index == 2){
        this.showNot13 = true;
      }
    }, (this.timeNot3 * 1000))

    setTimeout(() => {
      if (this.index == 0) {
        this.showNot4 = true;
      } else if(this.index == 1){
        this.showNot9 = true;
      }else if(this.index == 2){
        this.showNot14 = true;
      }
    }, (this.timeNot4 * 1000))

    setTimeout(() => {
      if (this.index == 0) {
        this.showNot5 = true;
      } else if(this.index == 1){
        this.showNot10 = true;
      }else if(this.index == 2){
        this.showNot15 = true;
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