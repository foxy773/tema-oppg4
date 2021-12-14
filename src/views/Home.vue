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
  width: 100vw;
  height: auto;
  padding: 16px 25px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
}

.component-mount__contact-form {
  background: lightgray;
  height: 500px;
  width: 100%;
}

.component-mount__quiz-app {
  background: lightgray;
  height: 500px;
  width: 100%;
}

.component-mount__slideshow {
  background: lightgray;
  height: 500px;
  width: 100%;
  position: relative;
}

.component-mount__sortable-table {
  background: lightgray;
  height: 500px;
  width: 100%;
}

.component-mount__todo-list {
  background: lightgray;
  height: 500px;
  width: 100%;
}

/* Media Query */

			/* ----------- iPhone 5 ----------- */
@media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {

}

        /* ----------- iPhone 6, 6S, 7 and 8 ----------- */
        /* Portrait */
   @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {

}

        /* ----------- iPhone 6+, 7+ and 8+ ----------- */

        /* Portrait */
        @media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait) {
          .component-mount {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 1fr);
  }
}

        /* ----------- iPhone X ----------- */
        @media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait) {
        .component-mount {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(5, 1fr);
  }
        }

          @media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
        .component-mount {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }

}
</style>