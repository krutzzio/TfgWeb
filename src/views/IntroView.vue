<template>
  <div class="introContainer">
    <div v-if="index < 3">
      <h1>{{ primerIntro[index] }} <br /><br /></h1>

      <h1>{{ segonIntro[index] }}</h1>
      <router-link
        v-if="showNext"
        :to="{ name: 'room', params: { index: index, fomo: fomo } }"
        class="btn btn-primary d-flex align-items-center btn-lg btnIntro"
        >Ves a l'habitació</router-link
      >
    </div>
    <div v-if="index == 3 && resultats == false">
      <h1>{{ primerIntro[index] }} <br /><br /></h1>

      <h1>{{ segonIntro[index] }}</h1>
      <button
        class="btn btn-primary d-flex align-items-center btn-lg btnResultats"
        @click="goResultats"
      >
        Veure Resultats
      </button>
    </div>

    <div v-if="resultats" class="resultsContainer">
      <h1>Aquest són els teus resultats:</h1>
      <br />
      <div>
        <h3 v-if="fomo <= 15">{{ resultat[0] }}</h3>
        <h3 v-else-if="fomo <= 45 && fomo > 15">
          {{ resultat[1] }}
        </h3>
        <h3 v-else-if="fomo <= 75 && fomo > 45">
          {{ resultat[2] }}
        </h3>
        <h3 v-else-if="fomo <= 105 && fomo > 75">
          {{ resultat[3] }}
        </h3>
        <h3 v-else-if="fomo < 135 && fomo > 105">
          {{ resultat[4] }}
        </h3>
        <h3 v-else-if="fomoReceiver >= 135">{{ resultat[5] }}</h3>
      </div>

      <div :class="[
              { 'imgF i1': fomo <= 15 },
              { 'imgF i2': fomo <= 45 && fomo > 15 },
              { 'imgF i3': fomo <= 75 && fomo > 45 },
              { 'imgF i4': fomo <= 105 && fomo > 75 },
              { 'imgF i5': fomo < 135 && fomo > 105 },
              { 'imgF i6': fomo >= 135 },
            ]">
      </div>

      <h3> Si us plau completa aquest <a
        href="https://forms.gle/9V17mqGC91SjvNoU8"
        target="_blank"
      >
        formulari</a> per acabar.</h3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      resultats: false,
      showNext: false,
      index: this.$route.params.index,
      fomo: this.$route.params.fomo,
      primerIntro: [
        "Has estat seleccionat per fer un experiment!",
        "S'ha acabat la primera setmana de l'experiment!",
        "Ja només et queda aquesta última setmana per acabar l'estudi!",
        "Ja has acabat el estudi!!!",
      ],
      segonIntro: [
        "Durant les següents tres setmanes un grup d'estudiants analitzarà el que facis a l'arribar a casa després de l'institut. A part et demanaran que abans d'anar a dormir mostris com et sents dibuixant un emogi.",
        "Ha estat una setmana dura, però el cap de setmana t'ha ajudat a relaxar-te i preparar-te per la segona setmana de l'estudi.",
        "Ja tens ganes de veure els resultats de l'estudi. Preguntant a un dels estudiants que participava en l'estudi et va dir que quan acabes la setmana els podries veure.",
        "Han estat 3 setmanes que se t'han fet curtes. Els estudiants es senten un moment amb tu per parlar dels resultats i ...",
      ],

      resultat: [
        "Felicitats! Tens uns hàbits excel·lents. Saps gaudir del teu temps sense estar lligat amb les xarxes socials i clarament es nota amb el teu estat emocional.",
        "Tens uns hàbits molt bons amb les xarxes socials. Saps controlar-te i gaudir  de no estar tota l'estona connectat.",
        "Es nota que saps desconnectar-te i no passar tota l'estona davant la pantalla, encara que t'agrada estar connectat i saber que passa a les xarxes.",
        "Prefereixes estar connectat a internet abans que fer altres activitats. Has d'anar amb compte perquè si no controles podries desenvolupar FoMo.",
        "Fas un ús excessiu del mòbil. Hauries de començar a fer activitats i relacionar-te amb gent sense l'ús  de les xarxes socials. Estàs de camí a desenvolupar FoMo.",
        "No pots estar sense entrar a les xarxes socials. Tens una clara dependència i addicció, a estar tota l'estona connectat. Si no canvies els teus hàbits desenvoluparàs FoMo i hauries de tractar-ho si no vols desenvolupar majors problemes.",
      ],
    };
  },

  methods: {
    goResultats() {
      this.resultats = true;
    },
  },

  mounted() {
    setTimeout(() => {
      this.showNext = true;
    }, 4000);
  },
};
</script>

<style >
.introContainer {
  background-color: rgb(245, 245, 220);
  position: absolute;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  outline: solid 1px black;
  padding: 5%;
  height: 800px;
  width: 1200px;
  top: 10%;
  left: 10%;
  border-radius: 15px;
}

.btnIntro {
  position: absolute;
  justify-content: center;
  left: 87%;
  top: 88%;
  width: 12%;
  height: 10%;
  outline: solid 1px black;
}

.btnResultats {
  position: absolute;
  justify-content: center;
  width: 12%;
  height: 10%;
  outline: solid 1px black;
  top: 80%;
  left: 50%;
  transform: translate(-50%);
}

.resultsContainer {
  margin-left: 5%;
  padding: 1%;
  width: 70%;
  height: 110%;
  outline: solid 1px black;
  border-radius: 2%;
  background-color: rgb(156, 216, 224);
  box-shadow: 10px 10px;
  text-align: center;
  position: relative;
  display: block;
  text-align: center;
}

.imgF {
  min-height: 500px;
  margin-top: -5%;
  margin-bottom: -10%;
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center;
}

.imgF.i1 {
  background-image: url("@/assets/emogis/im1.png");
}

.imgF.i2 {
  background-image: url("@/assets/emogis/im2.png");
}

.imgF.i3 {
  background-image: url("@/assets/emogis/im3.png");
}

.imgF.i4 {
  background-image: url("@/assets/emogis/im4.png");
}

.imgF.i5 {
  background-image: url("@/assets/emogis/im5.png");
}

.imgF.i6 {
  background-image: url("@/assets/emogis/im6.png");
}
</style>
