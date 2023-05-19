<template>
  <div class="infoContainer">
    <div>
      <div class="wrapper">
        <div class="emogiContainer">
          <div>
            <h3 v-if="fomoReceiver <= 15">{{ feel[0] }}</h3>
            <h3 v-else-if="fomoReceiver <= 45 && fomoReceiver > 15">
              {{ feel[1] }}
            </h3>
            <h3 v-else-if="fomoReceiver <= 75 && fomoReceiver > 45">
              {{ feel[2] }}
            </h3>
            <h3 v-else-if="fomoReceiver <= 105 && fomoReceiver > 75">
              {{ feel[3] }}
            </h3>
            <h3 v-else-if="fomoReceiver < 135 && fomoReceiver > 105">
              {{ feel[4] }}
            </h3>
            <h3 v-else-if="fomoReceiver >= 135">{{ feel[5] }}</h3>
            <h3>Aixi ho demostres en el emogi que envies:</h3>
          </div>
          <div
            :class="[
              { 'img i1': fomoReceiver <= 15 },
              { 'img i2': fomoReceiver <= 45 && fomoReceiver > 15 },
              { 'img i3': fomoReceiver <= 75 && fomoReceiver > 45 },
              { 'img i4': fomoReceiver <= 105 && fomoReceiver > 75 },
              { 'img i5': fomoReceiver < 135 && fomoReceiver > 105 },
              { 'img i6': fomoReceiver >= 135 },
            ]"
          ></div>
        </div>
        <div class="questionContainer">
          <h1>{{ questions[index]["question"] }}</h1>
          <label
            :for="key"
            style="
              text-align: center;
              align-items: center;
              justify-content: center;
              display: block;
              outline: solid 1px black;
              margin: 5%;
              margin-left: 20%;
              width: 60%;
              box-shadow: 2px 2px;
            "
            v-for="(answer, key) in questions[index]['answer']"
            v-bind:key="answer.id"
            :class="[
              { answer: selectedAns == ' ' },
              {
                'answer nonSelected':
                  selectedAns != ' ' &&
                  selectedAns != key &&
                  key != questions[index]['correct'],
              },
              {
                'answer Incorrect':
                  selectedAns == key && key != questions[index]['correct'],
              },
              {
                'answer Correct':
                  selectedAns != ' ' && key == questions[index]['correct'],
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

      <div class="wrapper">
        <div class="sabiesContainer">
          <h2 style="text-align: center">
            Sabies que...<br />
            {{ sabies[index] }}
          </h2>
        </div>
      </div>
      <button
        v-if="Answered && index < 2"
        class="btn btn-primary d-flex align-items-center btn-lg btnInfo"
        @click="incrementIndex()"
      >
        Passar la nit
      </button>
      <button
        v-if="Answered && index == 2"
        class="btn btn-primary d-flex align-items-center btn-lg btnInfo"
        @click="incrementIndex()"
      >
        Resultats
      </button>
    </div>
  </div>
</template>

<script src="..\components\infoComponents\infoComponent.js"></script>

<style src="..\components\infoComponents\infoComponent.css"></style>