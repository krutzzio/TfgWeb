<template>
  <div class="roomContainer">
    <button
      class="btnRoom Bed"
      @click="change2bool('showPopUp', 'spBed')"
    ></button>
    <button
      class="btnRoom Skate"
      @click="change2bool('showPopUp', 'spSkate')"
    ></button>
    <button
      class="btnRoom Plant"
      @click="change2bool('showPopUp', 'spPlant')"
    ></button>
    <button
      class="btnRoom Table"
      @click="change2bool('showPopUp', 'spTable')"
    ></button>
    <button
      class="btnRoom Sofa"
      @click="change2bool('showPopUp', 'spSofa')"
    ></button>
    <button
      class="btnRoom Door"
      @click="change2bool('showPopUp', 'spDoor')"
    ></button>
    <button
      class="btnRoom Meditate"
      @click="change2bool('showPopUp', 'spMeditate')"
    ></button>
    <button
      class="btnRoom Mobile"
      @click="change2bool('showPopUp', 'spMobile')"
    ></button>

    <button
      class="not n1"
      v-show="showNot1"
      @click="change3bool('showPopUp', 'spNot1', 'showNot1')"
    >
    </button>
    <button
      class="not n2"
      v-show="showNot2"
      @click="change3bool('showPopUp', 'spNot2', 'showNot2')"
    >
    </button>
    <button
      class="not n3"
      v-show="showNot3"
      @click="change3bool('showPopUp', 'spNot3', 'showNot3')"
    >
    </button>
    <button
      class="not n4"
      v-show="showNot4"
      @click="change3bool('showPopUp', 'spNot4', 'showNot4')"
    >
    </button>
    <button
      class="not n5"
      v-show="showNot5"
      @click="change3bool('showPopUp', 'spNot5', 'showNot5')"
    >
    </button>
    <button
      class="not n6"
      v-show="showNot6"
      @click="change3bool('showPopUp', 'spNot6', 'showNot6')"
    >
      not n6
    </button>
    <button
      class="not n7"
      v-show="showNot7"
      @click="change3bool('showPopUp', 'spNot7', 'showNot7')"
    >
      not n7
    </button>
    <button
      class="not n8"
      v-show="showNot8"
      @click="change3bool('showPopUp', 'spNot8', 'showNot8')"
    >
      not n8
    </button>
    <button
      class="not n9"
      v-show="showNot9"
      @click="change3bool('showPopUp', 'spNot9', 'showNot9')"
    >
      not n9
    </button>
    <button
      class="not n10"
      v-show="showNot10"
      @click="change3bool('showPopUp', 'spNot10', 'showNot10')"
    >
      not n10
    </button>

    <div class="PopUpOverlay" v-if="showPopUp"></div>
    <div class="PopUp" v-if="spBed">
      <h3>
        {{ popUpText[0].bed }}
      </h3>
      <img src="@/assets\bed\bed1.jpg" />
      <button
        class="btn btn-primary mt-4"
        @:click="
          change2bool('showPopUp', 'spBed');
          Action();
          fomoDown();
        "
      >
        Torna a l'habitació
      </button>
    </div>

    <div class="PopUp" v-else-if="spPlant">
      <h3>
        {{ popUpText[0].plant }}
      </h3>
      <img src="@\assets\plant\plant1.jpg" />
      <button
        class="btn btn-primary mt-4"
        @:click="
          change2bool('showPopUp', 'spPlant');
          Action();
          fomoDown();
        "
      >
        Torna a l'habitació
      </button>
    </div>

    <div class="PopUp" v-else-if="spTable">
      <h3>
        {{ popUpText[0].table }}
      </h3>
      <img src="@/assets\table\table1.jpg" />
      <button
        class="btn btn-primary mt-4"
        @:click="
          change2bool('showPopUp', 'spTable');
          Action();
          fomoDown();
        "
      >
        Torna a l'habitació
      </button>
    </div>

    <div class="PopUp" v-else-if="spSkate">
      <h3>
        {{ popUpText[0].skate }}
      </h3>
      <img src="@/assets\skate\skate1.jpg" />
      <button
        class="btn btn-primary mt-4"
        @:click="
          change2bool('showPopUp', 'spSkate');
          Action();
          fomoDown();
        "
      >
        Torna a l'habitació
      </button>
    </div>

    <div class="PopUpV" v-else-if="spDoor">
      <h3>
        {{ popUpText[0].door }}
      </h3>
      <img src="@/assets\door\door1.jpg" style="width: 100%" />
      <button
        class="btn btn-primary mt-4"
        @:click="
          change2bool('showPopUp', 'spDoor');
          Action();
          fomoDown();
        "
      >
        Torna a l'habitació
      </button>
    </div>

    <div class="PopUp" v-else-if="spSofa">
      <h3>
        {{ popUpText[0].sofa }}
      </h3>
      <img src="@/assets\sofa\sofa1.jpg" />
      <button
        class="btn btn-primary mt-4"
        @:click="
          change2bool('showPopUp', 'spSofa');
          Action();
          fomoDown();
        "
      >
        Torna a l'habitació
      </button>
    </div>

    <div class="PopUp" v-else-if="spMeditate">
      <h3>
        {{ popUpText[0].meditate }}
      </h3>
      <img src="@/assets\meditate\meditate1.jpg" />
      <button
        class="btn btn-primary mt-4"
        @:click="
          change2bool('showPopUp', 'spMeditate');
          Action();
          fomoDown();
        "
      >
        Torna a l'habitació
      </button>
    </div>

    <div class="PopUp" v-else-if="spMobile">
      <h3> {{ popUpNot[0].mobile }}</h3>
      <img src="@/assets/mobile/mobile1.jpg"  style="width: 100%; "/>

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
      <h3>{{ popUpNot[0].notMusic }}</h3>
      <img src="@/assets/notifications/Not1.jpg" style="width: 100%;"/>

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
      <h3>{{ popUpNot[0].notPhoto }}</h3>
      <img src="@/assets/notifications/Not2.jpg" style="width: 100%;"/>

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
      <h3>{{ popUpNot[0].notQue }}</h3>
      <img src="@/assets/notifications/Not3.jpg" style="width: 100%;"/>

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
      <h3>{{ popUpNot[0].notPiuPiu }}</h3>
      <img src="@/assets/notifications/Not4.jpg" style="width: 100%;"/>

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
      <h3>{{ popUpNot[0].notNow}}</h3>
      <img src="@/assets/notifications/Not5.jpg" style="width: 100%;"/>

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
      <h3>{{ popUpNot[0].notMusic }}</h3>
      <img src="@/assets/notifications/Not1.jpg" style="width: 100%;"/>

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
  </div>
</template>


<script src="@\components\roomComponents\RoomComponent.js"></script>

<style src="@\components\roomComponents\RoomComponent.css"></style>
