<template>
  <section class="quizContainer">
    <div class="quizContainer__Question">
      <h2>{{ question }}</h2>
    </div>
    <div class="quizContainer__Answers">
      <button class="quizContainer__Answers--buttons">Answer 1</button>
      <button class="quizContainer__Answers--buttons">Answer 2</button>
      <button class="quizContainer__Answers--buttons">Answer 3</button>
      <button class="quizContainer__Answers--buttons">Answer 4</button>
    </div>
  </section>

  <audio controls autoplay hidden>
    <source src="./../../assets/music-kahoot.mp3" type="audio/mpeg" />
  </audio>
</template>

<script>
const questions = [
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
];
console.log(questions);

const giveQuestion = function () {};

giveQuestion();

export default {
  data() {
    return {
      question: (this.question = questions[0].question),
    };
  },
};
</script>


<style>
body {
  background: rgb(41, 41, 41);
  font-family: Arial, Helvetica, sans-serif;
}

.quizContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.quizContainer__Question {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20%;
  color: white;
}

.quizContainer__Answers {
  display: grid;
  height: 25%;
  width: 33%;
  grid-template: 1fr 1fr/ 1fr 1fr;
  gap: 1rem;
}

.quizContainer__Answers--buttons {
  height: 100%;
  width: 100%;
  border: none;
  cursor: pointer;
  font-weight: bold;
}

.quizContainer__Answers--buttons:hover {
  opacity: 0.8;
}

.quizContainer__Answers--buttons:nth-child(1) {
  background: crimson;
}
.quizContainer__Answers--buttons:nth-child(2) {
  background: yellow;
}
.quizContainer__Answers--buttons:nth-child(3) {
  background: lightseagreen;
}
.quizContainer__Answers--buttons:nth-child(4) {
  background: rgb(82, 189, 255);
}
</style>