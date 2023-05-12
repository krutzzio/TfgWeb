<template>
  <div class="info">
    <div>
      <div class="wrapper">
        <div>
          <div v-if="fomoReceiver >= 6" class="img1"></div>
          <div v-else-if="fomoReceiver < 6" class="img2"></div>
        </div>
        <div class="questionContainer">
          <h1>{{ questions[0]["question"] }}</h1>
          <label
            :for="key"
            style="
              display: block;
              outline: solid 1px black;
              margin: 5%;
              margin-left: 25%;
              width: 50%;
              box-shadow: 2px 2px;
            "
            v-for="(answer, key) in questions[0]['answer']"
            v-bind:key="answer.id"
            :class="[
              { answer: selectedAns == ' ' },
              {
                'answer nonSelected':
                  selectedAns != ' ' &&
                  selectedAns != key &&
                  key != questions[0]['correct'],
              },
              {
                'answer Incorrect':
                  selectedAns == key && key != questions[0]['correct'],
              },
              {
                'answer Correct':
                  selectedAns != ' ' && key == questions[0]['correct'],
              },
            ]"
          >
            <input
              style="display: none"
              type="radio"
              :id="key"
              :value="key"
              @click="selected($event)"
              :disabled="selectedAns != ' '"
            />
            {{ answer }}
          </label>
        </div>
      </div>

      <div style="text-align: center">
        <div class="sabiesContainer">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium, sed. Iste deserunt voluptatem quia sapiente nihil quasi
            assumenda voluptates dolorem maiores adipisci molestias ratione sed
            corrupti eaque ipsa, alias nisi!
          </h1>
        </div>
      </div>
      <button @click="incrementIndex()"></button>
      <router-link
      @click="incrementIndex()"
        v-if="Answered"
        style="left: 90%; top: 93%"
        type="button"
        class="btn btn-primary"
        
        :to="{ name: 'intro', params: { index: index, fomo: fomoReceiver } }"
        >Passar la Nit</router-link
      >
    </div>
  </div>
</template>

<script src="..\components\infoComponents\infoComponent.js"></script>

<style src="..\components\infoComponents\infoComponent.css"></style>