<template>
  <section class="quizContainer">

    <div class="quizContainer__status">
      <h2>Progress: {{ questionIndex + 1 }}/{{ totalQuestions }}</h2>
    </div>

    <div class="quizContainer__question">
      <h2>{{ currentQuestion.question }}</h2>
    </div>

    <div class="quizContainer__answers" v-if="!this.resultsTime">
      <button
        class="answers__options"
        @click="nextQuestion(answer)"
        v-for="(answer, index) in currentQuestion.answers"
        :key="index">
        {{ answer.answer }}
      </button>
    </div>

    <div class="quizContainer__results" v-else >
      <div v-for="(answer, index) in answered">
      <img src="./../../assets/wrong.svg" alt="" v-if="answer.wrong">
      <img src="./../../assets/right.svg" alt="" v-if="!answer.wrong">
      <h3>{{ answer.answer }}</h3>
      </div>
    </div>
  </section>

  <audio controls muted hidden>
    <source src="./../../assets/music-kahoot.mp3" type="audio/mpeg" />
  </audio>
</template>

<script>
export default {
  data() {
    return {
      questionIndex: 0,
      answered: [],
      resultsTime: false,
      questions: [
        {
          question: "How many days are there in a year?",
          answers: [
            { answer: "324", wrong: true },
            { answer: "311", wrong: true },
            { answer: "365", wrong: false },
            { answer: "355.3", wrong: true },
          ],
        },
        {
          question: "How many continents exists on Earth?",
          answers: [
            { answer: "7", wrong: false },
            { answer: "4", wrong: true },
            { answer: "6", wrong: true },
            { answer: "3", wrong: true },
          ],
        },
        {
          question: "In what year did WW2 start?",
          answers: [
            { answer: "September 2nd, 1945", wrong: true },
            { answer: "September 1st, 1939", wrong: false },
            { answer: "October 19th, 1937", wrong: true },
            { answer: "September 2nd 1944", wrong: true },
          ],
        },
        {
          question: "How many world seas?",
          answers: [
            { answer: "September 2nd, 1945", wrong: true },
            { answer: "September 1st, 1939", wrong: false },
            { answer: "October 19th, 1937", wrong: true },
            { answer: "September 2nd 1944", wrong: true },
          ],
        },
        {
          question: "Results",
          answers: [
            { answer: "September 2nd, 1945", wrong: true },
            { answer: "September 1st, 1939", wrong: false },
            { answer: "October 19th, 1937", wrong: true },
            { answer: "September 2nd 1944", wrong: true },
          ],
        },
        {
          question: "How many world seas?",
          answers: [
            { answer: "September 2nd, 1945", wrong: true },
            { answer: "September 1st, 1939", wrong: false },
            { answer: "October 19th, 1937", wrong: true },
            { answer: "September 2nd 1944", wrong: true },
          ],
        },
        {
          question: "How many world seas?",
          answers: [
            { answer: "September 2nd, 1945", wrong: true },
            { answer: "September 1st, 1939", wrong: false },
            { answer: "October 19th, 1937", wrong: true },
            { answer: "September 2nd 1944", wrong: true },
          ],
        },
        {
          question: "How many world seas?",
          answers: [
            { answer: "September 2nd, 1945", wrong: true },
            { answer: "September 1st, 1939", wrong: false },
            { answer: "October 19th, 1937", wrong: true },
            { answer: "September 2nd 1944", wrong: true },
          ],
        },
        {
          question: "How many world seas?",
          answers: [
            { answer: "September 2nd, 1945", wrong: true },
            { answer: "September 1st, 1939", wrong: false },
            { answer: "October 19th, 1937", wrong: true },
            { answer: "September 2nd 1944", wrong: true },
          ],
        }
      ],
    };
  },
  computed: {
    totalQuestions() {
      return this.questions.length;
    },

    currentQuestion() {
      return this.questions[this.questionIndex];
    },
  },
  methods: {
    nextQuestion(answer) {
      if ((this.questionIndex +3) <= this.questions.length) {
        this.questionIndex++;
        this.answered.push(answer);
        console.log(this.questions.length, "Total");
        console.log(this.questionIndex, "Question number")
      } else {
        this.questionIndex++;
        this.answered.push(answer);
        this.resultsTime = true;
        console.log("Done!");
        console.log(this.answered)
      }
    },
  },
};
</script>


<style>
.quizContainer {
  background: rgb(41, 41, 41);
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.quizContainer__question {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20%;
  color: white;
}

.quizContainer__answers {
  display: grid;
  height: 25%;
  width: 33%;
  grid-template: 1fr 1fr/ 1fr 1fr;
  gap: 1rem;
}

.quizContainer__results {
  display: grid;
  grid-template: 1fr 1fr/ 1fr 1fr;
  gap: 1rem;
}

.quizContainer__results div{
  display: flex;
  align-items: center;
  background: white;
  border-radius: 10px;
  padding: 0.6rem;
}

.answers__options {
  height: 100%;
  width: 100%;
  border: none;
  cursor: pointer;
  font-weight: bold;
}

.quizContainer__status {
  color: white;
}

.answers__options:hover {
  opacity: 0.8;
}

.answers__options:nth-child(1) {
  background: crimson;
}
.answers__options:nth-child(2) {
  background: yellow;
}
.answers__options:nth-child(3) {
  background: lightseagreen;
}
.answers__options:nth-child(4) {
  background: rgb(82, 189, 255);
}
</style>