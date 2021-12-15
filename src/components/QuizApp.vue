<template>
  <section class="quizContainer">

    <!-- Shows the current and total questions. -->
    <div class="quizContainer__status--questions" v-if="!this.resultsTime">
      <h2>Questions: {{ questionIndex + 1 }}/{{ totalQuestions }}</h2>
    </div>

    <div class="quizContainer__status--results" v-else>
      <h2>Your Results</h2>
      <h3>Your score: {{totalCorrectAnswers}}/{{ answered.length }}</h3>
    </div>

    <div class="quizContainer__question" v-if="!this.resultsTime">
      <h2>{{ currentQuestion.question }}</h2>
    </div>

    <!-- Creates a button for each option, for the current question in the questions array. -->
    <div class="quizContainer__answers" v-if="!this.resultsTime">
      <button class="answers__options" @click="nextQuestion(answer)" v-for="(answer, index) in currentQuestion.answers">{{ answer.answer }}</button>
    </div>

    <!-- Shows an correct or wrong image for each answered question, and a retry button at the end that resets the quiz. -->
    <div class="quizContainer__results" v-else>
      <div v-for="(answer, index) in answered">
        <img src="./../../public/assets/quiz-app/wrong.svg" alt="" v-if="answer.wrong" />
        <img src="./../../public/assets/quiz-app/right.svg" alt="" v-else />
        <h3>{{ answer.answer }}</h3>
      </div>
      <button @click="resetQuiz()">Retry</button>
    </div>

  </section>
</template>

<script>
  export default {
    data() {
      return {
        questionIndex: 0,     
        answered: [],         // This is where all answers to all questions is getting stores to later be used to display a score.
        resultsTime: false,   // A boolean used to display the final results if the state is true.
        correctAnswers: 0,
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
            question: "What's the biggest animal in the world?",
            answers: [
              { answer: "The elephant", wrong: true },
              { answer: "The blue whale", wrong: false },
              { answer: "The sperm whale", wrong: true },
              { answer: "The saltwater crocodile", wrong: true },
            ],
          },

          {
            question: "Which country is brie cheese originally from?",
            answers: [
              { answer: "switzerland", wrong: true },
              { answer: "Italy", wrong: true },
              { answer: "Norway", wrong: true },
              { answer: "France", wrong: false },
            ],
          },

          {
            question: "What year was Heinz established?",
            answers: [
              { answer: "1877", wrong: true },
              { answer: "1869", wrong: false },
              { answer: "1866", wrong: true },
              { answer: "1927", wrong: true },
            ],
          },

          {
            question: "What is the capital of Iceland?",
            answers: [
              { answer: "Kópavogsbær", wrong: true },
              { answer: "Reykjavík", wrong: false },
              { answer: "Oslo", wrong: true },
              { answer: "Alajärvi", wrong: true },
            ],
          },

          {
            question: "What does IPA stand for",
            answers: [
              { answer: "International Post Arm", wrong: true },
              { answer: "Internet Panic Alarm", wrong: true },
              { answer: "Indian Pale Ale", wrong: true },
              { answer: "India Pale Ale", wrong: false },
            ],
          },

          {
            question: "Who painted the Mona Lisa?",
            answers: [
              { answer: "Vincent van Gogh", wrong: true },
              { answer: "Leonardo DiCaprio", wrong: true },
              { answer: "Leonardo da Vinci", wrong: false },
              { answer: "Vincent dan Gogh", wrong: true },
            ],
          },
        ],
      };
    },

    computed: {

      // Returns the length of the "questions" array. This being used to show the total questions to the user.
      totalQuestions() {
        return this.questions.length;
      },

      // Returns the current index value in the "questions" array. This being used to show the user what question
      // number they are at, and to store the right answer based upon what question is being answered.
      currentQuestion() {
        return this.questions[this.questionIndex];
      },

      // Filters through all answered objects in the "answered" array, then the "correctAnswers" array gets all objects that has a boolean that is false.
      // Then it returns the length of the "correctAnswers" array.
      totalCorrectAnswers() {
        let correctAnswers = this.answered.filter((answer) => answer.wrong === false)
        return correctAnswers.length
      },

    },

    methods: {

      // Determines if there are any questions left to be answered, if there are, the "questionIndex" that determines
      // current question being shown will be iterated by 1. If there are not any more questions, resultsTime that
      // determines when the total score will be shown will be switched from false to true.
      nextQuestion(answer) {

        if (this.questionIndex + 1 < this.questions.length) {
          this.questionIndex++;
        } else {
          this.resultsTime = true;
        }
      },
      
      resetQuiz() {

        this.questionIndex = 0;
        this.answered = [];
        this.resultsTime = false;
      },
    },
  };
</script>


<style>
  .quizContainer {
    width: 100%;
    height: 100%;
    padding: 1.5rem;
    background: rgb(41, 41, 41);
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .quizContainer__question {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20%;
    color: white;
    text-align: center;
    margin: 0 0 1rem 0;
  }

  .quizContainer__answers {
    display: grid;
    height: 40%;
    width: 80%;
    grid-template: 1fr 1fr/ 1fr 1fr;
    gap: 1rem;
  }

  .quizContainer__results {
    display: grid;
    height: 100%;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(auto-fill, 4rem);
    gap: 1rem;
    overflow-y: scroll;
  }

  .quizContainer__results div {
    display: flex;
    align-items: center;
    background: white;
    border-radius: 0.6rem;
    padding: 0.6rem;
    max-height: 4rem;
  }

  .quizContainer__results img {
    padding: 0.5rem;
  }

  .quizContainer__results button {
    padding: 0.5rem;
    border-radius: 0.6rem;
    background: crimson;
    border: 0.2rem solid white;
    font-weight: bold;
    font-size: 1.1rem;
    color: white;
  }

  .quizContainer__results button:hover {
    padding: 0.5rem;
    border-radius: 0.6rem;
    background: lightseagreen;
    border: 0.4rem solid white;
    font-weight: bold;
    font-size: 1.2rem;
    transition: all 0.5s;
  }

  .answers__options {
    height: 100%;
    width: 100%;
    border: none;
    border-radius: 0.6rem;
    cursor: pointer;
    font-weight: bold;
    font-size: 1rem;
    padding: 0.5rem;
  }

  .quizContainer__status--questions {
    color: white;
    padding: 0 0 1rem 0;
  }

  .quizContainer__status--results {
    color: white;
    padding: 0 0 1rem 0;
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