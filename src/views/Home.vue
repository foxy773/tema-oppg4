<template>
  <div class="component-mount">
    <div class="component-mount__contact-form"><ContactForm /></div>
    <div class="component-mount__quiz-app"><QuizApp /></div>
    <div class="component-mount__slideshow"><Slideshow /></div>
    <div class="component-mount__sortable-table"><SortableTable /></div>
    <div class="component-mount__todo-list"><ToDo /></div>
  </div>
</template>

<script>
import ContactForm from "../components/ContactForm.vue";
import QuizApp from "../components/QuizApp.vue";
import Slideshow from "../components/Slideshow.vue";
import SortableTable from "../components/SortableTable.vue";
import ToDo from "../components/ToDo.vue";

export default {
  components: {
    ContactForm,
    QuizApp,
    Slideshow,
    SortableTable,
    ToDo,
  },
};
</script>

<style>
.component-mount {
  width: 100%;
  height: auto;
  padding: 2vw 5vw 2vw 5vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  column-gap: 25px;
  row-gap: 25px;
}

.component-mount__contact-form {
  background: lightgray;
  height: 500px;
}

.component-mount__quiz-app {
  background: lightgray;
  height: 500px;
}

.component-mount__slideshow {
  background: lightgray;
  height: 500px;
  position: relative;
}

.component-mount__sortable-table {
  background: lightgray;
  height: 500px;
}

.component-mount__todo-list {
  background: lightgray;
  height: 500px;
}

@media screen and (max-width: 1200px) {
  .component-mount {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
}

@media screen and (max-width: 800px) {
  .component-mount {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 1fr);
  }
}
</style>