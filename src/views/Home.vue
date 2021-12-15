<template>
  <div class="component-mount">
    <div class="grid-mount component-mount__contact-form"><ContactForm /></div>
    <div class="grid-mount component-mount__quiz-app"><QuizApp /></div>
    <div class="grid-mount component-mount__slideshow"><Slideshow /></div>
    <div class="grid-mount component-mount__sortable-table"><SortableTable /></div>
    <div class="grid-mount component-mount__todo-list"><ToDo /></div>
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
    width: 100vw;
    height: auto;
    padding: 16px 25px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 20px;
  }

  .grid-mount {
    background: lightgray;
    height: 500px;
    width: 100%;
  }

  .component-mount__slideshow {
    position: relative;
  }

  /* Media Query */

  /* ----------- Small phone ----------- */
  @media only screen and (min-device-width: 300px) and (max-device-width: 425px) {
  .component-mount {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 1fr);
  }

  .grid-mount {
    height: 70vh;
  }
}

  /* ----------- Big phone ----------- */
  @media only screen and (min-device-width: 425px) and (max-device-width: 800px) {
    .component-mount {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(5, 1fr);
    }
  }

  /* ----------- Tablet ----------- */
  @media only screen and (min-device-width: 800px) and (max-device-width: 1400px) {
    .component-mount {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(3, 1fr);
    }
  }
</style>