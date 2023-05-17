<template>
  <div class="infoContainer">
    <div>
      <div class="wrapper">
        <div>
          <div
            :class="[
              { img1: fomoReceiver <= 15 },
              { img2: fomoReceiver <= 45 && fomoReceiver > 15 },
              { img3: fomoReceiver <= 75 && fomoReceiver > 45 },
              { img4: fomoReceiver <= 105 && fomoReceiver > 75 },
              { img5: fomoReceiver < 135 && fomoReceiver > 105 },
              { img6: fomoReceiver >= 135 },
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
              margin-left: 25%;
              width: 50%;
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
          <h1 style="text-align: center">
            Sabies que...<br />
            {{ sabies[index] }}
          </h1>
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