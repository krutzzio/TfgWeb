<template>
  <div class="roomContainer">
    <button
      class="btnRoom Bed"
      v-show="showBed"
      @click="change2bool('showPopUp', 'spBed')"
    ></button>
    <button
      class="btnRoom Skate"
      v-show="showSkate"
      @click="change2bool('showPopUp', 'spSkate')"
    ></button>
    <button
      class="btnRoom Plant"
      v-show="showPlant"
      @click="change2bool('showPopUp', 'spPlant')"
    ></button>
    <button
      class="btnRoom Table"
      v-show="showTable"
      @click="change2bool('showPopUp', 'spTable')"
    ></button>
    <button
      class="btnRoom Sofa"
      v-show="showSofa"
      @click="change2bool('showPopUp', 'spSofa')"
    ></button>
    <button
      class="btnRoom Door"
      v-show="showDoor"
      @click="change2bool('showPopUp', 'spDoor')"
    ></button>
    <button
      class="btnRoom Meditate"
      v-show="showMeditate"
      @click="change2bool('showPopUp', 'spMeditate')"
    ></button>
    <button
      class="btnRoom Mobile"
      v-show="showMobile"
      @click="change2bool('showPopUp', 'spMobile')"
    ></button>

    <button
      class="not n1"
      v-show="showNot1"
      @click="change3bool('showPopUp', 'spNot1', 'showNot1')"
    ></button>
    <button
      class="not n2"
      v-show="showNot2"
      @click="change3bool('showPopUp', 'spNot2', 'showNot2')"
    ></button>
    <button
      class="not n3"
      v-show="showNot3"
      @click="change3bool('showPopUp', 'spNot3', 'showNot3')"
    ></button>
    <button
      class="not n4"
      v-show="showNot4"
      @click="change3bool('showPopUp', 'spNot4', 'showNot4')"
    ></button>
    <button
      class="not n5"
      v-show="showNot5"
      @click="change3bool('showPopUp', 'spNot5', 'showNot5')"
    ></button>
    <button
      class="not n6"
      v-show="showNot6"
      @click="change3bool('showPopUp', 'spNot6', 'showNot6')"
    ></button>
    <button
      class="not n7"
      v-show="showNot7"
      @click="change3bool('showPopUp', 'spNot7', 'showNot7')"
    ></button>
    <button
      class="not n8"
      v-show="showNot8"
      @click="change3bool('showPopUp', 'spNot8', 'showNot8')"
    ></button>
    <button
      class="not n9"
      v-show="showNot9"
      @click="change3bool('showPopUp', 'spNot9', 'showNot9')"
    ></button>
    <button
      class="not n10"
      v-show="showNot10"
      @click="change3bool('showPopUp', 'spNot10', 'showNot10')"
    ></button>
    <button
      class="not n11"
      v-show="showNot11"
      @click="change3bool('showPopUp', 'spNot11', 'showNot11')"
    ></button>
    <button
      class="not n12"
      v-show="showNot12"
      @click="change3bool('showPopUp', 'spNot12', 'showNot12')"
    ></button>
    <button
      class="not n13"
      v-show="showNot13"
      @click="change3bool('showPopUp', 'spNot13', 'showNot13')"
    ></button>
    <button
      class="not n14"
      v-show="showNot14"
      @click="change3bool('showPopUp', 'spNot14', 'showNot14')"
    ></button>
    <button
      class="not n15"
      v-show="showNot15"
      @click="change3bool('showPopUp', 'spNot15', 'showNot15')"
    ></button>

    <!--Pop Ups Objectes Habitació-->

    <div class="PopUpOverlay" v-if="showPopUp"></div>

    <!-- LLIT-->
    <div class="PopUp" v-if="spBed">
      <div v-if="index == 0">
        <h3>
          {{ popUpText[index].bed }}
        </h3>
        <img src="@/assets/bed/bed1.jpg" />
      </div>
      <div v-else-if="index == 1">
        <h3>
          {{ popUpText[index].bed }}
        </h3>
        <img src="@/assets/bed/bed2.jpg" />
      </div>
      <div v-else-if="index == 2">
        <h3>
          {{ popUpText[index].bed }}
        </h3>
        <img src="@/assets/bed/bed3.jpg" />
      </div>

      <button
        class="btn btn-primary mt-4"
        @:click="
          change3bool('showPopUp', 'spBed', 'showBed');
          Action();
          fomoDown();
        "
      >
        Torna a l'habitació
      </button>
    </div>

    <!-- PLANTA-->
    <div class="PopUp" v-else-if="spPlant">
      <div v-if="index == 0">
        <h3>
          {{ popUpText[index].plant }}
        </h3>
        <img src="@/assets/plant/plant1.jpg" />
      </div>
      <div v-else-if="index == 1">
        <h3>
          {{ popUpText[index].plant }}
        </h3>
        <img src="@/assets/plant/plant2.jpg" />
      </div>
      <div v-else-if="index == 2">
        <h3>
          {{ popUpText[index].plant }}
        </h3>
        <img src="@/assets/plant/plant3.jpg" />
      </div>
      <button
        class="btn btn-primary mt-4"
        @:click="
          change3bool('showPopUp', 'spPlant', 'showPlant');
          Action();
          fomoDown();
        "
      >
        Torna a l'habitació
      </button>
    </div>

    <!-- TAULA-->
    <div class="PopUp" v-else-if="spTable">
      <div v-if="index == 0">
        <h3>
          {{ popUpText[index].table }}
        </h3>
        <img src="@/assets/table/table1.jpg" />
      </div>
      <div v-else-if="index == 1">
        <h3>
          {{ popUpText[index].table }}
        </h3>
        <img src="@/assets/table/table2.jpg" />
      </div>
      <div v-else-if="index == 2">
        <h3>
          {{ popUpText[index].table }}
        </h3>
        <img src="@/assets/table/table3.jpg" />
      </div>
      <button
        class="btn btn-primary mt-4"
        @:click="
          change3bool('showPopUp', 'spTable', 'showTable');
          Action();
          fomoDown();
        "
      >
        Torna a l'habitació
      </button>
    </div>

    <!-- SKATE-->
    <div class="PopUp" v-else-if="spSkate">
      <div v-if="index == 0">
        <h3>
          {{ popUpText[index].skate }}
        </h3>
        <img src="@/assets/skate/skate1.jpg" />
      </div>
      <div v-else-if="index == 1">
        <h3>
          {{ popUpText[index].skate }}
        </h3>
        <img src="@/assets/skate/skate2.jpg" />
      </div>
      <div v-else-if="index == 2">
        <h3>
          {{ popUpText[index].skate }}
        </h3>
        <img src="@/assets/skate/skate3.jpg" />
      </div>
      <button
        class="btn btn-primary mt-4"
        @:click="
          change3bool('showPopUp', 'spSkate', 'showSkate');
          Action();
          fomoDown();
        "
      >
        Torna a l'habitació
      </button>
    </div>

    <!-- PORTA-->
    <div class="PopUp" v-else-if="spDoor">
      <div v-if="index == 0">
        <h3>
          {{ popUpText[index].door }}
        </h3>
        <img src="@/assets/door/door1.jpg" />
      </div>
      <div v-else-if="index == 1">
        <h3>
          {{ popUpText[index].door }}
        </h3>
        <img src="@/assets/door/door2.jpg" />
      </div>
      <div v-else-if="index == 2">
        <h3>
          {{ popUpText[index].door }}
        </h3>
        <img src="@/assets/door/door3.jpg" />
      </div>
      <button
        class="btn btn-primary mt-4"
        @:click="
          change3bool('showPopUp', 'spDoor', 'showDoor');
          Action();
          fomoDown();
        "
      >
        Torna a l'habitació
      </button>
    </div>

    <!-- SOFA-->
    <div class="PopUp" v-else-if="spSofa">
      <div v-if="index == 0">
        <h3>
          {{ popUpText[index].sofa }}
        </h3>
        <img src="@/assets/sofa/sofa1.jpg" />
      </div>
      <div v-else-if="index == 1">
        <h3>
          {{ popUpText[index].sofa }}
        </h3>
        <img src="@/assets/sofa/sofa2.jpg" />
      </div>
      <div v-else-if="index == 2">
        <h3>
          {{ popUpText[index].sofa }}
        </h3>
        <img src="@/assets/sofa/sofa3.jpg" />
      </div>
      <button
        class="btn btn-primary mt-4"
        @:click="
          change3bool('showPopUp', 'spSofa', 'showSofa');
          Action();
          fomoDown();
        "
      >
        Torna a l'habitació
      </button>
    </div>

    <!-- MEDITAR-->
    <div class="PopUp" v-else-if="spMeditate">
      <div v-if="index == 0">
        <h3>
          {{ popUpText[index].meditate }}
        </h3>
        <img src="@/assets/meditate/meditate1.jpg" />
      </div>
      <div v-else-if="index == 1">
        <h3>
          {{ popUpText[index].meditate }}
        </h3>
        <img src="@/assets/meditate/meditate2.jpg" />
      </div>
      <div v-else-if="index == 2">
        <h3>
          {{ popUpText[index].meditate }}
        </h3>
        <img src="@/assets/meditate/meditate3.jpg" />
      </div>
      <button
        class="btn btn-primary mt-4"
        @:click="
          change3bool('showPopUp', 'spMeditate', 'showMeditate');
          Action();
          fomoDown();
        "
      >
        Torna a l'habitació
      </button>
    </div>

    <!-- NOTIFICACIONS-->
    <div class="PopUp" v-else-if="spMobile">
      <h3>{{ popUpNot[index].mobile }}</h3>
      <img src="@/assets/mobile/mobile1.jpg" />

      <button
        class="btn btn-primary mt-4"
        @:click="
          change2bool('showPopUp', 'spMobile');
          Action();
          fomoUp();
        "
      >
        Torna a l'habitació
      </button>
    </div>

    <div class="PopUp" v-else-if="spNot1">
      <h3>{{ popUpNot[index].notMusic }}</h3>
      <img src="@/assets/notifications/Not1.jpg" />

      <button
        class="btn btn-primary mt-4"
        @:click="
          change2bool('showPopUp', 'spNot1');
          Action();
          fomoUp();
        "
      >
        Torna a l'habitació
      </button>
    </div>

    <div class="PopUp" v-else-if="spNot2">
      <h3>{{ popUpNot[index].notPhoto }}</h3>
      <img src="@/assets/notifications/Not2.jpg" />

      <button
        class="btn btn-primary mt-4"
        @:click="
          change2bool('showPopUp', 'spNot2');
          Action();
          fomoUp();
        "
      >
        Torna a l'habitació
      </button>
    </div>

    <div class="PopUp" v-else-if="spNot3">
      <h3>{{ popUpNot[index].notQue }}</h3>
      <img src="@/assets/notifications/Not3.jpg" />

      <button
        class="btn btn-primary mt-4"
        @:click="
          change2bool('showPopUp', 'spNot3');
          Action();
          fomoUp();
        "
      >
        Torna a l'habitació
      </button>
    </div>

    <div class="PopUp" v-else-if="spNot4">
      <h3>{{ popUpNot[index].notPiuPiu }}</h3>
      <img src="@/assets/notifications/Not4.jpg" />

      <button
        class="btn btn-primary mt-4"
        @:click="
          change2bool('showPopUp', 'spNot4');
          Action();
          fomoUp();
        "
      >
        Torna a l'habitació
      </button>
    </div>

    <div class="PopUp" v-else-if="spNot5">
      <h3>{{ popUpNot[index].notNow }}</h3>
      <img src="@/assets/notifications/Not5.jpg" />

      <button
        class="btn btn-primary mt-4"
        @:click="
          change2bool('showPopUp', 'spNot5');
          Action();
          fomoUp();
        "
      >
        Torna a l'habitació
      </button>
    </div>

    <div class="PopUp" v-else-if="spNot6">
      <h3>{{ popUpNot[index].notNow }}</h3>
      <img src="@/assets/notifications/Not6.jpg" />

      <button
        class="btn btn-primary mt-4"
        @:click="
          change2bool('showPopUp', 'spNot6');
          Action();
          fomoUp();
        "
      >
        Torna a l'habitació
      </button>
    </div>

    <div class="PopUp" v-else-if="spNot7">
      <h3>{{ popUpNot[index].notPhoto }}</h3>
      <img src="@/assets/notifications/Not7.jpg" />

      <button
        class="btn btn-primary mt-4"
        @:click="
          change2bool('showPopUp', 'spNot7');
          Action();
          fomoUp();
        "
      >
        Torna a l'habitació
      </button>
    </div>

    <div class="PopUp" v-else-if="spNot8">
      <h3>{{ popUpNot[index].notMusic }}</h3>
      <img src="@/assets/notifications/Not8.jpg" />

      <button
        class="btn btn-primary mt-4"
        @:click="
          change2bool('showPopUp', 'spNot8');
          Action();
          fomoUp();
        "
      >
        Torna a l'habitació
      </button>
    </div>

    <div class="PopUp" v-else-if="spNot9">
      <h3>{{ popUpNot[index].notPiuPiu }}</h3>
      <img src="@/assets/notifications/Not9.jpg" />

      <button
        class="btn btn-primary mt-4"
        @:click="
          change2bool('showPopUp', 'spNot9');
          Action();
          fomoUp();
        "
      >
        Torna a l'habitació
      </button>
    </div>

    <div class="PopUp" v-else-if="spNot10">
      <h3>{{ popUpNot[index].notQue}}</h3>
      <img src="@/assets/notifications/Not10.jpg" />

      <button
        class="btn btn-primary mt-4"
        @:click="
          change2bool('showPopUp', 'spNot10');
          Action();
          fomoUp();
        "
      >
        Torna a l'habitació
      </button>
    </div>

    <div class="PopUp" v-else-if="spNot11">
      <h3>{{ popUpNot[index].notMusic }}</h3>
      <img src="@/assets/notifications/Not6.jpg" />

      <button
        class="btn btn-primary mt-4"
        @:click="
          change2bool('showPopUp', 'spNot11');
          Action();
          fomoUp();
        "
      >
        Torna a l'habitació
      </button>
    </div>

    <div class="PopUp" v-else-if="spNot12">
      <h3>{{ popUpNot[index].notPiuPiu }}</h3>
      <img src="@/assets/notifications/Not10.jpg" />

      <button
        class="btn btn-primary mt-4"
        @:click="
          change2bool('showPopUp', 'spNot12');
          Action();
          fomoUp();
        "
      >
        Torna a l'habitació
      </button>
    </div>

    <div class="PopUp" v-else-if="spNot13">
      <h3>{{ popUpNot[index].notQue }}</h3>
      <img src="@/assets/notifications/Not3.jpg" />

      <button
        class="btn btn-primary mt-4"
        @:click="
          change2bool('showPopUp', 'spNot13');
          Action();
          fomoUp();
        "
      >
        Torna a l'habitació
      </button>
    </div>

    <div class="PopUp" v-else-if="spNot14">
      <h3>{{ popUpNot[index].notPhoto }}</h3>
      <img src="@/assets/notifications/Not1.jpg" />

      <button
        class="btn btn-primary mt-4"
        @:click="
          change2bool('showPopUp', 'spNot14');
          Action();
          fomoUp();
        "
      >
        Torna a l'habitació
      </button>
    </div>

    <div class="PopUp" v-else-if="spNot15">
      <h3>{{ popUpNot[index].notNow }}</h3>
      <img src="@/assets/notifications/Not5.jpg" />

      <button
        class="btn btn-primary mt-4"
        @:click="
          change2bool('showPopUp', 'spNot15');
          Action();
          fomoUp();
        "
      >
        Torna a l'habitació
      </button>
    </div>
  </div>
</template>


<script src="@\components\roomComponents\RoomComponent.js"></script>

<style src="@\components\roomComponents\RoomComponent.css"></style>
