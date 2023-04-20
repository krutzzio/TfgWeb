<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <div id="app" class="room">
    <p>Contador proves: {{ cont }}</p>

    <button
      class="btn Bed"
      @click="
        showPopupIt('showPopUp','spBed');
        conSum();
      "
    ></button>
    <button
      class="btn Skate"
      @click="
        showPopupIt('showPopUp','spSkate');
        conSum();
      "
    ></button>
    <button
      class="btn Plant"
      @click="
        showPopupIt('showPopUp','spPlant');
        conSum();
      "
    ></button>

    <button
      class="btn Table"
      @click="
        showPopupIt('showPopUp','spTable');
        conSum();
      "
    ></button>
    <button
      class="btn Sofa"
      @click="
        showPopupIt('showPopUp','spSofa');
        conSum();
      "
    ></button>
    <button
      class="btn Door"
      @click="
        showPopupIt('showPopUp','spDoor');
        conSum();
      "
    ></button>



    <button class="not n1" v-if="showNot1">
    </button>


    <transition name="fade-enter">
      <div class="PopUpOverlay" v-if="showPopUp"></div>
    </transition>

    <transition name="fade">
      <div class="PopUp" v-if="spBed">
        <h1>TITUL BED</h1>
        <img src="..\assets\bed.jpg" />
        <button @:click="showPopupIt('showPopUp', 'spBed')">POPUP OUT</button>
      </div>

      <div class="PopUp" v-else-if="spPlant">
        <h1>TITUL PLANTA</h1>
        <img src="..\assets\plant.jpg" />
        <button @:click="showPopupIt('showPopUp', 'spPlant')">POPUP OUT</button>
      </div>

      <div class="PopUp" v-else-if="spTable">
        <h1>TITUL TABLE</h1>
        <img src="..\assets\plant.jpg" />
        <button @:click="showPopupIt('showPopUp', 'spTable')">POPUP OUT</button>
      </div>

      <div class="PopUp" v-else-if="spSkate">
        <h1>TITUL SKATE</h1>
        <img src="..\assets\plant.jpg" />
        <button @:click="showPopupIt('showPopUp', 'spSkate')">POPUP OUT</button>
      </div>

      <div class="PopUp" v-else-if="spDoor">
        <h1>TITUL DOOR</h1>
        <img src="..\assets\plant.jpg" />
        <button @:click="showPopupIt('showPopUp', 'spDoor')">POPUP OUT</button>
      </div>

      <div class="PopUp" v-else-if="spSofa">
        <h1>TITUL SOFA</h1>
        <img src="..\assets\plant.jpg" />
        <button @:click="showPopupIt('showPopUp', 'spSofa')">POPUP OUT</button>
      </div>
    </transition>
    <button class="not n1" v-if="showNot1">
    </button>


  </div>
</template>


<script src="..\components\roomComponents\myComponent.js"></script>

<style src="..\components\roomComponents\myComponent.css"></style>
