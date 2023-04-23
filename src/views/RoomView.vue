<template>
  <div class="room">
    <p>Contador proves: {{ cont }} {{ notSelect }}</p>
    <button
      class="btn Bed"
      @click="
        showPopupIt('showPopUp','spBed');
      "
    ></button>
    <button
      class="btn Skate"
      @click="
        showPopupIt('showPopUp','spSkate');
      "
    ></button>
    <button
      class="btn Plant"
      @click="
        showPopupIt('showPopUp','spPlant');
      "
    ></button>

    <button
      class="btn Table"
      @click="
        showPopupIt('showPopUp','spTable');
      "
    ></button>
    <button
      class="btn Sofa"
      @click="
        showPopupIt('showPopUp','spSofa');
      "
    ></button>
    <button
      class="btn Door"
      @click="
        showPopupIt('showPopUp','spDoor');
      "
    ></button>



    <button class="not n1" v-if="showNot1"
    @click="
        showPopupIt('showPopUp','clNot1');
      ">
    </button>
        
    <button class="not n2" v-if="showNot2"
    @click="
        showPopupIt('showPopUp','clNot1');
      ">
    </button>

    <button class="not n3" v-if="showNot3"
    @click="
        showPopupIt('showPopUp','clNot1');
      ">
    </button>
    
    <button class="not n4" v-if="showNot4"
    @click="
        showPopupIt('showPopUp','clNot1');
      ">
    </button>
    
    <button class="not n5" v-if="showNot5"
    @click="
        showPopupIt('showPopUp','clNot1');
      ">
    </button>

    
    <button class="not n6" v-if="showNot6"
    @click="
        showPopupIt('showPopUp','clNot1');
      ">
    </button>

    <transition name="fade-enter">
      <div class="PopUpOverlay" v-if="showPopUp"></div>
    </transition>

    <transition name="fade">
      
      <div class="PopUp" v-if="spBed">
        <h1>TITUL BED</h1>
        <img src="..\assets\bed.jpg" />
        <button @:click="showPopupIt('showPopUp', 'spBed'); Action();">POPUP OUT</button>
      </div>

      <div class="PopUp" v-else-if="spPlant">
        <h1>TITUL PLANTA</h1>
        <img src="..\assets\plant.jpg" />
        <button @:click="showPopupIt('showPopUp', 'spPlant'); Action()">POPUP OUT</button>
      </div>

      <div class="PopUp" v-else-if="spTable">
        <h1>TITUL TABLE</h1>
        <img src="..\assets\plant.jpg" />
        <button @:click="showPopupIt('showPopUp', 'spTable'); Action()">POPUP OUT</button>
      </div>

      <div class="PopUp" v-else-if="spSkate">
        <h1>TITUL SKATE</h1>
        <img src="..\assets\plant.jpg" />
        <button @:click="showPopupIt('showPopUp', 'spSkate'); Action()">POPUP OUT</button>
      </div>

      <div class="PopUp" v-else-if="spDoor">
        <h1>TITUL DOOR</h1>
        <img src="..\assets\plant.jpg" />
        <button @:click="showPopupIt('showPopUp', 'spDoor'); Action()">POPUP OUT</button>
      </div>

      <div class="PopUp" v-else-if="spSofa">
        <h1>TITUL SOFA</h1>
        <img src="..\assets\plant.jpg" />
        <button @:click="showPopupIt('showPopUp', 'spSofa'); Action()">POPUP OUT</button>
      </div>    


      <div class="PopUp" v-else-if="clNot1">
        <h1>NOTIFICACIO 1</h1>
        <img src="..\assets\plant.jpg" />
        <button @:click="showPopupIt('showPopUp', 'clNot1'); Action()">POPUP OUT</button>
      </div>

    </transition>


  </div>
</template>


<script src="..\components\roomComponents\RoomComponent.js"></script>

<style src="..\components\roomComponents\RoomComponent.css"></style>
