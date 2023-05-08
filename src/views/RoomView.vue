<template>
  <div class="room">
    <button class="btn Bed" @click="showPopupIt('showPopUp', 'spBed')"></button>
    <button
      class="btn Skate"
      @click="showPopupIt('showPopUp', 'spSkate')"
    ></button>
    <button
      class="btn Plant"
      @click="showPopupIt('showPopUp', 'spPlant')"
    ></button>

    <button
      class="btn Table"
      @click="showPopupIt('showPopUp', 'spTable')"
    ></button>
    <button
      class="btn Sofa"
      @click="showPopupIt('showPopUp', 'spSofa')"
    ></button>
    <button
      class="btn Door"
      @click="showPopupIt('showPopUp', 'spDoor')"
    ></button>
    <button
      class="btn Meditate"
      @click="showPopupIt('showPopUp', 'spMeditate')"
    ></button>

    <button
      class="btn Mobile"
      @click="showPopupIt('showPopUp', 'clNot1')"
    ></button>

    <button
      class="not n1"
      v-show="showNot1"
      @click="showPopupIt('showPopUp', 'clNot1')"
    ></button>

    <button
      class="not n2"
      v-show="showNot2"
      @click="showPopupIt('showPopUp', 'clNot1')"
    ></button>

    <button
      class="not n3"
      v-show="showNot3"
      @click="showPopupIt('showPopUp', 'clNot1')"
    ></button>

    <button
      class="not n4"
      v-show="showNot4"
      @click="showPopupIt('showPopUp', 'clNot1')"
    ></button>

    <button
      class="not n5"
      v-show="showNot5"
      @click="showPopupIt('showPopUp', 'clNot1')"
    ></button>

    <button
      class="not n6"
      v-show="showNot6"
      @click="showPopupIt('showPopUp', 'clNot1')"
    ></button>

    <div class="PopUpOverlay" v-if="showPopUp"></div>

    <transition name="fade">
      <div class="PopUp" v-if="spBed">
        <h3>
          Prefereixes estirar-te al llit durant una estona per descansar.
          Mentrestant disfrutes de una estona sense preocupar-te de res.
        </h3>
        <img src="@/assets\bed\bed1.jpg" />
        <button
          class="btnPop"
          @:click="
            showPopupIt('showPopUp', 'spBed');
            Action();
          "
        >
          Torna a l'habitació
        </button>
      </div>

      <div class="PopUp" v-else-if="spPlant">
        <h3>
          Recordes que tens una planta nova i la prepares per posar-la a la teva
          habitació.
        </h3>
        <img src="@/assets\plant\plant1.jpg" />
        <button
          class="btnPop"
          @:click="
            showPopupIt('showPopUp', 'spPlant');
            Action();
          "
        >
          Torna a l'habitació
        </button>
      </div>

      <div class="PopUp" v-else-if="spTable">
        <h1>TITUL TABLE</h1>
        <img src="@/assets\table\table1.jpg" />
        <button
          class="btnPop"
          @:click="
            showPopupIt('showPopUp', 'spTable');
            Action();
          "
        >
          Torna a l'habitació
        </button>
      </div>

      <div class="PopUp" v-else-if="spSkate">
        <h1>TIToL SKATE</h1>
        <img src="@/assets\skate\skate1.jpg" />
        <button
          class="btnPop"
          @:click="
            showPopupIt('showPopUp', 'spSkate');
            Action();
          "
        >
          Torna a l'habitació
        </button>
      </div>

      <div class="PopUp" v-else-if="spDoor">
        <h1>TITUL DOOR</h1>
        <img src="@/assets\plant\plant.jpg" />
        <button
          class="btnPop"
          @:click="
            showPopupIt('showPopUp', 'spDoor');
            Action();
          "
        >
          Torna a l'habitació
        </button>
      </div>

      <div class="PopUp" v-else-if="spSofa">
        <h1>TITUL SOFA</h1>
        <img src="@/assets\sofa\sofa1.jpg" />
        <button
          class="btnPop"
          @:click="
            showPopupIt('showPopUp', 'spSofa');
            Action();
          "
        >
          Torna a l'habitació
        </button>
      </div>

      <div class="PopUp" v-else-if="spMeditate">
        <h1>TITUL Meditacio</h1>
        <img src="@/assets\meditate\meditate1.jpg" />
        <button
          class="btnPop"
          @:click="
            showPopupIt('showPopUp', 'spMeditate');
            Action();
          "
        >
          Torna a l'habitació
        </button>
      </div>

      <div class="PopUp" v-else-if="clNot1">
        <h1>NOTIFICACIO 1</h1>
        <img class="img Not" src="@/assets\mobile\mobile1.jpg" />
        <div class="exem">
          <button
            class="btnPop"
            @:click="
              showPopupIt('showPopUp', 'clNot1');
              Action();
            "
          >
            Torna a l'habitació
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>


<script src="@\components\roomComponents\RoomComponent.js"></script>

<style src="@\components\roomComponents\RoomComponent.css"></style>
